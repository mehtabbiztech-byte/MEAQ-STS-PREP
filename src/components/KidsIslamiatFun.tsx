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
  Heart,
  Sun,
  Moon,
  Star,
  Clock,
  Droplets
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_ISLAMIAT_TOPICS, IslamiatTopic } from '../data/kidsIslamiatTopics';
import confetti from 'canvas-confetti';

interface KidsIslamiatFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsIslamiatFun: React.FC<KidsIslamiatFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_ISLAMIAT_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground interactive states
  // 1. Pillars Builder
  const [builtPillars, setBuiltPillars] = useState<string[]>(['shahadah']);
  const pillarsList = [
    { id: 'shahadah', title: '1. Shahadah ☝️', desc: 'Belief in One Allah & Prophet Muhammad (PBUH)' },
    { id: 'salah', title: '2. Salah 🤲', desc: '5 Daily Prayers on time' },
    { id: 'zakat', title: '3. Zakat 💰', desc: 'Charity for the poor and needy' },
    { id: 'sawm', title: '4. Sawm 🌙', desc: 'Fasting in holy Ramadan' },
    { id: 'hajj', title: '5. Hajj 🕋', desc: 'Pilgrimage to Makkah once in life' }
  ];

  // 2. Prayer Clock
  const [activePrayer, setActivePrayer] = useState<'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha'>('fajr');
  const prayers = {
    fajr: { name: 'Fajr 🌅', time: 'Dawn (Before Sunrise)', fard: '2 Rakats', reward: 'Angel protection all day', sky: 'bg-indigo-900 text-amber-200' },
    dhuhr: { name: 'Dhuhr ☀️', time: 'After Midday', fard: '4 Rakats', reward: 'Midday peace & barakah', sky: 'bg-sky-500 text-white' },
    asr: { name: 'Asr 🌤️', time: 'Late Afternoon', fard: '4 Rakats', reward: 'Guarded by angels of day and night', sky: 'bg-amber-500 text-white' },
    maghrib: { name: 'Maghrib 🌇', time: 'Right after Sunset', fard: '3 Rakats', reward: 'Gratitude for the day’s blessings', sky: 'bg-orange-600 text-white' },
    isha: { name: 'Isha 🌙', time: 'Nighttime', fard: '4 Rakats', reward: 'Peaceful sleep under Allah’s care', sky: 'bg-slate-900 text-indigo-200' }
  };

  // 3. Wudu Steps
  const [wuduStep, setWuduStep] = useState<number>(0);
  const wuduStepsList = [
    { step: 1, title: 'Say Bismillah & Wash Hands', detail: 'Wash both hands up to wrists 3 times, rubbing fingers.', emoji: '🤲' },
    { step: 2, title: 'Rinse Mouth', detail: 'Gargle fresh water in mouth 3 times.', emoji: '👄' },
    { step: 3, title: 'Clean Nose', detail: 'Sniff water gently into nostrils and blow out 3 times.', emoji: '👃' },
    { step: 4, title: 'Wash Face', detail: 'Wash entire face from forehead to chin and ear to ear 3 times.', emoji: '🧒' },
    { step: 5, title: 'Wash Arms to Elbows', detail: 'Wash right arm up to elbow 3 times, then left arm 3 times.', emoji: '💪' },
    { step: 6, title: 'Masah (Wipe Head & Ears)', detail: 'With moist hands, wipe hair front to back and clean ears once.', emoji: '💆' },
    { step: 7, title: 'Wash Feet to Ankles', detail: 'Wash right foot up to ankle 3 times, then left foot 3 times.', emoji: '🦶' }
  ];

  // 4. Good Deeds Tree
  const [deedCount, setDeedCount] = useState<number>(3);
  const [recentDeed, setRecentDeed] = useState<string>('Smiling at a classmate');

  // 5. Daily Duas soundboard
  const [activeDua, setActiveDua] = useState<string>('bismillah');
  const dailyPhrases: Record<string, { arabic: string; transliteration: string; english: string; when: string }> = {
    bismillah: {
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      transliteration: 'Bismillah ir-Rahman ir-Rahim',
      english: 'In the name of Allah, the Most Gracious, the Most Merciful',
      when: 'Say before eating, drinking, studying, or starting any good task!'
    },
    alhamdulillah: {
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      transliteration: 'Alhamdulillah Rabbil Alameen',
      english: 'All praise is due to Allah, Lord of all the worlds',
      when: 'Say after finishing meals, after sneezing, and whenever grateful!'
    },
    subhanallah: {
      arabic: 'سُبْحَانَ اللَّهِ',
      transliteration: 'SubhanAllah',
      english: 'Glory be to Allah',
      when: 'Say when admiring beautiful nature, majestic mountains, and stars!'
    },
    inshaallah: {
      arabic: 'إِنْ شَاءَ اللَّهُ',
      transliteration: 'InshaAllah',
      english: 'If Allah wills',
      when: 'Say when making future promises or plans with family and friends!'
    },
    jazakallah: {
      arabic: 'جَزَاكَ اللَّهُ خَيْرًا',
      transliteration: 'JazakAllahu Khayran',
      english: 'May Allah reward you with abundant goodness',
      when: 'Say instead of simple "thank you" to give the highest blessing!'
    }
  };

  // 6. Prophets timeline
  const [selectedProphetIdx, setSelectedProphetIdx] = useState<number>(4); // Default Prophet Muhammad (PBUH)
  const prophetsList = [
    { name: 'Prophet Adam (AS)', title: 'The First Prophet', story: 'Created by Allah as the father of humanity. Taught us humility and repentance.', emoji: '🌱' },
    { name: 'Prophet Nuh (AS)', title: 'The Great Ark Builder', story: 'Preached patience and monotheism for 950 years; built the Ark by Allah’s command.', emoji: '🚢' },
    { name: 'Prophet Ibrahim (AS)', title: 'Khalilullah (Friend of Allah)', story: 'Stood brave for truth; built the Holy Kaaba in Makkah with his son Ismail (AS).', emoji: '🕋' },
    { name: 'Prophet Musa (AS)', title: 'Kalimullah', story: 'Confronted Pharaoh with courage; Allah parted the sea to rescue the believers.', emoji: '🌊' },
    { name: 'Prophet Muhammad (PBUH)', title: 'Rahmatul-lil-Alameen (Mercy to All)', story: 'The final messenger of Allah, blessed with the Holy Quran, renowned for unmatched kindness, truthfulness (As-Sadiq), and mercy.', emoji: '💚' }
  ];

  const selectedTopic = KIDS_ISLAMIAT_TOPICS.find(t => t.id === selectedTopicId) || KIDS_ISLAMIAT_TOPICS[0];

  const filteredTopics = KIDS_ISLAMIAT_TOPICS.filter(t => {
    const matchesGrade =
      filterGrade === 'All' ||
      (filterGrade === 'Class 1–2' && (t.grade.includes('Class 1') || t.grade.includes('Class 2'))) ||
      (filterGrade === 'Class 3–4' && (t.grade.includes('Class 3') || t.grade.includes('Class 4'))) ||
      (filterGrade === 'Class 5' && t.grade.includes('Class 5'));
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.funTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  const toggleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        window.speechSynthesis.cancel();
        const text = `${selectedTopic.title}. ${selectedTopic.concept} Here is a wonderful lesson: ${selectedTopic.funStory.setup} ${selectedTopic.funStory.action} ${selectedTopic.funStory.result} Remember: ${selectedTopic.funSecret}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.05;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const handleSelectTopic = (id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setSelectedTopicId(id);
    setQuizAnswered(null);
    setShowExplanation(false);
  };

  const handleQuizOptionClick = (index: number) => {
    if (quizAnswered !== null) return;
    setQuizAnswered(index);
    setShowExplanation(true);
    if (index === selectedTopic.quickQuiz.correctIndex) {
      addLearningPoints(5);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-800 to-teal-900 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-15 select-none pointer-events-none">🌙</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Kids Ocean
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">🕌</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Islamiat & Values Fun 🌙</h2>
                <p className="text-teal-100 text-sm mt-0.5 max-w-xl">
                  Learn the 5 Pillars of Islam, daily prayers, beautiful Sunnah manners, and stories of the Prophets!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {onPlayGame && (
              <button
                onClick={onPlayGame}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-2.5 rounded-2xl shadow-md inline-flex items-center gap-2 text-sm transition-transform hover:scale-105"
              >
                <Gamepad2 size={18} /> Play Games
              </button>
            )}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-right">
              <span className="text-xs uppercase font-bold text-teal-100 block">Class 1–5 Islamiat</span>
              <span className="text-lg font-black">{KIDS_ISLAMIAT_TOPICS.length} Blessed Topics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grade filter & search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-teal-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
            <button
              key={grade}
              onClick={() => setFilterGrade(grade)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                filterGrade === grade ? 'bg-teal-700 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search prayers, stories & duas..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Topic Navigator */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 mb-1">
            Choose an Islamic Topic ({filteredTopics.length})
          </div>
          {filteredTopics.map(topic => {
            const isSelected = topic.id === selectedTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-teal-50 border-teal-500 shadow-sm ring-2 ring-teal-300'
                    : 'bg-white border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl p-2 bg-teal-100/70 rounded-xl shrink-0">{topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-teal-900 bg-teal-100 px-2 py-0.5 rounded-md">
                      {topic.grade}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">{topic.badge}</span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 truncate">{topic.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{topic.funTitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep-Dive Workspace */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl bg-white border border-teal-100 p-6 shadow-sm space-y-6">
            {/* Header & TTS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedTopic.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full">
                    {selectedTopic.category} · {selectedTopic.grade}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{selectedTopic.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-teal-800">{selectedTopic.funTitle}</p>
              </div>

              <button
                onClick={toggleSpeak}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-sm transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-teal-700 hover:bg-teal-800 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
              </button>
            </div>

            {/* Arabic Hadith / Quranic Banner if available */}
            {selectedTopic.arabicPhrase && (
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-center space-y-1">
                <div className="text-xl sm:text-2xl font-bold text-amber-900 font-serif tracking-wide" dir="rtl">
                  {selectedTopic.arabicPhrase}
                </div>
                <p className="text-xs text-amber-800 font-medium italic">"{selectedTopic.arabicTranslation}"</p>
              </div>
            )}

            {/* Core Concept */}
            <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-teal-900 font-black text-xs uppercase tracking-wider mb-2">
                <Sparkles size={16} className="text-teal-600" /> Core Lesson & Virtue
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedTopic.concept}</p>
            </div>

            {/* Character & Story */}
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl p-1.5 bg-teal-100 rounded-xl">{selectedTopic.character.avatar}</span>
                <div>
                  <h5 className="font-black text-sm text-slate-900">{selectedTopic.character.name}</h5>
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wide">
                    {selectedTopic.character.role}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">Setting the Scene:</strong> {selectedTopic.funStory.setup}
                </p>
                <p>
                  <strong className="text-slate-900">The Good Deed:</strong> {selectedTopic.funStory.action}
                </p>
                <p className="text-teal-900 font-semibold bg-teal-100/70 p-2.5 rounded-xl">
                  ✨ <strong>Blessing & Lesson:</strong> {selectedTopic.funStory.result}
                </p>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="space-y-3">
              <h5 className="font-black text-xs uppercase tracking-wider text-slate-500">
                {selectedTopic.visualBreakdown.ruleLabel}
              </h5>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedTopic.visualBreakdown.examples.map((ex, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-black text-sm text-slate-900">{ex.item}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{ex.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic text-center pt-1">
                {selectedTopic.visualBreakdown.caption}
              </p>
            </div>

            {/* INTERACTIVE TOY PLAYGROUND FOR ISLAMIAT */}
            <div className="rounded-2xl border-2 border-teal-300 bg-teal-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-teal-900 bg-teal-200/70 px-3 py-1 rounded-full">
                  <Sparkles size={14} /> Islamic Learning Toy
                </span>
                <span className="text-xs font-bold text-teal-700">Tap & Explore</span>
              </div>

              {/* 1. Pillars Builder */}
              {selectedTopic.id === 'pillars-builder' && (
                <div className="bg-white p-5 rounded-2xl border border-teal-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Tap all 5 pillars to erect the Grand Mosque ({builtPillars.length} of 5 built)!
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {pillarsList.map(p => {
                      const isBuilt = builtPillars.includes(p.id);
                      return (
                        <button
                          key={p.id}
                          onClick={() => {
                            if (isBuilt) {
                              setBuiltPillars(builtPillars.filter(x => x !== p.id));
                            } else {
                              const updated = [...builtPillars, p.id];
                              setBuiltPillars(updated);
                              if (updated.length === 5) {
                                addLearningPoints(5);
                                confetti({ particleCount: 60, spread: 70 });
                              }
                            }
                          }}
                          className={`px-3 py-2 rounded-xl text-xs font-black transition-all ${
                            isBuilt
                              ? 'bg-emerald-600 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {p.title}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 flex flex-col items-center">
                    <span className="text-6xl block">
                      {builtPillars.length === 5 ? '🕌✨' : builtPillars.length >= 3 ? '🏛️' : '🏗️'}
                    </span>
                    <h5 className="font-black text-teal-900 text-base mt-2">
                      {builtPillars.length === 5
                        ? '🎉 MashaAllah! The 5 Pillars of Islam are complete!'
                        : `Building in progress: ${builtPillars.length}/5 pillars standing strong!`}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 max-w-md">
                      Shahadah, Salah, Zakat, Sawm, and Hajj form the unbreakable spiritual foundation of every believer!
                    </p>
                  </div>
                </div>
              )}

              {/* 2. Prayer Clock */}
              {selectedTopic.id === 'prayer-clock' && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {(['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const).map(p => (
                      <button
                        key={p}
                        onClick={() => setActivePrayer(p)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                          activePrayer === p ? 'bg-sky-700 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {prayers[p].name}
                      </button>
                    ))}
                  </div>

                  <div className={`p-6 rounded-2xl ${prayers[activePrayer].sky} transition-colors space-y-2`}>
                    <h4 className="text-2xl font-black">{prayers[activePrayer].name}</h4>
                    <div className="text-xs font-bold opacity-90">🕒 Time: {prayers[activePrayer].time}</div>
                    <div className="text-base font-extrabold bg-white/20 inline-block px-4 py-1 rounded-full">
                      ⭐ Fard Rakats: {prayers[activePrayer].fard}
                    </div>
                    <p className="text-xs opacity-90 max-w-md mx-auto pt-1">
                      Spiritual Gift: {prayers[activePrayer].reward}
                    </p>
                  </div>
                </div>
              )}

              {/* 3. Wudu Tracker */}
              {selectedTopic.id === 'wudu-steps' && (
                <div className="bg-white p-5 rounded-2xl border border-cyan-200 text-center space-y-4">
                  <div className="flex justify-center gap-1.5 flex-wrap">
                    {wuduStepsList.map((st, i) => (
                      <button
                        key={i}
                        onClick={() => setWuduStep(i)}
                        className={`w-7 h-7 rounded-full text-xs font-black transition-all ${
                          wuduStep === i
                            ? 'bg-cyan-600 text-white ring-2 ring-cyan-300 scale-110'
                            : i < wuduStep
                            ? 'bg-cyan-100 text-cyan-800'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {st.step}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                    <span className="text-5xl block">{wuduStepsList[wuduStep].emoji}</span>
                    <h5 className="font-black text-cyan-950 text-base mt-2">
                      Step {wuduStepsList[wuduStep].step}: {wuduStepsList[wuduStep].title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                      {wuduStepsList[wuduStep].detail}
                    </p>
                  </div>

                  <div className="flex justify-center gap-2">
                    <button
                      disabled={wuduStep === 0}
                      onClick={() => setWuduStep(wuduStep - 1)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold disabled:opacity-40"
                    >
                      Previous Step
                    </button>
                    <button
                      onClick={() => {
                        if (wuduStep === wuduStepsList.length - 1) {
                          addLearningPoints(3);
                          confetti({ particleCount: 40 });
                        }
                        setWuduStep((wuduStep + 1) % wuduStepsList.length);
                      }}
                      className="px-4 py-1.5 rounded-xl bg-cyan-600 text-white text-xs font-black hover:bg-cyan-700"
                    >
                      {wuduStep === wuduStepsList.length - 1 ? 'Complete Wudu! 🎉' : 'Next Wudu Step 💧'}
                    </button>
                  </div>
                </div>
              )}

              {/* 4. Good Deeds Tree */}
              {selectedTopic.id === 'good-deeds-tree' && (
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      '😊 Smiled at classmate',
                      '🧓 Helped mom carry bags',
                      '🐱 Fed a stray kitten',
                      '🧹 Picked up banana peel',
                      '📖 Spoke the honest truth'
                    ].map(deed => (
                      <button
                        key={deed}
                        onClick={() => {
                          setRecentDeed(deed);
                          setDeedCount(deedCount + 1);
                          addLearningPoints(2);
                        }}
                        className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 rounded-xl text-xs font-black transition-transform hover:scale-105"
                      >
                        + {deed}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-b from-amber-50 to-emerald-50 rounded-2xl border border-amber-100">
                    <div className="text-6xl">🌳</div>
                    <div className="flex justify-center gap-1 mt-2">
                      {Array.from({ length: Math.min(deedCount, 12) }).map((_, i) => (
                        <span key={i} className="text-xl animate-pulse">
                          🍎
                        </span>
                      ))}
                    </div>
                    <h5 className="font-black text-slate-900 text-sm mt-3">
                      {deedCount} Golden Fruits of Sadaqah Blossoming!
                    </h5>
                    <p className="text-xs text-emerald-800 font-semibold mt-0.5">Last Deed: {recentDeed}</p>
                  </div>
                </div>
              )}

              {/* 5. Daily Duas Soundboard */}
              {selectedTopic.id === 'daily-duas' && (
                <div className="bg-white p-5 rounded-2xl border border-purple-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {Object.keys(dailyPhrases).map(key => (
                      <button
                        key={key}
                        onClick={() => setActiveDua(key)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                          activeDua === key ? 'bg-purple-700 text-white shadow-md' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>

                  <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 space-y-2">
                    <div className="text-2xl font-serif text-purple-950 font-bold" dir="rtl">
                      {dailyPhrases[activeDua].arabic}
                    </div>
                    <div className="text-xs font-black text-purple-800 tracking-wide">
                      {dailyPhrases[activeDua].transliteration}
                    </div>
                    <p className="text-xs text-slate-700 italic">"{dailyPhrases[activeDua].english}"</p>
                    <div className="text-[11px] font-bold text-amber-900 bg-amber-100/70 p-2 rounded-xl mt-2">
                      💡 {dailyPhrases[activeDua].when}
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Prophets Timeline */}
              {selectedTopic.id === 'prophets-timeline' && (
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {prophetsList.map((pr, idx) => (
                      <button
                        key={pr.name}
                        onClick={() => setSelectedProphetIdx(idx)}
                        className={`p-2 rounded-xl text-xs font-bold transition-all ${
                          selectedProphetIdx === idx
                            ? 'bg-amber-600 text-white shadow-md scale-105 ring-2 ring-amber-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span className="text-2xl block">{pr.emoji}</span>
                        <span className="truncate block mt-1">{pr.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl">{prophetsList[selectedProphetIdx].emoji}</span>
                      <div>
                        <h5 className="font-black text-amber-950 text-sm">{prophetsList[selectedProphetIdx].name}</h5>
                        <span className="text-xs font-bold text-amber-700">
                          {prophetsList[selectedProphetIdx].title}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 mt-2 font-medium leading-relaxed">
                      {prophetsList[selectedProphetIdx].story}
                    </p>
                  </div>
                </div>
              )}

              {/* Generic fallback for remaining topics */}
              {!['pillars-builder', 'prayer-clock', 'wudu-steps', 'good-deeds-tree', 'daily-duas', 'prophets-timeline'].includes(
                selectedTopic.id
              ) && (
                <div className="bg-white p-5 rounded-2xl border border-teal-200 text-center space-y-2">
                  <div className="text-4xl">📖✨</div>
                  <h6 className="font-black text-slate-900 text-sm">Blessed Wisdom Session</h6>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Recite these verses with love, share kindness with your family, and make sincere dua!
                  </p>
                </div>
              )}
            </div>

            {/* Secret Wisdom Fact */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <span className="text-2xl p-1 bg-amber-200/70 rounded-xl shrink-0">✨</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">Blessed Sunnah Secret:</span>
                <p className="text-xs sm:text-sm font-semibold text-amber-950 mt-0.5">{selectedTopic.funSecret}</p>
              </div>
            </div>

            {/* Quick Challenge Quiz */}
            <div className="rounded-2xl border-2 border-teal-200 p-5 bg-gradient-to-b from-white to-teal-50/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-teal-900 bg-teal-100 px-3 py-1 rounded-full">
                  <Trophy size={14} className="text-amber-500" /> Quick Kid Challenge (+5 Points)
                </span>
                <span className="text-xs font-bold text-slate-400">1-Tap Question</span>
              </div>

              <h4 className="font-black text-base text-slate-900">{selectedTopic.quickQuiz.question}</h4>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {selectedTopic.quickQuiz.options.map((opt, idx) => {
                  const isCorrect = idx === selectedTopic.quickQuiz.correctIndex;
                  const isSelected = quizAnswered === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizOptionClick(idx)}
                      disabled={quizAnswered !== null}
                      className={`p-3 rounded-xl font-bold text-xs sm:text-sm text-left transition-all border ${
                        quizAnswered === null
                          ? 'bg-white hover:bg-teal-50 hover:border-teal-300 border-slate-200 text-slate-800'
                          : isCorrect
                          ? 'bg-teal-700 border-teal-800 text-white shadow-md'
                          : isSelected
                          ? 'bg-rose-500 border-rose-600 text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-400 opacity-60'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-semibold ${
                    quizAnswered === selectedTopic.quickQuiz.correctIndex
                      ? 'bg-teal-100 text-teal-950 border border-teal-300'
                      : 'bg-amber-100 text-amber-950 border border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black mb-1">
                    {quizAnswered === selectedTopic.quickQuiz.correctIndex ? (
                      <>
                        <CheckCircle2 size={16} className="text-teal-700" /> MashaAllah! +5 Points Added!
                      </>
                    ) : (
                      <>
                        <HelpCircle size={16} className="text-amber-700" /> Keep Learning!
                      </>
                    )}
                  </div>
                  {selectedTopic.quickQuiz.explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
