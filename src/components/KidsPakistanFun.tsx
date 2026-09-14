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
  Flag,
  MapPin,
  Heart,
  Mountain,
  Award,
  Compass,
  Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_PAKISTAN_TOPICS, PakistanTopic } from '../data/kidsPakistanTopics';
import confetti from 'canvas-confetti';

interface KidsPakistanFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsPakistanFun: React.FC<KidsPakistanFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_PAKISTAN_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Interactive toy states
  // 1. National Symbols Collector
  const [collectedSymbols, setCollectedSymbols] = useState<string[]>(['flag', 'jasmine']);
  const symbolsList = [
    { id: 'flag', name: 'National Flag', urdu: 'قومی پرچم', emoji: '🇵🇰', desc: 'Dark green & white with crescent & star' },
    { id: 'markhor', name: 'Markhor', urdu: 'مارخور', emoji: '🐐', desc: 'Majestic wild mountain goat with spiral horns' },
    { id: 'jasmine', name: 'Jasmine (Chambeli)', urdu: 'چنبیلی', emoji: '🌼', desc: 'Fragrant white flower of purity' },
    { id: 'chukar', name: 'Chukar Partridge', urdu: 'چکور', emoji: '🦅', desc: 'Melodious mountain game bird' },
    { id: 'mango', name: 'Chaunsa Mango', urdu: 'آم', emoji: '🥭', desc: 'Heavenly sweet king of fruits' },
    { id: 'deodar', name: 'Deodar Tree', urdu: 'دیودار', emoji: '🌲', desc: 'Mighty cedar tree of northern valleys' }
  ];

  // 2. Quaid's 3 Principles
  const [activePrinciple, setActivePrinciple] = useState<'unity' | 'faith' | 'discipline'>('unity');
  const principlesData = {
    unity: { title: '1. Unity (اتحاد - Ittehad)', emoji: '🤝', desc: 'We are one united family! Regardless of our city or mother tongue, we respect, love, and support each other as proud Pakistanis.', pledge: 'I will be kind to all my classmates and build friendships!' },
    faith: { title: '2. Faith (یقین - Yaqeen-e-Mohkam)', emoji: '🤲', desc: 'Belief in Allah and unwavering confidence in our honesty and abilities. A person with strong faith never fears difficulties.', pledge: 'I will speak the truth and believe in my dreams!' },
    discipline: { title: '3. Discipline (تنظیم - Tanzeem)', emoji: '⏱️', desc: 'Punctuality, neatness, following rules, and taking care of public property. Order and discipline build glorious civilizations.', pledge: 'I will be on time, keep my surroundings tidy, and obey rules!' }
  };

  // 3. Provinces & Territories Explorer
  const [activeProvince, setActiveProvince] = useState<string>('punjab');
  const provincesData: Record<
    string,
    { name: string; urdu: string; capital: string; culture: string; food: string; landmark: string; emoji: string; color: string }
  > = {
    punjab: { name: 'Punjab', urdu: 'پنجاب', capital: 'Lahore', culture: 'Bhangra, rich pottery & Phulkari embroidery', food: 'Sarson ka Saag & Makai Roti, Halwa Puri', landmark: 'Badshahi Mosque & Minar-e-Pakistan', emoji: '🌾', color: 'bg-amber-600' },
    sindh: { name: 'Sindh', urdu: 'سندھ', capital: 'Karachi', culture: 'Ajrak shawl, Sindhi Topi & Sufi music', food: 'Sindhi Biryani, Shikarpur Achar', landmark: 'Mohenjo-daro & Mazar-e-Quaid', emoji: '🌊', color: 'bg-emerald-600' },
    kp: { name: 'Khyber Pakhtunkhwa', urdu: 'خیبر پختونخوا', capital: 'Peshawar', culture: 'Valiant hospitality, Rabab music & Peshawar chappal', food: 'Chapli Kebab, Kabuli Pulao', landmark: 'Bab-e-Khyber & Lake Saiful Muluk', emoji: '🏔️', color: 'bg-sky-700' },
    balochistan: { name: 'Balochistan', urdu: 'بلوچستان', capital: 'Quetta', culture: 'Mirror-work Balochi dresses & Dambura tunes', food: 'Balochi Sajji & Kaak bread', landmark: 'Gwadar Port & Ziarat Juniper Valley', emoji: '⛰️', color: 'bg-teal-700' },
    gb: { name: 'Gilgit-Baltistan', urdu: 'گلگت بلتستان', capital: 'Gilgit', culture: 'Traditional woolen feather caps & polo games', food: 'Mamtu dumplings & apricot soup', landmark: 'K2 (8,611m) & Shangrila Lake', emoji: '❄️', color: 'bg-indigo-800' },
    capital: { name: 'Islamabad Capital', urdu: 'اسلام آباد', capital: 'Federal Capital', culture: 'Cosmopolitan center of diplomacy & art', food: 'Daman-e-Koh cafes & traditional feasts', landmark: 'Faisal Mosque & Pakistan Monument', emoji: '🏛️', color: 'bg-green-700' }
  };

  // 4. K2 Climber
  const [k2AltitudeStage, setK2AltitudeStage] = useState<number>(0);
  const k2Stages = [
    { stage: '1. Skardu Valley', altitude: '2,228 m', note: 'Gateway to high Karakoram with apricots and clear rivers', icon: '🚙' },
    { stage: '2. Askole & Baltoro Glacier', altitude: '3,040 m', note: 'Trekking over 63 km of ancient glacial ice!', icon: '🥾' },
    { stage: '3. Concordia (Throne Room)', altitude: '4,600 m', note: 'Surrounded by four 8,000-meter giant peaks!', icon: '⛺' },
    { stage: '4. K2 Base Camp', altitude: '5,150 m', note: 'Climbers prepare for the legendary icy pyramid', icon: '🧗‍♂️' },
    { stage: '5. K2 Summit (Chhogori)', altitude: '8,611 m', note: 'Touching the sky! 2nd highest point on planet Earth!', icon: '👑' }
  ];

  // 5. Ancient Mohenjo-daro Archaeology Excavator
  const [excavatedItems, setExcavatedItems] = useState<string[]>(['bath']);
  const ancientRelics = [
    { id: 'bath', name: 'The Great Bath', emoji: '🛁', desc: 'Waterproof baked brick public bath 4,500 years old' },
    { id: 'priest', name: 'Priest-King Sculpture', emoji: '🗿', desc: 'Soapstone statue with clover leaf robe' },
    { id: 'seal', name: 'Humped Bull Seal', emoji: '🐂', desc: 'Intricate carving used for trading along Indus' },
    { id: 'cart', name: 'Clay Toy Cart', emoji: '🛞', desc: 'Miniature wheeled toy played with by Indus children' }
  ];

  // 6. Sports Trophies Cabinet
  const [activeTrophy, setActiveTrophy] = useState<string>('cricket');
  const trophiesData: Record<string, { title: string; year: string; hero: string; desc: string; emoji: string }> = {
    cricket: { title: '1992 Cricket World Cup 🏏', year: '1992 Melbourne', hero: 'Captain Imran Khan & Wasim Akram', desc: 'Pakistan defeated England in the grand final with fiery bowling and cornered tigers grit!', emoji: '🏆' },
    squash: { title: '555 Unbeaten Matches 🎾', year: '1981–1986', hero: 'Jahangir Khan & Jansher Khan', desc: 'Jahangir Khan achieved the longest unbroken winning streak in all world sports history!', emoji: '🥇' },
    hockey: { title: '4x Hockey World Champions 🏑', year: '1971, 1978, 1982, 1994', hero: 'Samiullah & Shahbaz Ahmed', desc: 'Pakistan holds the record for the most Field Hockey World Cup titles in history!', emoji: '🏅' },
    olympic: { title: 'Olympic Javelin Gold 🥇', year: '2024 Paris', hero: 'Arshad Nadeem', desc: 'Set an Olympic record throw of 92.97 meters, bringing Olympic Gold back to Pakistan!', emoji: '⭐' }
  };

  const selectedTopic = KIDS_PAKISTAN_TOPICS.find(t => t.id === selectedTopicId) || KIDS_PAKISTAN_TOPICS[0];

  const filteredTopics = KIDS_PAKISTAN_TOPICS.filter(t => {
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
        const text = `${selectedTopic.title}. ${selectedTopic.concept} Here is a story of our beloved homeland: ${selectedTopic.funStory.setup} ${selectedTopic.funStory.action} ${selectedTopic.funStory.result} Pride of Pakistan fact: ${selectedTopic.funSecret}`;
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
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#059669', '#10b981', '#ffffff', '#f59e0b']
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-800 via-green-900 to-teal-950 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-20 select-none pointer-events-none">🇵🇰</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Kids Ocean
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">🇵🇰</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Pakistan Knowledge & Heritage 🌟</h2>
                <p className="text-emerald-100 text-sm mt-0.5 max-w-xl">
                  Discover national symbols, founding heroes, majestic K2, Indus River, our 4 provinces, and champions!
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
              <span className="text-xs uppercase font-bold text-emerald-100 block">Class 1–5 Pakistan GK</span>
              <span className="text-lg font-black">{KIDS_PAKISTAN_TOPICS.length} National Topics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grade filter & search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
            <button
              key={grade}
              onClick={() => setFilterGrade(grade)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                filterGrade === grade
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            placeholder="Search symbols, Quaid, K2, provinces..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Topic Navigator */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 mb-1">
            Choose Pakistan Topic ({filteredTopics.length})
          </div>
          {filteredTopics.map(topic => {
            const isSelected = topic.id === selectedTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-300'
                    : 'bg-white border-slate-200 hover:border-emerald-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl p-2 bg-emerald-100/70 rounded-xl shrink-0">{topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-md">
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

        {/* Deep Dive Workspace */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm space-y-6">
            {/* Header & TTS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedTopic.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    {selectedTopic.category} · {selectedTopic.grade}
                  </span>
                  {selectedTopic.urduPhrase && (
                    <span className="text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-serif">
                      {selectedTopic.urduPhrase}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{selectedTopic.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800">{selectedTopic.funTitle}</p>
              </div>

              <button
                onClick={toggleSpeak}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-sm transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-emerald-700 hover:bg-emerald-800 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
              </button>
            </div>

            {/* Core Knowledge Concept */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-xs uppercase tracking-wider mb-2">
                <Flag size={16} className="text-emerald-700" /> Pride of Pakistan Concept
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedTopic.concept}</p>
            </div>

            {/* Character & Story */}
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl p-1.5 bg-emerald-100 rounded-xl">{selectedTopic.character.avatar}</span>
                <div>
                  <h5 className="font-black text-sm text-slate-900">{selectedTopic.character.name}</h5>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                    {selectedTopic.character.role}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">Setting the Scene:</strong> {selectedTopic.funStory.setup}
                </p>
                <p>
                  <strong className="text-slate-900">In Action:</strong> {selectedTopic.funStory.action}
                </p>
                <p className="text-emerald-900 font-semibold bg-emerald-100/70 p-2.5 rounded-xl">
                  💚 <strong>Our Motherland:</strong> {selectedTopic.funStory.result}
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

            {/* INTERACTIVE TOY PLAYGROUND FOR PAKISTAN KNOWLEDGE */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-emerald-900 bg-emerald-200/70 px-3 py-1 rounded-full">
                  <Sparkles size={14} /> Interactive Pakistan Toy
                </span>
                <span className="text-xs font-bold text-emerald-700">Tap to Explore!</span>
              </div>

              {/* 1. National Symbols Collector */}
              {(selectedTopic.id === 'symbols-collector' || selectedTopic.id === 'allama-iqbal-shaheen') && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Tap to collect all 6 National Emblems into your Pakistan Pride Badge ({collectedSymbols.length} / 6 collected)!
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {symbolsList.map(item => {
                      const isCollected = collectedSymbols.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (!isCollected) {
                              const updated = [...collectedSymbols, item.id];
                              setCollectedSymbols(updated);
                              addLearningPoints(2);
                              confetti({ particleCount: 30, spread: 50 });
                              if (updated.length === 6) {
                                addLearningPoints(5);
                                confetti({ particleCount: 80, spread: 90 });
                              }
                            }
                          }}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isCollected
                              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
                              : 'bg-slate-50 border-slate-200 hover:bg-emerald-50/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-3xl">{item.emoji}</span>
                            {isCollected ? (
                              <span className="text-[10px] font-black uppercase text-emerald-900 bg-emerald-200 px-1.5 py-0.5 rounded">
                                COLLECTED ✓
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-slate-400">Tap to Collect</span>
                            )}
                          </div>
                          <h6 className="font-black text-xs text-slate-900 mt-2">{item.name}</h6>
                          <div className="text-[11px] font-serif font-bold text-emerald-800">{item.urdu}</div>
                          <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. Quaid's 3 Principles Builder */}
              {selectedTopic.id === 'quaid-principles' && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {(['unity', 'faith', 'discipline'] as const).map(p => (
                      <button
                        key={p}
                        onClick={() => setActivePrinciple(p)}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                          activePrinciple === p
                            ? 'bg-emerald-800 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {principlesData[p].emoji} {principlesData[p].title.split('(')[0]}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{principlesData[activePrinciple].emoji}</span>
                      <span className="text-xs font-black text-emerald-900 bg-emerald-200/80 px-3 py-1 rounded-full">
                        Golden Principle
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900">{principlesData[activePrinciple].title}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {principlesData[activePrinciple].desc}
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900">
                      🌟 <strong>My Student Promise:</strong> "{principlesData[activePrinciple].pledge}"
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Provinces & Territories Explorer */}
              {selectedTopic.id === 'provinces-tour' && (
                <div className="bg-white p-5 rounded-2xl border border-teal-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {Object.keys(provincesData).map(k => {
                      const prov = provincesData[k];
                      return (
                        <button
                          key={k}
                          onClick={() => setActiveProvince(k)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                            activeProvince === k
                              ? `${prov.color} text-white shadow-md scale-105`
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {prov.emoji} {prov.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-5 bg-teal-50 rounded-2xl border border-teal-200 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-4xl">{provincesData[activeProvince].emoji}</span>
                        <div>
                          <h4 className="text-xl font-black text-slate-900">{provincesData[activeProvince].name}</h4>
                          <span className="text-xs font-bold font-serif text-teal-800">
                            {provincesData[activeProvince].urdu}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Provincial Capital</span>
                        <span className="text-xs font-black text-teal-950 bg-white px-2.5 py-1 rounded-lg border border-teal-200">
                          {provincesData[activeProvince].capital}
                        </span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-white p-3 rounded-xl border border-teal-100">
                        <strong className="text-slate-900 block">🎨 Cultural Heritage:</strong>
                        <span className="text-slate-600">{provincesData[activeProvince].culture}</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-teal-100">
                        <strong className="text-slate-900 block">🍲 Famous Flavors:</strong>
                        <span className="text-slate-600">{provincesData[activeProvince].food}</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-teal-100 text-xs">
                      <strong className="text-slate-900 block">🏛️ Must-Visit Landmark:</strong>
                      <span className="text-slate-600">{provincesData[activeProvince].landmark}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. K2 Climber */}
              {selectedTopic.id === 'k2-climber' && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Step by step mountain ascent to K2 Summit! (Stage {k2AltitudeStage + 1} of {k2Stages.length})
                  </div>

                  <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
                    <span className="text-5xl">{k2Stages[k2AltitudeStage].icon}</span>
                    <h4 className="text-2xl font-black text-cyan-300">{k2Stages[k2AltitudeStage].stage}</h4>
                    <div className="text-sm font-extrabold bg-white/20 inline-block px-4 py-1 rounded-full">
                      Altitude: {k2Stages[k2AltitudeStage].altitude}
                    </div>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">{k2Stages[k2AltitudeStage].note}</p>
                  </div>

                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        const next = (k2AltitudeStage + 1) % k2Stages.length;
                        setK2AltitudeStage(next);
                        if (next === 4) {
                          addLearningPoints(5);
                          confetti({ particleCount: 70, spread: 80 });
                        } else {
                          addLearningPoints(1);
                        }
                      }}
                      className="px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-black text-xs shadow-sm inline-flex items-center gap-2"
                    >
                      {k2AltitudeStage === 4 ? '🔄 Start Climb Again' : '🧗 Climb Next Camp'}
                    </button>
                  </div>
                </div>
              )}

              {/* 5. Ancient Mohenjo-daro Archaeology Excavator */}
              {selectedTopic.id === 'ancient-mohenjo' && (
                <div className="bg-white p-5 rounded-2xl border border-stone-300 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Use your archaeology brush to reveal ancient 5,000-year-old treasures ({excavatedItems.length} of 4 excavated)!
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {ancientRelics.map(item => {
                      const isFound = excavatedItems.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (!isFound) {
                              setExcavatedItems([...excavatedItems, item.id]);
                              addLearningPoints(2);
                              confetti({ particleCount: 35 });
                            }
                          }}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isFound
                              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300'
                              : 'bg-stone-100 border-stone-200 hover:bg-amber-50/60'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-2xl">{item.emoji}</span>
                            {isFound ? (
                              <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200 px-1.5 py-0.5 rounded">
                                DISCOVERED
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-stone-400">Brush to Reveal</span>
                            )}
                          </div>
                          <h6 className="font-black text-xs text-slate-900 mt-1">{item.name}</h6>
                          <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 6. Sports Champions Trophy Cabinet */}
              {selectedTopic.id === 'sports-trophies' && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {Object.keys(trophiesData).map(k => (
                      <button
                        key={k}
                        onClick={() => {
                          setActiveTrophy(k);
                          confetti({ particleCount: 20 });
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                          activeTrophy === k
                            ? 'bg-emerald-800 text-white shadow-md scale-105'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {trophiesData[k].emoji} {trophiesData[k].title.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl space-y-3">
                    <div className="text-5xl">{trophiesData[activeTrophy].emoji}</div>
                    <h4 className="text-2xl font-black text-amber-300">{trophiesData[activeTrophy].title}</h4>
                    <div className="inline-block bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold">
                      ⭐ Legend: {trophiesData[activeTrophy].hero}
                    </div>
                    <p className="text-xs text-emerald-100 max-w-md mx-auto">{trophiesData[activeTrophy].desc}</p>
                  </div>
                </div>
              )}

              {/* Generic fallback for other topics */}
              {![
                'symbols-collector',
                'allama-iqbal-shaheen',
                'quaid-principles',
                'provinces-tour',
                'k2-climber',
                'ancient-mohenjo',
                'sports-trophies'
              ].includes(selectedTopic.id) && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-2">
                  <div className="text-4xl">🇵🇰✨</div>
                  <h6 className="font-black text-slate-900 text-sm">Pride of Pakistan Heritage Lab</h6>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Sing the National Anthem or draw this emblem with your green color pencils!
                  </p>
                </div>
              )}
            </div>

            {/* Pride of Pakistan Secret Fact */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-start gap-3">
              <span className="text-2xl p-1 bg-emerald-200/70 rounded-xl shrink-0">🇵🇰</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-emerald-900 block">
                  Pride of Pakistan Secret Fact:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950 mt-0.5">{selectedTopic.funSecret}</p>
              </div>
            </div>

            {/* Quick Challenge Quiz */}
            <div className="rounded-2xl border-2 border-emerald-200 p-5 bg-gradient-to-b from-white to-emerald-50/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full">
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
                          ? 'bg-white hover:bg-emerald-50 hover:border-emerald-300 border-slate-200 text-slate-800'
                          : isCorrect
                          ? 'bg-emerald-700 border-emerald-800 text-white shadow-md'
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
                      ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                      : 'bg-amber-100 text-amber-950 border border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black mb-1">
                    {quizAnswered === selectedTopic.quickQuiz.correctIndex ? (
                      <>
                        <CheckCircle2 size={16} className="text-emerald-700" /> Shabash, Patriot! +5 Points Added!
                      </>
                    ) : (
                      <>
                        <HelpCircle size={16} className="text-amber-700" /> Try Again & Keep Learning!
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
