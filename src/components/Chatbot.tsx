import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Target, 
  Compass, 
  Briefcase, 
  AlertCircle,
  Mic,
  MicOff,
  Square,
  Play,
  Languages,
  Headphones,
  MessageSquare,
  Radio,
  Sliders,
  RotateCcw,
  Check,
  Orbit,
  Bot
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
  sourceMode?: 'typing' | 'voice';
}

const AI_HUMAN_MENTOR_AVATAR = '/assets/ai_mentor_chinese_welcome.jpg';
const CUTE_ROBOT_AVATAR = '/assets/cute_white_robot_ai_avatar.jpg';
const AVATAR_FALLBACK = '/assets/cute_white_robot_ai_avatar.jpg';

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

const VOICE_SAMPLE_PROMPTS = [
  'What is the difference between Piaget and Vygotsky?',
  'Open STS BPS-05 to 15 Past Paper',
  'What are the passing marks for Teaching License?',
  'Explain active and passive voice rules',
  'Teach me quick math percentage tricks',
  'What is Saktah in Urdu punctuation?'
];

export const Chatbot: React.FC = () => {
  const { 
    setTab, 
    setSelectedPastPaperId, 
    setSelectedCategorySlug, 
    setSelectedExamId,
    userProfile 
  } = useApp();

  // Mode: 'voice' (Live Interactive Voice Agent) vs 'typing' (Chat & Text Mode)
  const [interactionMode, setInteractionMode] = useState<'voice' | 'typing'>('voice');
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [hasPromptBanner, setHasPromptBanner] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>(AI_HUMAN_MENTOR_AVATAR);

  // Screen Perimeter Revolving Mode (Completes 1 round then places on down right side)
  const [isRevolving, setIsRevolving] = useState(true);
  const [hasCompletedRound, setHasCompletedRound] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const [isBowing, setIsBowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [orbitSpeed, setOrbitSpeed] = useState<number>(20); // 20s for one complete round around screen perimeter
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Handler when single round around perimeter finishes: places on down right side & welcomes user
  const handleRoundComplete = () => {
    setIsRevolving(false);
    setHasCompletedRound(true);
    setShowWelcomeBubble(true);
    setIsBowing(true);
    setTimeout(() => setIsBowing(false), 2600);
  };

  // Re-trigger perimeter round on demand
  const handleStartNewRound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowWelcomeBubble(false);
    setHasCompletedRound(false);
    setIsRevolving(true);
  };

  useEffect(() => {
    if (!isRevolving) return;
    const timer = setTimeout(() => {
      handleRoundComplete();
    }, orbitSpeed * 1000);
    return () => clearTimeout(timer);
  }, [isRevolving, orbitSpeed]);

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Proportional perimeter path calculation based on screen dimensions for the Robot Companion
  const isMobile = viewport.width < 640;
  const robotSize = isMobile ? 68 : 80;
  const offsetRight = isMobile ? 16 : 24;
  const offsetLeft = isMobile ? 16 : 24;
  const offsetTop = isMobile ? 76 : 86; // beneath sticky navbar
  const offsetBottom = isMobile ? 76 : 28; // above mobile bar / bottom edge

  const xRight = Math.max(0, viewport.width - offsetRight - robotSize);
  const xLeft = offsetLeft;
  const yBottom = Math.max(0, viewport.height - offsetBottom - robotSize);
  const yTop = offsetTop;

  const hSide = Math.max(40, yBottom - yTop);
  const wSide = Math.max(40, xRight - xLeft);
  const totalPerimeter = (hSide + wSide) * 2;

  const p1 = Math.round((hSide / totalPerimeter) * 100);
  const p2 = Math.round(((hSide + wSide) / totalPerimeter) * 100);
  const p3 = Math.round(((hSide * 2 + wSide) / totalPerimeter) * 100);

  // Speech Recognition State
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [voiceLanguage, setVoiceLanguage] = useState<'en' | 'ur' | 'sd'>('en');
  const [voiceSpeed, setVoiceSpeed] = useState<number>(1.0);
  const [continuousVoice, setContinuousVoice] = useState(false);

  // Speech Synthesis State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  // Voice Interaction Stream Displays
  const [lastSpokenQuery, setLastSpokenQuery] = useState<string>('');
  const [lastAgentReply, setLastAgentReply] = useState<string>('Salam! I am Mehtab AI, your personal exam mentor. You can speak to me or type your question anytime.');
  const [lastAction, setLastAction] = useState<NavigationAction | undefined>({
    tab: 'past-papers',
    paperId: 'pp-sts-bps-5-15-grad-2024',
    label: 'Start STS BPS-05 to 15 Past Paper',
    description: 'Practice the official 100-MCQ solved paper with live timer and instant analysis.'
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `Salam! 👋 I am **Mehtab AI**, your personal AI mentor and exam navigator. You can interact with me directly either by **speaking** or **typing**:

- 🎙️ **Direct Voice Agent:** Tap the microphone to talk with me live in English, Urdu (اردو), or Sindhi (سنڌي)
- 📖 **Word meanings, vocabulary, definitions, synonyms & antonyms**
- 💡 **Pedagogy, STEDA Teaching License Notes, and child psychology**
- 🧮 **Mathematics problem solving, algebra & speed shortcuts**
- 📑 **Find & open any Past Paper or Mock Test** directly with one click

How would you like to start? Speak into your microphone or type your question below!`,
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
  const recognitionRef = useRef<any>(null);
  const finalTranscriptRef = useRef<string>('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isListening]);

  useEffect(() => {
    if (isOpen && interactionMode === 'typing' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, interactionMode]);

  // Clean up any ongoing speech synthesis or recognition when modal closes
  useEffect(() => {
    if (!isOpen) {
      stopSpeaking();
      stopListening();
    }
  }, [isOpen]);

  // Stop speaking synthesis
  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSpeakingMessageId(null);
  }, []);

  // Voice speech readout using SpeechSynthesis
  const speakText = useCallback((text: string, messageId?: string) => {
    if (!audioEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Strip markdown symbols and navigation tags for clear voice audio
      const cleanText = text
        .replace(/<<<NAVIGATE:[\s\S]*?>>>/g, '')
        .replace(/\[.*?\]\(.*?\)/g, '')
        .replace(/[*#_`~>•]/g, '')
        .replace(/[-]{3,}/g, '')
        .replace(/https?:\/\/\S+/g, '')
        .trim();

      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = voiceSpeed;
      utterance.pitch = 1.0;

      // Select voice matching language if available
      const voices = window.speechSynthesis.getVoices();
      if (voiceLanguage === 'ur') {
        const urVoice = voices.find(v => v.lang.startsWith('ur'));
        if (urVoice) utterance.voice = urVoice;
      } else {
        const preferredVoice = voices.find(v => 
          v.lang.startsWith('en') && 
          (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Guy'))
        );
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        if (messageId) setSpeakingMessageId(messageId);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setSpeakingMessageId(null);
        // If continuous voice mode is active and we are in voice mode, auto-listen for next question
        if (continuousVoice && interactionMode === 'voice') {
          setTimeout(() => {
            startListening();
          }, 600);
        }
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setSpeakingMessageId(null);
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
      setSpeakingMessageId(null);
    }
  }, [audioEnabled, voiceSpeed, voiceLanguage, continuousVoice, interactionMode]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Recognition already stopped
      }
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  // Check speech recognition support
  const isSpeechRecognitionAvailable = typeof window !== 'undefined' && Boolean(
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  );

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

    // 1. Math percentage shortcut
    if (q.includes('percentage') || q.includes('percent') || q.includes('shortcut') || q.includes('math trick')) {
      return {
        text: `Here is the **Master Percentage Shortcut** tested in STS BPS-05 to 15, SPSC, and FPSC tests:
- **Zero Cancellation Method:** To find $x\\%$ of $y$, simply divide both by 10 and multiply!
  - *Example 1:* $30\\%$ of $70 = 3 \\times 7 = 21$.
  - *Example 2:* $40\\%$ of $150 = 4 \\times 15 = 60$.
  - *Example 3:* $15\\%$ of $80 = (10\\% \\text{ of } 80) + (5\\% \\text{ of } 80) = 8 + 4 = 12$.
- **Fraction Equivalents:**
  - $25\\% = \\frac{1}{4}$ | $33.3\\% = \\frac{1}{3}$ | $12.5\\% = \\frac{1}{8}$ | $20\\% = \\frac{1}{5}$
- Would you like to practice high-yield Math MCQs right now?`,
        action: {
          tab: 'mcqs',
          categorySlug: 'basic-arithmetic',
          label: 'Practice Math MCQs with Solutions',
          description: 'Master fractions, word problems, algebra, and geometry.'
        }
      };
    }

    // 2. Word Meaning & Dictionary
    if (q.includes('meaning') || q.includes('vocab') || q.includes('synonym') || q.includes('antonym') || q.includes('define') || q.includes('definition')) {
      const DICTIONARY: Record<string, { pos: string; def: string; urdu: string; sindhi: string; syn: string[]; ant: string[]; ex: string }> = {
        ubiquitous: {
          pos: 'Adjective',
          def: 'Present, appearing, or found everywhere simultaneously.',
          urdu: 'ہمہ گیر، ہر جگہ موجود، حاضر و ناظر',
          sindhi: 'هر جاءِ تي موجود، هر هنڌ ملندڙ',
          syn: ['Omnipresent', 'Pervasive', 'Universal', 'Prevalent'],
          ant: ['Rare', 'Scarce', 'Infrequent', 'Seldom'],
          ex: 'Smartphones have become ubiquitous in modern daily life.'
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
          syn: ['Diligent', 'Scrupulous', 'Fastidious', 'Painstaking'],
          ant: ['Careless', 'Sloppy', 'Negligent', 'Reckless'],
          ex: 'The auditor conducted a meticulous review of the financial accounts.'
        }
      };

      const matchedKey = Object.keys(DICTIONARY).find(w => q.includes(w));
      if (matchedKey && DICTIONARY[matchedKey]) {
        const item = DICTIONARY[matchedKey];
        return {
          text: `### 📖 Word Breakdown: **${matchedKey.toUpperCase()}**
- **Part of Speech:** *${item.pos}*
- **Definition:** ${item.def}
- **اردو ترجمہ:** ${item.urdu}
- **سنڌي معنيٰ:** ${item.sindhi}
- **Synonyms:** ${item.syn.join(', ')}
- **Antonyms:** ${item.ant.join(', ')}
- **Example Sentence:** "${item.ex}"`,
          action: {
            tab: 'mcqs',
            categorySlug: 'english',
            label: 'Practice English & Vocabulary MCQs',
            description: 'Explore synonyms, antonyms, and idioms tested in official exams.'
          }
        };
      }
    }

    // 3. STEDA Teaching License Notes & Test
    if (q.includes('teaching') || q.includes('license') || q.includes('steda') || q.includes('pedagogy') || q.includes('piaget') || q.includes('vygotsky')) {
      return {
        text: `### 🎓 STEDA Teaching License Test & Study Notes
- **Conducting Agency:** Sukkur IBA STS & STEDA
- **Structure:** 100 MCQs (50% Content Knowledge + 50% Pedagogical Content Knowledge).
- **Passing Marks:** 60% minimum (60 marks out of 100). No negative marking.
- **High-Yield Pedagogy Pillars:**
  1. **Jean Piaget:** 4 Cognitive Stages (Sensorimotor, Preoperational, Concrete, Formal Operational).
  2. **Lev Vygotsky:** Zone of Proximal Development (ZPD) & Social Scaffolding.
  3. **Bloom's Taxonomy:** Remembering $\\rightarrow$ Understanding $\\rightarrow$ Applying $\\rightarrow$ Analyzing $\\rightarrow$ Evaluating $\\rightarrow$ Creating.
  4. **Assessment:** Formative (for learning) vs Summative (of learning).`,
        action: {
          tab: 'study-notes',
          label: 'Open Teaching License 10-Part Master Notes Hub',
          description: 'Access complete high-yield notes, formulas, and solved past papers.'
        }
      };
    }

    // 4. STS BPS-05 to 15 Past Paper
    if (q.includes('sts') || q.includes('bps') || q.includes('past paper') || q.includes('screening')) {
      return {
        text: `### 📑 STS IBA Sukkur BPS-05 to 15 Screening Test
- **Total Marks:** 100 MCQs | 100 Marks | 90-120 Minutes
- **Subject Distribution:**
  - English: 40 MCQs (Reading Comprehension, Synonyms/Antonyms, Prepositions, Grammar)
  - Mathematics: 20 MCQs (Arithmetic, Fractions, Percentages, Ratio, Word Problems)
  - General Knowledge & Pakistan Studies: 15 MCQs
  - Everyday Science: 15 MCQs
  - Computer / Information Technology: 10 MCQs
- **Negative Marking:** No negative marking.`,
        action: {
          tab: 'past-papers',
          paperId: 'pp-sts-bps-5-15-grad-2024',
          label: 'Solve STS BPS-05 to 15 Solved Paper',
          description: 'Timed 100-question practice test with carbon-copy score card.'
        }
      };
    }

    // Default universal reply
    return {
      text: `I understand your question regarding "${query}". As your AI Mentor, I can guide you through exam patterns, subject concepts, past papers, or language translations. What specific area would you like to explore next?`,
      action: {
        tab: 'past-papers',
        paperId: 'pp-sts-bps-5-15-grad-2024',
        label: 'Explore Solved Past Papers',
        description: 'Practice real exam questions with live ranking and detailed explanations.'
      }
    };
  };

  // Main message sender (supports typing or speech-driven interaction)
  const handleSendMessage = async (overrideQuery?: string, sourceMode: 'typing' | 'voice' = interactionMode) => {
    const query = overrideQuery || input.trim();
    if (!query || isLoading) return;

    setInput('');
    setVoiceError(null);
    setInterimTranscript('');
    setLastSpokenQuery(query);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sourceMode,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 1. Call the server Gemini API endpoint with voice context
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          mode: sourceMode,
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
            sourceMode,
          };
          setMessages(prev => [...prev, botMessage]);
          setLastAgentReply(parsed.cleanText);
          setLastAction(botMessage.action);
          
          if (audioEnabled || sourceMode === 'voice') {
            speakText(parsed.cleanText, botMessage.id);
          }
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Network hiccup, smoothly fall back to built-in knowledge resolver
    }

    // 2. Local intelligence fallback
    const localResult = resolveIntentLocally(query);
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: localResult.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: localResult.action,
        sourceMode,
      };
      setMessages(prev => [...prev, botMessage]);
      setLastAgentReply(localResult.text);
      setLastAction(botMessage.action);
      
      if (audioEnabled || sourceMode === 'voice') {
        speakText(localResult.text, botMessage.id);
      }
      setIsLoading(false);
    }, 400);
  };

  // Start Voice Recognition (Speech-to-Text)
  const startListening = () => {
    if (!isSpeechRecognitionAvailable) {
      setVoiceError('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari, or switch to Typing Mode.');
      return;
    }

    // Stop speaking so the bot doesn't talk while candidate is speaking
    stopSpeaking();

    try {
      const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognitionClass();
      
      recognition.continuous = false;
      recognition.interimResults = true;

      if (voiceLanguage === 'ur') {
        recognition.lang = 'ur-PK';
      } else if (voiceLanguage === 'sd') {
        recognition.lang = 'sd-PK';
      } else {
        recognition.lang = 'en-US';
      }

      recognition.onstart = () => {
        setIsListening(true);
        setInterimTranscript('');
        setVoiceError(null);
        finalTranscriptRef.current = '';
      };

      recognition.onresult = (event: any) => {
        let currentText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentText += event.results[i][0].transcript;
        }
        setInterimTranscript(currentText);
        finalTranscriptRef.current = currentText;
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setVoiceError('Microphone permission was denied. Please allow microphone access in your browser to speak directly with Mehtab AI.');
        } else if (event.error !== 'no-speech') {
          setVoiceError(`Voice input: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        const spoken = finalTranscriptRef.current.trim();
        if (spoken) {
          handleSendMessage(spoken, 'voice');
          finalTranscriptRef.current = '';
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      setIsListening(false);
      setVoiceError('Could not start microphone. Please check permissions or type your question.');
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const clearChat = () => {
    stopSpeaking();
    stopListening();
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat history cleared! How can I assist you with your exam preparation now? You can speak or type anytime.`,
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
      {/* HUMAN-LIKE AI AGENT COMPANION (Completes 1 round then docks on down right side with Chinese welcome gesture) */}
      {!isOpen && (
        <div 
          id="mehtab-ai-orbit-viewport"
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        >
          {/* Keyframes for ONE full perimeter round and human-like life moments */}
          <style>{`
            @keyframes mehtabPerimeterSingleRound {
              0% {
                transform: translate3d(${xRight}px, ${yBottom}px, 0) rotate(0deg);
              }
              ${p1}% {
                transform: translate3d(${xRight}px, ${yTop}px, 0) rotate(-3deg);
              }
              ${p2}% {
                transform: translate3d(${xLeft}px, ${yTop}px, 0) rotate(0deg);
              }
              ${p3}% {
                transform: translate3d(${xLeft}px, ${yBottom}px, 0) rotate(3deg);
              }
              100% {
                transform: translate3d(${xRight}px, ${yBottom}px, 0) rotate(0deg);
              }
            }

            /* Natural human breathing & micro-posture movements */
            @keyframes humanPresenceBreath {
              0%, 100% {
                transform: translateY(0px) rotate(0deg);
              }
              30% {
                transform: translateY(-4px) rotate(-1deg);
              }
              65% {
                transform: translateY(-1.5px) rotate(1deg);
              }
              85% {
                transform: translateY(-3px) rotate(0deg);
              }
            }

            /* Traditional Chinese Welcome Gesture (Baoquan 抱拳礼: Respectful Welcoming Bow) */
            @keyframes chineseWelcomeBow {
              0% {
                transform: translateY(0) scale(1) rotate(0deg);
              }
              25% {
                transform: translateY(6px) scale(0.97) rotate(-4.5deg);
              }
              50% {
                transform: translateY(4px) scale(0.98) rotate(-2deg);
              }
              75% {
                transform: translateY(-3px) scale(1.02) rotate(1.5deg);
              }
              100% {
                transform: translateY(0) scale(1) rotate(0deg);
              }
            }

            .mehtab-single-round-active {
              animation: mehtabPerimeterSingleRound ${orbitSpeed}s cubic-bezier(0.35, 0.05, 0.65, 0.95) 1 forwards;
              will-change: transform;
            }
            .mehtab-single-round-active:hover {
              animation-play-state: paused !important;
            }

            .mehtab-human-breathing {
              animation: humanPresenceBreath 4.2s ease-in-out infinite;
            }
            .mehtab-chinese-greeting-bow {
              animation: chineseWelcomeBow 2.4s cubic-bezier(0.34, 1.3, 0.64, 1) 1;
            }
          `}</style>

          <div 
            className={`absolute top-0 left-0 pointer-events-auto transition-all duration-500 ${
              isRevolving ? 'mehtab-single-round-active' : ''
            }`}
            style={!isRevolving ? { transform: `translate3d(${xRight}px, ${yBottom}px, 0)` } : undefined}
            onAnimationEnd={handleRoundComplete}
            onMouseEnter={() => {
              setIsHovered(true);
              if (!isRevolving) {
                setIsBowing(true);
                setTimeout(() => setIsBowing(false), 2400);
              }
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative group select-none flex flex-col items-center">
              
              {/* HUMAN WELCOME CARD (Chinese Gesture Welcome Pop-up after completing round on down right side) */}
              <AnimatePresence>
                {showWelcomeBubble && !isRevolving && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: 10 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                    className="absolute bottom-full right-0 mb-3 w-[295px] sm:w-[335px] bg-[#071326]/95 backdrop-blur-2xl border-2 border-emerald-400/50 hover:border-cyan-400/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-[0_16px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(16,185,129,0.3)] text-white z-30 pointer-events-auto"
                  >
                    {/* Header with Chinese Greeting Badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-xs shrink-0 shadow-sm">
                          🙏
                        </span>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-emerald-300 tracking-tight flex items-center gap-1">
                            <span>Mehtab AI Mentor</span>
                            <span className="text-[10px] text-cyan-300 font-normal">抱拳礼</span>
                          </span>
                          <span className="text-[10px] text-slate-400">Respectful Chinese Welcome</span>
                        </div>
                      </div>

                      {/* Close speech bubble button */}
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setShowWelcomeBubble(false); 
                        }}
                        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
                        title="Dismiss greeting card"
                        aria-label="Dismiss greeting card"
                      >
                        <X size={15} />
                      </button>
                    </div>

                    {/* Welcoming Greeting Text */}
                    <div className="mt-2.5 text-xs sm:text-[13px] text-slate-100 leading-relaxed font-normal">
                      <span className="font-semibold text-emerald-300">Salam & Huan Ying (欢迎)!</span> I have completed my screen perimeter round and placed myself here to mentor your STS journey with human warmth.
                    </div>

                    {/* Quick Interactive Actions */}
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2">
                      <button
                        onClick={() => { setInteractionMode('voice'); setIsOpen(true); setShowWelcomeBubble(false); }}
                        className="flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/30 active:scale-95 transition-all"
                      >
                        <Mic size={14} className="text-slate-950 animate-pulse shrink-0" />
                        <span>Talk Live</span>
                      </button>

                      <button
                        onClick={() => { setInteractionMode('typing'); setIsOpen(true); setShowWelcomeBubble(false); }}
                        className="flex-1 px-3 py-2 rounded-xl bg-[#0b172a] hover:bg-[#11233f] text-cyan-300 border border-cyan-400/40 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <MessageSquare size={14} className="shrink-0" />
                        <span>Type Chat</span>
                      </button>

                      {/* Re-Orbit / Round Button */}
                      <button
                        onClick={handleStartNewRound}
                        title="Start another perimeter round"
                        className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 active:scale-90 transition-all shrink-0"
                        aria-label="Take another round"
                      >
                        <Orbit size={15} className="text-cyan-400" />
                      </button>
                    </div>

                    {/* Arrow pointing down to the mentor */}
                    <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#071326] border-r-2 border-b-2 border-emerald-400/50 rotate-45 transform pointer-events-none" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* HUMAN-LIKE CHARACTER (Animated with breathing & Chinese greeting bow moments) */}
              <button
                id="mehtab-ai-launcher-btn"
                onClick={() => {
                  if (showWelcomeBubble) {
                    setIsOpen(true);
                  } else {
                    setShowWelcomeBubble(true);
                    setIsBowing(true);
                    setTimeout(() => setIsBowing(false), 2400);
                  }
                }}
                className={`relative group flex items-center justify-center p-1 focus:outline-none transition-transform ${
                  isBowing ? 'mehtab-chinese-greeting-bow' : 'mehtab-human-breathing'
                }`}
                aria-label="Human-like AI Mentor with Chinese Welcome Gesture"
                title="Mehtab AI - Click to interact"
              >
                {/* Orbital Aura Ring while in patrol round */}
                {isRevolving && (
                  <div className="absolute -inset-2.5 rounded-full border border-dashed border-cyan-400/50 animate-spin [animation-duration:10s] pointer-events-none" />
                )}

                {/* Soft Warm Presence Halo Glow */}
                <div className={`absolute -inset-2 rounded-full blur-md pointer-events-none transition-all duration-500 ${
                  isRevolving 
                    ? 'bg-cyan-500/30' 
                    : 'bg-emerald-500/30 group-hover:bg-cyan-500/40'
                }`} />

                {/* Human-like 3D Avatar with Respectful Chinese Greeting Posture */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#051121] p-1 border-2 border-emerald-400 ring-4 ring-emerald-500/25 shadow-[0_0_25px_rgba(16,185,129,0.7),inset_0_0_12px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.95)] group-hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center">
                  <img 
                    src={avatarSrc} 
                    alt="Human-like AI Mentor with Chinese Welcome Gesture" 
                    onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                    className="w-full h-full object-cover object-center rounded-full scale-105 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Specular Warm Vitality Glow Overlay */}
                  <div className="absolute inset-0 bg-radial from-emerald-400/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Online Green Indicator */}
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#10b981] border-2 border-slate-950 rounded-full shadow-lg" />
                </div>

                {/* Status Indicator Pill */}
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-slate-950/95 text-emerald-300 border border-emerald-400/60 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap backdrop-blur-md">
                  {isRevolving ? (
                    <>
                      <Orbit size={10} className="text-cyan-400 animate-spin [animation-duration:3s]" />
                      <span>Round in Progress...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs">🙏</span>
                      <span>Placed & Ready</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main AI Agent Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mehtab-ai-chat-window"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed z-50 bg-slate-950/98 text-slate-100 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isMaximized 
                ? 'inset-3 sm:inset-6 rounded-3xl' 
                : 'bottom-20 sm:bottom-24 right-3 sm:right-6 w-[95vw] sm:w-[460px] h-[640px] max-h-[85vh] rounded-3xl'
            }`}
          >
            {/* Window Header */}
            <div className="bg-gradient-to-r from-slate-950 via-[#0a1b2d] to-cyan-950 text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-cyan-500/20 shrink-0">
              <div className="flex items-center gap-3">
                {/* Circular Avatar with Glowing Cyan Ring */}
                <div className="relative w-11 h-11 rounded-full border-2 border-cyan-400 p-0.5 bg-slate-900 shrink-0 shadow-lg shadow-cyan-500/30">
                  <img 
                    src={avatarSrc} 
                    alt="Mehtab AI Avatar" 
                    onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base leading-tight tracking-wide text-white">Mehtab AI</h3>
                    <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider border border-cyan-400/40">
                      Voice & Chat
                    </span>
                  </div>
                  <p className="text-xs text-cyan-200/80 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Direct AI Interaction • Online</span>
                  </p>
                </div>
              </div>

              {/* Header Action Controls */}
              <div className="flex items-center gap-1 text-cyan-200">
                {/* Toggle Revolving Orbit Mode */}
                <button
                  onClick={() => setIsRevolving(prev => !prev)}
                  title={isRevolving ? 'Orbiting sides of screen (click to dock to corner)' : 'Docked in corner (click to revolve around screen sides)'}
                  className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold ${
                    isRevolving ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/40' : 'hover:bg-white/10 text-slate-400'
                  }`}
                  aria-label="Toggle Screen Revolving Mode"
                >
                  <Orbit size={16} className={isRevolving ? 'text-cyan-400 animate-spin [animation-duration:6s]' : 'text-slate-400'} />
                  <span className="hidden sm:inline">{isRevolving ? 'Orbiting' : 'Docked'}</span>
                </button>

                <button
                  onClick={() => setAudioEnabled(prev => !prev)}
                  title={audioEnabled ? 'Mute AI Voice' : 'Enable AI Voice Readout'}
                  className={`p-1.5 rounded-lg transition-colors ${audioEnabled ? 'bg-cyan-500/30 text-cyan-300' : 'hover:bg-white/10 text-slate-400'}`}
                  aria-label="Toggle Voice Audio"
                >
                  {audioEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
                </button>
                <button
                  onClick={clearChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-300"
                  aria-label="Clear chat"
                >
                  <Trash2 size={17} />
                </button>
                <button
                  onClick={() => setIsMaximized(prev => !prev)}
                  title={isMaximized ? 'Restore window size' : 'Expand window'}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors hidden sm:block text-slate-300"
                  aria-label="Maximize window"
                >
                  {isMaximized ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close agent"
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-300"
                  aria-label="Close"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* Mode Switcher Bar: Voice Agent vs Typing Mode */}
            <div className="bg-[#0c1626] border-b border-slate-800 px-3 py-2 flex items-center justify-between shrink-0">
              <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => {
                    setInteractionMode('voice');
                    stopSpeaking();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    interactionMode === 'voice'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Mic size={14} className={interactionMode === 'voice' ? 'text-white' : 'text-slate-400'} />
                  <span>🎙️ Voice Mode</span>
                </button>
                <button
                  onClick={() => {
                    setInteractionMode('typing');
                    stopListening();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    interactionMode === 'typing'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <MessageSquare size={14} className={interactionMode === 'typing' ? 'text-white' : 'text-slate-400'} />
                  <span>💬 Typing Mode</span>
                </button>
              </div>

              {/* Language Selector Pill */}
              <div className="flex items-center gap-1 text-[11px]">
                <Languages size={12} className="text-emerald-400" />
                <select
                  value={voiceLanguage}
                  onChange={(e) => setVoiceLanguage(e.target.value as 'en' | 'ur' | 'sd')}
                  className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-emerald-500"
                  aria-label="Select Voice Language"
                >
                  <option value="en">English</option>
                  <option value="ur">اردو (Urdu)</option>
                  <option value="sd">سنڌي (Sindhi)</option>
                </select>
              </div>
            </div>

            {/* Error Banner if Microphone is denied */}
            {voiceError && (
              <div className="bg-amber-950/80 border-b border-amber-600/40 px-3 py-2 text-xs text-amber-200 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <AlertCircle size={14} className="text-amber-400 shrink-0" />
                  <span>{voiceError}</span>
                </div>
                <button 
                  onClick={() => setVoiceError(null)}
                  className="p-1 hover:text-white"
                >
                  <X size={12} />
                </button>
              </div>
            )}

            {/* MAIN CONTENT: MODE 1: LIVE VOICE AGENT SCREEN */}
            {interactionMode === 'voice' && (
              <div className="flex-1 flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto bg-gradient-to-b from-[#080e1a] via-[#0b1528] to-[#060c18] relative">
                
                {/* Status Indicator */}
                <div className="text-center pt-1 pb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-emerald-300 font-medium shadow-inner">
                    {isListening ? (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                        <span className="text-red-300 font-bold">Listening to you... Speak now</span>
                      </>
                    ) : isSpeaking ? (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-300 font-bold">Mehtab AI is Speaking</span>
                      </>
                    ) : isLoading ? (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-spin" />
                        <span className="text-cyan-300 font-medium">Thinking and preparing response...</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Ready • Tap the microphone to talk</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Central Glowing Avatar Ring (Exact Match to User Image) */}
                <div className="relative my-auto flex flex-col items-center justify-center">
                  {/* Concentric Pulse Rings when Speaking or Listening */}
                  {isSpeaking && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.1, 0.7] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -inset-5 rounded-full border-2 border-cyan-400/70 pointer-events-none"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.05, 0.4] }}
                        transition={{ duration: 1.8, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -inset-10 rounded-full border border-teal-400/40 pointer-events-none"
                      />
                    </>
                  )}

                  {isListening && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -inset-5 rounded-full border-2 border-cyan-400/80 pointer-events-none"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.05, 0.5] }}
                        transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -inset-10 rounded-full border border-cyan-400/40 pointer-events-none"
                      />
                    </>
                  )}

                  {/* Circular Avatar Frame */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[5px] border-cyan-400 ring-4 ring-cyan-500/40 p-1 bg-[#0a1122] shadow-2xl shadow-cyan-500/40 overflow-hidden flex items-center justify-center">
                    <img 
                      src={avatarSrc} 
                      alt="Mehtab AI Live Voice Avatar" 
                      onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                      className="w-full h-full object-cover object-top rounded-full scale-105 transition-transform duration-300"
                    />

                    {/* Specular Cyan Eye Glow Overlay */}
                    <div className="absolute inset-0 bg-radial from-cyan-400/20 via-transparent to-transparent opacity-60 pointer-events-none animate-pulse" />
                    
                    {/* Glowing Green Online Status Badge (Exact match to image.png) */}
                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-[#10b981] border-2 border-[#0a1122] rounded-full shadow-lg" />
                  </div>

                  {/* Live Soundwave Visualizer Equalizer */}
                  <div className="flex items-center justify-center gap-1.5 h-8 my-3">
                    {[0.5, 0.9, 0.4, 1.0, 0.6, 0.8, 0.3].map((heightScale, i) => (
                      <motion.span
                        key={i}
                        animate={isSpeaking || isListening ? {
                          scaleY: [0.25, heightScale * 1.5, 0.35, heightScale * 1.2, 0.25],
                        } : { scaleY: 0.2 }}
                        transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.07, ease: 'easeInOut' }}
                        className={`w-1.5 rounded-full origin-bottom ${
                          isListening ? 'bg-cyan-400 shadow-sm shadow-cyan-400' : isSpeaking ? 'bg-emerald-400 shadow-sm shadow-emerald-400' : 'bg-slate-700'
                        }`}
                        style={{ height: '22px' }}
                      />
                    ))}
                  </div>

                  {/* Live Subtitle Transcript Card */}
                  <div className="w-full max-w-sm px-2 text-center space-y-2">
                    {/* What user is saying or just said */}
                    {isListening && interimTranscript && (
                      <div className="text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-400/40 px-3 py-2 rounded-xl animate-pulse">
                        🗣️ "{interimTranscript}"
                      </div>
                    )}

                    {!isListening && lastSpokenQuery && (
                      <div className="text-xs text-emerald-300/90 bg-slate-900/80 border border-emerald-500/20 px-3 py-1.5 rounded-lg max-w-xs mx-auto truncate">
                        <span className="font-semibold text-emerald-400">You asked:</span> "{lastSpokenQuery}"
                      </div>
                    )}

                    {/* Agent Spoken Response */}
                    {lastAgentReply && !isListening && (
                      <div className="text-xs sm:text-sm text-slate-200 bg-slate-900/90 border border-slate-800 p-3 rounded-xl shadow-inner max-h-28 overflow-y-auto leading-relaxed text-left">
                        <p className="line-clamp-4">{lastAgentReply}</p>
                      </div>
                    )}

                    {/* Quick Action Navigation Button if matched */}
                    {lastAction && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => executeNavigation(lastAction)}
                        className="w-full py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 border border-emerald-400/40"
                      >
                        <span>{lastAction.label}</span>
                        <ArrowRight size={13} />
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Bottom Voice Controls */}
                <div className="w-full max-w-md pt-2 space-y-3">
                  {/* Sample Voice Prompts */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                    {VOICE_SAMPLE_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt, 'voice')}
                        className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 transition-all font-medium shrink-0"
                      >
                        🗣️ {prompt}
                      </button>
                    ))}
                  </div>

                  {/* Main Microphone Interaction Buttons */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Interrupt / Stop Speaking Button (when bot is talking) */}
                    {isSpeaking ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={stopSpeaking}
                        className="px-5 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/30"
                      >
                        <Square size={14} fill="currentColor" />
                        <span>Stop Voice</span>
                      </motion.button>
                    ) : null}

                    {/* Primary Big Mic Button */}
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={toggleListening}
                      disabled={isLoading}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center text-white shadow-2xl transition-all duration-300 ${
                        isListening
                          ? 'bg-gradient-to-tr from-red-600 to-rose-500 ring-4 ring-red-400 animate-pulse shadow-red-500/50'
                          : 'bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 ring-4 ring-emerald-400/50 hover:ring-emerald-300 shadow-emerald-600/40'
                      }`}
                      aria-label={isListening ? 'Stop recording voice' : 'Start speaking with AI'}
                    >
                      {isListening ? (
                        <Square size={26} fill="currentColor" />
                      ) : (
                        <Mic size={28} className="text-white" />
                      )}
                    </motion.button>

                    {/* Speed Toggle */}
                    <button
                      onClick={() => setVoiceSpeed(prev => prev === 1.0 ? 1.15 : prev === 1.15 ? 0.85 : 1.0)}
                      className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-emerald-400 flex items-center gap-1"
                      title="Voice Speech Speed"
                    >
                      <Sliders size={13} />
                      <span>{voiceSpeed}x</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pb-1">
                    {isListening ? 'Listening to your microphone... Tap to finish & send' : 'Tap the microphone to speak, or switch to typing anytime'}
                  </p>
                </div>
              </div>
            )}

            {/* MAIN CONTENT: MODE 2: TYPING / CHAT SCREEN */}
            {interactionMode === 'typing' && (
              <div className="flex-1 flex flex-col overflow-hidden bg-slate-950">
                {/* Quick Topic Chips Bar */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-3 py-2 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
                  <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap pl-1 flex items-center gap-1">
                    <Compass size={12} className="text-emerald-400" />
                    <span>Quick:</span>
                  </span>
                  {QUICK_PROMPTS.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.query, 'typing')}
                      className="text-xs whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 transition-all text-slate-300 shrink-0 font-medium"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Message Stream Area */}
                <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-4 text-sm leading-relaxed">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-400 p-0.5 bg-slate-900 mt-1">
                          <img 
                            src={avatarSrc} 
                            alt="AI" 
                            onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                            className="w-full h-full object-cover object-top rounded-full"
                          />
                        </div>
                      )}

                      <div className={`max-w-[85%] space-y-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        {/* Chat Bubble */}
                        <div
                          className={`p-3.5 rounded-2xl shadow-sm ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-none'
                              : 'bg-slate-900 text-slate-100 border border-slate-800 rounded-tl-none'
                          }`}
                        >
                          <div className="whitespace-pre-wrap break-words">
                            {msg.content.split('\n').map((line, lIdx) => {
                              // Format bold text
                              const formattedLine = line.split(/(\*\*.*?\*\*)/).map((seg, sIdx) => {
                                if (seg.startsWith('**') && seg.endsWith('**')) {
                                  return <strong key={sIdx} className="font-bold text-emerald-400">{seg.slice(2, -2)}</strong>;
                                }
                                return seg;
                              });
                              return <p key={lIdx} className={lIdx > 0 ? 'mt-1.5' : ''}>{formattedLine}</p>;
                            })}
                          </div>

                          {/* Navigation Action Card */}
                          {msg.action && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 p-3 bg-slate-950 rounded-xl border border-emerald-500/40 shadow-md flex flex-col gap-2"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                  {msg.action.tab === 'past-papers' && <FileText size={16} />}
                                  {msg.action.tab === 'learning-lab' && <Brain size={16} />}
                                  {msg.action.tab === 'mistakes' && <AlertCircle size={16} />}
                                  {msg.action.tab === 'jobs' && <Briefcase size={16} />}
                                  {msg.action.tab === 'quiz' && <Target size={16} />}
                                  {!['past-papers', 'learning-lab', 'mistakes', 'jobs', 'quiz'].includes(msg.action.tab) && <Compass size={16} />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="font-bold text-xs text-white truncate">
                                    {msg.action.label}
                                  </p>
                                  {msg.action.description && (
                                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
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

                        {/* Bubble footer with voice readout option */}
                        <div className="flex items-center justify-between text-[10px] text-slate-500 px-1">
                          {msg.role === 'assistant' ? (
                            <button
                              onClick={() => {
                                if (speakingMessageId === msg.id && isSpeaking) {
                                  stopSpeaking();
                                } else {
                                  speakText(msg.content, msg.id);
                                }
                              }}
                              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
                              title="Listen to this message aloud"
                            >
                              {speakingMessageId === msg.id && isSpeaking ? (
                                <>
                                  <Square size={11} fill="currentColor" />
                                  <span>Stop Voice</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 size={12} />
                                  <span>Listen Aloud</span>
                                </>
                              )}
                            </button>
                          ) : (
                            <span />
                          )}
                          <span>{msg.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-emerald-400 p-0.5 bg-slate-900">
                        <img 
                          src={avatarSrc} 
                          alt="AI" 
                          onError={() => setAvatarSrc(AVATAR_FALLBACK)}
                          className="w-full h-full object-cover object-top rounded-full"
                        />
                      </div>
                      <div className="bg-slate-900 p-3 rounded-2xl rounded-tl-none border border-slate-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                        <span className="text-xs text-slate-400 ml-1">Mehtab AI is thinking…</span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Form Bar with Microphone Dictation Button */}
                <div className="p-3 bg-slate-900 border-t border-slate-800 shrink-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(undefined, 'typing');
                    }}
                    className="flex items-center gap-2"
                  >
                    {/* Direct Voice Dictation Button in Input Bar */}
                    <button
                      type="button"
                      onClick={toggleListening}
                      className={`p-2.5 rounded-xl border transition-all shrink-0 ${
                        isListening 
                          ? 'bg-red-600 text-white border-red-500 animate-pulse' 
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-emerald-400 hover:border-emerald-500'
                      }`}
                      title={isListening ? 'Stop Listening' : 'Dictate with Microphone'}
                      aria-label="Voice Dictate"
                    >
                      <Mic size={18} />
                    </button>

                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isListening ? 'Listening to your voice...' : 'Type or ask anything...'}
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                    <span>Ask by voice or typing • English, اردو, سنڌي</span>
                    <button 
                      onClick={() => setInteractionMode('voice')}
                      className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      <Mic size={11} />
                      <span>Switch to Voice Screen</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
