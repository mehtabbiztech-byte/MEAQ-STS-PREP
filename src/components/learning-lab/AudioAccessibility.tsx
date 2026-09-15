import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Printer,
  FileText,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Headphones,
  Sliders,
  Download,
} from 'lucide-react';
import { FORMULAS_DATA, TIMELINES_DATA, MNEMONICS_DATA, getStoredMistakes } from '../../lib/adaptiveLearning';
import { MCQS_DATA } from '../../data/mcqsData';

export const AudioAccessibility: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audio' | 'printable'>('audio');

  // Audio Flashcards State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [speechSupported, setSpeechSupported] = useState(true);

  // Audio flashcard deck (first 10 high-yield questions)
  const deck = MCQS_DATA.slice(0, 10);
  const currentCard = deck[currentIndex];

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackRate;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handlePlayCard = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    const fullText = `Question: ${currentCard.question}. Options are: ${currentCard.options.join(
      ', '
    )}. Correct answer is: ${currentCard.options[currentCard.correctIndex]}. Explanation: ${
      currentCard.explanation
    }`;
    speakText(fullText);
  };

  const handleNextCard = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrevCard = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleTriggerPrint = () => {
    window.print();
  };

  const mistakes = getStoredMistakes();

  return (
    <div className="space-y-6">
      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('audio')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'audio'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Audio Flashcards & Commute Mode</span>
          </button>

          <button
            onClick={() => setActiveTab('printable')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'printable'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>Printable Exam Hall Cheat-Sheet</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
          Pillar 5: Audio & Accessibility Enhancements
        </span>
      </div>

      {/* 5A. AUDIO FLASHCARDS & COMMUTE MODE */}
      {activeTab === 'audio' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white border border-teal-500/30 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-black border border-teal-500/30 uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                  <Volume2 className="w-3.5 h-3.5" /> Hands-Free Audio Engine
                </span>
                <h3 className="text-2xl font-black">Commute-Friendly Audio Flashcards</h3>
                <p className="text-xs sm:text-sm text-teal-200 mt-1 max-w-xl">
                  Listen to past paper MCQs with step-by-step spoken explanations while walking or traveling.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal-200">Speed:</span>
                {[0.8, 1.0, 1.25].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => {
                      setPlaybackRate(rate);
                      if (isPlaying) {
                        window.speechSynthesis.cancel();
                        setIsPlaying(false);
                      }
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-black transition cursor-pointer ${
                      playbackRate === rate
                        ? 'bg-teal-400 text-teal-950'
                        : 'bg-white/10 text-teal-200 hover:bg-white/20'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Flashcard Player Box */}
          <div className="p-6 sm:p-8 rounded-3xl border-2 border-teal-200 dark:border-teal-900/60 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                Audio Card #{currentIndex + 1} of {deck.length}
              </span>
              <span className="text-slate-400 font-bold">{currentCard.category}</span>
            </div>

            <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-relaxed">
              {currentCard.question}
            </h4>

            {/* Answer Display */}
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-2">
              <div className="flex items-center gap-2 font-black text-teal-900 dark:text-teal-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Correct Option: {currentCard.options[currentCard.correctIndex]}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentCard.explanation}
              </p>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={handlePrevCard}
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer transition"
                title="Previous Card"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={handlePlayCard}
                className={`px-8 py-3.5 rounded-2xl font-black text-sm text-white shadow-lg transition cursor-pointer flex items-center gap-2 ${
                  isPlaying ? 'bg-amber-600 hover:bg-amber-500' : 'bg-teal-600 hover:bg-teal-500'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Pause Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-white" />
                    <span>Listen Spoken Card</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNextCard}
                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer transition"
                title="Next Card"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {!speechSupported && (
              <p className="text-center text-xs text-rose-500">
                Web Speech API is not supported on this browser. Try opening in Chrome, Safari, or Edge.
              </p>
            )}
          </div>
        </div>
      )}

      {/* 5B. PRINTABLE PERSONALIZED REVISION PDF / PRINT VIEW */}
      {activeTab === 'printable' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Printer className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <span>1-Click Printable Last-Minute Exam Sheet</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Formatted specifically for standard A4 printing. Take this physical paper with you outside the exam center.
              </p>
            </div>

            <button
              onClick={handleTriggerPrint}
              className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs shadow-md hover:opacity-90 transition cursor-pointer flex items-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>

          {/* Printable Sheet Preview Box */}
          <div
            id="printable-revision-sheet"
            className="p-8 rounded-3xl border border-slate-300 bg-white text-slate-900 space-y-6 shadow-sm font-sans"
          >
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  MATB STS IBA & SPSC HIGH-YIELD REVISION SHEET
                </h2>
                <p className="text-xs text-slate-600 font-bold mt-1">
                  Confidential Candidate Exam-Hall Memory Booster • Generated for 2026 Test Sessions
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">
                Date: {new Date().toLocaleDateString()}
              </span>
            </div>

            {/* Section 1: Quantitative Formulas */}
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider bg-slate-100 p-2 rounded-lg text-slate-900">
                1. Golden Quantitative Formulas (Speed / Work / Percentages)
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {FORMULAS_DATA.slice(0, 4).map((f) => (
                  <div key={f.id} className="p-3 border rounded-xl space-y-1">
                    <strong className="block font-black text-slate-950">{f.title}</strong>
                    <code className="block font-bold text-indigo-700">{f.formula}</code>
                    <p className="text-[11px] text-slate-600">{f.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Constitutional & Pakistan Studies Timelines */}
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider bg-slate-100 p-2 rounded-lg text-slate-900">
                2. Key Constitutional Chronology Checklist (1857 - 2018)
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {TIMELINES_DATA.slice(0, 8).map((t, i) => (
                  <div key={i} className="flex gap-2 items-baseline">
                    <span className="font-mono font-black text-slate-900 shrink-0">{t.year}:</span>
                    <span className="text-slate-700">{t.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Verified Top Scorer Mnemonics */}
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider bg-slate-100 p-2 rounded-lg text-slate-900">
                3. Essential Memory Mnemonics
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {MNEMONICS_DATA.slice(0, 4).map((m) => (
                  <div key={m.id} className="p-2.5 border rounded-lg space-y-0.5">
                    <span className="font-black text-slate-900">{m.title}</span>
                    <p className="font-bold text-fuchsia-700">{m.mnemonic}</p>
                    <p className="text-[10px] text-slate-600">{m.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Pending Mistakes from Vault */}
            {mistakes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <h3 className="text-xs font-black uppercase tracking-wider text-rose-700">
                  4. Your Personal High-Risk Mistake Items to Re-Verify
                </h3>
                <div className="space-y-1.5 text-[11px]">
                  {mistakes.slice(0, 3).map((m) => (
                    <div key={m.id} className="flex items-start gap-2">
                      <span className="font-bold text-rose-600 shrink-0">⚠️ {m.category}:</span>
                      <span className="text-slate-800">
                        {m.question} → <strong>Correct Answer: {m.correctAnswer}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
