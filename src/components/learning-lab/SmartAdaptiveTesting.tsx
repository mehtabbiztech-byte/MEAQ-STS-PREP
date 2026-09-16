import React, { useState } from 'react';
import {
  Brain,
  Sparkles,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Flame,
  BookOpen,
  Calendar,
  Calculator,
  Search,
  Filter,
  Check,
  ChevronRight,
  TrendingUp,
  Clock,
  Zap,
} from 'lucide-react';
import {
  IRTAssessment,
  IRTDifficulty,
  updateIrtState,
  MistakeVaultItem,
  getStoredMistakes,
  saveMistakes,
  FORMULAS_DATA,
  TIMELINES_DATA,
} from '../../lib/adaptiveLearning';
import { MCQS_DATA } from '../../data/mcqsData';

// Questions partitioned by difficulty for IRT simulation
const SAMPLE_IRT_QUESTIONS: Record<IRTDifficulty, Array<{
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}>> = {
  Easy: [
    {
      id: 'irt-e1',
      question: 'Which is the national language of Pakistan as per Article 251 of the 1973 Constitution?',
      options: ['Urdu', 'English', 'Punjabi', 'Sindhi'],
      correctIndex: 0,
      explanation: 'Article 251 specifies Urdu as the National Language of Pakistan, with English permitted for official purposes until arrangements are made.',
      topic: 'Pakistan Studies',
    },
    {
      id: 'irt-e2',
      question: 'Find 20% of 250.',
      options: ['40', '50', '60', '45'],
      correctIndex: 1,
      explanation: '20% of 250 = (20/100) × 250 = 0.2 × 250 = 50.',
      topic: 'Basic Arithmetic',
    },
  ],
  Medium: [
    {
      id: 'irt-m1',
      question: 'If 12 men can complete a project in 18 days, in how many days can 8 men complete the same project?',
      options: ['24 days', '27 days', '21 days', '30 days'],
      correctIndex: 1,
      explanation: 'Inverse proportion: Total man-days = 12 × 18 = 216. Days for 8 men = 216 / 8 = 27 days.',
      topic: 'Time & Work',
    },
    {
      id: 'irt-m2',
      question: 'The antonym of the word "TACITURN" is:',
      options: ['Silent', 'Loquacious', 'Reticent', 'Morose'],
      correctIndex: 1,
      explanation: 'Taciturn means habitually untalkative or reserved. Loquacious means talkative or wordy.',
      topic: 'English Vocabulary',
    },
  ],
  Hard: [
    {
      id: 'irt-h1',
      question: 'A train 180 meters long running at 54 km/h crosses a platform in 24 seconds. What is the length of the platform?',
      options: ['160 m', '180 m', '200 m', '220 m'],
      correctIndex: 1,
      explanation: 'Speed = 54 × (5/18) = 15 m/s. Distance in 24s = 15 × 24 = 360m. Platform length = 360 - 180 = 180 meters.',
      topic: 'Speed & Distance',
    },
    {
      id: 'irt-h2',
      question: 'Under which Article of the 1973 Constitution can a High Court issue writs of Habeas Corpus, Mandamus, and Certiorari?',
      options: ['Article 184(3)', 'Article 199', 'Article 204', 'Article 248'],
      correctIndex: 1,
      explanation: 'Article 199 confers writ jurisdiction on Provincial High Courts. (Article 184(3) confers original fundamental rights jurisdiction on the Supreme Court).',
      topic: 'Constitutional Law',
    },
  ],
  Extreme: [
    {
      id: 'irt-x1',
      question: 'A cylindrical water tank with radius 7m and height 10m is being filled at a rate of 22,000 liters per hour. In approximately how many hours will it be filled from empty? (Take π ≈ 22/7, 1 m³ = 1000 liters)',
      options: ['70 hours', '77 hours', '84 hours', '91 hours'],
      correctIndex: 0,
      explanation: 'Volume = π × r² × h = (22/7) × 49 × 10 = 1540 m³. Total liters = 1,540,000 liters. Time = 1,540,000 / 22,000 = 70 hours.',
      topic: 'Advanced Geometry & Mensuration',
    },
    {
      id: 'irt-x2',
      question: 'Which constitutional amendment removed the provision for executive magistrates and completed the formal separation of judiciary from the executive in Pakistan?',
      options: ['14th Amendment', '17th Amendment', 'Code of Criminal Procedure Amendment 2001', '18th Amendment'],
      correctIndex: 2,
      explanation: 'The Devolution Plan 2001 through CrPC amendments formally separated judicial powers from executive district administration, abolishing District Magistrates.',
      topic: 'Judicial Reforms',
    },
  ],
};

export const SmartAdaptiveTesting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'irt' | 'mistakes' | 'cheatsheet'>('irt');

  // IRT Engine State
  const [irtState, setIrtState] = useState<IRTAssessment>({
    theta: 0.0,
    percentile: 50,
    difficulty: 'Medium',
    totalAnswered: 0,
    streak: 0,
  });
  const [irtQuestionIndex, setIrtQuestionIndex] = useState(0);
  const [irtSelectedOption, setIrtSelectedOption] = useState<number | null>(null);
  const [irtFeedback, setIrtFeedback] = useState<{ isCorrect: boolean; explanation: string } | null>(null);

  // Mistake Vault State
  const [mistakes, setMistakes] = useState<MistakeVaultItem[]>(getStoredMistakes);
  const [mistakeFilter, setMistakeFilter] = useState<'pending' | 'mastered' | 'all'>('pending');
  const [retestingIndex, setRetestingIndex] = useState<number | null>(null);
  const [retestSelectedOption, setRetestSelectedOption] = useState<string | null>(null);
  const [retestFeedback, setRetestFeedback] = useState<{ isCorrect: boolean; msg: string } | null>(null);

  // Cheat Sheet State
  const [cheatCategory, setCheatCategory] = useState<'all' | 'formulas' | 'timelines'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Current active IRT question
  const currentPool = SAMPLE_IRT_QUESTIONS[irtState.difficulty];
  const currentIrtQuestion = currentPool[irtQuestionIndex % currentPool.length];

  const handleIrtAnswer = (optionIndex: number) => {
    if (irtSelectedOption !== null) return;
    setIrtSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentIrtQuestion.correctIndex;

    const nextState = updateIrtState(irtState, isCorrect, irtState.difficulty);
    setIrtState(nextState);

    setIrtFeedback({
      isCorrect,
      explanation: currentIrtQuestion.explanation,
    });
  };

  const handleNextIrt = () => {
    setIrtSelectedOption(null);
    setIrtFeedback(null);
    setIrtQuestionIndex((i) => i + 1);
  };

  const handleResetIrt = () => {
    setIrtState({
      theta: 0.0,
      percentile: 50,
      difficulty: 'Medium',
      totalAnswered: 0,
      streak: 0,
    });
    setIrtSelectedOption(null);
    setIrtFeedback(null);
    setIrtQuestionIndex(0);
  };

  // Mistake Vault Handlers
  const filteredMistakes = mistakes.filter((item) => {
    if (mistakeFilter === 'pending') return !item.mastered;
    if (mistakeFilter === 'mastered') return item.mastered;
    return true;
  });

  const handleAnswerRetest = (option: string, item: MistakeVaultItem) => {
    if (retestSelectedOption !== null) return;
    setRetestSelectedOption(option);
    const isCorrect = option.trim() === item.correctAnswer.trim();

    const updated = mistakes.map((m) => {
      if (m.id === item.id) {
        const nextCount = isCorrect ? m.consecutiveCorrect + 1 : 0;
        const nowMastered = nextCount >= 3;
        return {
          ...m,
          consecutiveCorrect: nextCount,
          mastered: nowMastered,
          lastReviewedAt: new Date().toISOString(),
        };
      }
      return m;
    });

    setMistakes(updated);
    saveMistakes(updated);

    setRetestFeedback({
      isCorrect,
      msg: isCorrect
        ? item.consecutiveCorrect + 1 >= 3
          ? '🎉 Mastered! You answered correctly 3 times consecutively!'
          : `Correct! Progress: ${item.consecutiveCorrect + 1} / 3 clears`
        : `Incorrect. Reset back to 0/3 clears. Correct: ${item.correctAnswer}`,
    });
  };

  const closeRetest = () => {
    setRetestingIndex(null);
    setRetestSelectedOption(null);
    setRetestFeedback(null);
  };

  // Filtered cheat sheet
  const filteredFormulas = FORMULAS_DATA.filter(
    (f) =>
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTimelines = TIMELINES_DATA.filter(
    (t) =>
      t.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.year.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      {/* Sub-tab Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('irt')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'irt'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Dynamic IRT Testing</span>
          </button>

          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'mistakes'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mistake Vault</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/20 font-black">
              {mistakes.filter((m) => !m.mastered).length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'cheatsheet'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Formulas & Timelines</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
          Pillar 1: Smart Adaptive Testing & Memory Retention
        </span>
      </div>

      {/* 1A. DYNAMIC QUESTION DIFFICULTY (ITEM RESPONSE THEORY) */}
      {activeTab === 'irt' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* IRT Gauge & Status Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-5 rounded-3xl text-white shadow-lg border border-indigo-500/20">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                Ability Score (Theta)
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black font-mono">
                  {irtState.theta > 0 ? `+${irtState.theta}` : irtState.theta}
                </span>
                <span className="text-xs text-indigo-200">/ ±3.0</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, Math.max(5, ((irtState.theta + 3) / 6) * 100))}%` }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                Estimated Percentile
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-amber-300">{irtState.percentile}%</span>
                <span className="text-[10px] text-slate-300">Aspirants</span>
              </div>
              <span className="text-[10px] text-indigo-200 block">
                {irtState.percentile >= 90 ? '🔥 Merit Topper Zone' : irtState.percentile >= 70 ? '⚡ Strong Pass' : '🌱 Building Base'}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                Engine Difficulty
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${
                  irtState.difficulty === 'Extreme'
                    ? 'bg-rose-500 text-white'
                    : irtState.difficulty === 'Hard'
                    ? 'bg-orange-500 text-white'
                    : irtState.difficulty === 'Medium'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-emerald-500 text-white'
                }`}
              >
                {irtState.difficulty} Tier
              </span>
              <span className="text-[10px] text-slate-300 block">
                Dynamic auto-tuning
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                Current Streak
              </span>
              <div className="flex items-center gap-1.5">
                <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
                <span className="text-3xl font-black">{irtState.streak}</span>
                <span className="text-xs text-indigo-200">in a row</span>
              </div>
              <span className="text-[10px] text-slate-300 block">
                {irtState.totalAnswered} items evaluated
              </span>
            </div>
          </div>

          {/* Active Adaptive Question Arena */}
          <div className="p-6 sm:p-8 rounded-3xl border-2 border-indigo-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Adaptive Item #{irtState.totalAnswered + 1}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-bold">{currentIrtQuestion.topic}</span>
              </div>
              <button
                onClick={handleResetIrt}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white flex items-center gap-1 font-bold cursor-pointer transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Engine</span>
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-relaxed">
              {currentIrtQuestion.question}
            </h3>

            {/* Options */}
            <div className="grid sm:grid-cols-2 gap-3">
              {currentIrtQuestion.options.map((opt, idx) => {
                const isSelected = irtSelectedOption === idx;
                const isCorrect = idx === currentIrtQuestion.correctIndex;
                let btnClass =
                  'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400';

                if (irtSelectedOption !== null) {
                  if (isCorrect) {
                    btnClass =
                      'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-black';
                  } else if (isSelected && !isCorrect) {
                    btnClass =
                      'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200 font-bold';
                  } else {
                    btnClass = 'opacity-50 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={irtSelectedOption !== null}
                    onClick={() => handleIrtAnswer(idx)}
                    className={`p-4 rounded-2xl border-2 text-left font-bold text-sm transition-all cursor-pointer flex items-center justify-between ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {irtSelectedOption !== null && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {irtSelectedOption !== null && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Adaptation Explanation */}
            {irtFeedback && (
              <div
                className={`p-5 rounded-2xl border text-sm space-y-2 animate-in fade-in ${
                  irtFeedback.isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                }`}
              >
                <div className="font-black flex items-center gap-2 text-base">
                  {irtFeedback.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Correct! Difficulty adjusting upward (+0.35 Theta).</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>Incorrect. Calibrating difficulty downward (-0.40 Theta).</span>
                    </>
                  )}
                </div>
                <p className="text-xs opacity-90 leading-relaxed">{irtFeedback.explanation}</p>
                <div className="pt-2">
                  <button
                    onClick={handleNextIrt}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Next Adaptive Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1B. AUTOMATED MISTAKE VAULT & RE-TESTING */}
      {activeTab === 'mistakes' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 p-5 rounded-3xl">
            <div>
              <h3 className="text-lg font-black text-rose-950 dark:text-rose-200 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-rose-600" />
                <span>Automated Mistake Vault & 3-Step Clear Rule</span>
              </h3>
              <p className="text-xs text-rose-800/80 dark:text-rose-300 mt-0.5">
                Every missed MCQ enters this quarantine. You must answer it correctly <strong>3 times consecutively</strong> to permanently remove it from your risk profile.
              </p>
            </div>

            <div className="flex gap-2">
              {(['pending', 'mastered', 'all'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setMistakeFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                    mistakeFilter === filter
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Active Retest Modal / Card */}
          {retestingIndex !== null && filteredMistakes[retestingIndex] && (
            <div className="p-6 rounded-3xl border-2 border-rose-400 bg-white dark:bg-slate-900 shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400">
                <span>RE-TESTING WEAK CONCEPT • 3 Consecutive Clears Needed</span>
                <button
                  onClick={closeRetest}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  ✕ Close Retest
                </button>
              </div>

              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                {filteredMistakes[retestingIndex].question}
              </h4>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {filteredMistakes[retestingIndex].options.map((opt) => (
                  <button
                    key={opt}
                    disabled={retestSelectedOption !== null}
                    onClick={() => handleAnswerRetest(opt, filteredMistakes[retestingIndex])}
                    className="p-3.5 rounded-xl border-2 text-left font-bold text-sm bg-slate-50 dark:bg-slate-800 hover:border-rose-400 transition cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {retestFeedback && (
                <div
                  className={`p-4 rounded-xl text-xs font-bold ${
                    retestFeedback.isCorrect
                      ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                      : 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200'
                  }`}
                >
                  <p>{retestFeedback.msg}</p>
                  <button
                    onClick={closeRetest}
                    className="mt-2.5 px-4 py-1.5 rounded-lg bg-slate-900 text-white font-extrabold text-xs cursor-pointer"
                  >
                    Done & Return to Vault
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mistake Items List */}
          <div className="space-y-3">
            {filteredMistakes.map((item, idx) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3 hover:border-rose-300 dark:hover:border-rose-800 transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.category}
                    </span>
                    {item.mastered ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Mastered (3/3)
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        {item.consecutiveCorrect} / 3 Consecutive Clears
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setRetestingIndex(idx);
                      setRetestSelectedOption(null);
                      setRetestFeedback(null);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition cursor-pointer shadow-sm flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Drill This Mistake</span>
                  </button>
                </div>

                <p className="font-bold text-sm text-slate-900 dark:text-white">{item.question}</p>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-rose-600 dark:text-rose-400 font-bold">
                      Your Mistake: <s>{item.userWrongAnswer}</s>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Correct: {item.correctAnswer}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                    <strong>Rule:</strong> {item.explanation}
                  </p>
                </div>
              </div>
            ))}

            {!filteredMistakes.length && (
              <div className="p-8 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                <h4 className="font-bold text-slate-900 dark:text-white">Mistake Vault is Clean!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  No active questions pending in this filter category.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1C. AI-POWERED FORMULA & DATE CHEAT-SHEETS */}
      {activeTab === 'cheatsheet' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCheatCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  cheatCategory === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                All Quick-Sheets
              </button>
              <button
                onClick={() => setCheatCategory('formulas')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  cheatCategory === 'formulas'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Math Formulas
              </button>
              <button
                onClick={() => setCheatCategory('timelines')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  cheatCategory === 'timelines'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Constitutional Timelines
              </button>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulas or years (e.g. 1940, speed)..."
                className="pl-9 pr-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs w-full sm:w-64 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* Formulas Grid */}
          {(cheatCategory === 'all' || cheatCategory === 'formulas') && (
            <div className="space-y-3">
              <h4 className="text-sm font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                <span>High-Yield Quantitative Formulas</span>
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredFormulas.map((card) => (
                  <div
                    key={card.id}
                    className="p-5 rounded-2xl border border-indigo-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2.5 hover:border-indigo-400 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                        {card.category}
                      </span>
                      <span className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400">
                        Exam Favorite ★
                      </span>
                    </div>

                    <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {card.title}
                    </h5>

                    <div className="p-3 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs font-bold overflow-x-auto">
                      {card.formula}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {card.explanation}
                    </p>

                    <div className="pt-1 text-[11px] border-t border-slate-100 dark:border-slate-800 space-y-1">
                      <p className="text-slate-500">
                        <strong>STS Tip:</strong> {card.stsTip}
                      </p>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        <strong>Exam Example:</strong> {card.examExample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timelines Table / Cards */}
          {(cheatCategory === 'all' || cheatCategory === 'timelines') && (
            <div className="space-y-3 pt-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Pakistan Constitutional & Freedom Movement Timeline</span>
              </h4>

              <div className="space-y-2.5">
                {filteredTimelines.map((event, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-300 transition"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-black font-mono text-xs shrink-0 shadow-sm">
                        {event.year}
                      </span>
                      <div>
                        <p className="font-extrabold text-sm text-slate-900 dark:text-white">
                          {event.event}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {event.significance}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {event.era}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {event.examFrequency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
