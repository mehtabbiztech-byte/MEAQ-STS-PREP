import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  CheckCircle2,
  HelpCircle,
  Trophy,
  RotateCcw,
  Search,
  BookOpen,
  Gamepad2,
  Smile,
  Zap,
  Lightbulb
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_MATH_TOPICS, MathTopic } from '../data/kidsMathTopics';
import confetti from 'canvas-confetti';

interface KidsMathFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsMathFun: React.FC<KidsMathFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_MATH_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground state
  // 1. Place value state
  const [tensCount, setTensCount] = useState<number>(2);
  const [onesCount, setOnesCount] = useState<number>(4);

  // 2. Addition state
  const [addLeft, setAddLeft] = useState<number>(3);
  const [addRight, setAddRight] = useState<number>(4);

  // 3. Subtraction state (cookies clicked/eaten)
  const [eatenCookies, setEatenCookies] = useState<number[]>([1, 3]);

  // 4. Multiplication state
  const [multRows, setMultRows] = useState<number>(3);
  const [multCols, setMultCols] = useState<number>(4);

  // 5. Division state
  const [divCandies, setDivCandies] = useState<number>(12);
  const [divFriends, setDivFriends] = useState<number>(3);

  // 6. Fraction slices eaten
  const [fractionSlices, setFractionSlices] = useState<number>(4);
  const [eatenSlices, setEatenSlices] = useState<number[]>([0]);

  // 7. Shapes guess state
  const [shapeMatched, setShapeMatched] = useState<Record<string, boolean>>({});

  // 8. Clock preset
  const [clockPreset, setClockPreset] = useState<{ hour: number; minute: number; label: string }>({
    hour: 3,
    minute: 0,
    label: 'After-school cartoon time! 📺'
  });

  // 9. Money state
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(35);
  const [tenderedNote, setTenderedNote] = useState<number>(50);

  // 10. Table selector
  const [tableNumber, setTableNumber] = useState<number>(9);

  // Filter topics
  const filteredTopics = KIDS_MATH_TOPICS.filter(topic => {
    const matchesGrade = filterGrade === 'All' || topic.grade.includes(filterGrade);
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.funTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  const currentTopic: MathTopic =
    KIDS_MATH_TOPICS.find(t => t.id === selectedTopicId) || KIDS_MATH_TOPICS[0];

  const currentIndex = KIDS_MATH_TOPICS.findIndex(t => t.id === currentTopic.id);

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setQuizAnswered(null);
    setShowExplanation(false);
    stopSpeech();
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleNextTopic = () => {
    const nextIdx = (currentIndex + 1) % KIDS_MATH_TOPICS.length;
    handleSelectTopic(KIDS_MATH_TOPICS[nextIdx].id);
  };

  const handlePrevTopic = () => {
    const prevIdx = (currentIndex - 1 + KIDS_MATH_TOPICS.length) % KIDS_MATH_TOPICS.length;
    handleSelectTopic(KIDS_MATH_TOPICS[prevIdx].id);
  };

  // Text to speech fun read aloud
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = `${currentTopic.funTitle}. ${currentTopic.concept}. Here is the story: ${currentTopic.funStory.setup} ${currentTopic.funStory.action} ${currentTopic.funStory.result}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.pitch = 1.1; // cheerful voice
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const handleQuizAnswer = (optionIdx: number) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(optionIdx);
    setShowExplanation(true);

    if (optionIdx === currentTopic.quickQuiz.correctIndex) {
      // Award 5 learning points & celebratory confetti
      if (addLearningPoints) {
        addLearningPoints(5);
      }
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore fallback
      }
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* 1. TOP HEADER & NAVIGATION BAR */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 text-white shadow-xl shadow-emerald-900/10 relative overflow-hidden">
        {/* Background glow & bubbles */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  stopSpeech();
                  onBack();
                }}
                className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={14} /> Back to Playground
              </button>
              <span className="px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide uppercase flex items-center gap-1 shadow-sm">
                <Sparkles size={13} /> CLASS 1–5 MATH PARK
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
              🧮 Mathematics Fun!
            </h1>
            <p className="text-emerald-50 text-sm sm:text-base max-w-2xl font-medium">
              Every math topic explained like a colorful adventure with real-life stories, interactive toy playgrounds, and magic tricks!
            </p>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {onPlayGame && (
              <button
                onClick={() => {
                  stopSpeech();
                  onPlayGame();
                }}
                className="px-4 py-2.5 rounded-2xl bg-white text-emerald-800 font-extrabold text-xs sm:text-sm hover:bg-emerald-50 transition shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Gamepad2 size={16} /> Play Bubble Math
              </button>
            )}
            <div className="px-4 py-2.5 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 text-xs font-bold flex items-center gap-1.5">
              <Trophy size={15} className="text-amber-300" />
              <span>{userProfile.points || 0} Points</span>
            </div>
          </div>
        </div>

        {/* Search and Grade Filter row */}
        <div className="mt-6 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
              <button
                key={grade}
                onClick={() => setFilterGrade(grade)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-black transition whitespace-nowrap cursor-pointer ${
                  filterGrade === grade
                    ? 'bg-white text-emerald-900 shadow-sm'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {grade === 'All' ? 'All Classes (12 Topics)' : grade}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-emerald-200 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Find topic (e.g. pizza, clock)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-emerald-200 text-xs font-medium border border-white/30 focus:outline-none focus:bg-white/30"
            />
          </div>
        </div>
      </div>

      {/* 2. TOPIC SELECTOR STRIP (HORIZONTALLY SCROLLABLE WITH EMOJIS) */}
      <div className="rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-sky-200 dark:border-slate-800 p-3 shadow-sm">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Choose a Topic ({filteredTopics.length} available)
          </span>
          <div className="flex gap-1">
            <button
              onClick={handlePrevTopic}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              title="Previous topic"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNextTopic}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              title="Next topic"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {filteredTopics.map((topic, idx) => {
            const isSelected = topic.id === currentTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer text-left border ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-102'
                    : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300'
                }`}
              >
                <span className="text-lg leading-none">{topic.emoji}</span>
                <div>
                  <span className="block leading-tight">{topic.title}</span>
                  <span
                    className={`block text-[10px] font-medium opacity-80 ${
                      isSelected ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    {topic.grade}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN TOPIC HERO CARD */}
      <div className="rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-emerald-500/20 dark:border-emerald-500/20 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        
        {/* Top bar of topic card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-3.5">
            <span className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-3xl shadow-xs shrink-0">
              {currentTopic.emoji}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold">
                  {currentTopic.grade}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold">
                  {currentTopic.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Topic {currentIndex + 1} of {KIDS_MATH_TOPICS.length}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display mt-1">
                {currentTopic.funTitle}
              </h2>
            </div>
          </div>

          {/* Voice Narrator Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleSpeech}
              className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer border ${
                isSpeaking
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                  : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100'
              }`}
              title="Read story aloud in a friendly voice"
            >
              {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isSpeaking ? 'Stop Reading' : '🔊 Read to Me'}</span>
            </button>
          </div>
        </div>

        {/* CONCEPT CALLOUT */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-sky-50 dark:from-emerald-950/40 dark:via-slate-800 dark:to-teal-950/30 border border-emerald-200/80 dark:border-emerald-800/80">
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <h4 className="text-xs font-extrabold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                What does this mean in plain fun words?
              </h4>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-semibold mt-1 leading-relaxed">
                {currentTopic.concept}
              </p>
            </div>
          </div>
        </div>

        {/* STORY TIME SECTION (STORY WITH CHARACTERS) */}
        <div className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-amber-200 dark:bg-amber-900 flex items-center justify-center text-xl shadow-xs shrink-0">
              {currentTopic.character.avatar}
            </span>
            <div>
              <h3 className="text-base font-black text-amber-950 dark:text-amber-200">
                Story Time with {currentTopic.character.name} ({currentTopic.character.role})
              </h3>
              <p className="text-xs text-amber-800/80 dark:text-amber-300/80">
                A real-life adventure where math saves the day!
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/40">
              <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">
                1. The Scene 🎬
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentTopic.funStory.setup}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/40">
              <span className="font-bold text-amber-800 dark:text-amber-400 block mb-1">
                2. What Happened? ⚡
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentTopic.funStory.action}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/40">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                3. The Math Magic! ✨
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {currentTopic.funStory.result}
              </p>
            </div>
          </div>

          {/* VISUAL MATH EQUATION BREAKDOWN */}
          <div className="mt-4 p-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-dashed border-emerald-300 dark:border-emerald-700 text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              How we write this in math:
            </div>
            <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-mono flex flex-wrap items-center justify-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200">
                {currentTopic.visualEquation.leftVisual.join(' ')}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                {currentTopic.visualEquation.operator}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200">
                {currentTopic.visualEquation.rightVisual.join(' ')}
              </span>
              <span className="text-slate-400">=</span>
              <span className="px-3 py-1 rounded-lg bg-amber-300 dark:bg-amber-600 text-slate-950 dark:text-white font-black shadow-xs">
                {currentTopic.visualEquation.mathText}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic">
              {currentTopic.visualEquation.caption}
            </p>
          </div>
        </div>

        {/* 4. INTERACTIVE HANDS-ON TOY / PLAYGROUND */}
        <div className="rounded-3xl bg-sky-50/80 dark:bg-slate-800/80 border-2 border-sky-300 dark:border-sky-800/80 p-5 sm:p-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-sky-200 dark:bg-sky-900 text-sky-800 dark:text-sky-300">
                <Zap size={18} />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Interactive Toy Playground
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Touch, click, and play to understand this topic with your own hands!
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-950 px-2.5 py-1 rounded-full">
              Live Toy
            </span>
          </div>

          {/* DYNAMIC TOY COMPONENT BASED ON TOPIC TYPE */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900 min-h-[180px] flex flex-col items-center justify-center text-center">
            
            {/* TOY 1: PLACE VALUE BUILDER */}
            {currentTopic.interactiveType === 'place-value' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Build any number by adding Sacks of 10 and Single Mangoes!
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="space-y-2">
                    <span className="block text-xs font-extrabold text-amber-700 dark:text-amber-400">
                      TENS (Sacks of 10)
                    </span>
                    <div className="text-3xl font-black">{tensCount}</div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setTensCount(t => Math.max(0, t - 1))}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 text-xs"
                      >
                        -1
                      </button>
                      <button
                        onClick={() => setTensCount(t => Math.min(9, t + 1))}
                        className="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-bold hover:bg-amber-600 text-xs"
                      >
                        +1
                      </button>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-slate-400">+</span>

                  <div className="space-y-2">
                    <span className="block text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                      ONES (Single Mangoes)
                    </span>
                    <div className="text-3xl font-black">{onesCount}</div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setOnesCount(o => Math.max(0, o - 1))}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 text-xs"
                      >
                        -1
                      </button>
                      <button
                        onClick={() => setOnesCount(o => Math.min(9, o + 1))}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white font-bold hover:bg-emerald-600 text-xs"
                      >
                        +1
                      </button>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-slate-400">=</span>

                  <div className="space-y-1">
                    <span className="block text-xs font-extrabold text-purple-700 dark:text-purple-400">
                      YOUR NUMBER
                    </span>
                    <div className="text-4xl font-black text-purple-600 dark:text-purple-400 font-mono">
                      {tensCount * 10 + onesCount}
                    </div>
                  </div>
                </div>

                {/* Visual sacks */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: tensCount }).map((_, i) => (
                    <span
                      key={`sack-${i}`}
                      className="px-2 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 text-xs font-bold"
                    >
                      📦 10
                    </span>
                  ))}
                  {Array.from({ length: onesCount }).map((_, i) => (
                    <span key={`mango-${i}`} className="text-lg">
                      🥭
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* TOY 2: ADDITION COMBINER */}
            {currentTopic.interactiveType === 'addition' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Pick fruit numbers to mix in the giant picnic bowl!
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button
                        key={`add-left-${n}`}
                        onClick={() => setAddLeft(n)}
                        className={`w-8 h-8 rounded-xl font-bold text-xs ${
                          addLeft === n
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <span className="text-xl font-black text-emerald-600">+</span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button
                        key={`add-right-${n}`}
                        onClick={() => setAddRight(n)}
                        className={`w-8 h-8 rounded-xl font-bold text-xs ${
                          addRight === n
                            ? 'bg-teal-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                  <div className="text-2xl font-black text-emerald-900 dark:text-emerald-200 font-mono">
                    {addLeft} 🍎 + {addRight} 🍐 = {addLeft + addRight} Fruits! 🎉
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1 text-2xl mt-2">
                    {Array.from({ length: addLeft }).map((_, i) => (
                      <span key={`apple-${i}`}>🍎</span>
                    ))}
                    {Array.from({ length: addRight }).map((_, i) => (
                      <span key={`pear-${i}`}>🍐</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TOY 3: SUBTRACTION COOKIE POPPER */}
            {currentTopic.interactiveType === 'subtraction' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Click on any cookie to EAT it and watch the subtraction update! 🍪
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map(idx => {
                    const isEaten = eatenCookies.includes(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (isEaten) {
                            setEatenCookies(e => e.filter(x => x !== idx));
                          } else {
                            setEatenCookies(e => [...e, idx]);
                          }
                        }}
                        className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center text-2xl transition cursor-pointer ${
                          isEaten
                            ? 'border-dashed border-slate-300 bg-slate-100 opacity-40 grayscale'
                            : 'border-amber-400 bg-amber-50 hover:scale-110 shadow-sm'
                        }`}
                        title={isEaten ? 'Bake back!' : 'Click to eat cookie!'}
                      >
                        {isEaten ? '💨' : '🍪'}
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 flex items-center justify-between">
                  <div className="text-base sm:text-lg font-black text-rose-950 dark:text-rose-200 font-mono">
                    8 Cookies − {eatenCookies.length} Eaten = {8 - eatenCookies.length} Left!
                  </div>
                  <button
                    onClick={() => setEatenCookies([])}
                    className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs font-bold border border-slate-200 text-slate-700 dark:text-slate-200 inline-flex items-center gap-1"
                  >
                    <RotateCcw size={12} /> Reset Tray
                  </button>
                </div>
              </div>
            )}

            {/* TOY 4: MULTIPLICATION ARRAY GRID */}
            {currentTopic.interactiveType === 'multiplication' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Change rows and frogs to see the multiplication array!
                </div>
                <div className="flex items-center justify-center gap-4 text-xs font-bold">
                  <div>
                    <span>Rows: </span>
                    <select
                      value={multRows}
                      onChange={e => setMultRows(Number(e.target.value))}
                      className="ml-1 p-1 rounded-lg border border-slate-300 dark:bg-slate-800"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-lg font-black">×</span>
                  <div>
                    <span>Frogs per row: </span>
                    <select
                      value={multCols}
                      onChange={e => setMultCols(Number(e.target.value))}
                      className="ml-1 p-1 rounded-lg border border-slate-300 dark:bg-slate-800"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 inline-block">
                  {Array.from({ length: multRows }).map((_, r) => (
                    <div key={`row-${r}`} className="flex gap-2 text-xl">
                      {Array.from({ length: multCols }).map((_, c) => (
                        <span key={`frog-${r}-${c}`}>🐸</span>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="text-xl font-black text-purple-950 dark:text-purple-200 font-mono">
                  {multRows} × {multCols} = {multRows * multCols} Frogs! 🐸
                </div>
              </div>
            )}

            {/* TOY 5: DIVISION FAIR SHARING */}
            {currentTopic.interactiveType === 'division' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Select candies and friends to distribute without fighting! 🍬
                </div>
                <div className="flex items-center justify-center gap-4 text-xs font-bold">
                  <div>
                    <span>Total Candies: </span>
                    <select
                      value={divCandies}
                      onChange={e => setDivCandies(Number(e.target.value))}
                      className="ml-1 p-1 rounded-lg border border-slate-300 dark:bg-slate-800"
                    >
                      {[6, 8, 9, 12, 15, 16].map(n => (
                        <option key={n} value={n}>
                          {n} 🍬
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-lg font-black">÷</span>
                  <div>
                    <span>Friends: </span>
                    <select
                      value={divFriends}
                      onChange={e => setDivFriends(Number(e.target.value))}
                      className="ml-1 p-1 rounded-lg border border-slate-300 dark:bg-slate-800"
                    >
                      {[2, 3, 4].map(n => (
                        <option key={n} value={n}>
                          {n} Friends
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Friends plates */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Array.from({ length: divFriends }).map((_, fIdx) => {
                    const share = Math.floor(divCandies / divFriends);
                    return (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800"
                      >
                        <span className="text-xs font-bold text-cyan-800 dark:text-cyan-300">
                          Friend {String.fromCharCode(65 + fIdx)}
                        </span>
                        <div className="text-xl my-1">
                          {Array.from({ length: share })
                            .map(() => '🍬')
                            .join('')}
                        </div>
                        <span className="text-xs font-black text-cyan-900 dark:text-cyan-200">
                          {share} candies
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-xl font-black text-cyan-950 dark:text-cyan-200 font-mono">
                  {divCandies} ÷ {divFriends} = {Math.floor(divCandies / divFriends)} per friend!
                  {divCandies % divFriends !== 0 && (
                    <span className="text-xs text-amber-600 block mt-0.5">
                      (With {divCandies % divFriends} left over for the teacher!)
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* TOY 6: FRACTION PIZZA SLICER */}
            {currentTopic.interactiveType === 'fractions' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Tap slices of the pizza to eat them and see the fraction change! 🍕
                </div>

                <div className="flex items-center justify-center gap-2">
                  {[2, 4, 8].map(slices => (
                    <button
                      key={slices}
                      onClick={() => {
                        setFractionSlices(slices);
                        setEatenSlices([0]);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-bold ${
                        fractionSlices === slices
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Cut into {slices} slices
                    </button>
                  ))}
                </div>

                {/* Slice buttons */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: fractionSlices }).map((_, idx) => {
                    const isEaten = eatenSlices.includes(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (isEaten) {
                            setEatenSlices(s => s.filter(x => x !== idx));
                          } else {
                            setEatenSlices(s => [...s, idx]);
                          }
                        }}
                        className={`w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center font-black text-xs transition cursor-pointer ${
                          isEaten
                            ? 'border-dashed border-slate-300 bg-slate-100 text-slate-400'
                            : 'border-amber-500 bg-amber-100 text-amber-900 shadow-sm'
                        }`}
                      >
                        <span>{isEaten ? '💨' : '🍕'}</span>
                        <span className="text-[10px]">
                          {isEaten ? 'Eaten' : `1/${fractionSlices}`}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-base font-black text-amber-950 dark:text-amber-200">
                  Eaten: {eatenSlices.length}/{fractionSlices} | Left in box:{' '}
                  {fractionSlices - eatenSlices.length}/{fractionSlices}!
                </div>
              </div>
            )}

            {/* TOY 7: SHAPES FINDER */}
            {currentTopic.interactiveType === 'shapes' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Click each real-life object to reveal its secret geometry shape! 🔍
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'samosa', label: 'Crunchy Samosa', emoji: '🥟', shape: 'Triangle 🔺 (3 sides)' },
                    { id: 'dice', label: 'Ludo Dice', emoji: '🎲', shape: 'Cube (6 faces)' },
                    { id: 'roti', label: 'Mom’s Roti', emoji: '🫓', shape: 'Circle ⭕ (0 corners)' },
                    { id: 'can', label: 'Soda Can', emoji: '🥫', shape: 'Cylinder (Round top)' }
                  ].map(item => {
                    const revealed = shapeMatched[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() =>
                          setShapeMatched(m => ({ ...m, [item.id]: !m[item.id] }))
                        }
                        className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                          revealed
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/70 text-purple-900 dark:text-purple-200'
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-purple-300'
                        }`}
                      >
                        <span className="text-3xl block mb-1">{item.emoji}</span>
                        <span className="block text-xs font-bold">{item.label}</span>
                        <span className="block text-[10px] font-extrabold text-purple-700 dark:text-purple-400 mt-1">
                          {revealed ? item.shape : 'Tap to reveal!'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TOY 8: CLOCK SIMULATOR */}
            {currentTopic.interactiveType === 'clock' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Pick a daily event to see the clock hands position! ⏰
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { hour: 7, minute: 0, label: 'Wake up for school! ☀️' },
                    { hour: 12, minute: 0, label: 'Lunch bell rings! 🥪' },
                    { hour: 3, minute: 30, label: 'Cricket in the playground! 🏏' },
                    { hour: 9, minute: 0, label: 'Bedtime story with mom! 🌙' }
                  ].map(preset => (
                    <button
                      key={preset.label}
                      onClick={() => setClockPreset(preset)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                        clockPreset.hour === preset.hour && clockPreset.minute === preset.minute
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {preset.hour}:{preset.minute === 0 ? '00' : preset.minute}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center gap-4">
                  <span className="text-5xl">⏰</span>
                  <div className="text-left">
                    <div className="text-3xl font-black text-sky-950 dark:text-sky-100 font-mono">
                      {clockPreset.hour}:{clockPreset.minute === 0 ? '00' : clockPreset.minute}{' '}
                      {clockPreset.hour >= 7 && clockPreset.hour <= 12 ? 'AM' : 'PM'}
                    </div>
                    <div className="text-xs text-sky-700 dark:text-sky-300 font-bold mt-0.5">
                      {clockPreset.label}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TOY 9: MONEY & SHOPPING CASHIER */}
            {currentTopic.interactiveType === 'money' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Pick a treat at Uncle Tariq’s Tuck Shop and see your change! 💰
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { name: 'Mango Juice 🧃', price: 30 },
                    { name: 'Chocolate Bar 🍫', price: 40 },
                    { name: 'Super Biscuit 🍪', price: 20 },
                    { name: 'Ice Cream Cone 🍦', price: 60 }
                  ].map(item => (
                    <button
                      key={item.name}
                      onClick={() => setSelectedItemPrice(item.price)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                        selectedItemPrice === item.price
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      {item.name} (Rs {item.price})
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3 text-xs font-bold">
                  <span>Pay with Note:</span>
                  {[50, 100].map(note => (
                    <button
                      key={note}
                      onClick={() => setTenderedNote(note)}
                      className={`px-3 py-1 rounded-lg ${
                        tenderedNote === note
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    >
                      💵 Rs {note}
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-sm font-black text-emerald-950 dark:text-emerald-200">
                  Rs {tenderedNote} Note − Item Rs {selectedItemPrice} ={' '}
                  <span className="text-emerald-600 dark:text-emerald-300 underline">
                    Rs {tenderedNote - selectedItemPrice} Change back in your pocket!
                  </span>
                </div>
              </div>
            )}

            {/* TOY 10: 9s TABLE FINGER TRICK */}
            {currentTopic.interactiveType === 'tables' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Pick a number from 1 to 10 to see the Magic Finger Trick for 9s! 🪄
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <button
                      key={n}
                      onClick={() => setTableNumber(n)}
                      className={`w-9 h-9 rounded-xl text-xs font-black cursor-pointer ${
                        tableNumber === n
                          ? 'bg-fuchsia-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-950/60 border border-fuchsia-200 dark:border-fuchsia-800 space-y-2">
                  <div className="text-2xl font-black text-fuchsia-950 dark:text-fuchsia-200 font-mono">
                    9 × {tableNumber} = {9 * tableNumber}!
                  </div>
                  <p className="text-xs text-fuchsia-900 dark:text-fuchsia-300 font-semibold">
                    Bend finger #{tableNumber}: You get {tableNumber - 1} fingers on left and{' '}
                    {10 - tableNumber} on right! Combine them = {9 * tableNumber}!
                  </p>
                </div>
              </div>
            )}

            {/* TOY 11: PATTERNS DETECTIVE */}
            {currentTopic.interactiveType === 'patterns' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Secret agent riddle: Find the missing number in the sequence! 🔍
                </div>
                <div className="flex items-center justify-center gap-3 text-xl font-mono font-black">
                  <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">5</span>
                  <span>→</span>
                  <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">10</span>
                  <span>→</span>
                  <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">15</span>
                  <span>→</span>
                  <span className="p-2 rounded-xl bg-amber-300 text-slate-950 animate-pulse">?</span>
                </div>
                <div className="flex justify-center gap-2 text-xs font-bold">
                  {[18, 20, 25].map(opt => (
                    <button
                      key={opt}
                      onClick={() =>
                        alert(
                          opt === 20
                            ? '🎉 BINGO! The pattern adds +5 each time! 15 + 5 = 20!'
                            : 'Try again! Look how much we jump from 5 to 10!'
                        )
                      }
                      className="px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold border border-amber-300 cursor-pointer"
                    >
                      Is it {opt}?
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TOY 12: MEASUREMENT BALANCE SCALE */}
            {currentTopic.interactiveType === 'measurement' && (
              <div className="w-full max-w-lg space-y-4">
                <div className="text-xs font-bold text-slate-500">
                  Who is heavier? Tap to compare items on the balance scale! ⚖️
                </div>
                <div className="grid grid-cols-2 gap-3 text-left text-xs">
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800">
                    <span className="font-bold text-teal-800 dark:text-teal-300 block">🪶 Tiny Feather</span>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 font-mono">1 Gram (super light!)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800">
                    <span className="font-bold text-teal-800 dark:text-teal-300 block">🐘 African Elephant</span>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 font-mono">4,000 Kilograms (heavy!)</p>
                  </div>
                </div>
                <div className="text-xs font-bold text-teal-800 dark:text-teal-300">
                  1 Kilogram (kg) = 1,000 Grams (g)!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5. FUN MATH SECRET / DID YOU KNOW? */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 dark:from-violet-950/40 dark:to-pink-950/40 border border-violet-200 dark:border-violet-900/60 flex items-start gap-3">
          <span className="p-2 rounded-xl bg-violet-200 dark:bg-violet-900 text-violet-800 dark:text-violet-200 shrink-0">
            <Lightbulb size={18} />
          </span>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-violet-800 dark:text-violet-300">
              Super Math Secret / Fun Fact 🤫
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mt-1 leading-relaxed">
              {currentTopic.mathSecret}
            </p>
          </div>
        </div>

        {/* 6. QUICK 1-QUESTION CHALLENGE (WITH REWARDS) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-emerald-300 dark:border-emerald-700 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                <HelpCircle size={16} />
              </span>
              <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Quick Kid Challenge (Win +5 Points! 🌟)
              </h4>
            </div>
            {quizAnswered !== null && (
              <button
                onClick={() => {
                  setQuizAnswered(null);
                  setShowExplanation(false);
                }}
                className="text-xs text-emerald-700 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
              >
                Try Again
              </button>
            )}
          </div>

          <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
            {currentTopic.quickQuiz.question}
          </p>

          {/* Quiz Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentTopic.quickQuiz.options.map((option, idx) => {
              const isSelected = quizAnswered === idx;
              const isCorrect = idx === currentTopic.quickQuiz.correctIndex;
              let btnStyle =
                'border-slate-200 dark:border-slate-700 hover:border-emerald-400 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200';

              if (quizAnswered !== null) {
                if (isCorrect) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-black';
                } else if (isSelected && !isCorrect) {
                  btnStyle =
                    'border-rose-400 bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={quizAnswered !== null}
                  onClick={() => handleQuizAnswer(idx)}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold text-left transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs font-mono">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {quizAnswered !== null && isCorrect && (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & explanation */}
          {showExplanation && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm space-y-1 animate-fadeIn">
              <div className="font-black text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <Smile size={16} className="text-amber-500" />
                <span>
                  {quizAnswered === currentTopic.quickQuiz.correctIndex
                    ? '🎉 HOORAY! You nailed it! +5 Learning Points awarded!'
                    : 'Good try! Check out the fun explanation below:'}
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentTopic.quickQuiz.explanation}
              </p>
            </div>
          )}
        </div>

        {/* 7. PREV & NEXT TOPIC FOOTER BAR */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handlePrevTopic}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={15} /> Previous Topic
          </button>

          <span className="text-xs text-slate-400 font-semibold">
            {currentIndex + 1} of {KIDS_MATH_TOPICS.length} Math Adventures
          </span>

          <button
            onClick={handleNextTopic}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold inline-flex items-center gap-2 shadow-sm cursor-pointer"
          >
            Next Topic <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
