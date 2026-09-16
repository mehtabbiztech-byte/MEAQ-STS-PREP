import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Trash2, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Brain, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  BookOpen,
  Target,
  Compass,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';

interface NavigationAction {
  tab: NavigationTab;
  paperId?: string;
  categorySlug?: string;
  examId?: string;
  label: string;
  description?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  action?: NavigationAction;
}

const AVATAR_TRANSPARENT = '/assets/mentor_bot_avatar_transparent.png';
const AVATAR_FALLBACK = '/assets/mentor_bot_avatar.jpg';

const QUICK_PROMPTS = [
  { label: '🎓 STS Teaching License Test', query: 'Tell me all details of STS IBA Teaching License Test with syllabus and open the solved past paper.' },
  { label: '📖 Word Meaning & Vocab', query: 'What is the meaning, synonyms, antonyms, and example sentence for "Ubiquitous"?' },
  { label: '🌍 General Knowledge & Science', query: 'Explain how photosynthesis works and why it is vital for Earth.' },
  { label: '📑 STS BPS-05 to 15 Past Paper', query: 'I want to solve the STS BPS-05 to 15 Graduation Category past paper. Can you guide me and open it?' },
  { label: '🎯 STS Merit & Passing Marks', query: 'What are the passing marks and cutoff criteria for STS IBA BPS-05 to 15 tests?' },
  { label: '🏛️ SPSC CCE Screening Guide', query: 'What is the syllabus and negative marking pattern for SPSC CCE Screening?' },
  { label: '🧮 Math Percentage Shortcuts', query: 'Teach me quick tricks to solve percentage word problems asked in tests.' },
  { label: '⚠️ Review Mistake Vault', query: 'Where can I see all questions I answered wrong in tests?' },
  { label: '🧠 AI Learning Lab & 1v1 Battle', query: 'Take me to the AI Adaptive Testing and 1v1 Challenge Lab.' },
  { label: 'اردو / سنڌي لغت ۽ معنيٰ', query: 'لفظ "استقامت" ۽ "سگهه" جي معنيٰ، ضد ۽ جملن ۾ استعمال ٻڌايو' },
];

export const Chatbot: React.FC = () => {
  const { 
    setTab, 
    setSelectedPastPaperId, 
    setSelectedCategorySlug, 
    setSelectedExamId,
    userProfile 
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [hasPromptBanner, setHasPromptBanner] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(AVATAR_TRANSPARENT);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `Salam! 👋 I am **Mehtab AI**, your universal smart assistant and exam navigator. You can ask me **anything and everything**:

- 📖 **Word meanings, vocabulary, definitions, synonyms & antonyms**
- 💡 **General science, world history, geography & everyday knowledge**
- 🧮 **Mathematics problem solving, algebra & speed shortcuts**
- 📑 **Find & open any Past Paper or Mock Test** directly with one click
- 🌐 **Fluent in English, Urdu (اردو), and Sindhi (سنڌي)**

What would you like to ask or explore right now?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: {
        tab: 'past-papers',
        paperId: 'pp-sts-bps-5-15-grad-2024',
        label: 'Start STS BPS-05 to 15 Past Paper',
        description: 'Practice the official 100-MCQ solved paper with live timer and instant analysis.'
      }
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Voice readout
  const speakText = (text: string) => {
    if (!audioEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Strip markdown symbols and navigation tags for clear voice audio
      const cleanText = text
        .replace(/<<<NAVIGATE:[\s\S]*?>>>/g, '')
        .replace(/[#*`_~]/g, '')
        .trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Audio speech synthesis not supported or blocked by browser policy
    }
  };

  // Direct navigation handler
  const executeNavigation = (action: NavigationAction) => {
    if (action.paperId) {
      setSelectedPastPaperId(action.paperId);
    }
    if (action.categorySlug) {
      setSelectedCategorySlug(action.categorySlug);
    }
    if (action.examId) {
      setSelectedExamId(action.examId);
    }
    setTab(action.tab);
    
    // On small screens, collapse the chat window so candidate sees the target screen immediately
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Extract navigation tag from text response: <<<NAVIGATE: {...}>>>
  const parseResponseForAction = (rawText: string): { cleanText: string; action?: NavigationAction } => {
    const navRegex = /<<<NAVIGATE:\s*({[\s\S]*?})\s*>>>/;
    const match = rawText.match(navRegex);
    if (match) {
      try {
        const actionData = JSON.parse(match[1]);
        const cleanText = rawText.replace(navRegex, '').trim();
        return {
          cleanText,
          action: {
            tab: actionData.tab || 'past-papers',
            paperId: actionData.paperId,
            categorySlug: actionData.categorySlug,
            examId: actionData.examId,
            label: actionData.label || 'View Recommended Section',
            description: actionData.description
          }
        };
      } catch (e) {
        console.error('Failed to parse navigation tag:', e);
      }
    }
    return { cleanText: rawText };
  };

  // Built-in intelligent intent & offline knowledge resolver
  const resolveIntentLocally = (query: string): { text: string; action?: NavigationAction } => {
    const q = query.toLowerCase().trim();

    // 1. Greetings & General Conversational
    if (/^(hi|hello|salam|a\.?o\.?a|as-salamu alaykum|hey|good morning|good evening|who are you|what can you do)[\s!.?]*$/i.test(q)) {
      return {
        text: `Salam! 👋 I am **Mehtab AI**, your universal AI assistant and learning companion.

You can ask me **anything and everything**:
- 📖 **Word Meanings & Vocabulary:** Ask for any word's definition, synonyms, antonyms, parts of speech, and Urdu/Sindhi translations.
- 💡 **General Knowledge & Science:** History, world geography, everyday science, biology, and current affairs.
- 🧮 **Math & Reasoning:** Algebra, arithmetic tricks, percentage formulas, and logical reasoning.
- 📑 **Instant Navigation:** Ask me to open any past paper (STS, SPSC, FPSC), generate a mock test, or view your mistakes.

Feel free to type any question or word you are curious about!`,
      };
    }

    // 2. Word Meanings, Vocabulary & Dictionary Queries
    const isWordQuery = 
      q.includes('meaning of') || 
      q.includes('what is the meaning') || 
      q.includes('what does') && q.includes('mean') || 
      q.startsWith('define ') || 
      q.startsWith('definition of') || 
      q.includes('synonym of') || 
      q.includes('synonyms of') || 
      q.includes('antonym of') || 
      q.includes('antonyms of') || 
      q.includes('word meaning') || 
      q.includes('vocabulary') || 
      q.includes('معنيٰ') || 
      q.includes('مطلب');

    if (isWordQuery) {
      // High-yield vocabulary dictionary
      const DICTIONARY: Record<string, { pos: string; def: string; urdu: string; sindhi: string; syn: string[]; ant: string[]; ex: string }> = {
        ubiquitous: {
          pos: 'Adjective',
          def: 'Present, appearing, or found everywhere simultaneously.',
          urdu: 'ہر جگہ موجود، ہمہ گیر',
          sindhi: 'هر جاءِ تي موجود، هر هنڌ ملندڙ',
          syn: ['Omnipresent', 'Pervasive', 'Universal', 'Prevalent', 'Widespread'],
          ant: ['Rare', 'Scarce', 'Uncommon', 'Infrequent', 'Isolated'],
          ex: 'Smartphones have become ubiquitous in modern daily life.'
        },
        ephemeral: {
          pos: 'Adjective',
          def: 'Lasting for a very short time; transitory; fleeting.',
          urdu: 'عارضی، ناپائیدار، چند روزہ',
          sindhi: 'عارضي، بي بقا، ٿورڙي وقت لاءِ',
          syn: ['Transient', 'Fleeting', 'Short-lived', 'Momentary', 'Brief'],
          ant: ['Permanent', 'Eternal', 'Enduring', 'Lasting', 'Perpetual'],
          ex: 'Fame in social media can often be ephemeral.'
        },
        candid: {
          pos: 'Adjective',
          def: 'Truthful, straightforward, frank, and sincere without deception.',
          urdu: 'کھرا، صاف گو، بے باک، بے تکلف',
          sindhi: 'سچو، بي باڪ، سڌي ڳالهه ڪندڙ',
          syn: ['Frank', 'Honest', 'Outspoken', 'Direct', 'Sincere'],
          ant: ['Deceitful', 'Guarded', 'Insincere', 'Secretive', 'Dishonest'],
          ex: 'She was quite candid about the challenges facing the department.'
        },
        altruism: {
          pos: 'Noun',
          def: 'The selfless concern for the well-being and happiness of others.',
          urdu: 'ایثار، بے غرضی، دوسروں کی خیر خواہی',
          sindhi: 'ايثار، بي لوث خدمت، ٻين جو ڀلو چاهڻ',
          syn: ['Benevolence', 'Selflessness', 'Philanthropy', 'Generosity'],
          ant: ['Selfishness', 'Egoism', 'Greed', 'Spite'],
          ex: 'His life was devoted to humanitarian work driven by pure altruism.'
        },
        eloquent: {
          pos: 'Adjective',
          def: 'Fluent or persuasive in speaking or writing; clearly expressive.',
          urdu: 'فصیح، بلیغ، خوش گفتار',
          sindhi: 'فصيح، سهڻي گفتار وارو، پُراثر ڳالهائيندڙ',
          syn: ['Articulate', 'Expressive', 'Fluent', 'Persuasive'],
          ant: ['Inarticulate', 'Hesitant', 'Mute', 'Unexpressive'],
          ex: 'Quaid-e-Azam was known for his eloquent and persuasive speeches.'
        },
        pragmatic: {
          pos: 'Adjective',
          def: 'Dealing with things sensibly and realistically based on practical rather than theoretical considerations.',
          urdu: 'حقیقت پسندانہ، عملی، مفاد عامہ کے مطابق',
          sindhi: 'عملي، حقيقت پسند، مفيد',
          syn: ['Practical', 'Realistic', 'Sensible', 'Utilitarian'],
          ant: ['Idealistic', 'Impractical', 'Theoretical', 'Unrealistic'],
          ex: 'In politics, a pragmatic approach often yields tangible results.'
        },
        meticulous: {
          pos: 'Adjective',
          def: 'Showing great attention to detail; very careful and precise.',
          urdu: 'انتہائی باریک بین، ہوشیار، محتاط',
          sindhi: 'تمام باريڪ بين، نهايت محتاط، سنڀاليندڙ',
          syn: ['Diligent', 'Scrupulous', 'Fastidious', 'Painstaking', 'Thorough'],
          ant: ['Careless', 'Sloppy', 'Negligent', 'Reckless'],
          ex: 'The auditor conducted a meticulous review of the financial accounts.'
        },
        benevolent: {
          pos: 'Adjective',
          def: 'Well meaning, kind, and generous.',
          urdu: 'مہربان، خیر خواہ، فیاض',
          sindhi: 'مهربان، نيڪ نيت، خير خواه',
          syn: ['Kindhearted', 'Compassionate', 'Generous', 'Humane'],
          ant: ['Malevolent', 'Cruel', 'Spiteful', 'Hostile'],
          ex: 'The scholarship was funded by a benevolent local philanthropist.'
        },
        resilient: {
          pos: 'Adjective',
          def: 'Able to withstand or recover quickly from difficult conditions.',
          urdu: 'مضبوط، باہمت، مشکلات جھیلنے والا',
          sindhi: 'سگهارو، مشڪلن مان جلدي نڪرندڙ',
          syn: ['Tough', 'Robust', 'Hardy', 'Adaptable'],
          ant: ['Fragile', 'Vulnerable', 'Weak', 'Brittle'],
          ex: 'The community remained resilient despite consecutive floods.'
        },
        plethora: {
          pos: 'Noun',
          def: 'A large or excessive amount of something.',
          urdu: 'کثرت، افراط، بے پناہ مقدار',
          sindhi: 'گهڻائي، وافر مقدار، گهڻو هجڻ',
          syn: ['Abundance', 'Surplus', 'Excess', 'Profusion'],
          ant: ['Scarcity', 'Dearth', 'Shortage', 'Lack'],
          ex: 'The library offers a plethora of resources for research students.'
        }
      };

      // Check if target word exists in dictionary
      let matchedKey = Object.keys(DICTIONARY).find(w => q.includes(w));

      if (matchedKey && DICTIONARY[matchedKey]) {
        const item = DICTIONARY[matchedKey];
        return {
          text: `### 📖 Word Breakdown: **${matchedKey.toUpperCase()}**

- **Part of Speech:** *${item.pos}*
- **Definition:** ${item.def}
- **اردو ترجمہ:** ${item.urdu}
- **سنڌي معنيٰ:** ${item.sindhi}

#### 🔄 Synonyms (Similar Meaning):
${item.syn.map(s => `• **${s}**`).join(' ')}

#### ⚡ Antonyms (Opposite Meaning):
${item.ant.map(a => `• *${a}*`).join(' ')}

#### ✍️ Example Sentence:
> "${item.ex}"

*Tip: Vocabulary questions account for 20-30% of the English portion in STS, SPSC, and FPSC exams!*`,
          action: {
            tab: 'mcqs',
            categorySlug: 'english',
            label: 'Practice English & Vocabulary MCQs',
            description: 'Explore synonyms, antonyms, and idioms tested in official exams.'
          }
        };
      }

      // Dynamic word extraction for any arbitrary word
      const cleaned = q
        .replace(/what is the meaning of|meaning of|what does|mean|define|definition of|synonym of|antonym of|vocab|vocabulary|in urdu|in sindhi/gi, '')
        .replace(/['"?.!,]/g, '')
        .trim();
      const displayWord = cleaned || 'your requested word';

      return {
        text: `### 📖 Linguistic Definition & Analysis: **${displayWord.toUpperCase()}**

- **Core Meaning:** The term **"${displayWord}"** is used to describe a specific characteristic, action, or concept depending on its grammatical context.
- **Contextual Usage:** In formal writing and competitive tests (English Vocabulary section), questions around this word often test precision in eliminating close distractors.

#### Key Tips for Vocabulary Mastery:
1. **Root Analysis:** Identify Latin or Greek prefixes (e.g., *bene-* = good, *mal-* = bad, *omni-* = all).
2. **Context Clues:** Look at whether the sentence demands a positive, negative, or neutral tone.
3. **Usage:** Always memorize the word paired with a vivid sentence rather than in isolation!

Would you like to practice high-yield English vocabulary MCQs right now?`,
        action: {
          tab: 'mcqs',
          categorySlug: 'english',
          label: 'Open English MCQs & Synonyms',
          description: 'Master high-frequency vocabulary tested across STS and SPSC.'
        }
      };
    }

    // 3. General Science & Everyday Knowledge
    if (q.includes('photosynthesis') || q.includes('how plants make food')) {
      return {
        text: `### 🌿 Photosynthesis Explained:

**Photosynthesis** is the biological process by which green plants, algae, and certain bacteria convert sunlight energy into chemical energy (glucose).

- **Chemical Equation:**
  $$6CO_2 + 6H_2O + \\text{Light} \\longrightarrow C_6H_{12}O_6 + 6O_2$$
- **Where it happens:** In plant cell **chloroplasts**, using the green pigment **chlorophyll**.
- **Outputs:** Glucose (stored energy for the plant) + Oxygen (released into the atmosphere for living organisms).
- **Importance:** It is the foundational source of virtually all oxygen and biomass on Earth.`,
        action: {
          tab: 'mcqs',
          categorySlug: 'everyday-science',
          label: 'Practice Everyday Science MCQs',
          description: 'Biology, chemistry, physics, and ecology questions.'
        }
      };
    }

    if (q.includes('earthquake') || q.includes('seismic')) {
      return {
        text: `### 🌍 Earthquakes: Causes & Measurement

- **Cause:** Earthquakes occur due to the sudden fracture and slipping of tectonic plates along geological faults, releasing shockwaves known as **seismic waves**.
- **Focus (Hypocenter):** The exact subterranean origin point where seismic energy is first released.
- **Epicenter:** The point on the Earth's surface directly vertically above the focus.
- **Measurement Instruments:**
  1. **Seismograph:** Device that records ground vibrations.
  2. **Richter Scale / Moment Magnitude (Mw):** Quantifies earthquake energy/magnitude.
  3. **Mercalli Scale:** Measures observed surface damage and human intensity.`,
        action: {
          tab: 'mcqs',
          categorySlug: 'everyday-science',
          label: 'Practice Earth & Science MCQs',
          description: 'Explore geology, geography, and atmospheric science.'
        }
      };
    }

    // 4. Past papers: STS IBA Teaching License Test (STEDA)
    if ((q.includes('teaching') && (q.includes('license') || q.includes('lisence') || q.includes('test') || q.includes('paper') || q.includes('sts') || q.includes('iba') || q.includes('steda'))) || q.includes('steda') || q.includes('tlt')) {
      return {
        text: `Here are **All Details** for the landmark **STS IBA Sindh Teaching License Test** (conducted by Sukkur IBA under STEDA):

### 📋 Key Overview & Cadre
- **Conducting Bodies:** Sukkur IBA Testing Services (STS) & Sindh Teacher Education Development Authority (STEDA)
- **Licensing Levels:**
  - **Elementary Teaching License:** Eligible for direct recruitment to **BPS-16**
  - **Secondary Teaching License:** Eligible for direct recruitment to **BPS-17**
- **Benefits:** Mandatory license requirement for future teaching vacancies, professional monthly teaching allowance, and fast-track career promotions.

### 🎓 Eligibility Criteria
- **Academic Qualifications:** B.Ed (Hons) 4-Year, B.Ed (1.5 or 2.5 Year), ADE (Associate Degree in Education), or M.Ed from an HEC-recognized institution with at least **2nd Division / 2.5 CGPA**.
- **Age Limit:** Up to 40 years for fresh candidates; in-service teachers eligible under Sindh Civil Servants rules.

### 📝 Test Structure & Passing Marks
- **Total Questions:** 100 MCQs (100 Marks)
- **Time Duration:** 120 Minutes (2 Hours)
- **Passing Threshold:** **60% minimum (60 Marks)**
- **Negative Marking:** **No negative marking** (1 mark per correct answer)

### 📚 Detailed Syllabus Breakdown (50% Content + 50% Pedagogy)
1. **Part I: Content Knowledge (Class 1 to 8 DCAR Curriculum) — 50 MCQs (50%)**
   - **English Language (10 MCQs):** Reading comprehension, grammar, vocabulary, tenses, active/passive, idioms
   - **Mathematics (10 MCQs):** Arithmetic, fractions, unitary method, ratio & proportion, pre-algebra, geometry, mensuration
   - **General Science (10 MCQs):** Cell biology, human anatomy, plants, chemistry basics, physics (forces, energy), earth & space
   - **Social Studies & Pak Studies (10 MCQs):** Freedom movement, geography of Pakistan & Sindh, natural resources, Constitution basics
   - **Urdu & Sindhi Mother Tongue (10 MCQs):** Urdu grammar/idioms, Sindhi vyakaran/pahaka, phonetics, comprehension
2. **Part II: Pedagogical Content Knowledge (HEC B.Ed Curriculum) — 50 MCQs (50%)**
   - **Methods of Teaching & Foundations (10 MCQs):** Inquiry, Socratic method, PBL, 5E cycle, NPSTP standards, Bloom's taxonomy
   - **Child Development & Psychology (10 MCQs):** Piaget, Vygotsky (ZPD & scaffolding), Kohlberg, Pavlov/Skinner, Bandura, Gardner, IEP/ADHD
   - **Classroom Management & Differentiated Learning (10 MCQs):** Kounin's principles (withitness, smoothness), routines, ABC model, inclusive education
   - **Assessment, Test Development & Evaluation (10 MCQs):** Formative vs summative, CRT vs NRT, reliability, validity, rubrics, item analysis
   - **School, Community & Teacher (10 MCQs):** School as social system, SMCs, parent partnerships, ethics, reflective practice

### 🎯 Practice Solved Past Papers
We have added **Two Complete Solved Past Papers of 100 Questions each** (Paper 1 & Paper 2) strictly mapped to this exact syllabus with full explanatory keys! Click below to start Paper 1 immediately.`,
        action: {
          tab: 'past-papers',
          paperId: 'sts-teaching-license-paper-1',
          label: 'Launch Teaching License Paper 1 (100 MCQs)',
          description: 'Timed 120-minute practice simulation covering Part I (Content) & Part II (Pedagogy).'
        }
      };
    }

    // 5. Past papers: STS BPS 5 to 15
    if (q.includes('sts') && (q.includes('past') || q.includes('paper') || q.includes('bps') || q.includes('grad') || q.includes('5 to 15') || q.includes('05-15'))) {
      return {
        text: `Here is the **STS IBA Sukkur BPS-05 to 15 Graduation Category Past Paper**!

- **Conducted by:** Sukkur IBA Testing Services (STS)
- **Total Questions:** 100 authentic MCQs (English, Math, General Knowledge, Everyday Science, Computer)
- **Time Allowed:** 90 Minutes
- **Marking Scheme:** 1 mark per question (No negative marking)

Click the button below to start solving this paper immediately with our timed exam simulator and detailed answer keys!`,
        action: {
          tab: 'past-papers',
          paperId: 'pp-sts-bps-5-15-grad-2024',
          label: 'Launch STS BPS-05 to 15 Past Paper',
          description: 'Jump straight into the full 100-question practice test with live timer.'
        }
      };
    }

    // 5. Past papers: SPSC CCE
    if (q.includes('spsc') || q.includes('cce') || q.includes('combined competitive')) {
      return {
        text: `Here is the **SPSC Combined Competitive Exam (CCE) Screening Paper**:

- **Target Cadre:** Assistant Commissioner (BPS-17) & Section Officer
- **Format:** 100 MCQs covering General Knowledge, Current Affairs, English & Pakistan History
- **Crucial Note:** SPSC penalizes **0.25 negative marks** for every wrong answer. It is best to skip questions where you cannot eliminate at least two options.

Click below to open and practice this solved paper!`,
        action: {
          tab: 'past-papers',
          paperId: 'pp-spsc-cce-screen-2024',
          label: 'Open SPSC CCE Screening Paper',
          description: '100 MCQs with negative marking simulation.'
        }
      };
    }

    // 6. Past papers: FPSC / Inspector Customs / FIA
    if (q.includes('fpsc') || q.includes('customs') || q.includes('fia') || q.includes('patrol')) {
      return {
        text: `I have found the **FPSC Inspector Customs & Intelligence Officer Solved Paper**:

- **Exam Agency:** Federal Public Service Commission (FPSC)
- **Standard Pattern:** 20% English Grammar & Vocabulary + 80% General Abilities & Basic Math
- **Negative Marking:** None (Attempt all 100 questions)

Click below to open this paper:`,
        action: {
          tab: 'past-papers',
          paperId: 'pp-fpsc-inspector-customs-2024',
          label: 'Open FPSC Customs Inspector Paper',
          description: 'Practice federal recruitment questions with answers.'
        }
      };
    }

    // 7. General past papers inquiry
    if (q.includes('past paper') || q.includes('old paper') || q.includes('sample paper') || q.includes('papers')) {
      return {
        text: `We have archived official and reconstructed past papers for **STS IBA, SPSC, FPSC, PPSC, and CSS MPT** in our central repository.

You can filter by agency, search by year, or practice timed selections with instant diagnostic breakdowns!`,
        action: {
          tab: 'past-papers',
          label: 'Go to Past Papers Archive',
          description: 'Browse all available official records and full practice papers.'
        }
      };
    }

    // 8. Mistake vault / my mistakes
    if (q.includes('mistake') || q.includes('wrong') || q.includes('missed') || q.includes('vault') || q.includes('review')) {
      return {
        text: `Your **Mistake Vault** automatically captures every question you get wrong in mock tests or practice sets. 

Scientific spaced repetition requires reviewing these until you score them right 3 times in a row! Click below to view your personalized mistake notebook:`,
        action: {
          tab: 'mistakes',
          label: 'Open Personal Mistake Vault',
          description: `Review your quarantined incorrect questions.`
        }
      };
    }

    // 9. AI Learning Lab / Adaptive Testing / IRT
    if (q.includes('learning lab') || q.includes('adaptive') || q.includes('irt') || q.includes('battle') || q.includes('diagnostic') || q.includes('cutoff') || q.includes('pacing')) {
      return {
        text: `The **AI Cognitive Learning Lab** includes 5 powerful pillars:
1. **Smart Adaptive Testing (IRT):** Adjusts question difficulty in real time based on your ongoing accuracy.
2. **Generative Tutoring:** Socratic step-by-step breakdowns and trap explanations.
3. **Exam Diagnostics:** Merit cutoff predictors and pacing speed radars.
4. **1v1 Exam Battles:** Real-time multi-aspirant showdowns.
5. **Audio Flashcards & Printable Sheets.**`,
        action: {
          tab: 'learning-lab',
          label: 'Launch AI Learning Lab',
          description: 'Experience IRT dynamic testing and competitive study arenas.'
        }
      };
    }

    // 10. Mock test / Quiz / Practice
    if (q.includes('mock') || q.includes('quiz') || q.includes('test') || q.includes('simulator') || q.includes('practice')) {
      return {
        text: `Ready to test your readiness? You can customize a full 50 or 100-question timed mock test matching the exact STS BPS-05 to 15 or SPSC CCE weightages!`,
        action: {
          tab: 'quiz',
          label: 'Generate Mock Test',
          description: 'Configure syllabus weightage, question count, and live timer.'
        }
      };
    }

    // 11. Jobs / Vacancies
    if (q.includes('job') || q.includes('vacancy') || q.includes('advertisement') || q.includes('recruitment') || q.includes('apply')) {
      return {
        text: `Looking for government jobs in Sindh and Federal departments? Our Jobs portal tracks verified announcements from SGA&CD, STS, SPSC, FPSC, and Education & Literacy Departments!`,
        action: {
          tab: 'jobs',
          label: 'Explore Active Government Jobs',
          description: 'Check eligibility, BPS scales, deadlines, and official links.'
        }
      };
    }

    // 12. Current affairs
    if (q.includes('current affair') || q.includes('news') || q.includes('governor') || q.includes('chief justice') || q.includes('prime minister')) {
      return {
        text: `Current Affairs form 15-20% of General Knowledge in STS and SPSC tests! We maintain monthly chronological digests (National, Sindh, International, Sports, and Honors) for 2025 and 2026.`,
        action: {
          tab: 'current-affairs',
          label: 'Open Current Affairs Hub',
          description: 'Read month-by-month verified updates and take current affairs quizzes.'
        }
      };
    }

    // 13. Math percentage shortcuts
    if (q.includes('percentage') || q.includes('math') || q.includes('arithmetic') || q.includes('formula')) {
      return {
        text: `Here is a high-speed percentage trick frequently needed in STS IBA exams:

**1. The "10% & 1%" Split Method:**
To find 35% of 240:
- 10% of 240 = 24
- 30% = 24 × 3 = 72
- 5% = half of 24 = 12
- 35% = 72 + 12 = **84**! (No pencil needed!)

**2. Percentage Reversibility:**
$x\\% \\text{ of } y = y\\% \\text{ of } x$
Example: 16% of 25 = 25% of 16 = 1/4 of 16 = **4**!

Would you like to practice math MCQs right now?`,
        action: {
          tab: 'mcqs',
          categorySlug: 'mathematics',
          label: 'Practice Mathematics MCQs',
          description: 'Master percentages, ratios, algebra, and word problems.'
        }
      };
    }

    // 14. Urdu or Sindhi response
    if (q.includes('سنڌي') || q.includes('اردو') || q.includes('پيپر') || q.includes('تياري') || q.includes('نوٽس')) {
      return {
        text: `محترم دوست! اسان جو پليٽ فارم هر قسم جي سوالن جا جواب، لفظن جون معنائون، ۽ ايس ٽي ايس (STS IBA) بي پي ايس 05 کان 15 ۽ سنڌ پبلڪ سروس ڪميشن (SPSC) جي تياري مهيا ڪري ٿو.

توهان ڪنهن به لفظ جي معنيٰ، علمي سوال، يا ماضي جا حل ٿيل پيپر پڇي سگهو ٿا!`,
        action: {
          tab: 'past-papers',
          paperId: 'pp-sts-bps-5-15-grad-2024',
          label: 'ايس ٽي ايس ماضي جو پيپر کوليو',
          description: '100 سوالن جو حل ٿيل پيپر ٽائمر سان گڏ پريڪٽس ڪريو.'
        }
      };
    }

    // 15. General Comprehensive Fallback
    return {
      text: `### 💡 Question Breakdown & Insights

Thank you for your question! Here are the core insights:

- **Key Takeaway:** Understanding this concept thoroughly requires breaking it down into fundamental definitions, practical examples, and common applications.
- **Linguistic / Analytical Context:** Whether in language, general knowledge, or competitive problem-solving, clarity of fundamentals helps eliminate ambiguities.

Feel free to ask follow-up questions, request word definitions, or explore related study topics!`,
      action: {
        tab: 'past-papers',
        paperId: 'pp-sts-bps-5-15-grad-2024',
        label: 'Explore Past Papers Archive',
        description: 'Check official solved past papers and exam patterns.'
      }
    };
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setInput('');
    setHasPromptBanner(false);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 1. First attempt to call the server Gemini API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          userContext: {
            targetExam: userProfile.targetExam,
            accuracy: userProfile.quizHistory.length > 0 
              ? Math.round(userProfile.quizHistory.reduce((acc, a) => acc + (a.score / a.totalQuestions) * 100, 0) / userProfile.quizHistory.length)
              : 70,
            province: userProfile.province,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data.fallback && data.reply) {
          const parsed = parseResponseForAction(data.reply);
          const botMessage: ChatMessage = {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: parsed.cleanText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            action: parsed.action || resolveIntentLocally(query).action,
          };
          setMessages(prev => [...prev, botMessage]);
          speakText(parsed.cleanText);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Server chat call had network interruption, proceed to local resolution
    }

    // 2. Seamless local intelligence resolution (always succeeds)
    const localResult = resolveIntentLocally(query);
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: localResult.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: localResult.action,
      };
      setMessages(prev => [...prev, botMessage]);
      speakText(localResult.text);
      setIsLoading(false);
    }, 450);
  };

  const clearChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat history cleared! How can I assist you with your exam preparation now?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: {
          tab: 'past-papers',
          paperId: 'pp-sts-bps-5-15-grad-2024',
          label: 'Solve STS BPS-05 to 15 Past Paper',
          description: 'Launch the timed 100-question practice test.'
        }
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Button (FAB) & Teaser Banner */}
      <div 
        id="mehtab-ai-floating-container"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
      >
        {/* Proactive Speech Bubble Teaser */}
        <AnimatePresence>
          {!isOpen && hasPromptBanner && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-3 mr-1 max-w-[280px] sm:max-w-xs bg-white dark:bg-slate-900 border border-emerald-500/40 rounded-2xl p-3.5 shadow-2xl relative text-slate-800 dark:text-slate-100"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setHasPromptBanner(false); }}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                aria-label="Dismiss message"
              >
                <X size={14} />
              </button>
              <div className="flex items-start gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-ping" />
                <div>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span>Mehtab AI Assistant</span>
                    <Sparkles size={12} />
                  </p>
                  <p className="text-xs mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ask me <strong>anything</strong>! Word meanings, science, general questions, or exam past papers.
                  </p>
                </div>
              </div>
              <button
                onClick={() => { setIsOpen(true); setHasPromptBanner(false); }}
                className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Ask Anything • Open Chat</span>
                <ArrowRight size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Avatar Launcher Button */}
        <motion.button
          id="mehtab-ai-launcher-btn"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            setIsOpen(prev => !prev);
            if (!isOpen) setHasPromptBanner(false);
          }}
          className={`relative group flex items-center justify-center rounded-full p-1 transition-all duration-300 shadow-2xl ${
            isOpen 
              ? 'bg-slate-800 text-white ring-2 ring-emerald-500 w-14 h-14' 
              : 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 ring-4 ring-emerald-400/50 hover:ring-emerald-300 w-16 h-16 sm:w-18 sm:h-18'
          }`}
          aria-label="Toggle AI Exam Mentor Chatbot"
        >
          {isOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-900">
              <img 
                src={avatarSrc} 
                alt="Mehtab AI Chatbot" 
                onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                className="w-full h-full object-cover object-top scale-105"
              />
              {/* Pulsing Online Badge */}
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Main Chatbot Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mehtab-ai-chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isMaximized 
                ? 'inset-3 sm:inset-6 rounded-3xl' 
                : 'bottom-20 sm:bottom-24 right-3 sm:right-6 w-[94vw] sm:w-[440px] h-[580px] max-h-[82vh] rounded-3xl'
            }`}
          >
            {/* Window Header */}
            <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white p-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-300 shadow-inner bg-slate-900 shrink-0">
                  <img 
                    src={avatarSrc} 
                    alt="Mehtab AI Avatar" 
                    onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-slate-900 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base leading-tight tracking-wide">Mehtab AI</h3>
                    <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-400/30">
                      Universal AI
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/80 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Ask Anything • Word Meanings • Past Papers • 24/7</span>
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1 text-emerald-100">
                <button
                  onClick={() => setAudioEnabled(prev => !prev)}
                  title={audioEnabled ? 'Mute AI Voice' : 'Enable AI Voice Readout'}
                  className={`p-1.5 rounded-lg transition-colors ${audioEnabled ? 'bg-emerald-500/30 text-emerald-200' : 'hover:bg-white/10'}`}
                >
                  {audioEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
                </button>
                <button
                  onClick={clearChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Trash2 size={17} />
                </button>
                <button
                  onClick={() => setIsMaximized(prev => !prev)}
                  title={isMaximized ? 'Restore window size' : 'Expand window'}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors hidden sm:block"
                >
                  {isMaximized ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* Quick Filter / Topic Chips Bar */}
            <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap pl-1 flex items-center gap-1">
                <Compass size={12} />
                <span>Quick:</span>
              </span>
              {QUICK_PROMPTS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.query)}
                  className="text-xs whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all text-slate-700 dark:text-slate-300 shrink-0 font-medium"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Message Stream Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-400/40 bg-slate-900 mt-1">
                      <img 
                        src={avatarSrc} 
                        alt="AI" 
                        onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                        className="w-full h-full object-cover object-top scale-105"
                      />
                    </div>
                  )}

                  <div className={`max-w-[85%] space-y-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    {/* Chat Bubble */}
                    <div
                      className={`p-3.5 rounded-2xl shadow-sm ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-none'
                          : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/60 rounded-tl-none'
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">
                        {msg.content.split('\n').map((line, lIdx) => {
                          // Format bold text
                          const formattedLine = line.split(/(\*\*.*?\*\*)/).map((seg, sIdx) => {
                            if (seg.startsWith('**') && seg.endsWith('**')) {
                              return <strong key={sIdx} className="font-bold text-emerald-700 dark:text-emerald-400">{seg.slice(2, -2)}</strong>;
                            }
                            return seg;
                          });
                          return <p key={lIdx} className={lIdx > 0 ? 'mt-1.5' : ''}>{formattedLine}</p>;
                        })}
                      </div>

                      {/* Attached Navigation Action Card */}
                      {msg.action && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 p-3 bg-white dark:bg-slate-900/90 rounded-xl border-2 border-emerald-500/50 shadow-md flex flex-col gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                              {msg.action.tab === 'past-papers' && <FileText size={16} />}
                              {msg.action.tab === 'learning-lab' && <Brain size={16} />}
                              {msg.action.tab === 'mistakes' && <AlertCircle size={16} />}
                              {msg.action.tab === 'jobs' && <Briefcase size={16} />}
                              {msg.action.tab === 'quiz' && <Target size={16} />}
                              {!['past-papers', 'learning-lab', 'mistakes', 'jobs', 'quiz'].includes(msg.action.tab) && <Compass size={16} />}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-xs text-slate-900 dark:text-white truncate">
                                {msg.action.label}
                              </p>
                              {msg.action.description && (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                                  {msg.action.description}
                                </p>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={() => executeNavigation(msg.action!)}
                            className="w-full py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
                          >
                            <span>Open Directly</span>
                            <ArrowRight size={13} />
                          </button>
                        </motion.div>
                      )}
                    </div>

                    <span className="text-[10px] text-slate-400 px-1 block text-right">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-400/40 bg-slate-900">
                    <img 
                      src={avatarSrc} 
                      alt="AI" 
                      onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                      className="w-full h-full object-cover object-top scale-105"
                    />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                    <span className="text-xs text-slate-400 ml-1">Mehtab AI is thinking…</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Bar */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything! Word meaning, math, science, or exam past papers..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white p-2.5 rounded-xl shadow transition-all duration-200 active:scale-95 shrink-0"
                  aria-label="Send query"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-2 px-1">
                <span>Universal Assistant: Word meanings, general questions & direct exam navigation</span>
                <span>English • اردو • سنڌي</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
