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
  Lightbulb,
  Wand2,
  Shuffle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_ENGLISH_TOPICS, EnglishTopic } from '../data/kidsEnglishTopics';
import confetti from 'canvas-confetti';

interface KidsEnglishFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsEnglishFun: React.FC<KidsEnglishFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_ENGLISH_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground interactive states
  // 1. Phonics & Vowels
  const [selectedVowel, setSelectedVowel] = useState<'A' | 'E' | 'I' | 'O' | 'U'>('A');

  // 2. Nouns Sorter
  const [nounItemIdx, setNounItemIdx] = useState<number>(0);
  const [nounSortedHistory, setNounSortedHistory] = useState<{ word: string; category: string; correct: boolean }[]>([]);
  const nounTestWords = [
    { word: 'Doctor Ali', type: 'Person', emoji: '👨‍⚕️' },
    { word: 'Lahore Zoo', type: 'Place', emoji: '🦁' },
    { word: 'Peacock', type: 'Animal', emoji: '🦚' },
    { word: 'Football', type: 'Thing', emoji: '⚽' },
    { word: 'Teacher Sara', type: 'Person', emoji: '👩‍🏫' },
    { word: 'Murree Hills', type: 'Place', emoji: '🏔️' },
    { word: 'Pencil Box', type: 'Thing', emoji: '✏️' },
    { word: 'Playful Kitten', type: 'Animal', emoji: '🐱' }
  ];

  // 3. Verbs Action
  const [currentAction, setCurrentAction] = useState<string>('runs');

  // 4. Adjectives Transformer
  const [chosenAdjectives, setChosenAdjectives] = useState<string[]>(['gigantic', 'golden', 'sparkly']);

  // 5. Pronouns Swap
  const [pronounSentenceIdx, setPronounSentenceIdx] = useState<number>(0);
  const [userSelectedPronoun, setUserSelectedPronoun] = useState<string | null>(null);

  // 6. Singular & Plural Wand
  const [pluralCount, setPluralCount] = useState<number>(1);
  const [selectedItemType, setSelectedItemType] = useState<'cat' | 'box' | 'butterfly' | 'tooth'>('cat');

  // 7. Prepositions Box
  const [prepositionPosition, setPrepositionPosition] = useState<'in' | 'on' | 'under' | 'behind' | 'between'>('on');

  // 8. Punctuation Fixer
  const [punctuationInput, setPunctuationInput] = useState<'.' | '?' | '!' | null>(null);

  // 9. Rhymes Matcher
  const [rhymeFamily, setRhymeFamily] = useState<'-at' | '-og' | '-ing' | '-all'>('-at');

  // 10. Opposites Card
  const [flippedOpposites, setFlippedOpposites] = useState<Record<number, boolean>>({});

  // 11. Articles Guard
  const [articleWordIdx, setArticleWordIdx] = useState<number>(0);
  const [articleResult, setArticleResult] = useState<string | null>(null);
  const articleTestWords = [
    { word: 'apple', startsWithVowel: true, emoji: '🍎' },
    { word: 'bicycle', startsWithVowel: false, emoji: '🚲' },
    { word: 'elephant', startsWithVowel: true, emoji: '🐘' },
    { word: 'football', startsWithVowel: false, emoji: '⚽' },
    { word: 'umbrella', startsWithVowel: true, emoji: '☂️' },
    { word: 'mango', startsWithVowel: false, emoji: '🥭' }
  ];

  // 12. Sentence Builder Train
  const [trainSubject, setTrainSubject] = useState<number>(0);
  const [trainVerb, setTrainVerb] = useState<number>(0);
  const [trainObject, setTrainObject] = useState<number>(0);

  const subjects = [
    { text: 'The brave astronaut 👨‍🚀', clean: 'The brave astronaut' },
    { text: 'A playful puppy 🐶', clean: 'A playful puppy' },
    { text: 'Little Amina 👧', clean: 'Little Amina' },
    { text: 'The speedy cheetah 🐆', clean: 'The speedy cheetah' }
  ];
  const verbs = [
    { text: 'explored 🚀', clean: 'explored' },
    { text: 'baked 🧁', clean: 'baked' },
    { text: 'discovered 💎', clean: 'discovered' },
    { text: 'chased ⚽', clean: 'chased' }
  ];
  const objects = [
    { text: 'the glowing red planet 🪐', clean: 'the glowing red planet' },
    { text: 'a secret treasure map 🗺️', clean: 'a secret treasure map' },
    { text: 'a tray of warm cookies 🍪', clean: 'a tray of warm cookies' },
    { text: 'a shiny bouncy ball 🔴', clean: 'a shiny bouncy ball' }
  ];

  // 13. Sight Words
  const [sightWordIdx, setSightWordIdx] = useState<number>(0);
  const sightWordsList = [
    { word: 'BECAUSE', sample: 'I cheered because we scored a goal!', icon: '🎯' },
    { word: 'THEY', sample: 'They are building a magnificent sandcastle.', icon: '🏰' },
    { word: 'WHERE', sample: 'Where did you put the storybook?', icon: '🔍' },
    { word: 'SAID', sample: '"Let\'s fly kites!" said Ali.', icon: '🪁' },
    { word: 'HAVE', sample: 'We have colorful crayons to share.', icon: '🖍️' },
    { word: 'COULD', sample: 'She could run faster than the wind.', icon: '💨' }
  ];

  // 14. Tenses Machine
  const [tenseMode, setTenseMode] = useState<'past' | 'present' | 'future'>('present');

  // Filter topics
  const filteredTopics = KIDS_ENGLISH_TOPICS.filter(topic => {
    const matchesGrade = filterGrade === 'All' || topic.grade.includes(filterGrade);
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.funTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  const currentTopic: EnglishTopic =
    KIDS_ENGLISH_TOPICS.find(t => t.id === selectedTopicId) || KIDS_ENGLISH_TOPICS[0];

  const currentIndex = KIDS_ENGLISH_TOPICS.findIndex(t => t.id === currentTopic.id);

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setQuizAnswered(null);
    setShowExplanation(false);
    stopSpeech();
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleNextTopic = () => {
    const nextIdx = (currentIndex + 1) % KIDS_ENGLISH_TOPICS.length;
    handleSelectTopic(KIDS_ENGLISH_TOPICS[nextIdx].id);
  };

  const handlePrevTopic = () => {
    const prevIdx = (currentIndex - 1 + KIDS_ENGLISH_TOPICS.length) % KIDS_ENGLISH_TOPICS.length;
    handleSelectTopic(KIDS_ENGLISH_TOPICS[prevIdx].id);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Text to speech fun read aloud
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      stopSpeech();
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

  const playCustomSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.15;
    window.speechSynthesis.speak(utterance);
  };

  const handleQuizAnswer = (optionIdx: number) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(optionIdx);
    setShowExplanation(true);

    if (optionIdx === currentTopic.quickQuiz.correctIndex) {
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
        // ignore
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar with Back button and points */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 rounded-2xl p-4 border border-sky-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-sm font-black text-sky-900 hover:bg-sky-100 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft size={16} /> Back to Today’s Learning
          </button>
          <span className="hidden sm:inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-rose-100 text-rose-800">
            🔤 CLASS 1–5 ENGLISH FUN
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onPlayGame && (
            <button
              onClick={onPlayGame}
              className="rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 px-3.5 py-2 text-xs font-black inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Gamepad2 size={15} /> Play Word Games
            </button>
          )}
          <span className="bg-amber-100 text-amber-900 rounded-xl px-3 py-2 text-xs font-black inline-flex items-center gap-1">
            ⭐ {userProfile.points} points
          </span>
        </div>
      </div>

      {/* Grade Filters & Search */}
      <div className="bg-white/95 rounded-2xl p-4 border border-sky-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Grade tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-black uppercase text-slate-500 mr-1">Grade:</span>
          {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
            <button
              key={grade}
              onClick={() => setFilterGrade(grade)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                filterGrade === grade
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search English topics..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
          />
        </div>
      </div>

      {/* Topics Carousel / Horizontal Pill Bar */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
        <div className="flex gap-2.5 min-w-max">
          {filteredTopics.map(topic => {
            const isSelected = topic.id === currentTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-rose-600 text-white border-rose-700 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-800 border-sky-200 hover:bg-rose-50 hover:border-rose-300'
                }`}
              >
                <span className="text-xl">{topic.emoji}</span>
                <div>
                  <span className="block text-xs font-black leading-tight">{topic.title}</span>
                  <span
                    className={`block text-[10px] font-semibold ${
                      isSelected ? 'text-rose-100' : 'text-slate-500'
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

      {/* MAIN TOPIC CARD */}
      <div className="rounded-3xl bg-white border border-sky-200 shadow-lg overflow-hidden">
        {/* Banner with gradient & title */}
        <div className={`bg-gradient-to-r ${currentTopic.color} p-6 sm:p-8 text-white relative isolate`}>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black">
                {currentTopic.grade}
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black">
                {currentTopic.category}
              </span>
            </div>

            <button
              onClick={toggleSpeech}
              className={`rounded-full px-4 py-1.5 text-xs font-black inline-flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-rose-800 text-white animate-pulse'
                  : 'bg-white/90 text-slate-900 hover:bg-white'
              }`}
            >
              {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
            </button>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-5xl sm:text-6xl select-none filter drop-shadow-md">
              {currentTopic.emoji}
            </span>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm">
                {currentTopic.funTitle}
              </h2>
              <p className="text-sm sm:text-base font-medium text-white/95 max-w-3xl leading-relaxed">
                {currentTopic.concept}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-8">
          {/* Friendly Character & Fun Story */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentTopic.character.avatar}</span>
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    {currentTopic.character.name}’s Real Story
                  </h3>
                  <p className="text-xs font-bold text-amber-700">{currentTopic.character.role}</p>
                </div>
              </div>
              <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-200/70 text-amber-900">
                📖 Storytime
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/90 rounded-xl p-3.5 border border-amber-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block mb-1">
                  1. The Situation
                </span>
                <p className="text-slate-700 leading-snug">{currentTopic.funStory.setup}</p>
              </div>

              <div className="bg-white/90 rounded-xl p-3.5 border border-amber-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block mb-1">
                  2. What Happened
                </span>
                <p className="text-slate-700 leading-snug">{currentTopic.funStory.action}</p>
              </div>

              <div className="bg-white/90 rounded-xl p-3.5 border border-amber-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 block mb-1">
                  3. The Fun Discovery! 🎉
                </span>
                <p className="text-slate-800 font-semibold leading-snug">{currentTopic.funStory.result}</p>
              </div>
            </div>
          </div>

          {/* Visual Rule / Breakdown Section */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Lightbulb size={17} className="text-amber-500" /> {currentTopic.visualBreakdown.ruleLabel}
              </h3>
              <span className="text-xs font-bold text-slate-500">Look & Learn</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {currentTopic.visualBreakdown.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <span className="text-base font-black text-slate-900 mb-1">{ex.item}</span>
                  <span className="text-xs font-semibold text-slate-600 leading-relaxed">{ex.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic mt-2 text-center">
              💡 {currentTopic.visualBreakdown.caption}
            </p>
          </div>

          {/* HANDS-ON INTERACTIVE PLAYGROUND (TOYS FOR EVERY TOPIC) */}
          <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-5 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white">
                  <Zap size={15} />
                </span>
                <h3 className="font-black text-slate-900 text-lg">Interactive English Playground</h3>
              </div>
              <span className="text-xs font-black text-rose-700 uppercase tracking-wide">
                Tap, build & see it happen live!
              </span>
            </div>

            {/* 1. Phonics & Vowels Explorer */}
            {currentTopic.interactiveType === 'phonics-vowels' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Tap a Vowel Superhero to transform the word and hear it speak:
                </p>

                <div className="flex justify-center gap-3">
                  {(['A', 'E', 'I', 'O', 'U'] as const).map(vowel => (
                    <button
                      key={vowel}
                      onClick={() => {
                        setSelectedVowel(vowel);
                        const words: Record<string, string> = {
                          A: 'Cat! Meow! 🐱',
                          E: 'Pen! Writing time! 🖊️',
                          I: 'Pig! Oink oink! 🐷',
                          O: 'Dog! Woof woof! 🐶',
                          U: 'Sun! Warm and bright! ☀️'
                        };
                        playCustomSpeech(words[vowel] || vowel);
                      }}
                      className={`h-14 w-14 rounded-2xl font-black text-2xl transition-all cursor-pointer flex items-center justify-center shadow-sm ${
                        selectedVowel === vowel
                          ? 'bg-rose-600 text-white scale-110 ring-4 ring-rose-200'
                          : 'bg-rose-100 text-rose-900 hover:bg-rose-200'
                      }`}
                    >
                      {vowel}
                    </button>
                  ))}
                </div>

                {/* Word display card */}
                <div className="text-center p-4 bg-rose-50 rounded-2xl border border-rose-200 max-w-sm mx-auto">
                  <div className="text-4xl font-black tracking-widest text-slate-900">
                    {selectedVowel === 'A' && 'C - A - T'}
                    {selectedVowel === 'E' && 'P - E - N'}
                    {selectedVowel === 'I' && 'P - I - G'}
                    {selectedVowel === 'O' && 'D - O - G'}
                    {selectedVowel === 'U' && 'S - U - N'}
                  </div>
                  <div className="text-4xl my-2">
                    {selectedVowel === 'A' && '🐱'}
                    {selectedVowel === 'E' && '🖊️'}
                    {selectedVowel === 'I' && '🐷'}
                    {selectedVowel === 'O' && '🐶'}
                    {selectedVowel === 'U' && '☀️'}
                  </div>
                  <p className="text-sm font-black text-rose-800">
                    {selectedVowel === 'A' && 'CAT: The vowel "A" makes the friendly kitty purr!'}
                    {selectedVowel === 'E' && 'PEN: The vowel "E" gives the ink its writing voice!'}
                    {selectedVowel === 'I' && 'PIG: The vowel "I" makes the little piggy oink!'}
                    {selectedVowel === 'O' && 'DOG: The vowel "O" lets the puppy bark woof!'}
                    {selectedVowel === 'U' && 'SUN: The vowel "U" shines bright like sunshine!'}
                  </p>
                </div>
              </div>
            )}

            {/* 2. Noun Sorter Toy */}
            {currentTopic.interactiveType === 'nouns-sorter' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <div className="text-center">
                  <span className="text-xs font-bold text-slate-500">Drop this noun into its correct box:</span>
                  <div className="my-2 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-100 border-2 border-amber-300 text-slate-900 font-black text-xl shadow-xs">
                    <span className="text-3xl">{nounTestWords[nounItemIdx].emoji}</span>
                    <span>{nounTestWords[nounItemIdx].word}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(['Person', 'Place', 'Animal', 'Thing'] as const).map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        const current = nounTestWords[nounItemIdx];
                        const isCorrect = current.type === category;
                        setNounSortedHistory(prev => [{ word: current.word, category, correct: isCorrect }, ...prev.slice(0, 3)]);
                        if (isCorrect) {
                          playCustomSpeech(`Correct! ${current.word} is a ${category}!`);
                        } else {
                          playCustomSpeech(`Try again! ${current.word} is actually a ${current.type}!`);
                        }
                        setNounItemIdx((nounItemIdx + 1) % nounTestWords.length);
                      }}
                      className="p-3.5 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/70 hover:bg-sky-100 text-sky-900 font-black text-sm flex flex-col items-center gap-1 cursor-pointer transition-all"
                    >
                      <span className="text-2xl">
                        {category === 'Person' && '👨‍👩‍👧'}
                        {category === 'Place' && '🏫'}
                        {category === 'Animal' && '🐾'}
                        {category === 'Thing' && '📦'}
                      </span>
                      <span>{category}</span>
                    </button>
                  ))}
                </div>

                {nounSortedHistory.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    {nounSortedHistory.map((item, i) => (
                      <span
                        key={i}
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          item.correct ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {item.correct ? '✓' : '✗'} {item.word} ➔ {item.category}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. Verbs Action Simulator */}
            {currentTopic.interactiveType === 'verbs-action' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Tap an action verb to bring Flash the Cheetah to life!
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { action: 'runs', label: '🏃 Sprints fast', emoji: '🐆💨' },
                    { action: 'jumps', label: '🤸 High Jump', emoji: '🐆⬆️' },
                    { action: 'dances', label: '💃 Jungle Dance', emoji: '🐆✨' },
                    { action: 'eats', label: '🍕 Munches Pizza', emoji: '🐆🍕' },
                    { action: 'flies', label: '🚀 Rocket Zoom', emoji: '🐆🚀' }
                  ].map(v => (
                    <button
                      key={v.action}
                      onClick={() => {
                        setCurrentAction(v.action);
                        playCustomSpeech(`Flash ${v.action}! Action in progress!`);
                      }}
                      className={`px-4 py-2.5 rounded-2xl font-black text-xs transition-all cursor-pointer ${
                        currentAction === v.action
                          ? 'bg-emerald-600 text-white scale-105 shadow-md'
                          : 'bg-slate-100 text-slate-800 hover:bg-emerald-100'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>

                <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="text-5xl my-2 animate-bounce">
                    {currentAction === 'runs' && '🐆💨'}
                    {currentAction === 'jumps' && '🐆🦘'}
                    {currentAction === 'dances' && '🐆🎵'}
                    {currentAction === 'eats' && '🐆🍕'}
                    {currentAction === 'flies' && '🐆🚀'}
                  </div>
                  <div className="text-lg font-black text-emerald-900 mt-2">
                    "Flash <span className="underline decoration-wavy decoration-emerald-500 font-extrabold">{currentAction.toUpperCase()}</span> across the sunny field!"
                  </div>
                  <span className="text-xs font-bold text-emerald-700">
                    Verb in action: {currentAction} shows what Flash is actively doing!
                  </span>
                </div>
              </div>
            )}

            {/* 4. Adjectives Paintbrush */}
            {currentTopic.interactiveType === 'adjectives-paint' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Click adjectives to style and dress up this creature with describing words:
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    'gigantic',
                    'tiny',
                    'golden',
                    'sparkly',
                    'rainbow',
                    'cheerful',
                    'brave',
                    'fluffy'
                  ].map(adj => {
                    const isPicked = chosenAdjectives.includes(adj);
                    return (
                      <button
                        key={adj}
                        onClick={() => {
                          if (isPicked) {
                            setChosenAdjectives(chosenAdjectives.filter(a => a !== adj));
                          } else {
                            setChosenAdjectives([...chosenAdjectives, adj]);
                            playCustomSpeech(adj);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-full font-black text-xs transition-all cursor-pointer ${
                          isPicked
                            ? 'bg-purple-600 text-white shadow-sm'
                            : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                        }`}
                      >
                        {isPicked ? '✓ ' : '+ '}
                        {adj}
                      </button>
                    );
                  })}
                </div>

                <div className="text-center p-5 bg-purple-50 rounded-2xl border border-purple-200">
                  <span className="text-5xl block mb-2">
                    {chosenAdjectives.includes('tiny') ? '🐣' : chosenAdjectives.includes('rainbow') ? '🦄' : '🐉'}
                  </span>
                  <div className="text-base font-black text-purple-900">
                    "A{' '}
                    {chosenAdjectives.length > 0 ? (
                      <span className="text-purple-700 underline font-extrabold">
                        {chosenAdjectives.join(', ')}{' '}
                      </span>
                    ) : (
                      'plain '
                    )}
                    creature rested under the enchanted tree."
                  </div>
                  <span className="text-xs font-bold text-purple-600 mt-1 block">
                    {chosenAdjectives.length} adjectives are describing this creature!
                  </span>
                </div>
              </div>
            )}

            {/* 5. Pronouns Swap */}
            {currentTopic.interactiveType === 'pronouns-swap' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Fix the robotic sentence! Replace the repeated name with the correct pronoun:
                </p>

                <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-200 text-center">
                  <div className="text-base font-bold text-cyan-950">
                    {pronounSentenceIdx === 0 && (
                      <>
                        "Sara loves reading. <span className="bg-amber-200 px-2 py-0.5 rounded-md font-black">Sara</span> finished three storybooks yesterday."
                      </>
                    )}
                    {pronounSentenceIdx === 1 && (
                      <>
                        "Bilal bought a football. <span className="bg-amber-200 px-2 py-0.5 rounded-md font-black">Bilal</span> scored a hat-trick in the match."
                      </>
                    )}
                    {pronounSentenceIdx === 2 && (
                      <>
                        "The kitten saw a butterfly. <span className="bg-amber-200 px-2 py-0.5 rounded-md font-black">The kitten</span> leaped into the air."
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  {['He', 'She', 'It', 'They'].map(pronoun => (
                    <button
                      key={pronoun}
                      onClick={() => {
                        setUserSelectedPronoun(pronoun);
                        const correct =
                          (pronounSentenceIdx === 0 && pronoun === 'She') ||
                          (pronounSentenceIdx === 1 && pronoun === 'He') ||
                          (pronounSentenceIdx === 2 && pronoun === 'It');

                        if (correct) {
                          playCustomSpeech(`Brilliant! "${pronoun}" is the perfect pronoun!`);
                        } else {
                          playCustomSpeech(`Try another one for this name!`);
                        }
                      }}
                      className="px-5 py-2 rounded-2xl font-black text-sm bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm cursor-pointer"
                    >
                      {pronoun}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setPronounSentenceIdx((pronounSentenceIdx + 1) % 3);
                      setUserSelectedPronoun(null);
                    }}
                    className="px-3 py-2 rounded-2xl font-bold text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Shuffle size={14} /> Next Sentence
                  </button>
                </div>

                {userSelectedPronoun && (
                  <p className="text-xs text-center font-black text-cyan-900">
                    Selected: <strong>{userSelectedPronoun}</strong>
                  </p>
                )}
              </div>
            )}

            {/* 6. Singular & Plural Wand */}
            {currentTopic.interactiveType === 'singular-plural' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Pick an item & wave Presto’s wand:</span>
                  <div className="flex gap-1.5">
                    {(['cat', 'box', 'butterfly', 'tooth'] as const).map(item => (
                      <button
                        key={item}
                        onClick={() => {
                          setSelectedItemType(item);
                          setPluralCount(1);
                        }}
                        className={`px-3 py-1 rounded-xl text-xs font-black capitalize cursor-pointer ${
                          selectedItemType === item
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-purple-100'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 py-3">
                  <button
                    onClick={() => {
                      const next = pluralCount + 1;
                      setPluralCount(next);
                      playCustomSpeech(`${next} ${selectedItemType === 'cat' ? 'cats' : selectedItemType === 'box' ? 'boxes' : selectedItemType === 'butterfly' ? 'butterflies' : 'teeth'}!`);
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs inline-flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <Wand2 size={16} /> Wave Magic Wand! (+1)
                  </button>
                  <button
                    onClick={() => setPluralCount(1)}
                    className="px-3 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    Reset (1)
                  </button>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="text-4xl flex flex-wrap justify-center gap-2 my-2">
                    {Array.from({ length: Math.min(pluralCount, 8) }).map((_, i) => (
                      <span key={i}>
                        {selectedItemType === 'cat' && '🐱'}
                        {selectedItemType === 'box' && '📦'}
                        {selectedItemType === 'butterfly' && '🦋'}
                        {selectedItemType === 'tooth' && '🦷'}
                      </span>
                    ))}
                  </div>

                  <div className="text-xl font-black text-purple-900 mt-2">
                    {pluralCount === 1 ? (
                      `1 ${selectedItemType.toUpperCase()} (Singular: Just ONE)`
                    ) : (
                      <>
                        {pluralCount}{' '}
                        {selectedItemType === 'cat' && 'CATS (Add -S)'}
                        {selectedItemType === 'box' && 'BOXES (Add -ES because it ends in X!)'}
                        {selectedItemType === 'butterfly' && 'BUTTERFLIES (Change Y to -IES!)'}
                        {selectedItemType === 'tooth' && 'TEETH (Rebel plural shape-shifter!)'}{' '}
                        (Plural: MANY!)
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 7. Prepositions Hide & Seek */}
            {currentTopic.interactiveType === 'prepositions-box' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Click a preposition to see where Cheeky Chintu hides:
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {(['in', 'on', 'under', 'behind', 'between'] as const).map(pos => (
                    <button
                      key={pos}
                      onClick={() => {
                        setPrepositionPosition(pos);
                        playCustomSpeech(`Chintu is ${pos} the box!`);
                      }}
                      className={`px-4 py-2 rounded-2xl font-black text-xs uppercase transition-all cursor-pointer ${
                        prepositionPosition === pos
                          ? 'bg-amber-500 text-white shadow-md scale-105'
                          : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 text-center min-h-[140px] flex flex-col items-center justify-center">
                  <div className="text-4xl my-2">
                    {prepositionPosition === 'in' && '📦🐵 (Inside the cardboard box!)'}
                    {prepositionPosition === 'on' && '🐵\n📦 (Sitting right on top!)'}
                    {prepositionPosition === 'under' && '📦\n🐵 (Hiding underneath the box!)'}
                    {prepositionPosition === 'behind' && '📦🙈 (Peeking from behind!)'}
                    {prepositionPosition === 'between' && '🐘 🐵 🐘 (Between two friendly elephants!)'}
                  </div>
                  <p className="text-sm font-black text-amber-900 mt-2">
                    "The cheeky monkey is{' '}
                    <span className="text-rose-700 uppercase underline decoration-2">
                      {prepositionPosition}
                    </span>{' '}
                    the box!"
                  </p>
                </div>
              </div>
            )}

            {/* 8. Punctuation Traffic Lights */}
            {currentTopic.interactiveType === 'punctuation-fix' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Officer Owl needs help! Pick the right ending punctuation mark:
                </p>

                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-300 text-center">
                  <div className="text-lg font-black text-slate-900">
                    "Can you give me that delicious mango slice
                    <span className="inline-block w-8 h-8 mx-2 rounded-lg bg-white border-2 border-rose-400 align-middle text-rose-600 leading-7 font-black">
                      {punctuationInput || '?'}
                    </span>
                    "
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  {[
                    { mark: '.', label: '. (Full Stop: Statement)', icon: '🔴' },
                    { mark: '?', label: '? (Question Mark: Asking)', icon: '❓' },
                    { mark: '!', label: '! (Exclamation: Joy/Shout)', icon: '🎉' }
                  ].map(p => (
                    <button
                      key={p.mark}
                      onClick={() => {
                        setPunctuationInput(p.mark as '.' | '?' | '!');
                        if (p.mark === '?') {
                          playCustomSpeech('Green light! A question always takes a question mark!');
                        } else {
                          playCustomSpeech('Not quite! Notice that it starts with "Can you", which asks a question!');
                        }
                      }}
                      className={`px-4 py-2.5 rounded-2xl font-black text-xs transition-all cursor-pointer ${
                        punctuationInput === p.mark
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-800 hover:bg-rose-100'
                      }`}
                    >
                      {p.icon} {p.label}
                    </button>
                  ))}
                </div>

                {punctuationInput && (
                  <p className="text-xs font-bold text-center text-slate-700">
                    {punctuationInput === '?' ? (
                      <span className="text-emerald-700">✓ Correct! "Can you give me..." is asking a question!</span>
                    ) : (
                      <span className="text-rose-700">Try again: It is asking a question that expects an answer!</span>
                    )}
                  </p>
                )}
              </div>
            )}

            {/* 9. Rhymes Matcher */}
            {currentTopic.interactiveType === 'rhymes-match' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-600">Choose a Word Family:</span>
                  <div className="flex gap-2">
                    {(['-at', '-og', '-ing', '-all'] as const).map(fam => (
                      <button
                        key={fam}
                        onClick={() => {
                          setRhymeFamily(fam);
                          playCustomSpeech(`The ${fam} family!`);
                        }}
                        className={`px-3 py-1 rounded-xl text-xs font-black cursor-pointer ${
                          rhymeFamily === fam
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-emerald-100'
                        }`}
                      >
                        {fam}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {rhymeFamily === '-at' &&
                    [
                      { word: 'Cat', emoji: '🐱' },
                      { word: 'Hat', emoji: '🎩' },
                      { word: 'Bat', emoji: '🦇' },
                      { word: 'Mat', emoji: '🧘' }
                    ].map(item => (
                      <button
                        key={item.word}
                        onClick={() => playCustomSpeech(item.word)}
                        className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl border border-emerald-200 text-center font-black text-slate-900 cursor-pointer"
                      >
                        <span className="text-3xl block mb-1">{item.emoji}</span>
                        <span>{item.word}</span>
                      </button>
                    ))}

                  {rhymeFamily === '-og' &&
                    [
                      { word: 'Dog', emoji: '🐶' },
                      { word: 'Frog', emoji: '🐸' },
                      { word: 'Log', emoji: '🪵' },
                      { word: 'Jog', emoji: '🏃' }
                    ].map(item => (
                      <button
                        key={item.word}
                        onClick={() => playCustomSpeech(item.word)}
                        className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl border border-emerald-200 text-center font-black text-slate-900 cursor-pointer"
                      >
                        <span className="text-3xl block mb-1">{item.emoji}</span>
                        <span>{item.word}</span>
                      </button>
                    ))}

                  {rhymeFamily === '-ing' &&
                    [
                      { word: 'King', emoji: '👑' },
                      { word: 'Ring', emoji: '💍' },
                      { word: 'Sing', emoji: '🎤' },
                      { word: 'Wing', emoji: '🪽' }
                    ].map(item => (
                      <button
                        key={item.word}
                        onClick={() => playCustomSpeech(item.word)}
                        className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl border border-emerald-200 text-center font-black text-slate-900 cursor-pointer"
                      >
                        <span className="text-3xl block mb-1">{item.emoji}</span>
                        <span>{item.word}</span>
                      </button>
                    ))}

                  {rhymeFamily === '-all' &&
                    [
                      { word: 'Ball', emoji: '⚽' },
                      { word: 'Wall', emoji: '🧱' },
                      { word: 'Call', emoji: '📞' },
                      { word: 'Tall', emoji: '🦒' }
                    ].map(item => (
                      <button
                        key={item.word}
                        onClick={() => playCustomSpeech(item.word)}
                        className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-2xl border border-emerald-200 text-center font-black text-slate-900 cursor-pointer"
                      >
                        <span className="text-3xl block mb-1">{item.emoji}</span>
                        <span>{item.word}</span>
                      </button>
                    ))}
                </div>
                <p className="text-xs text-center font-bold text-emerald-800">
                  Tap any card to hear the musical rhyme sound!
                </p>
              </div>
            )}

            {/* 10. Opposites & Antonyms Flip Cards */}
            {currentTopic.interactiveType === 'opposites-flip' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Tap any card to flip it in the magic reverse mirror:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { a: 'Hot ☀️', b: 'Cold ❄️' },
                    { a: 'Big 🐘', b: 'Small 🐜' },
                    { a: 'Happy 😄', b: 'Sad 😢' },
                    { a: 'Fast 🐇', b: 'Slow 🐢' }
                  ].map((pair, idx) => {
                    const isFlipped = !!flippedOpposites[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setFlippedOpposites({ ...flippedOpposites, [idx]: !isFlipped });
                          playCustomSpeech(isFlipped ? pair.a : pair.b);
                        }}
                        className="p-4 rounded-2xl border-2 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 font-black text-sm flex flex-col items-center justify-center min-h-[90px] shadow-xs transition-transform active:scale-95 cursor-pointer"
                      >
                        <span className="text-2xl mb-1">{isFlipped ? '🔄' : '🪞'}</span>
                        <span>{isFlipped ? pair.b : pair.a}</span>
                        <span className="text-[10px] text-indigo-600 font-semibold mt-1">
                          Tap to flip ➔
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 11. Articles Guard (A vs AN) */}
            {currentTopic.interactiveType === 'articles-guard' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <div className="text-center">
                  <span className="text-xs font-bold text-slate-500">
                    Which shield protects this word: "A" or "AN"?
                  </span>
                  <div className="my-2 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-teal-100 border-2 border-teal-300 text-slate-900 font-black text-xl shadow-xs">
                    <span className="text-3xl">{articleTestWords[articleWordIdx].emoji}</span>
                    <span>{articleTestWords[articleWordIdx].word}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  {(['A', 'AN'] as const).map(choice => (
                    <button
                      key={choice}
                      onClick={() => {
                        const wordObj = articleTestWords[articleWordIdx];
                        const shouldBeAn = wordObj.startsWithVowel;
                        const userPickedAn = choice === 'AN';
                        const isCorrect = shouldBeAn === userPickedAn;

                        if (isCorrect) {
                          setArticleResult(`✓ Correct! "${choice} ${wordObj.word}"!`);
                          playCustomSpeech(`Correct! ${choice} ${wordObj.word}!`);
                        } else {
                          setArticleResult(`✗ Try again! "${shouldBeAn ? 'AN' : 'A'} ${wordObj.word}"!`);
                          playCustomSpeech(`Oops! ${shouldBeAn ? 'AN' : 'A'} ${wordObj.word}!`);
                        }
                        setArticleWordIdx((articleWordIdx + 1) % articleTestWords.length);
                      }}
                      className="px-6 py-3 rounded-2xl font-black text-base bg-teal-600 hover:bg-teal-700 text-white shadow-md cursor-pointer inline-flex items-center gap-2"
                    >
                      🛡️ Shield {choice}
                    </button>
                  ))}
                </div>

                {articleResult && (
                  <p className="text-xs font-black text-center text-teal-900 pt-1">{articleResult}</p>
                )}
              </div>
            )}

            {/* 12. Sentence Builder Train */}
            {currentTopic.interactiveType === 'sentence-builder' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Tap the train wagons to mix & match hundreds of super sentences!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Wagon 1 */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-black uppercase text-indigo-700 block">
                      🚃 1. Subject (Who?)
                    </span>
                    <button
                      onClick={() => setTrainSubject((trainSubject + 1) % subjects.length)}
                      className="w-full p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl text-left font-black text-xs text-indigo-900 cursor-pointer"
                    >
                      {subjects[trainSubject].text}
                    </button>
                  </div>

                  {/* Wagon 2 */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-black uppercase text-purple-700 block">
                      🚂 2. Verb (Action)
                    </span>
                    <button
                      onClick={() => setTrainVerb((trainVerb + 1) % verbs.length)}
                      className="w-full p-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl text-left font-black text-xs text-purple-900 cursor-pointer"
                    >
                      {verbs[trainVerb].text}
                    </button>
                  </div>

                  {/* Wagon 3 */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-black uppercase text-rose-700 block">
                      🚃 3. Object / Where
                    </span>
                    <button
                      onClick={() => setTrainObject((trainObject + 1) % objects.length)}
                      className="w-full p-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl text-left font-black text-xs text-rose-900 cursor-pointer"
                    >
                      {objects[trainObject].text}
                    </button>
                  </div>
                </div>

                {/* Assembled Sentence Display */}
                <div className="p-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-rose-50 rounded-2xl border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-base font-black text-slate-900 text-center sm:text-left">
                    "{subjects[trainSubject].clean} {verbs[trainVerb].clean} {objects[trainObject].clean}."
                  </div>
                  <button
                    onClick={() => {
                      const full = `${subjects[trainSubject].clean} ${verbs[trainVerb].clean} ${objects[trainObject].clean}.`;
                      playCustomSpeech(full);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs inline-flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <Volume2 size={15} /> Play Sentence
                  </button>
                </div>
              </div>
            )}

            {/* 13. Sight Words Speed Flashcards */}
            {currentTopic.interactiveType === 'sight-words' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-600">Lightning Flashcard Trainer:</span>
                  <span className="text-xs font-bold text-rose-600">
                    Card {sightWordIdx + 1} of {sightWordsList.length}
                  </span>
                </div>

                <div className="p-6 bg-amber-50 rounded-2xl border-2 border-amber-300 text-center space-y-2">
                  <span className="text-4xl">{sightWordsList[sightWordIdx].icon}</span>
                  <h4 className="text-4xl font-black text-slate-950 tracking-wider">
                    {sightWordsList[sightWordIdx].word}
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 italic">
                    "{sightWordsList[sightWordIdx].sample}"
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      playCustomSpeech(`${sightWordsList[sightWordIdx].word}. ${sightWordsList[sightWordIdx].sample}`);
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Volume2 size={15} /> Hear Pronunciation
                  </button>
                  <button
                    onClick={() => {
                      setSightWordIdx((sightWordIdx + 1) % sightWordsList.length);
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    Next Flashcard <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* 14. Tenses Machine Slider */}
            {currentTopic.interactiveType === 'tenses-machine' && (
              <div className="bg-white rounded-xl p-5 border border-rose-100 shadow-sm space-y-4">
                <p className="text-xs font-bold text-slate-600">
                  Spin Professor Tick-Tock’s Time Dial to shift through time:
                </p>

                <div className="flex justify-center gap-2">
                  {[
                    { mode: 'past', label: '⏪ Yesterday (Past)', desc: 'Already completed' },
                    { mode: 'present', label: '▶️ Today (Present)', desc: 'Happening now' },
                    { mode: 'future', label: '⏩ Tomorrow (Future)', desc: 'Going to happen' }
                  ].map(t => (
                    <button
                      key={t.mode}
                      onClick={() => {
                        setTenseMode(t.mode as any);
                        const phrase =
                          t.mode === 'past'
                            ? 'Yesterday, I played cricket!'
                            : t.mode === 'present'
                            ? 'Today, I play cricket!'
                            : 'Tomorrow, I will play cricket!';
                        playCustomSpeech(phrase);
                      }}
                      className={`px-3.5 py-2.5 rounded-2xl font-black text-xs transition-all cursor-pointer ${
                        tenseMode === t.mode
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-200 text-center">
                  <div className="text-xl font-black text-blue-950">
                    {tenseMode === 'past' && '"Yesterday, Bilal PLAYED cricket in the park."'}
                    {tenseMode === 'present' && '"Right now, Bilal PLAYS cricket in the park."'}
                    {tenseMode === 'future' && '"Tomorrow, Bilal WILL PLAY cricket in the park."'}
                  </div>
                  <span className="text-xs font-bold text-blue-700 mt-2 block">
                    {tenseMode === 'past' && 'Notice: Added -ed to "play" for regular past actions!'}
                    {tenseMode === 'present' && 'Notice: Base verb with -s for he/she/it!'}
                    {tenseMode === 'future' && 'Notice: Added helper word "will" for future plans!'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Secret Tip / Super Trick */}
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 sm:p-5 flex items-start gap-3">
            <span className="text-2xl mt-0.5">💡</span>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-800">
                Secret English Trick
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                {currentTopic.funSecret}
              </p>
            </div>
          </div>

          {/* Quick Quiz / Kids Challenge */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="text-amber-500" size={20} />
                <h3 className="font-black text-slate-900 text-base">Quick Kid Challenge!</h3>
              </div>
              <span className="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                +5 Points Prize ⭐
              </span>
            </div>

            <p className="text-sm sm:text-base font-bold text-slate-800">
              {currentTopic.quickQuiz.question}
            </p>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {currentTopic.quickQuiz.options.map((option, idx) => {
                const isSelected = quizAnswered === idx;
                const isCorrect = idx === currentTopic.quickQuiz.correctIndex;
                let btnStyle = 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800';

                if (quizAnswered !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-100 border-emerald-300 text-emerald-950 font-black';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-100 border-rose-300 text-rose-950 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={quizAnswered !== null}
                    onClick={() => handleQuizAnswer(idx)}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {quizAnswered !== null && isCorrect && (
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Hint */}
            {showExplanation && (
              <div className="rounded-xl bg-white p-4 border border-sky-200 space-y-2">
                <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                  {currentTopic.quickQuiz.explanation}
                </p>
                <button
                  onClick={() => {
                    setQuizAnswered(null);
                    setShowExplanation(false);
                  }}
                  className="text-xs font-black text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={14} /> Try again
                </button>
              </div>
            )}
          </div>

          {/* Topic Navigation Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={handlePrevTopic}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-black text-slate-700 hover:bg-slate-100 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft size={15} /> Previous Topic
            </button>

            <span className="text-xs font-bold text-slate-500">
              Topic {currentIndex + 1} of {KIDS_ENGLISH_TOPICS.length}
            </span>

            <button
              onClick={handleNextTopic}
              className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-xs font-black inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              Next Topic <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
