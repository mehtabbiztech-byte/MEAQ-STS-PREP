import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  Trophy,
  Flame,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Zap,
  Award,
  Lightbulb,
  Heart,
  Smile,
  Globe,
  Layers,
  HelpCircle,
  Play,
  Shuffle,
  Eye,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  ALL_KIDS_GAMES,
  ALL_QUESTIONS_BY_GAME_ID,
  GAME_SET_TITLES,
  WORD_BUILDER_100,
  InteractiveGame,
  GameQuestion,
  WordTilePuzzle,
  Difficulty,
} from '../data/kids';
import {
  HABITAT_ITEMS,
  ECO_WASTE_ITEMS,
  SHAPE_ITEMS,
} from '../data/kidsGamesData';
import { kidSound } from '../utils/kidSoundEffects';

const PROGRESS_STORAGE_KEY = 'meqsa_kids_games_prog_v2';

interface SavedProgress {
  completedSets: Record<string, number[]>; // gameId -> setNumbers
  totalStars: number;
}

const loadSavedProgress = (): SavedProgress => {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // fallback
  }
  return { completedSets: {}, totalStars: 0 };
};

const saveProgressToStorage = (prog: SavedProgress) => {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(prog));
  } catch {
    // ignore
  }
};

export const KidsGames: React.FC = () => {
  const [selectedGameId, setSelectedGameId] = useState<string>(ALL_KIDS_GAMES[0].id);
  const [selectedSet, setSelectedSet] = useState<number>(1); // 1 to 10
  const [playMode, setPlayMode] = useState<'set' | 'marathon'>('set'); // 10 questions vs all 100
  const [soundOn, setSoundOn] = useState<boolean>(kidSound.isEnabled());

  // Saved progress (completed sets & stars)
  const [savedProg, setSavedProg] = useState<SavedProgress>(loadSavedProgress);

  // Active Game Progress State
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [sessionStars, setSessionStars] = useState<number>(0);
  const [isSetComplete, setIsSetComplete] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string; tip?: string } | null>(null);

  // Sub-mode for games that have both physical interactive mechanics & 100 questions (Animal World, Eco Hero, Shape Safari)
  const [subMechanicMode, setSubMechanicMode] = useState<'interactive' | 'questions'>('questions');

  // Word Builder Specific State (100 Words tile mechanic)
  const [wordTileIndex, setWordTileIndex] = useState<number>(0);
  const [assembledWord, setAssembledWord] = useState<string[]>([]);
  const [scrambledTray, setScrambledTray] = useState<{ id: string; letter: string }[]>([]);

  // Habitat Sorting State
  const [habitatIndex, setHabitatIndex] = useState<number>(0);

  // Eco Waste Sorting State
  const [wasteIndex, setWasteIndex] = useState<number>(0);

  // Shape Safari State
  const [activeShapeIndex, setActiveShapeIndex] = useState<number>(0);

  // Visual Bead Helper for Bubble Math
  const [showMathBeads, setShowMathBeads] = useState<boolean>(false);

  // Current Game Metadata
  const currentGame = useMemo<InteractiveGame>(() => {
    return ALL_KIDS_GAMES.find((g) => g.id === selectedGameId) || ALL_KIDS_GAMES[0];
  }, [selectedGameId]);

  // Set titles for the current game
  const setTitles = useMemo(() => {
    return GAME_SET_TITLES[selectedGameId] || Array.from({ length: 10 }, (_, i) => `Set ${i + 1}`);
  }, [selectedGameId]);

  const currentSetTitle = setTitles[selectedSet - 1] || `Level / Set ${selectedSet}`;

  // Difficulty for current set
  const currentSetDifficulty: Difficulty = useMemo(() => {
    if (selectedSet >= 8) return 'Hard';
    if (selectedSet >= 4) return 'Medium';
    return 'Easy';
  }, [selectedSet]);

  // All 100 Questions for the current game
  const all100Questions = useMemo<GameQuestion[]>(() => {
    return ALL_QUESTIONS_BY_GAME_ID[selectedGameId] || [];
  }, [selectedGameId]);

  // Active question pool based on playMode (Set 1-10: 10 questions; Marathon: all 100)
  const activeQuestions = useMemo<GameQuestion[]>(() => {
    if (playMode === 'marathon') {
      return all100Questions;
    }
    const setQ = all100Questions.filter((q) => q.setNumber === selectedSet);
    return setQ.length > 0 ? setQ : all100Questions.slice(0, 10);
  }, [all100Questions, playMode, selectedSet]);

  const currentQuestion: GameQuestion | undefined = activeQuestions[currentRound];

  // Active Word Builder puzzles based on Set (10 words per set, 100 total)
  const activeWordPuzzles = useMemo<WordTilePuzzle[]>(() => {
    if (playMode === 'marathon') {
      return WORD_BUILDER_100;
    }
    const setWords = WORD_BUILDER_100.filter((w) => w.setNumber === selectedSet);
    return setWords.length > 0 ? setWords : WORD_BUILDER_100.slice(0, 10);
  }, [selectedSet, playMode]);

  const currentWordPuzzle = activeWordPuzzles[wordTileIndex % activeWordPuzzles.length];

  // Scramble word tiles when puzzle changes
  useEffect(() => {
    if (currentGame.mechanic === 'word-tile' && currentWordPuzzle) {
      const letters = currentWordPuzzle.word.split('');
      const scrambled = [...letters]
        .map((l, idx) => ({ id: `${l}-${idx}-${Math.random()}`, letter: l }))
        .sort(() => Math.random() - 0.5);
      setScrambledTray(scrambled);
      setAssembledWord([]);
      setFeedback(null);
    }
  }, [currentWordPuzzle, currentGame.mechanic]);

  // Reset round state when switching games or sets
  const handleSelectGame = (gameId: string) => {
    setSelectedGameId(gameId);
    setSelectedSet(1);
    setCurrentRound(0);
    setScore(0);
    setStreak(0);
    setIsSetComplete(false);
    setSelectedOption(null);
    setFeedback(null);
    setWordTileIndex(0);
    setHabitatIndex(0);
    setWasteIndex(0);
    setSubMechanicMode(
      gameId === 'animal-world' || gameId === 'eco-hero' || gameId === 'shape-safari'
        ? 'questions'
        : 'questions'
    );
    kidSound.playPop();
  };

  const handleSelectSet = (setNum: number) => {
    setSelectedSet(setNum);
    setCurrentRound(0);
    setScore(0);
    setStreak(0);
    setIsSetComplete(false);
    setSelectedOption(null);
    setFeedback(null);
    setWordTileIndex(0);
    kidSound.playPop();
  };

  // Restart current set
  const handleRestartSet = () => {
    setCurrentRound(0);
    setScore(0);
    setStreak(0);
    setIsSetComplete(false);
    setSelectedOption(null);
    setFeedback(null);
    setWordTileIndex(0);
    setHabitatIndex(0);
    setWasteIndex(0);
    kidSound.playPop();
  };

  // Advance to next set
  const handleNextSet = () => {
    if (selectedSet < 10) {
      handleSelectSet(selectedSet + 1);
    } else {
      handleSelectSet(1);
    }
  };

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6', '#a855f7'],
      });
    } catch {
      // safe fallback
    }
  };

  // Mark set complete and persist
  const completeActiveSet = useCallback(
    (finalScore: number, totalCount: number) => {
      setIsSetComplete(true);
      kidSound.playFanfare();
      triggerConfetti();

      // Calculate earned stars
      const earned = finalScore >= totalCount * 0.8 ? 3 : finalScore >= totalCount * 0.5 ? 2 : 1;
      setSessionStars((s) => s + earned);

      setSavedProg((prev) => {
        const gameCompleted = prev.completedSets[selectedGameId] || [];
        const nextCompleted = gameCompleted.includes(selectedSet)
          ? gameCompleted
          : [...gameCompleted, selectedSet].sort((a, b) => a - b);
        const updated: SavedProgress = {
          completedSets: {
            ...prev.completedSets,
            [selectedGameId]: nextCompleted,
          },
          totalStars: prev.totalStars + earned,
        };
        saveProgressToStorage(updated);
        return updated;
      });
    },
    [selectedGameId, selectedSet]
  );

  // Sound Toggle Handler
  const handleToggleSound = () => {
    const newState = kidSound.toggleSound();
    setSoundOn(newState);
  };

  // Read Aloud handler
  const handleReadAloud = (text: string, lang: 'en' | 'ur' | 'sd' = 'en') => {
    kidSound.speak(text, lang);
  };

  // Standard Option Selection
  const handleSelectOption = (option: string) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(option);
    const isCorrect = option.trim() === currentQuestion.answer.trim();

    if (isCorrect) {
      kidSound.playSuccess();
      const newStreak = streak + 1;
      setStreak(newStreak);
      const newScore = score + 1;
      setScore(newScore);

      if (newStreak % 3 === 0) {
        setSessionStars((st) => st + 1);
        triggerConfetti();
      }

      setFeedback({
        isCorrect: true,
        message: 'Super! That is correct! ⭐',
        tip: currentQuestion.explanation,
      });
    } else {
      kidSound.playError();
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: `Good try! The correct answer is: ${currentQuestion.answer}`,
        tip: currentQuestion.explanation,
      });
    }
  };

  // Advance standard question
  const handleNextStandardQuestion = () => {
    kidSound.playPop();
    if (currentRound + 1 >= activeQuestions.length) {
      completeActiveSet(score + (feedback?.isCorrect ? 0 : 0), activeQuestions.length);
    } else {
      setCurrentRound((r) => r + 1);
      setSelectedOption(null);
      setFeedback(null);
    }
  };

  // Word Builder: Tap scrambled tile
  const handleTapTile = (item: { id: string; letter: string }) => {
    if (feedback?.isCorrect || !currentWordPuzzle) return;
    kidSound.playPop();
    setScrambledTray((prev) => prev.filter((t) => t.id !== item.id));
    const nextAssembled = [...assembledWord, item.letter];
    setAssembledWord(nextAssembled);

    // If assembled matches target length
    if (nextAssembled.length === currentWordPuzzle.word.length) {
      const built = nextAssembled.join('');
      if (built.toUpperCase() === currentWordPuzzle.word.toUpperCase()) {
        kidSound.playSuccess();
        setStreak((s) => s + 1);
        setScore((s) => s + 1);
        setSessionStars((st) => st + 1);
        setFeedback({
          isCorrect: true,
          message: `Awesome! You spelled "${currentWordPuzzle.word}"! 🎉`,
          tip: `${currentWordPuzzle.meaning}`,
        });
      } else {
        kidSound.playError();
        setStreak(0);
        setFeedback({
          isCorrect: false,
          message: `Almost! Check the spelling and try again.`,
          tip: `Hint: Starts with "${currentWordPuzzle.word[0]}"`,
        });
      }
    }
  };

  // Remove letter from assembled word
  const handleRemoveAssembledLetter = (index: number) => {
    if (feedback?.isCorrect) return;
    kidSound.playPop();
    const letterToRemove = assembledWord[index];
    const newAssembled = assembledWord.filter((_, idx) => idx !== index);
    setAssembledWord(newAssembled);
    setScrambledTray((prev) => [
      ...prev,
      { id: `${letterToRemove}-${Date.now()}-${Math.random()}`, letter: letterToRemove },
    ]);
    setFeedback(null);
  };

  // Reset Word Builder letter tray
  const handleResetWordTiles = () => {
    if (!currentWordPuzzle) return;
    kidSound.playPop();
    const letters = currentWordPuzzle.word.split('');
    const scrambled = [...letters]
      .map((l, idx) => ({ id: `${l}-${idx}-${Math.random()}`, letter: l }))
      .sort(() => Math.random() - 0.5);
    setScrambledTray(scrambled);
    setAssembledWord([]);
    setFeedback(null);
  };

  // Advance Word Builder
  const handleNextWordPuzzle = () => {
    kidSound.playPop();
    if (wordTileIndex + 1 >= activeWordPuzzles.length) {
      completeActiveSet(score, activeWordPuzzles.length);
    } else {
      setWordTileIndex((i) => i + 1);
      setFeedback(null);
    }
  };

  // Habitat Sorting Item
  const currentAnimal = HABITAT_ITEMS[habitatIndex % HABITAT_ITEMS.length];

  const handleSelectHabitat = (habitat: 'Ocean' | 'Jungle' | 'Desert' | 'Arctic') => {
    if (feedback?.isCorrect) return;
    const isCorrect = currentAnimal.correctHabitat === habitat;
    if (isCorrect) {
      kidSound.playSuccess();
      setStreak((s) => s + 1);
      setScore((s) => s + 1);
      setSessionStars((st) => st + 1);
      setFeedback({
        isCorrect: true,
        message: `Hooray! ${currentAnimal.emoji} ${currentAnimal.name} loves the ${habitat}! 🌟`,
        tip: currentAnimal.funFact,
      });
    } else {
      kidSound.playError();
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: `Oops! The ${currentAnimal.name} cannot survive in the ${habitat}.`,
        tip: `Hint: Think about what it eats and where it gets water!`,
      });
    }
  };

  const handleNextHabitat = () => {
    kidSound.playPop();
    if (habitatIndex + 1 >= HABITAT_ITEMS.length) {
      completeActiveSet(score, HABITAT_ITEMS.length);
    } else {
      setHabitatIndex((i) => i + 1);
      setFeedback(null);
    }
  };

  // Eco Waste Sorting Item
  const currentWaste = ECO_WASTE_ITEMS[wasteIndex % ECO_WASTE_ITEMS.length];

  const handleSelectBin = (bin: 'Recycle' | 'Compost' | 'Trash') => {
    if (feedback?.isCorrect) return;
    const isCorrect = currentWaste.correctBin === bin;
    if (isCorrect) {
      kidSound.playSuccess();
      setStreak((s) => s + 1);
      setScore((s) => s + 1);
      setSessionStars((st) => st + 1);
      setFeedback({
        isCorrect: true,
        message: `Great job! ${currentWaste.emoji} goes into ${bin}! 🌍`,
        tip: currentWaste.tip,
      });
    } else {
      kidSound.playError();
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: `Not quite! That item doesn't go in the ${bin} bin.`,
        tip: currentWaste.tip,
      });
    }
  };

  const handleNextWaste = () => {
    kidSound.playPop();
    if (wasteIndex + 1 >= ECO_WASTE_ITEMS.length) {
      completeActiveSet(score, ECO_WASTE_ITEMS.length);
    } else {
      setWasteIndex((i) => i + 1);
      setFeedback(null);
    }
  };

  // Completed sets for current game
  const completedSetsForCurrentGame = savedProg.completedSets[selectedGameId] || [];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>Play & Learn Super Studio • 1,200 Interactive Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight">
            12 Interactive Kids Games
          </h2>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl">
            100 Questions per game organized into 10 progressive levels and sets! Solve bubble math, assemble letter tiles, sort habitats, protect Earth & master Pakistan knowledge.
          </p>
        </div>

        {/* Global Controls: Sound, Streak, Stars */}
        <div className="relative z-10 flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleToggleSound}
            aria-label={soundOn ? 'Mute Sound Effects' : 'Unmute Sound Effects'}
            className={`p-3 rounded-2xl border backdrop-blur-md font-bold text-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-md ${
              soundOn
                ? 'bg-amber-400 text-slate-950 border-amber-300 hover:bg-amber-300'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
          >
            {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            <span className="hidden sm:inline text-xs font-extrabold">{soundOn ? 'Sound ON' : 'Muted'}</span>
          </button>

          <div className="px-3.5 py-2 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center gap-1.5 text-amber-300 font-extrabold text-sm shadow-md">
            <Star className="w-4 h-4 fill-amber-300" />
            <span>{savedProg.totalStars + sessionStars} Stars</span>
          </div>

          {streak > 1 && (
            <div className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 border border-orange-300/40 text-white font-black text-sm flex items-center gap-1 shadow-lg animate-bounce">
              <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>{streak}x Combo!</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. 12 Games Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {ALL_KIDS_GAMES.map((item) => {
          const isSelected = item.id === selectedGameId;
          const completedCount = (savedProg.completedSets[item.id] || []).length;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectGame(item.id)}
              className={`p-3.5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 ${
                isSelected
                  ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 shadow-md shadow-sky-500/20 ring-2 ring-sky-400/30'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-sky-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />}
                </div>
                <h4 className="font-black text-sm text-slate-900 dark:text-white leading-tight">
                  {item.name}
                </h4>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mt-0.5">
                  {item.subject}
                </span>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                <span>100 Qs (10 Sets)</span>
                {completedCount > 0 && (
                  <span className="text-amber-500 font-black">⭐ {completedCount}/10</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Progressive Level & Set Selection Toolbar */}
      <div className="bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Active Curriculum Track
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                  currentSetDifficulty === 'Easy'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : currentSetDifficulty === 'Medium'
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                }`}
              >
                {currentSetDifficulty} Difficulty
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {currentSetTitle}
            </h3>
          </div>

          {/* Mode switch: Set Mode vs Marathon Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setPlayMode('set');
                handleRestartSet();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                playMode === 'set'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              10-Question Set
            </button>
            <button
              onClick={() => {
                setPlayMode('marathon');
                handleRestartSet();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                playMode === 'marathon'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All 100 Marathon 🏃
            </button>
          </div>
        </div>

        {/* 10 Level Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <span>Select Level / Set (10 Levels × 10 Questions = 100 Total):</span>
            <span>
              Completed: <strong className="text-amber-500">{completedSetsForCurrentGame.length}</strong> / 10
            </span>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {Array.from({ length: 10 }, (_, i) => {
              const setNum = i + 1;
              const isCurrent = selectedSet === setNum && playMode === 'set';
              const isDone = completedSetsForCurrentGame.includes(setNum);
              return (
                <button
                  key={setNum}
                  onClick={() => {
                    setPlayMode('set');
                    handleSelectSet(setNum);
                  }}
                  className={`p-2 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center relative ${
                    isCurrent
                      ? 'border-sky-500 bg-sky-500 text-white shadow-md scale-105'
                      : isDone
                      ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:border-sky-300'
                  }`}
                >
                  <span className="text-xs font-black">Level {setNum}</span>
                  <span className="text-[10px] mt-0.5">
                    {isDone ? '⭐ Done' : setNum <= 3 ? '🌱 Easy' : setNum <= 7 ? '⚡ Med' : '🔥 Hard'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Mode Switch for Animal World, Eco Hero, and Shape Safari */}
        {(selectedGameId === 'animal-world' ||
          selectedGameId === 'eco-hero' ||
          selectedGameId === 'shape-safari') && (
          <div className="pt-2 flex items-center justify-center gap-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setSubMechanicMode('questions');
                handleRestartSet();
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                subMechanicMode === 'questions'
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>100 Interactive Questions Mode</span>
            </button>
            <button
              onClick={() => {
                setSubMechanicMode('interactive');
                handleRestartSet();
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                subMechanicMode === 'interactive'
                  ? 'bg-amber-400 text-slate-950 font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {selectedGameId === 'animal-world'
                  ? 'Habitat Sorting Arena'
                  : selectedGameId === 'eco-hero'
                  ? '3-Bin Sorter Arena'
                  : 'Interactive Shape Studio'}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* 4. ACTIVE GAME ARENA */}
      <section className="bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg min-h-[480px] relative overflow-hidden">
        {/* Arena Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <span
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${currentGame.iconBg}`}
            >
              {currentGame.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display">
                  {currentGame.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                  {currentGame.subject}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Badge: <span className="font-bold text-amber-600 dark:text-amber-400">🎖️ {currentGame.badgeTitle}</span> • {currentSetTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold">
            <div className="px-3.5 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-200 border border-sky-200 dark:border-sky-800">
              Score: <strong className="text-sky-600 dark:text-sky-400">{score}</strong> /{' '}
              {currentGame.mechanic === 'word-tile'
                ? activeWordPuzzles.length
                : subMechanicMode === 'interactive' && selectedGameId === 'animal-world'
                ? HABITAT_ITEMS.length
                : subMechanicMode === 'interactive' && selectedGameId === 'eco-hero'
                ? ECO_WASTE_ITEMS.length
                : activeQuestions.length}
            </div>

            <button
              onClick={handleRestartSet}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white transition cursor-pointer border border-slate-200 dark:border-slate-700"
              title="Restart Round"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4A. SET COMPLETE CELEBRATION VIEW */}
        {isSetComplete ? (
          <div className="text-center py-8 max-w-md mx-auto space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-300 flex items-center justify-center text-5xl shadow-xl animate-bounce">
              🏆
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-black uppercase">
                Level Complete!
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Outstanding Job!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                You completed <strong>{currentSetTitle}</strong> in <strong className="text-sky-600">{currentGame.name}</strong>!
              </p>
              <div className="flex items-center justify-center gap-1.5 text-amber-400 text-3xl pt-2">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-9 h-9 ${
                      i < (score >= 8 ? 3 : score >= 5 ? 2 : 1)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300 dark:text-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200">
              <strong>Reward Unlocked:</strong> 🎖️ {currentGame.badgeTitle} Level {selectedSet} Star! Final score: {score} correct!
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                onClick={handleRestartSet}
                className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-extrabold text-sm transition cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay Level</span>
              </button>

              {selectedSet < 10 ? (
                <button
                  onClick={handleNextSet}
                  className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <span>Play Level {selectedSet + 1}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    const currentIndex = ALL_KIDS_GAMES.findIndex((g) => g.id === selectedGameId);
                    const nextGame = ALL_KIDS_GAMES[(currentIndex + 1) % ALL_KIDS_GAMES.length];
                    handleSelectGame(nextGame.id);
                  }}
                  className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <span>Next Game! 🚀</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            {/* 4B. MECHANIC 1: WORD BUILDER (100 WORDS ACROSS 10 SETS) */}
            {currentGame.mechanic === 'word-tile' && currentWordPuzzle && (
              <div className="space-y-7 max-w-2xl mx-auto text-center py-2">
                {/* Round Progress & Phonics TTS */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-200 text-xs font-black">
                    <span>
                      Word {wordTileIndex + 1} of {activeWordPuzzles.length} in Level {selectedSet}
                    </span>
                    <span>•</span>
                    <button
                      onClick={() => handleReadAloud(currentWordPuzzle.word)}
                      className="hover:underline flex items-center gap-1 cursor-pointer text-violet-700 dark:text-violet-300 font-extrabold"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Hear Word</span>
                    </button>
                  </div>

                  <div className="text-6xl pt-2 animate-bounce">{currentWordPuzzle.emoji}</div>

                  <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
                    "{currentWordPuzzle.hint}"
                  </p>
                </div>

                {/* Target Word Blank Letter Slots */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                  {currentWordPuzzle.word.split('').map((_, idx) => {
                    const filledLetter = assembledWord[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => filledLetter && handleRemoveAssembledLetter(idx)}
                        className={`w-12 h-14 sm:w-16 sm:h-18 rounded-2xl border-3 flex items-center justify-center font-black text-2xl sm:text-3xl transition-all ${
                          filledLetter
                            ? 'bg-violet-600 text-white border-violet-700 shadow-md transform -translate-y-1 cursor-pointer hover:bg-violet-500'
                            : 'bg-slate-100 dark:bg-slate-800 border-dashed border-slate-300 dark:border-slate-700 text-transparent cursor-default'
                        }`}
                        title={filledLetter ? 'Tap to return letter' : 'Letter slot'}
                      >
                        {filledLetter || '_'}
                      </button>
                    );
                  })}
                </div>

                {/* Scrambled Letter Tiles Tray */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Tap letters in order to spell:
                  </p>

                  <div className="flex items-center justify-center gap-2.5 flex-wrap min-h-[60px]">
                    {scrambledTray.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          kidSound.speak(item.letter, 'en');
                          handleTapTile(item);
                        }}
                        className="w-12 h-14 sm:w-14 sm:h-16 rounded-2xl bg-amber-400 hover:bg-amber-300 border-2 border-amber-500 text-slate-950 font-black text-2xl sm:text-3xl shadow-md transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer"
                      >
                        {item.letter}
                      </button>
                    ))}
                    {scrambledTray.length === 0 && !feedback && (
                      <span className="text-xs text-slate-400">All letters placed! Checking...</span>
                    )}
                  </div>
                </div>

                {/* Feedback Box & Reset / Next Controls */}
                {feedback ? (
                  <div
                    className={`p-4 rounded-2xl border text-sm space-y-2 max-w-lg mx-auto animate-in fade-in ${
                      feedback.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <div className="font-extrabold flex items-center justify-center gap-1.5 text-base">
                      {feedback.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                      <span>{feedback.message}</span>
                    </div>
                    {feedback.tip && <p className="text-xs opacity-90">{feedback.tip}</p>}
                    <div className="pt-2">
                      {feedback.isCorrect ? (
                        <button
                          onClick={handleNextWordPuzzle}
                          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition cursor-pointer"
                        >
                          {wordTileIndex + 1 >= activeWordPuzzles.length ? 'Finish Level 🏆' : 'Next Word →'}
                        </button>
                      ) : (
                        <button
                          onClick={handleResetWordTiles}
                          className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs shadow-md transition cursor-pointer"
                        >
                          Try Again 🔄
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={handleResetWordTiles}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1.5"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span>Shuffle / Reset Tray</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 4C. MECHANIC 2: ANIMAL HABITAT SORTING ARENA (Interactive Mode) */}
            {selectedGameId === 'animal-world' && subMechanicMode === 'interactive' && (
              <div className="space-y-6 max-w-3xl mx-auto text-center py-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-200 text-xs font-black">
                    <span>
                      Animal {habitatIndex + 1} of {HABITAT_ITEMS.length}
                    </span>
                    <span>•</span>
                    <span>Tap the animal's natural home!</span>
                  </div>
                </div>

                {/* Animal Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 border-2 border-amber-200 dark:border-slate-700 shadow-sm max-w-md mx-auto space-y-2">
                  <div className="text-6xl sm:text-7xl animate-bounce">{currentAnimal.emoji}</div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                    {currentAnimal.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    "Where do I live and thrive in the wild?"
                  </p>
                </div>

                {/* 4 Interactive Habitat Zones */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { name: 'Ocean', emoji: '🌊', bg: 'bg-blue-500 hover:bg-blue-400', border: 'border-blue-600' },
                    { name: 'Jungle', emoji: '🌴', bg: 'bg-emerald-600 hover:bg-emerald-500', border: 'border-emerald-700' },
                    { name: 'Desert', emoji: '🏜️', bg: 'bg-amber-500 hover:bg-amber-400', border: 'border-amber-600' },
                    { name: 'Arctic', emoji: '❄️', bg: 'bg-cyan-500 hover:bg-cyan-400', border: 'border-cyan-600' },
                  ].map((hab) => (
                    <button
                      key={hab.name}
                      onClick={() => handleSelectHabitat(hab.name as any)}
                      className={`p-4 rounded-2xl text-white font-extrabold text-sm border-2 shadow-md transform hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center gap-1.5 ${hab.bg} ${hab.border}`}
                    >
                      <span className="text-3xl">{hab.emoji}</span>
                      <span>{hab.name}</span>
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {feedback && (
                  <div
                    className={`p-4 rounded-2xl border text-sm space-y-2 max-w-lg mx-auto animate-in fade-in ${
                      feedback.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <div className="font-extrabold flex items-center justify-center gap-1.5 text-base">
                      {feedback.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                      <span>{feedback.message}</span>
                    </div>
                    {feedback.tip && <p className="text-xs opacity-90">{feedback.tip}</p>}
                    {feedback.isCorrect && (
                      <button
                        onClick={handleNextHabitat}
                        className="mt-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition cursor-pointer"
                      >
                        Next Animal →
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* 4D. MECHANIC 3: ECO WASTE SORTING BINS (Interactive Mode) */}
            {selectedGameId === 'eco-hero' && subMechanicMode === 'interactive' && (
              <div className="space-y-6 max-w-3xl mx-auto text-center py-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-100 dark:bg-lime-950 text-lime-800 dark:text-lime-200 text-xs font-black">
                    <span>
                      Waste Item {wasteIndex + 1} of {ECO_WASTE_ITEMS.length}
                    </span>
                    <span>•</span>
                    <span>Sort into the correct bin to protect Earth!</span>
                  </div>
                </div>

                {/* Discarded Item Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 border-2 border-lime-300 dark:border-slate-700 shadow-sm max-w-md mx-auto space-y-2">
                  <div className="text-6xl sm:text-7xl animate-bounce">{currentWaste.emoji}</div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                    {currentWaste.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    "Which bin should you throw me into?"
                  </p>
                </div>

                {/* 3 Interactive Sorting Bins */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-2xl mx-auto">
                  <button
                    onClick={() => handleSelectBin('Recycle')}
                    className="p-5 rounded-2xl bg-blue-600 hover:bg-blue-500 border-3 border-blue-700 text-white font-black text-sm shadow-md transform hover:-translate-y-1 transition-transform cursor-pointer flex flex-col items-center gap-2"
                  >
                    <span className="text-4xl">♻️</span>
                    <span>Blue Recycle Bin</span>
                    <span className="text-[10px] font-medium opacity-90">Paper, bottles, clean cans</span>
                  </button>

                  <button
                    onClick={() => handleSelectBin('Compost')}
                    className="p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 border-3 border-emerald-700 text-white font-black text-sm shadow-md transform hover:-translate-y-1 transition-transform cursor-pointer flex flex-col items-center gap-2"
                  >
                    <span className="text-4xl">🍎</span>
                    <span>Green Compost Bin</span>
                    <span className="text-[10px] font-medium opacity-90">Food scraps, peels, tea</span>
                  </button>

                  <button
                    onClick={() => handleSelectBin('Trash')}
                    className="p-5 rounded-2xl bg-slate-700 hover:bg-slate-600 border-3 border-slate-800 text-white font-black text-sm shadow-md transform hover:-translate-y-1 transition-transform cursor-pointer flex flex-col items-center gap-2"
                  >
                    <span className="text-4xl">🗑️</span>
                    <span>Landfill Trash Bin</span>
                    <span className="text-[10px] font-medium opacity-90">Dirty wipes & non-recyclables</span>
                  </button>
                </div>

                {/* Feedback */}
                {feedback && (
                  <div
                    className={`p-4 rounded-2xl border text-sm space-y-2 max-w-lg mx-auto animate-in fade-in ${
                      feedback.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <div className="font-extrabold flex items-center justify-center gap-1.5 text-base">
                      {feedback.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                      <span>{feedback.message}</span>
                    </div>
                    {feedback.tip && <p className="text-xs opacity-90">{feedback.tip}</p>}
                    {feedback.isCorrect && (
                      <button
                        onClick={handleNextWaste}
                        className="mt-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition cursor-pointer"
                      >
                        Next Item →
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* 4E. MECHANIC 4: SHAPE SAFARI SVG STUDIO (Interactive Mode) */}
            {selectedGameId === 'shape-safari' && subMechanicMode === 'interactive' && (
              <div className="space-y-6 max-w-3xl mx-auto text-center py-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 text-xs font-black">
                  <span>Explore 2D & 3D Shapes</span>
                  <span>•</span>
                  <span>Tap shapes to inspect sides & corners!</span>
                </div>

                {(() => {
                  const shape = SHAPE_ITEMS[activeShapeIndex % SHAPE_ITEMS.length];
                  return (
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-indigo-200 dark:border-slate-700 shadow-sm max-w-md mx-auto space-y-4">
                      <div className="w-40 h-40 mx-auto flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path
                            d={shape.svgPath}
                            className={`stroke-2 transition-all duration-300 ${shape.color}`}
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                          {shape.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {shape.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          Straight Sides: <span className="text-indigo-600 dark:text-indigo-400 text-sm font-black">{shape.sides}</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          Corners (Vertices): <span className="text-pink-600 dark:text-pink-400 text-sm font-black">{shape.corners}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
                  {SHAPE_ITEMS.map((s, idx) => (
                    <button
                      key={s.name}
                      onClick={() => {
                        setActiveShapeIndex(idx);
                        kidSound.playPop();
                      }}
                      className={`px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                        activeShapeIndex === idx
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-md scale-105'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 4F. MECHANIC 5: BUBBLE MATH & STANDARD 100-QUESTIONS ACROSS ALL 12 GAMES */}
            {currentGame.mechanic !== 'word-tile' &&
              (subMechanicMode === 'questions' ||
                (selectedGameId !== 'animal-world' &&
                  selectedGameId !== 'eco-hero' &&
                  selectedGameId !== 'shape-safari')) &&
              currentQuestion && (
                <div className="space-y-6 max-w-2xl mx-auto text-center py-2">
                  {/* Round Progress & Read Aloud Audio */}
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                      Question {currentRound + 1} of {activeQuestions.length} • Level {selectedSet}
                    </span>
                    <div className="flex items-center gap-2">
                      {currentGame.mechanic === 'bubble-math' && (
                        <button
                          onClick={() => setShowMathBeads(!showMathBeads)}
                          className="px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200 hover:underline flex items-center gap-1 cursor-pointer font-extrabold"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{showMathBeads ? 'Hide Beads' : 'Math Beads 🧮'}</span>
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleReadAloud(
                            currentQuestion.speechText || currentQuestion.prompt,
                            currentQuestion.lang
                          )
                        }
                        className="text-sky-600 dark:text-sky-400 font-extrabold flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Read Aloud 🔊</span>
                      </button>
                    </div>
                  </div>

                  {/* Math Visual Bead Counter for Bubble Math */}
                  {currentGame.mechanic === 'bubble-math' && showMathBeads && (
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 rounded-2xl text-xs space-y-1">
                      <span className="font-bold text-cyan-900 dark:text-cyan-200">
                        Counting Beads Visualizer:
                      </span>
                      <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                        {Array.from({ length: Math.min(20, (currentRound + 1) * 2) }).map((_, bIdx) => (
                          <span
                            key={bIdx}
                            className="w-5 h-5 rounded-full bg-cyan-500 text-white font-black text-[10px] flex items-center justify-center shadow-sm"
                          >
                            {bIdx + 1}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Question Prompt */}
                  <div className="space-y-3">
                    <h3
                      className={`text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight ${
                        currentQuestion.lang === 'ur' || currentQuestion.lang === 'sd'
                          ? 'font-urdu text-3xl sm:text-4xl'
                          : ''
                      }`}
                    >
                      {currentQuestion.prompt}
                    </h3>

                    {currentQuestion.visualHint && (
                      <div className="inline-block px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm font-extrabold">
                        {currentQuestion.visualHint}
                      </div>
                    )}
                  </div>

                  {/* Options Grid (Bubble Style for Math, Card Style for Others) */}
                  <div
                    className={`grid gap-3 pt-2 ${
                      currentQuestion.options.length <= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
                    }`}
                  >
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedOption === option;
                      const isCorrect = option.trim() === currentQuestion.answer.trim();

                      let btnStyle =
                        'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40';

                      if (selectedOption !== null) {
                        if (isCorrect) {
                          btnStyle =
                            'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-black ring-2 ring-emerald-400';
                        } else if (isSelected && !isCorrect) {
                          btnStyle =
                            'border-rose-500 bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200 font-bold';
                        } else {
                          btnStyle =
                            'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={option}
                          disabled={selectedOption !== null}
                          onClick={() => handleSelectOption(option)}
                          className={`p-4 sm:p-5 border-3 text-lg sm:text-xl font-black transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 transform active:scale-95 ${
                            currentGame.mechanic === 'bubble-math'
                              ? 'rounded-full shadow-md hover:scale-105 active:scale-95'
                              : 'rounded-2xl shadow-sm hover:scale-[1.02]'
                          } ${btnStyle}`}
                        >
                          {currentGame.mechanic === 'bubble-math' && (
                            <span className="text-xl animate-pulse">🫧</span>
                          )}
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Box & Next Button */}
                  {feedback && (
                    <div
                      className={`p-5 rounded-2xl border text-sm space-y-2 max-w-lg mx-auto animate-in fade-in ${
                        feedback.isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                          : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                      }`}
                    >
                      <div className="font-black flex items-center justify-center gap-1.5 text-base">
                        {feedback.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                        <span>{feedback.message}</span>
                      </div>
                      {feedback.tip && (
                        <p className="text-xs opacity-90 leading-relaxed">{feedback.tip}</p>
                      )}
                      <div className="pt-2">
                        <button
                          onClick={handleNextStandardQuestion}
                          className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition cursor-pointer"
                        >
                          {currentRound + 1 >= activeQuestions.length
                            ? 'Finish Level & Collect Stars 🏆'
                            : 'Next Question →'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
          </div>
        )}
      </section>
    </div>
  );
};
