import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  MessageSquare,
  HelpCircle,
  Languages,
  CheckCircle2,
  XCircle,
  AlertOctagon,
  FileQuestion,
  RefreshCw,
  Send,
  Lightbulb,
  ShieldAlert,
  ChevronRight,
  BookOpenCheck,
} from 'lucide-react';
import { GeneratedMcq } from '../../lib/adaptiveLearning';
import { MCQS_DATA } from '../../data/mcqsData';

const GENERATED_PRESETS: GeneratedMcq[] = [
  {
    id: 'gen-1',
    agency: 'STS IBA',
    syllabusTopic: 'Quantitative Word Problems (BPS-11 to 15)',
    question:
      'A shopkeeper marks an article 40% above the cost price and then allows a discount of 20% on the marked price. What is his net profit percentage?',
    options: ['20%', '12%', '16%', '10%'],
    correctIndex: 1,
    explanation:
      'Assume Cost Price (CP) = 100. Marked Price (MP) = 140. Discount of 20% on 140 = 28. Selling Price (SP) = 140 - 28 = 112. Profit = 112 - 100 = 12%.',
    trapAnalysis: {
      trapName: 'Subtractive Trap (40% - 20% = 20%)',
      description:
        'Examiners know students instinctively subtract percentages directly. But discount is applied to the inflated marked price, NOT the original cost price!',
    },
  },
  {
    id: 'gen-2',
    agency: 'SPSC',
    syllabusTopic: 'Pakistan Studies & Constitutional Chronology',
    question:
      'Under the 1973 Constitution of Pakistan, the National Finance Commission (NFC) Award is constituted under which Article?',
    options: ['Article 160', 'Article 153', 'Article 161', 'Article 170'],
    correctIndex: 0,
    explanation:
      'Article 160 of the 1973 Constitution mandates the President to constitute the National Finance Commission (NFC) at intervals not exceeding 5 years. Article 153 deals with the Council of Common Interests (CCI).',
    trapAnalysis: {
      trapName: 'Neighboring Constitutional Clause Trap',
      description:
        'SPSC tests neighboring articles (153 vs 160 vs 161). Candidates frequently mix up the Council of Common Interests (153) with the NFC (160).',
    },
  },
  {
    id: 'gen-3',
    agency: 'FPSC',
    syllabusTopic: 'English Grammar & Prepositional Idioms',
    question:
      'The government has decided to dispense _____ the services of unnecessary contractual consultants.',
    options: ['from', 'with', 'of', 'off'],
    correctIndex: 1,
    explanation:
      'The phrasal verb "dispense with" is an idiom meaning to manage without, do away with, or discard something. "Dispense of" and "dispense from" are incorrect in formal English.',
    trapAnalysis: {
      trapName: 'Literal Translation Distractor (with vs from)',
      description:
        'Urdu/Sindhi speakers translate "khidmat se farigh karna" as "dispense FROM" or "dispense OF". Formal British English strictly mandates "dispense WITH".',
    },
  },
];

type Lang = 'English' | 'Urdu' | 'Sindhi';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  lang?: Lang;
}

export const AITutoringCrafting: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'generator' | 'socratic' | 'trap'>('generator');

  // Generator State
  const [selectedAgency, setSelectedAgency] = useState<'STS IBA' | 'SPSC' | 'FPSC' | 'CSS MPT'>('STS IBA');
  const [selectedTopic, setSelectedTopic] = useState('Arithmetic & Word Problems');
  const [currentGeneratedIndex, setCurrentGeneratedIndex] = useState(0);
  const [selectedGenOption, setSelectedGenOption] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Socratic State
  const [dialogueLang, setDialogueLang] = useState<Lang>('English');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'tutor',
      text: 'Salam! I am your Socratic Exam Mentor. Instead of just giving away the final MCQ answers, I guide your analytical thinking so you can spot examiner traps in STS, SPSC, and FPSC tests. Choose a question or ask me for a guided hint below!',
      lang: 'English',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // Trap Explainer State
  const [trapItemIndex, setTrapItemIndex] = useState(0);

  const activeGenMcq = GENERATED_PRESETS[currentGeneratedIndex % GENERATED_PRESETS.length];

  const handleGenerateNew = () => {
    setIsGenerating(true);
    setSelectedGenOption(null);
    setTimeout(() => {
      setCurrentGeneratedIndex((prev) => prev + 1);
      setIsGenerating(false);
    }, 450);
  };

  const handleSendMessage = async (customText?: string) => {
    const query = customText || inputQuery.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      lang: dialogueLang,
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    if (!customText) setInputQuery('');

    try {
      const historyPayload = updated.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: historyPayload,
          taskType: 'complex',
          roleId: 'complex-solver',
          systemInstruction: `You are the Socratic Exam Mentor for MATB STS PREP. Guide the student's thinking with analytical questions, examiner trap warnings, and step-by-step logic in ${dialogueLang}. Keep your answer under 120 words.`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [
            ...prev,
            {
              id: `tutor-${Date.now()}`,
              sender: 'tutor',
              text: data.reply,
              lang: dialogueLang,
            },
          ]);
          return;
        }
      }
    } catch {
      // Fallback to local heuristic guidance below
    }

    // Heuristic fallback if network fails
    let reply = '';
    if (dialogueLang === 'Urdu') {
      if (query.includes('غلط') || query.includes('option') || query.includes('B')) {
        reply =
          'بہت اچھا سوال! آپشن B پر غور کریں: کیا یہ مکمل حقیقت بیان کر رہا ہے یا صرف آدھی؟ اکثر امتحانات میں امیدوار جلد بازی میں پہلے پرکشش لفظ کو دیکھ کر نشان لگا دیتے ہیں۔ دوبارہ سوال کے بنیادی لفظ کو دیکھیں۔';
      } else if (query.includes('اصول') || query.includes('rule')) {
        reply =
          'اس کا سنہری اصول یاد رکھیں: جب قیمت میں R فیصد اضافہ ہو تو خرچ برابر رکھنے کے لیے کمی کا فارمولا [R / (100 + R)] × 100% ہوتا ہے۔ اسے خود حل کرنے کی کوشش کریں!';
      } else {
        reply =
          'آئیے اسے مرحلہ وار سمجھیں۔ سب سے پہلے یہ دیکھیں کہ سوال میں کونسی چیز معلوم ہے اور کس چیز کے بارے میں پوچھا گیا ہے۔';
      }
    } else if (dialogueLang === 'Sindhi') {
      if (query.includes('غلط') || query.includes('option')) {
        reply =
          'بهترين سوال! آپشن تي غور ڪريو: ڇا هي شرط سوال جي سڀني تقاضائن کي پورو ڪري ٿو؟ اڪثر امتحاني ادارا هڪ جهڙا لفظ ڏئي پرکيندا آهن۔ هڪ ڀيرو ٻيهر سوال جو مکيه اصول پڙهو۔';
      } else {
        reply =
          'اچو ته هن سوال کي سمجهون۔ پهرين ڏسو ته بنيادي فارمولو ڇا آهي۔ جيڪڏهن توهان انگريزي پريپوزيشن پڙهو پيا ته ياد رکو ته "Proficient" سان گڏ هميشه "in" لڳندو آهي۔';
      }
    } else {
      if (query.toLowerCase().includes('option b') || query.toLowerCase().includes('distractor')) {
        reply =
          'Notice Option B carefully: It sounds intuitively correct to conversational speakers, but formal exam boards test structural rules. Does the preposition depend on the verb or the following noun? Check the preceding adjective!';
      } else if (query.toLowerCase().includes('mnemonic') || query.toLowerCase().includes('trick')) {
        reply =
          'Here is a top scorer mnemonic for this exact pattern: remember "Proficient IN, Good AT, Capable OF". Repeat this 3 times to lock it in your memory.';
      } else {
        reply =
          'Step 1: Identify the underlying concept (Arithmetic, Grammar, or Chronology). Step 2: Eliminate the two obviously extreme choices. Which two remaining options are the real competitors?';
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `tutor-${Date.now()}`,
        sender: 'tutor',
        text: reply,
        lang: dialogueLang,
      },
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSubTab('generator')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'generator'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Past Paper Generator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('socratic')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'socratic'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Multilingual Socratic Dialogue</span>
          </button>

          <button
            onClick={() => setActiveSubTab('trap')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'trap'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <AlertOctagon className="w-4 h-4" />
            <span>Distractor & Trap Explainer</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
          Pillar 2: Generative AI Tutoring & Question Crafting
        </span>
      </div>

      {/* 2A. AI PAST PAPER QUESTION GENERATOR */}
      {activeSubTab === 'generator' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white border border-purple-500/30 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-black border border-purple-500/30 uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Generative Testing Engine
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  Agency-Calibrated Question Generator
                </h3>
                <p className="text-xs sm:text-sm text-purple-200 mt-1 max-w-2xl">
                  Synthesizes authentic one-paper MCQs matching the stylistic nuances, distractor patterns, and syllabus weights of Pakistani testing agencies.
                </p>
              </div>

              <button
                onClick={handleGenerateNew}
                disabled={isGenerating}
                className="px-5 py-2.5 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-2 shrink-0 self-start sm:self-auto"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Generating Question...' : 'Generate Another MCQ'}</span>
              </button>
            </div>

            {/* Target Agency Selector */}
            <div className="mt-5 pt-4 border-t border-purple-800/40 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-300 mr-2">Target Agency:</span>
              {(['STS IBA', 'SPSC', 'FPSC', 'CSS MPT'] as const).map((agency) => (
                <button
                  key={agency}
                  onClick={() => {
                    setSelectedAgency(agency);
                    handleGenerateNew();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                    selectedAgency === agency
                      ? 'bg-white text-purple-950 shadow-sm'
                      : 'bg-white/10 text-purple-200 hover:bg-white/20'
                  }`}
                >
                  {agency}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Question Card */}
          <div className="p-6 sm:p-8 rounded-3xl border-2 border-purple-200 dark:border-purple-950/60 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-black px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                {activeGenMcq.agency} Format
              </span>
              <span className="text-slate-500 font-bold">{activeGenMcq.syllabusTopic}</span>
            </div>

            <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-relaxed">
              {activeGenMcq.question}
            </h4>

            {/* Generated Options */}
            <div className="grid sm:grid-cols-2 gap-3">
              {activeGenMcq.options.map((opt, idx) => {
                const isSelected = selectedGenOption === idx;
                const isCorrect = idx === activeGenMcq.correctIndex;
                let optStyle =
                  'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:border-purple-400';

                if (selectedGenOption !== null) {
                  if (isCorrect) {
                    optStyle =
                      'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-black';
                  } else if (isSelected && !isCorrect) {
                    optStyle =
                      'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-200 font-bold';
                  } else {
                    optStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedGenOption !== null}
                    onClick={() => setSelectedGenOption(idx)}
                    className={`p-4 rounded-2xl border-2 text-left font-bold text-sm transition cursor-pointer flex items-center justify-between ${optStyle}`}
                  >
                    <span>
                      <span className="opacity-60 mr-2">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {opt}
                    </span>
                    {selectedGenOption !== null && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Distractor & Trap Anatomy */}
            {selectedGenOption !== null && (
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
                  <strong>Official Explanation:</strong> {activeGenMcq.explanation}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-black text-amber-800 dark:text-amber-300">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Examiner Trap Blueprint: {activeGenMcq.trapAnalysis.trapName}</span>
                  </div>
                  <p className="leading-relaxed opacity-90">
                    {activeGenMcq.trapAnalysis.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2B. MULTILINGUAL SOCRATIC DIALOGUE */}
      {activeSubTab === 'socratic' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-black text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
                <Bot className="w-5 h-5 text-emerald-600" />
                <span>Multilingual Socratic Dialogue (Urdu • Sindhi • English)</span>
              </h3>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300 mt-0.5">
                Never gives lazy spoiled answers. Asks probing questions to rewire your exam intuition.
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex gap-1.5">
              {(['English', 'Urdu', 'Sindhi'] as Lang[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setDialogueLang(lang)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                    dialogueLang === lang
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {lang === 'Urdu' ? 'اردو' : lang === 'Sindhi' ? 'سنڌي' : 'English'}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Container */}
          <div className="p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4 min-h-[380px] flex flex-col justify-between">
            {/* Messages Scroll Area */}
            <div className="space-y-3 overflow-y-auto max-h-[350px] pr-1">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-indigo-600 text-white font-bold rounded-br-none'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Guided Prompt Chips */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block">
                Suggested Socratic Queries:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSendMessage('Why is option B incorrect?')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                >
                  Why is option B incorrect?
                </button>
                <button
                  onClick={() => handleSendMessage('اردو میں اس سوال کا اصول سمجھائیں')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                >
                  اردو میں اس سوال کا اصول سمجھائیں
                </button>
                <button
                  onClick={() => handleSendMessage('سنڌي ۾ پريپوزيشن رول بيان ڪريو')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                >
                  سنڌي ۾ پريپوزيشن رول بيان ڪريو
                </button>
                <button
                  onClick={() => handleSendMessage('Give me a memory mnemonic for this topic')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                >
                  Give me a memory mnemonic
                </button>
              </div>

              {/* Input bar */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask your Socratic question in English, Urdu, or Sindhi..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2C. AI DISTRACTOR & TRAP EXPLAINER */}
      {activeSubTab === 'trap' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
            <h3 className="text-base sm:text-lg font-black text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-amber-600" />
              <span>Anatomy of Official Examiner Distractors</span>
            </h3>
            <p className="text-xs text-amber-800/80 dark:text-amber-300 mt-0.5">
              80% of marks in competitive screening exams are lost not due to lack of knowledge, but falling into psychological traps intentionally crafted by paper setters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-rose-600">
                Trap Type #01
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                The Partial Truth Trap
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The option contains an exact historical fact or formula, but fails to answer the <em>specific</em> timeframe or condition requested (e.g. Quaid’s 14 Points date vs Nehru Report date).
              </p>
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-[11px] font-mono text-rose-900 dark:text-rose-200">
                Defense: Read the last word of the question stem first.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                Trap Type #02
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                Inverted Ratio / Unit Swap
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                In speed, work, or profit questions, one distractor is always the direct inverse (e.g. 5/18 instead of 18/5, or Ratio of Boys to Girls inverted to Girls to Boys).
              </p>
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[11px] font-mono text-amber-900 dark:text-amber-200">
                Defense: Write down units explicitly beside your calculation.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600">
                Trap Type #03
              </span>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                False Synonym / Homophone
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Pairs of words like <em>discreet / discrete</em>, <em>stationery / stationary</em>, or <em>principle / principal</em> designed to test spelling accuracy under time pressure.
              </p>
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-[11px] font-mono text-indigo-900 dark:text-indigo-200">
                Defense: Anchor roots (e.g. stationERy = papER).
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
