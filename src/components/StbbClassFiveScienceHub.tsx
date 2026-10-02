import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  HelpCircle, 
  RotateCcw, 
  ChevronRight, 
  ChevronDown, 
  Layers, 
  Clock, 
  Compass, 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  X, 
  Dna, 
  FileText, 
  Award, 
  Eye, 
  EyeOff, 
  Bookmark,
  Check,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  STBB_TOPICS, 
  STBB_MCQS_DATA, 
  STBB_SUMMARY_CONCEPTS,
  StbbTopic,
  StbbMcq
} from '../data/stbbClassFiveScienceData';
import { useApp } from '../context/AppContext';

export const StbbClassFiveScienceHub: React.FC<{
  onClose?: () => void;
  initialTab?: 'topics' | 'key-tool' | 'mcqs' | 'summary';
}> = ({ onClose, initialTab = 'topics' }) => {
  const { toggleBookmark, isBookmarked, addMistake, setTab } = useApp();

  const [activeMainTab, setActiveMainTab] = useState<'topics' | 'key-tool' | 'mcqs' | 'summary'>(initialTab);
  
  // Topic Reader State
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const activeTopic = useMemo(() => {
    return STBB_TOPICS.find(t => t.id === selectedTopicId) || STBB_TOPICS[0];
  }, [selectedTopicId]);

  // Riddle Reveals
  const [revealedRiddles, setRevealedRiddles] = useState<Record<number, boolean>>({});

  // Unscramble Game State
  const [unscrambleInputs, setUnscrambleInputs] = useState<Record<string, string>>({});
  const [unscrambleChecked, setUnscrambleChecked] = useState<Record<string, boolean>>({});

  // MCQ Practice State
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [userSelections, setUserSelections] = useState<Record<string, number>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(false);

  // Timed Test Mode State
  const [isTestMode, setIsTestMode] = useState<boolean>(false);
  const [testTimeLeft, setTestTimeLeft] = useState<number>(40 * 60); // 40 minutes
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [currentTestIndex, setCurrentTestIndex] = useState<number>(0);

  // Dichotomous Key Interactive Tool State
  const [keyStep, setKeyStep] = useState<number>(1);
  const [keyHistory, setKeyHistory] = useState<{ step: number; question: string; answer: string }[]>([]);
  const [keyResult, setKeyResult] = useState<string | null>(null);

  // Filtered MCQs
  const filteredMcqs = useMemo(() => {
    if (selectedSection === 'All') return STBB_MCQS_DATA;
    return STBB_MCQS_DATA.filter(m => m.section === selectedSection);
  }, [selectedSection]);

  // Score calculation
  const scoreStats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    filteredMcqs.forEach(m => {
      if (userSelections[m.id] !== undefined) {
        answered++;
        if (userSelections[m.id] === m.correctIndex) {
          correct++;
        }
      }
    });
    return {
      answered,
      correct,
      total: filteredMcqs.length,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0
    };
  }, [filteredMcqs, userSelections]);

  const handleSelectOption = (mcqId: string, optIndex: number, correctIndex: number) => {
    if (testSubmitted) return;
    setUserSelections(prev => ({ ...prev, [mcqId]: optIndex }));
    setRevealedExplanations(prev => ({ ...prev, [mcqId]: true }));

    if (optIndex !== correctIndex) {
      addMistake(mcqId);
    } else {
      if (!isTestMode && Math.random() > 0.75) {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      }
    }
  };

  const handleStartTest = () => {
    setIsTestMode(true);
    setTestSubmitted(false);
    setUserSelections({});
    setRevealedExplanations({});
    setTestTimeLeft(40 * 60);
    setCurrentTestIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitTest = () => {
    setTestSubmitted(true);
    confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitTest = () => {
    setIsTestMode(false);
    setTestSubmitted(false);
  };

  // Dichotomous Key Logic
  const handleKeyChoice = (choice: 'yes' | 'no') => {
    if (keyStep === 1) {
      if (choice === 'yes') {
        setKeyHistory(prev => [...prev, { step: 1, question: 'Does the animal have a backbone (spine)?', answer: 'Yes' }]);
        setKeyStep(2);
      } else {
        setKeyHistory(prev => [...prev, { step: 1, question: 'Does the animal have a backbone (spine)?', answer: 'No' }]);
        setKeyResult('INVERTEBRATE (e.g. Earthworm, Spider, Butterfly, Leech, Crab, Octopus)');
      }
    } else if (keyStep === 2) {
      if (choice === 'yes') {
        setKeyHistory(prev => [...prev, { step: 2, question: 'Does the animal have feathers and a beak?', answer: 'Yes' }]);
        setKeyResult('BIRD (e.g. Parrot, Ostrich, Penguin, Eagle)');
      } else {
        setKeyHistory(prev => [...prev, { step: 2, question: 'Does the animal have feathers and a beak?', answer: 'No' }]);
        setKeyStep(3);
      }
    } else if (keyStep === 3) {
      if (choice === 'yes') {
        setKeyHistory(prev => [...prev, { step: 3, question: 'Does the animal have fur or hair, and nurse babies with milk?', answer: 'Yes' }]);
        setKeyResult('MAMMAL (e.g. Elephant, Tiger, Cow, Blue Whale, Bat, Human)');
      } else {
        setKeyHistory(prev => [...prev, { step: 3, question: 'Does the animal have fur or hair, and nurse babies with milk?', answer: 'No' }]);
        setKeyStep(4);
      }
    } else if (keyStep === 4) {
      if (choice === 'yes') {
        setKeyHistory(prev => [...prev, { step: 4, question: 'Does the animal have moist glandular skin and lay eggs in water?', answer: 'Yes' }]);
        setKeyResult('AMPHIBIAN (e.g. Frog, Toad, Salamander, Newt)');
      } else {
        setKeyHistory(prev => [...prev, { step: 4, question: 'Does the animal have moist glandular skin and lay eggs in water?', answer: 'No' }]);
        setKeyStep(5);
      }
    } else if (keyStep === 5) {
      if (choice === 'yes') {
        setKeyHistory(prev => [...prev, { step: 5, question: 'Does the animal have dry scaly skin and lay leathery eggs on land?', answer: 'Yes' }]);
        setKeyResult('REPTILE (e.g. Snake, Lizard, Crocodile, Turtle)');
      } else {
        setKeyHistory(prev => [...prev, { step: 5, question: 'Does the animal have dry scaly skin and lay leathery eggs on land?', answer: 'No' }]);
        setKeyResult('FISH (e.g. Rohu, Shark, Goldfish, Trout — breathes through gills, swims with fins)');
      }
    }
  };

  const resetDichotomousKey = () => {
    setKeyStep(1);
    setKeyHistory([]);
    setKeyResult(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 text-slate-900 dark:text-slate-100">
      
      {/* 1. HERO HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 text-white p-6 sm:p-10 shadow-xl border border-emerald-800/40 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-wider">
              STBB Sindh Textbook Board · Class 5 Science
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Sukkur IBA STS PST &amp; JEST Syllabus Aligned
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Chapter 1: Classification of Living Things
          </h1>
          
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            The complete interactive learning curriculum: 8 comprehensive topic breakdowns, 5 Kingdoms, Vertebrates vs Invertebrates, Monocots vs Dicots, interactive Dichotomous Key simulation, and 40 verified MCQs with explanations.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>8 Topic Deep-Dives</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>40 Topic-Covering MCQs</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Dichotomous Key</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Mnemonics &amp; Riddles</span>
            </div>
          </div>
        </div>

        {/* Close Button if opened in modal */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            title="Close Module"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* 2. PRIMARY NAVIGATION TABS */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveMainTab('topics')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activeMainTab === 'topics'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>8 Interactive Topics</span>
          </button>

          <button
            onClick={() => setActiveMainTab('key-tool')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activeMainTab === 'key-tool'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Dichotomous Key Tool</span>
          </button>

          <button
            onClick={() => setActiveMainTab('mcqs')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activeMainTab === 'mcqs'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>40 MCQs Practice Bank ({filteredMcqs.length})</span>
          </button>

          <button
            onClick={() => setActiveMainTab('summary')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              activeMainTab === 'summary'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Key Concepts &amp; Tables</span>
          </button>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center pr-2">
          {!isTestMode && activeMainTab === 'mcqs' && (
            <button
              onClick={handleStartTest}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Start 40-Min Mock Exam</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. TAB 1: 8 INTERACTIVE TOPICS */}
      {activeMainTab === 'topics' && (
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 items-start">
          {/* Topics Sidebar Navigation */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-xs space-y-2 sticky top-20">
            <div className="px-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-black uppercase tracking-wider text-slate-400">
              Chapter 1 Curriculum Topics (1–8)
            </div>

            <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
              {STBB_TOPICS.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopicId(topic.id);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className={`w-full p-3 rounded-2xl text-left transition cursor-pointer flex items-center justify-between gap-2 text-xs font-bold ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-extrabold text-[11px] ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                      }`}>
                        {topic.id}
                      </span>
                      <span className="line-clamp-1">{topic.title.replace(/^Topic \d+: /, '')}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-0.5' : ''}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setActiveMainTab('mcqs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-black hover:bg-emerald-100 dark:hover:bg-emerald-900 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Practice 40 Chapter MCQs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Topic Content Reader */}
          <div className="space-y-6">
            <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              
              {/* Topic Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-black uppercase tracking-wider mb-2">
                  <span>Topic #{activeTopic.id} of 8</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                  {activeTopic.title}
                </h2>
              </div>

              {/* 1. Short Explanation (The Big Picture) */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Short Explanation (The Big Picture)</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {activeTopic.shortExplanation}
                </p>
              </div>

              {/* 2. Long Deep-Dive (Key Characteristics & Rules) */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-black font-display text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Key Characteristics &amp; Scientific Rules</span>
                </h3>

                <ul className="space-y-2 pl-2">
                  {activeTopic.keyCharacteristics.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Table if present */}
                {activeTopic.keyCharacteristics.table && (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                          {activeTopic.keyCharacteristics.table.headers.map((h, i) => (
                            <th key={i} className="p-3 whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {activeTopic.keyCharacteristics.table.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-850 transition">
                            {row.map((cell, j) => (
                              <td key={j} className="p-3 font-medium text-slate-700 dark:text-slate-300">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Deep Dive Breakdown Cards (e.g. Five Kingdoms) */}
              {activeTopic.deepDiveSections && activeTopic.deepDiveSections.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Detailed Kingdom Breakdown
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeTopic.deepDiveSections.map((sec, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
                        <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                          <span className="text-lg">{sec.emoji}</span>
                          <span>{sec.title}</span>
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 pl-4 list-disc">
                          {sec.points.map((p, pIdx) => (
                            <li key={pIdx}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Real-World Examples & Fun Facts */}
              {activeTopic.realWorldExamples.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-base sm:text-lg font-black font-display text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-xl">🌍</span>
                    <span>Real-World Examples &amp; Fun Facts</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {activeTopic.realWorldExamples.map((ex, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <span className="text-2xl shrink-0 p-1.5 rounded-xl bg-white dark:bg-slate-700 shadow-2xs">
                          {ex.emoji}
                        </span>
                        <div>
                          <strong className="block text-xs font-extrabold text-slate-900 dark:text-white">
                            {ex.name}
                          </strong>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                            {ex.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Mnemonic Memory Aid */}
              {activeTopic.mnemonic && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/50 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Mnemonic Memory Aid — &quot;{activeTopic.mnemonic.acronym}&quot;</span>
                  </div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {activeTopic.mnemonic.meaning}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {activeTopic.mnemonic.items.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900 text-center shadow-2xs">
                        <span className="text-xl font-black text-amber-600 dark:text-amber-400 block font-display">
                          {item.letter}
                        </span>
                        <strong className="text-xs text-slate-900 dark:text-white block mt-0.5 truncate">
                          {item.word}
                        </strong>
                        {item.note && (
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                            {item.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. ASCII Flowchart / Mental Model */}
              {activeTopic.flowchartAscii && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Visual Mental Model &amp; Hierarchy</span>
                  </h4>
                  <pre className="p-4 rounded-2xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                    {activeTopic.flowchartAscii}
                  </pre>
                </div>
              )}

              {/* 6. Venn Diagram Comparison */}
              {activeTopic.vennDiagram && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Venn Diagram — Similarities &amp; Differences
                  </h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
                      <strong className="text-xs font-black text-indigo-900 dark:text-indigo-300 uppercase tracking-wider block">
                        {activeTopic.vennDiagram.leftTitle}
                      </strong>
                      <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
                        {activeTopic.vennDiagram.leftPoints.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                      <strong className="text-xs font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wider block">
                        {activeTopic.vennDiagram.middleTitle}
                      </strong>
                      <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
                        {activeTopic.vennDiagram.middlePoints.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
                      <strong className="text-xs font-black text-rose-900 dark:text-rose-300 uppercase tracking-wider block">
                        {activeTopic.vennDiagram.rightTitle}
                      </strong>
                      <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
                        {activeTopic.vennDiagram.rightPoints.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 7. Interactive Riddle */}
              {activeTopic.riddle && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      <HelpCircle className="w-4 h-4 text-emerald-600" />
                      <span>Check Your Understanding Riddle</span>
                    </div>
                    <button
                      onClick={() => setRevealedRiddles(prev => ({ ...prev, [activeTopic.id]: !prev[activeTopic.id] }))}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      {revealedRiddles[activeTopic.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{revealedRiddles[activeTopic.id] ? 'Hide Answer' : 'Reveal Answer'}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white italic">
                    &quot;{activeTopic.riddle.prompt}&quot;
                  </p>

                  {revealedRiddles[activeTopic.id] && (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 animate-in fade-in duration-150 space-y-1">
                      <strong className="text-xs text-emerald-700 dark:text-emerald-300 block font-bold">
                        Answer: {activeTopic.riddle.answer}
                      </strong>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {activeTopic.riddle.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 8. Interactive Word Unscrambles */}
              {activeTopic.unscrambles && activeTopic.unscrambles.length > 0 && (
                <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900 space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Interactive Unscramble Challenge</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeTopic.unscrambles.map((item, idx) => {
                      const key = `${activeTopic.id}-${idx}`;
                      const userVal = unscrambleInputs[key] || '';
                      const isCorrect = userVal.trim().toUpperCase() === item.solution;
                      return (
                        <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono font-black text-indigo-700 dark:text-indigo-300 text-sm tracking-wider">
                              {item.scrambled}
                            </span>
                            <span className="text-[10px] text-slate-400">Hint: {item.hint}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={userVal}
                              onChange={(e) => setUnscrambleInputs(prev => ({ ...prev, [key]: e.target.value }))}
                              placeholder="Type solution..."
                              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold uppercase focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                            />
                            {isCorrect && (
                              <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-black flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" />
                                <span>Correct!</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 9. Secret Code Activity */}
              {activeTopic.secretCodeActivity && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <span>Secret Code Decoder Activity (A=1 ... Z=26)</span>
                  </div>
                  <div className="space-y-2">
                    {activeTopic.secretCodeActivity.items.map((codeItem, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                        <div className="font-mono text-emerald-700 dark:text-emerald-300 font-bold mb-1">
                          Code: {codeItem.encoded}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          {codeItem.sentence}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Topic Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={selectedTopicId <= 1}
                  onClick={() => {
                    setSelectedTopicId(prev => Math.max(1, prev - 1));
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Topic</span>
                </button>

                <button
                  disabled={selectedTopicId >= STBB_TOPICS.length}
                  onClick={() => {
                    setSelectedTopicId(prev => Math.min(STBB_TOPICS.length, prev + 1));
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-30 text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          </div>
        </div>
      )}

      {/* 4. TAB 2: INTERACTIVE DICHOTOMOUS KEY TOOL */}
      {activeMainTab === 'key-tool' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
            
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-black uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Diagnostic Taxonomic Simulator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                Interactive Dichotomous Key for Animal Classification
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Choose between the two scientific questions at each decision node to classify an unknown organism into its exact taxonomic group!
              </p>
            </div>

            {/* Test Sample Quick Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Try Classifying Real Animals:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Elephant 🐘', target: 'Mammal' },
                  { name: 'Parrot 🦜', target: 'Bird' },
                  { name: 'Cobra 🐍', target: 'Reptile' },
                  { name: 'Frog 🐸', target: 'Amphibian' },
                  { name: 'Shark 🦈', target: 'Fish' },
                  { name: 'Earthworm 🪱', target: 'Invertebrate' },
                  { name: 'Spider 🕷️', target: 'Invertebrate' },
                  { name: 'Butterfly 🦋', target: 'Invertebrate' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={resetDichotomousKey}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-300 hover:text-emerald-700 text-xs font-semibold transition cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Decision Tree Active Question Node */}
            {!keyResult ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 dark:from-slate-800/80 dark:to-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-6 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                    Decision Node #{keyStep}
                  </span>
                  <span className="text-slate-400 font-semibold">
                    Step {keyStep} of 5
                  </span>
                </div>

                <div className="text-center max-w-xl mx-auto space-y-2 py-4">
                  <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white">
                    {keyStep === 1 && '1. Does the animal have an internal backbone (vertebral column)?'}
                    {keyStep === 2 && '2. Does the animal have feathers and a beak/bill?'}
                    {keyStep === 3 && '3. Does the animal have fur or hair, and does the mother feed babies with milk?'}
                    {keyStep === 4 && '4. Does the animal have smooth moist skin and lay its eggs in water?'}
                    {keyStep === 5 && '5. Does the animal have dry scaly skin and lay leathery eggs on land?'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Carefully observe the anatomy and select either Yes or No:
                  </p>
                </div>

                {/* Yes / No Choices */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <button
                    onClick={() => handleKeyChoice('yes')}
                    className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-md transition transform hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    YES ✅
                  </button>
                  <button
                    onClick={() => handleKeyChoice('no')}
                    className="p-4 rounded-2xl bg-slate-700 hover:bg-slate-800 text-white font-black text-sm sm:text-base shadow-md transition transform hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    NO ❌
                  </button>
                </div>
              </div>
            ) : (
              /* Result Card */
              <div className="p-8 rounded-2xl bg-emerald-950 text-white border border-emerald-500/50 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto border border-emerald-400/40">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                    Classification Determined!
                  </span>
                  <h3 className="text-3xl font-black font-display text-white mt-1">
                    {keyResult}
                  </h3>
                </div>
                <button
                  onClick={resetDichotomousKey}
                  className="px-6 py-2.5 rounded-xl bg-white text-emerald-950 font-extrabold text-xs hover:bg-emerald-50 transition cursor-pointer"
                >
                  Classify Another Organism ↺
                </button>
              </div>
            )}

            {/* History Breadcrumb of Choices */}
            {keyHistory.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Classification Audit Trail:
                </div>
                <div className="space-y-1 text-xs">
                  {keyHistory.map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                      <span>{h.question}</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{h.answer}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 5. TAB 3: 40-QUESTION MCQ PRACTICE BANK & TEST SIMULATOR */}
      {activeMainTab === 'mcqs' && (
        <div className="space-y-6">
          
          {/* Section Filter and Controls */}
          {!isTestMode ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-400 mr-1">Section:</span>
                {[
                  { id: 'All', label: 'All 40 MCQs' },
                  { id: 'A', label: 'Sec A: Classification & 5 Kingdoms' },
                  { id: 'B', label: 'Sec B: Vertebrates / Invertebrates' },
                  { id: 'C', label: 'Sec C: 5 Vertebrates' },
                  { id: 'D', label: 'Sec D: Worms & Insects' },
                  { id: 'E', label: 'Sec E: Plants' },
                  { id: 'F', label: 'Sec F: Monocots & Dicots' },
                  { id: 'G', label: 'Sec G: Dichotomous Keys & T/F' }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSection(sec.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      selectedSection === sec.id
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>

              {/* Score pill & Actions */}
              <div className="flex items-center gap-3">
                <div className="text-xs font-bold">
                  Score: <strong className="text-emerald-600 dark:text-emerald-400">{scoreStats.correct}</strong> / {scoreStats.answered} answered
                  {scoreStats.answered > 0 && <span className="text-slate-400 ml-1">({scoreStats.percentage}%)</span>}
                </div>

                <button
                  onClick={() => {
                    setUserSelections({});
                    setRevealedExplanations({});
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          ) : (
            /* Timed Test Header */
            <div className="bg-emerald-950 text-white rounded-2xl p-4 sm:p-5 shadow-sm border border-emerald-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  STBB Class 5 Science · Timed Mock Exam Mode
                </div>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  40 Questions · Full Chapter 1 Evaluation
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleExitTest}
                  className="px-3.5 py-1.5 rounded-xl border border-rose-400/40 text-rose-300 hover:bg-rose-950/60 text-xs font-bold transition cursor-pointer"
                >
                  Exit Exam
                </button>

                {!testSubmitted ? (
                  <button
                    onClick={handleSubmitTest}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black shadow-xs cursor-pointer"
                  >
                    Submit Test &amp; Calculate Grade
                  </button>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                    Test Completed
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Test Mode Result Banner if submitted */}
          {testSubmitted && (
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-500/50 shadow-md space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white">
                  Exam Result: {scoreStats.correct} / 40 ({scoreStats.percentage}%)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {scoreStats.percentage >= 60 
                    ? '🎉 Congratulations! You cleared the official STBB & STS passing threshold (60%).' 
                    : 'Revise the weak topics and try again to achieve above 60%.'}
                </p>
              </div>
            </div>
          )}

          {/* Questions Grid */}
          <div className="space-y-4">
            {filteredMcqs.map((mcq, idx) => {
              const selectedIdx = userSelections[mcq.id];
              const isAnswered = selectedIdx !== undefined;
              const isCorrect = isAnswered && selectedIdx === mcq.correctIndex;
              const isExplanationOpen = revealedExplanations[mcq.id] || showAllAnswers || testSubmitted;

              return (
                <div
                  key={mcq.id}
                  className={`p-5 sm:p-6 rounded-3xl border transition ${
                    isAnswered 
                      ? isCorrect 
                        ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20' 
                        : 'border-rose-400 bg-rose-50/20 dark:bg-rose-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center">
                        {mcq.number}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {mcq.sectionTitle}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleBookmark(mcq.id)}
                      className={`p-1.5 rounded-lg border transition cursor-pointer ${
                        isBookmarked(mcq.id)
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-600'
                          : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                      }`}
                      title="Bookmark Question"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-4">
                    {mcq.question}
                  </h4>

                  {/* Options */}
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {mcq.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedIdx === oIdx;
                      const isOptionCorrect = oIdx === mcq.correctIndex;
                      const showCorrectHighlight = isAnswered || testSubmitted;

                      let optClasses = 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

                      if (showCorrectHighlight) {
                        if (isOptionCorrect) {
                          optClasses = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                        } else if (isOptionSelected) {
                          optClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-200 font-bold';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={testSubmitted}
                          onClick={() => handleSelectOption(mcq.id, oIdx, mcq.correctIndex)}
                          className={`p-3 rounded-2xl border text-left text-xs sm:text-sm transition cursor-pointer flex items-start gap-2.5 ${optClasses}`}
                        >
                          <span className={`w-5 h-5 rounded-md font-bold text-xs flex items-center justify-center shrink-0 ${
                            showCorrectHighlight && isOptionCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="flex-1 leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Section */}
                  {isExplanationOpen && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-150">
                      <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/60 space-y-1">
                        <strong className="text-xs text-emerald-800 dark:text-emerald-300 font-extrabold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Correct Answer: ({String.fromCharCode(65 + mcq.correctIndex)}) {mcq.options[mcq.correctIndex]}</span>
                        </strong>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {mcq.explanation}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* 6. TAB 4: SUMMARY CONCEPTS & HIGH-YIELD CHARTS */}
      {activeMainTab === 'summary' && (
        <div className="space-y-6">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Official Exam Cheat Sheet
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                Summary of Key Concepts &amp; Takeaways
              </h2>
            </div>

            {/* Quick Takeaway Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {STBB_SUMMARY_CONCEPTS.map((concept, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block font-display">
                    {concept.topic}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {concept.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Master 5 Kingdoms Comparison Matrix */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              The Five Kingdoms Comparison Matrix
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">Kingdom</th>
                    <th className="p-3">Cell Structure</th>
                    <th className="p-3">True Nucleus</th>
                    <th className="p-3">Cell Wall</th>
                    <th className="p-3">Chlorophyll</th>
                    <th className="p-3">Mode of Nutrition</th>
                    <th className="p-3">Representative Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-extrabold text-emerald-600 dark:text-emerald-400">Bacteria</td>
                    <td className="p-3">Unicellular</td>
                    <td className="p-3 text-rose-500 font-semibold">❌ No proper nucleus</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-rose-500 font-semibold">❌ No</td>
                    <td className="p-3">Heterotrophic</td>
                    <td className="p-3">E. coli, Lactobacillus</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-extrabold text-teal-600 dark:text-teal-400">Algae</td>
                    <td className="p-3">Unicellular / Colonial</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3">Photosynthetic</td>
                    <td className="p-3">Ulva, Volvox, Cutleria</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-extrabold text-amber-600 dark:text-amber-400">Fungi</td>
                    <td className="p-3">Mostly multicellular</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Modified</td>
                    <td className="p-3 text-rose-500 font-semibold">❌ No</td>
                    <td className="p-3">Absorptive saprophyte</td>
                    <td className="p-3">Mushrooms, yeast, bread mold</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-extrabold text-emerald-700 dark:text-emerald-300">Plants</td>
                    <td className="p-3">Multicellular</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes (cellulose)</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3">Photosynthetic</td>
                    <td className="p-3">Sunflower, mango, moss</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-extrabold text-rose-600 dark:text-rose-400">Animals</td>
                    <td className="p-3">Multicellular</td>
                    <td className="p-3 text-emerald-600 font-semibold">✅ Yes</td>
                    <td className="p-3 text-rose-500 font-semibold">❌ No cell wall</td>
                    <td className="p-3 text-rose-500 font-semibold">❌ No</td>
                    <td className="p-3">Ingestive heterotroph</td>
                    <td className="p-3">Fish, frog, bird, tiger, spider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Monocots vs Dicots Comparison Matrix */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
              Monocots vs. Dicots Comparison Matrix
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">Feature</th>
                    <th className="p-3">Monocotyledonous Plants (Monocots)</th>
                    <th className="p-3">Dicotyledonous Plants (Dicots)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-bold">Number of Cotyledons</td>
                    <td className="p-3 font-semibold text-emerald-600">One (1 seed leaf)</td>
                    <td className="p-3 font-semibold text-indigo-600">Two (2 seed leaves)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-bold">Leaf Venation</td>
                    <td className="p-3">Parallel venation (side-by-side veins)</td>
                    <td className="p-3">Netted (reticulate/web-like) venation</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-bold">Flower Petal Multiples</td>
                    <td className="p-3">Groups of 3 or multiples (3, 6, 9)</td>
                    <td className="p-3">Groups of 4 or 5 or multiples (4, 5, 8, 10)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-bold">Root System</td>
                    <td className="p-3">Fibrous roots</td>
                    <td className="p-3">Taproot system with main primary root</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-bold">Examples</td>
                    <td className="p-3 font-medium">Maize, Wheat, Rice, Grass, Lily</td>
                    <td className="p-3 font-medium">Mango, Gram, Bean, Sunflower, Lemon</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
