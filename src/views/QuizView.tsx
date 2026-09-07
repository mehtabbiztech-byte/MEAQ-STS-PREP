import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Trophy, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Flag, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Flame,
  Bookmark,
  Share2,
  Cloud,
  LogIn
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MCQS_DATA } from '../data/mcqsData';
import { POPULAR_CATEGORIES } from '../data/categoriesData';
import { MCQ, QuizAttempt } from '../types';
import { AiTutorSection } from '../components/AiTutorSection';

export const QuizView: React.FC = () => {
  const { 
    user,
    setAuthModalOpen,
    recordQuizAttempt, 
    toggleBookmark, 
    isBookmarked,
    userProfile,
    setTab
  } = useApp();

  // Quiz Configuration State
  const [quizState, setQuizState] = useState<'config' | 'in-progress' | 'results'>('config');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [negativeMarking, setNegativeMarking] = useState<boolean>(true);
  const [timeMinutes, setTimeMinutes] = useState<number>(10);

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState<MCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(600);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);

  // Results State
  const [completedAttempt, setCompletedAttempt] = useState<QuizAttempt | null>(null);

  // Start Quiz Handler
  const startQuiz = () => {
    let pool = [...MCQS_DATA];
    if (selectedCategory !== 'all') {
      pool = pool.filter((m) => m.category === selectedCategory);
      if (pool.length < questionCount) {
        pool = [...MCQS_DATA]; // Fallback to all if pool too small
      }
    }

    // Shuffle pool
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, questionCount);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    const totalSecs = timeMinutes * 60;
    setSecondsRemaining(totalSecs);
    setQuizStartTime(Date.now());
    setQuizState('in-progress');
  };

  // Timer Tick
  useEffect(() => {
    if (quizState !== 'in-progress') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, activeQuestions, userAnswers]);

  // Submit Quiz Handler
  const handleSubmitQuiz = () => {
    const timeSpent = Math.max(1, Math.floor((Date.now() - quizStartTime) / 1000));
    let rawScore = 0;
    const incorrectList: { mcq: MCQ; selectedIndex: number }[] = [];

    activeQuestions.forEach((mcq, idx) => {
      const selected = userAnswers[idx];
      if (selected !== undefined) {
        if (selected === mcq.correctIndex) {
          rawScore += 1;
        } else {
          if (negativeMarking) {
            rawScore -= 0.25;
          }
          incorrectList.push({ mcq, selectedIndex: selected });
        }
      } else {
        // Unanswered
        incorrectList.push({ mcq, selectedIndex: -1 });
      }
    });

    const finalScore = Math.max(0, Number(rawScore.toFixed(2)));

    const attempt: QuizAttempt = {
      id: `attempt-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      title: `${selectedCategory === 'all' ? 'Full Competitive Mock' : selectedCategory.toUpperCase()} Quiz`,
      totalQuestions: activeQuestions.length,
      score: finalScore,
      timeSpentSeconds: timeSpent,
      incorrectQuestions: incorrectList,
    };

    recordQuizAttempt(attempt);
    setCompletedAttempt(attempt);
    setQuizState('results');

    // Confetti celebration if score is good (>= 50%)
    if (finalScore >= activeQuestions.length * 0.5) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Safe fallback
      }
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 1. CONFIGURATION VIEW */}
      {quizState === 'config' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Real Exam Simulator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              Timed Online Competitive Quiz
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Practice under exact examination conditions with timer countdown, negative marking penalty, and instant mistake notebook generation.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6">
            
            {/* Choose Subject */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                1. Select Subject Discipline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                    selectedCategory === 'all'
                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Mixed Grand Mock (All Subjects)
                </button>
                {POPULAR_CATEGORIES.slice(0, 7).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                      selectedCategory === cat.slug
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  2. Number of Questions
                </label>
                <div className="flex gap-2">
                  {[5, 10, 15, 20].map((num) => (
                    <button
                      key={num}
                      onClick={() => setQuestionCount(num)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        questionCount === num
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-2xs'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {num} MCQs
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  3. Time Limit
                </label>
                <div className="flex gap-2">
                  {[5, 10, 15, 20].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setTimeMinutes(mins)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        timeMinutes === mins
                          ? 'border-emerald-600 bg-emerald-600 text-white shadow-2xs'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {mins} Mins
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Negative Marking Toggle */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>PPSC / Commission Negative Marking (-0.25)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">Standard</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Deduct 0.25 marks for every incorrect answer (identical to PPSC, SPSC, and PMS exams).
                </p>
              </div>

              <button
                type="button"
                onClick={() => setNegativeMarking((prev) => !prev)}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                  negativeMarking ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-white shadow-xs transform transition-transform ${
                    negativeMarking ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Launch Button */}
            <div className="pt-4">
              <button
                id="start-quiz-btn"
                onClick={startQuiz}
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Start Timed Mock Exam Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. IN-PROGRESS QUIZ VIEW */}
      {quizState === 'in-progress' && activeQuestions.length > 0 && (
        <div className="space-y-6 animate-in fade-in duration-150">
          
          {/* Quiz Top Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Competitive Mock Test
              </div>
              <div className="font-extrabold text-base text-slate-900 dark:text-white">
                Question {currentIndex + 1} of {activeQuestions.length}
              </div>
            </div>

            {/* Countdown Clock */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono font-bold text-base ${
              secondsRemaining < 60
                ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-600 animate-pulse'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={handleSubmitQuiz}
              className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              Submit Test
            </button>
          </div>

          {/* Current Question Box */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-4 text-xs">
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {activeQuestions[currentIndex].category.replace('-', ' ')}
              </span>

              <button
                onClick={() => {
                  setFlaggedQuestions((prev) => ({
                    ...prev,
                    [currentIndex]: !prev[currentIndex],
                  }));
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                  flaggedQuestions[currentIndex]
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-700'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedQuestions[currentIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
              {activeQuestions[currentIndex].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {activeQuestions[currentIndex].options.map((opt, idx) => {
                const isSelected = userAnswers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setUserAnswers((prev) => ({ ...prev, [currentIndex]: idx }));
                    }}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500 font-bold'
                        : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                        isSelected 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-xs text-slate-400 font-medium">
                {Object.keys(userAnswers).length} of {activeQuestions.length} Answered
              </div>

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition cursor-pointer"
                >
                  Complete Test
                </button>
              )}
            </div>
          </div>

          {/* Question Jump Grid */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Question Navigator
            </div>
            <div className="flex flex-wrap gap-2">
              {activeQuestions.map((_, idx) => {
                const isCurrent = currentIndex === idx;
                const isAnswered = userAnswers[idx] !== undefined;
                const isFlagged = flaggedQuestions[idx];

                let cellStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

                if (isCurrent) {
                  cellStyle = 'ring-2 ring-emerald-500 bg-white dark:bg-slate-900 font-extrabold text-emerald-600';
                } else if (isFlagged) {
                  cellStyle = 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-400';
                } else if (isAnswered) {
                  cellStyle = 'bg-emerald-600 text-white border-emerald-600';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-9 h-9 rounded-xl border text-xs font-bold transition flex items-center justify-center cursor-pointer ${cellStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* 3. RESULTS VIEW */}
      {quizState === 'results' && completedAttempt && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Score Header Card */}
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-xl">
            <div className="text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Mock Examination Results
              </h2>
              <p className="text-emerald-200 text-xs sm:text-sm mt-1">
                {completedAttempt.title} • Completed in {Math.floor(completedAttempt.timeSpentSeconds / 60)}m {completedAttempt.timeSpentSeconds % 60}s
              </p>

              {/* Score Display */}
              <div className="mt-6 flex items-center justify-center gap-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-display">
                    {completedAttempt.score} <span className="text-2xl text-emerald-400">/ {completedAttempt.totalQuestions}</span>
                  </div>
                  <div className="text-xs text-emerald-300 uppercase font-semibold mt-1">
                    Final Marks Earned
                  </div>
                </div>
              </div>

              {/* Cloud Sync & Backend Score Validation Badge */}
              <div className="mt-5 flex justify-center">
                {user ? (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-2xs">
                    <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Backend Validated • Synced to Cloud Firestore</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs shadow-2xs">
                    <span>Stored locally in browser (Guest)</span>
                    <button
                      type="button"
                      onClick={() => setAuthModalOpen(true)}
                      className="text-emerald-400 hover:text-emerald-300 font-bold underline cursor-pointer"
                    >
                      Sign In to sync history
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setQuizState('config')}
                  className="px-6 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Take Another Quiz</span>
                </button>

                <button
                  onClick={() => {
                    setTab('mistakes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm border border-emerald-500/40 transition cursor-pointer"
                >
                  Open Mistakes Notebook ({userProfile.mistakeIds.length})
                </button>
              </div>
            </div>
          </div>

          {/* Question-by-Question Review */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Detailed Question Analysis & Explanations
            </h3>

            {activeQuestions.map((mcq, idx) => {
              const userPick = userAnswers[idx];
              const isCorrect = userPick === mcq.correctIndex;
              const isAnswered = userPick !== undefined;

              return (
                <div
                  key={mcq.id}
                  className={`p-5 rounded-2xl border transition ${
                    isCorrect
                      ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-800'
                      : 'bg-white dark:bg-slate-900 border-rose-300 dark:border-rose-900'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-extrabold text-slate-500">
                      Question {idx + 1}
                    </span>

                    <span className={`px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>+1.00 Correct</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>{isAnswered ? '-0.25 Incorrect' : 'Unanswered (0.00)'}</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-bold text-base text-slate-900 dark:text-white mb-3">
                    {mcq.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    {mcq.options.map((opt, oIdx) => {
                      let style = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300';
                      if (oIdx === mcq.correctIndex) {
                        style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-100 font-bold ring-1 ring-emerald-500';
                      } else if (userPick === oIdx && !isCorrect) {
                        style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-950 dark:text-rose-100 font-bold';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-lg border flex items-center gap-2 ${style}`}>
                          <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                          {oIdx === mcq.correctIndex && (
                            <span className="ml-auto text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Correct</span>
                          )}
                          {userPick === oIdx && !isCorrect && (
                            <span className="ml-auto text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase">Your Choice</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">Official Explanation:</strong>
                    {mcq.explanation}
                  </div>

                  {/* Gemini AI Detailed Explanation & Doubt Assistant */}
                  <AiTutorSection mcq={mcq} examContext={userProfile.targetExam} />
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
