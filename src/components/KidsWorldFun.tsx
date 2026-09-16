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
  Globe,
  Compass,
  MapPin,
  Sun,
  Moon,
  Thermometer,
  Anchor,
  Plane
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_WORLD_TOPICS, WorldTopic } from '../data/kidsWorldTopics';
import confetti from 'canvas-confetti';

interface KidsWorldFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsWorldFun: React.FC<KidsWorldFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_WORLD_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground interactive states
  // 1. Continents Explorer
  const [activeContinent, setActiveContinent] = useState<string>('asia');
  const [visitedContinents, setVisitedContinents] = useState<string[]>(['asia']);
  const continentsData: Record<
    string,
    { name: string; emoji: string; rank: string; pop: string; mascot: string; landmark: string; color: string }
  > = {
    asia: { name: 'Asia', emoji: '🌏', rank: '#1 Largest (30% Earth Land)', pop: '4.7 Billion people', mascot: 'Giant Panda 🐼', landmark: 'Mount Everest & Great Wall', color: 'bg-amber-500' },
    africa: { name: 'Africa', emoji: '🌍', rank: '#2 Largest', pop: '1.4 Billion people', mascot: 'African Lion 🦁', landmark: 'Sahara Desert & Nile River', color: 'bg-emerald-600' },
    north_america: { name: 'North America', emoji: '🌎', rank: '#3 Largest', pop: '600 Million people', mascot: 'Bald Eagle 🦅', landmark: 'Grand Canyon & Niagara Falls', color: 'bg-sky-600' },
    south_america: { name: 'South America', emoji: '🦜', rank: '#4 Largest', pop: '430 Million people', mascot: 'Jaguar & Toucan 🐆', landmark: 'Amazon Rainforest & Andes', color: 'bg-teal-600' },
    antarctica: { name: 'Antarctica', emoji: '🧊', rank: '#5 Largest (Ice Desert)', pop: 'Only scientists & penguins', mascot: 'Emperor Penguin 🐧', landmark: 'South Pole Ice Sheet', color: 'bg-indigo-500' },
    europe: { name: 'Europe', emoji: '🏰', rank: '#6 Largest', pop: '750 Million people', mascot: 'Brown Bear 🐻', landmark: 'Eiffel Tower & Swiss Alps', color: 'bg-purple-600' },
    australia: { name: 'Australia / Oceania', emoji: '🦘', rank: '#7 Smallest Continent', pop: '45 Million people', mascot: 'Red Kangaroo 🦘', landmark: 'Great Barrier Reef & Outback', color: 'bg-orange-500' }
  };

  // 2. Oceans Diver
  const [activeOcean, setActiveOcean] = useState<string>('pacific');
  const oceansData: Record<
    string,
    { name: string; depth: string; fact: string; creature: string; color: string }
  > = {
    pacific: { name: 'Pacific Ocean 🌊', depth: 'Mariana Trench: 11,000 m', fact: 'Biggest ocean; covers more area than all Earth land combined!', creature: 'Blue Whale 🐋', color: 'bg-blue-900 text-cyan-200' },
    atlantic: { name: 'Atlantic Ocean 🚢', depth: 'Puerto Rico Trench: 8,376 m', fact: 'Second biggest; divides America from Europe and Africa.', creature: 'Hammerhead Shark 🦈', color: 'bg-sky-800 text-sky-100' },
    indian: { name: 'Indian Ocean 🏝️', depth: 'Java Trench: 7,450 m', fact: 'Warmest ocean washing Pakistan’s southern Arabian Sea coast!', creature: 'Sea Turtle & Flying Fish 🐢', color: 'bg-teal-800 text-emerald-200' },
    southern: { name: 'Southern Ocean 🐧', depth: 'South Sandwich Trench: 7,236 m', fact: 'Encircles cold Antarctica with massive drifting icebergs.', creature: 'Leopard Seal 🦭', color: 'bg-indigo-900 text-blue-200' },
    arctic: { name: 'Arctic Ocean 🐻‍❄️', depth: 'Fram Basin: 5,607 m', fact: 'Smallest and shallowest ocean, covered with thick polar sea ice.', creature: 'Polar Bear & Walrus 🦭', color: 'bg-slate-800 text-cyan-100' }
  };

  // 3. World Wonders Passport
  const [stampedWonders, setStampedWonders] = useState<string[]>(['taj']);
  const wondersList = [
    { id: 'wall', name: 'Great Wall of China', country: 'China 🇨🇳', emoji: '🐉', note: '21,196 km long fortification' },
    { id: 'taj', name: 'Taj Mahal', country: 'India 🇮🇳', emoji: '🕌', note: 'White marble jewel built in 1648' },
    { id: 'pyramid', name: 'Pyramids of Giza', country: 'Egypt 🇪🇬', emoji: '🔺', note: 'Ancient pharaoh tombs over 4,500 yrs old' },
    { id: 'colosseum', name: 'The Colosseum', country: 'Italy 🇮🇹', emoji: '🏟️', note: 'Grand arena in Rome for 50,000 people' },
    { id: 'machu', name: 'Machu Picchu', country: 'Peru 🇵🇪', emoji: '⛰️', note: 'Incan lost city in cloud-capped Andes' },
    { id: 'eiffel', name: 'Eiffel Tower', country: 'France 🇫🇷', emoji: '🗼', note: 'Parisian iron tower 330 meters high' }
  ];

  // 4. Animal Habitats Matcher
  const [habitatQuestionIdx, setHabitatQuestionIdx] = useState<number>(0);
  const animalQuestions = [
    { animal: 'Kangaroo 🦘', correctContinent: 'Australia', options: ['Africa', 'Australia', 'Europe'], info: 'Hops across the Australian outback!' },
    { animal: 'Giant Panda 🐼', correctContinent: 'Asia', options: ['Asia', 'South America', 'Antarctica'], info: 'Munches bamboo in China, Asia!' },
    { animal: 'Emperor Penguin 🐧', correctContinent: 'Antarctica', options: ['Europe', 'Antarctica', 'North America'], info: 'Swims in freezing Antarctic waters!' },
    { animal: 'African Lion 🦁', correctContinent: 'Africa', options: ['Africa', 'Australia', 'Asia'], info: 'Rules the sunlit savannah of Africa!' },
    { animal: 'Polar Bear 🐻‍❄️', correctContinent: 'North Pole (Arctic)', options: ['North Pole (Arctic)', 'Australia', 'South America'], info: 'Walks on Arctic sea ice hunting seals!' }
  ];

  // 5. Day & Night city explorer
  const [selectedCity, setSelectedCity] = useState<'karachi' | 'tokyo' | 'london' | 'newyork'>('karachi');
  const cityTimes = {
    karachi: { name: 'Karachi, Pakistan 🇵🇰', isDay: true, time: '12:00 PM (Noon)', sky: 'bg-sky-400 text-slate-900', desc: 'Bright midday sunshine over Clifton Beach!' },
    tokyo: { name: 'Tokyo, Japan 🇯🇵', isDay: true, time: '4:00 PM (Afternoon)', sky: 'bg-amber-400 text-slate-900', desc: 'Sun lowering over Mount Fuji!' },
    london: { name: 'London, UK 🇬🇧', isDay: true, time: '7:00 AM (Early Morning)', sky: 'bg-sky-200 text-slate-900', desc: 'Sunrise over Big Ben!' },
    newyork: { name: 'New York, USA 🇺🇸', isDay: false, time: '2:00 AM (Midnight)', sky: 'bg-slate-950 text-indigo-200', desc: 'Stars glowing over the Statue of Liberty while people sleep!' }
  };

  // 6. World Greetings Jukebox
  const [activeGreeting, setActiveGreeting] = useState<string>('urdu');
  const greetingsData: Record<string, { phrase: string; lang: string; meaning: string; flag: string }> = {
    urdu: { phrase: 'Assalam-o-Alaikum (اَلسَّلَامُ عَلَيْكُم)', lang: 'Urdu / Arabic', meaning: 'May peace and safety be upon you!', flag: '🇵🇰' },
    english: { phrase: 'Hello! Good Morning!', lang: 'English', meaning: 'Friendly daytime greeting used across the globe!', flag: '🇬🇧' },
    spanish: { phrase: '¡Hola! ¿Cómo estás?', lang: 'Spanish', meaning: 'Hello! How are you doing today?', flag: '🇪🇸' },
    french: { phrase: 'Bonjour! Comment allez-vous?', lang: 'French', meaning: 'Good day! Wishing you a bright morning!', flag: '🇫🇷' },
    japanese: { phrase: 'Konnichiwa (こんにちは)', lang: 'Japanese', meaning: 'Hello, daytime polite greeting with a gentle bow!', flag: '🇯🇵' },
    chinese: { phrase: 'Nǐ Hǎo (你好)', lang: 'Mandarin Chinese', meaning: 'You good / wishing you good health!', flag: '🇨🇳' }
  };

  // 7. Mountain Altitude Elevator
  const [altitudeIdx, setAltitudeIdx] = useState<number>(3);
  const altitudeSteps = [
    { name: 'Mariana Trench Abyss', height: '-11,000 meters', desc: 'Deepest point on Earth under the Pacific!', icon: '⚓', bg: 'bg-slate-950 text-cyan-300' },
    { name: 'Sea Level', height: '0 meters', desc: 'Where sandy ocean beaches meet gentle waves.', icon: '🌊', bg: 'bg-blue-600 text-white' },
    { name: 'Burj Khalifa (Dubai)', height: '828 meters', desc: 'Tallest man-made building in the world.', icon: '🏙️', bg: 'bg-indigo-600 text-white' },
    { name: 'K2 (Pakistan)', height: '8,611 meters', desc: '2nd highest peak on Earth, towering in Karakoram!', icon: '🏔️', bg: 'bg-cyan-800 text-white' },
    { name: 'Mount Everest Peak', height: '8,848 meters', desc: 'The highest summit touching Earth’s jet stream!', icon: '👑', bg: 'bg-indigo-950 text-amber-300' }
  ];

  const selectedTopic = KIDS_WORLD_TOPICS.find(t => t.id === selectedTopicId) || KIDS_WORLD_TOPICS[0];

  const filteredTopics = KIDS_WORLD_TOPICS.filter(t => {
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
        const text = `${selectedTopic.title}. ${selectedTopic.concept} Here is a world explorer story: ${selectedTopic.funStory.setup} ${selectedTopic.funStory.action} ${selectedTopic.funStory.result} Remember this secret world fact: ${selectedTopic.funSecret}`;
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
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-sky-800 to-indigo-900 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-15 select-none pointer-events-none">🌍</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Kids Ocean
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">🌍</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">World Knowledge & Geography 🧭</h2>
                <p className="text-sky-100 text-sm mt-0.5 max-w-xl">
                  Explore Earth’s 7 continents, deep blue oceans, world wonders, animal kingdoms, and global cultures!
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
              <span className="text-xs uppercase font-bold text-sky-100 block">Class 1–5 World GK</span>
              <span className="text-lg font-black">{KIDS_WORLD_TOPICS.length} Global Topics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grade filter & search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-sky-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
            <button
              key={grade}
              onClick={() => setFilterGrade(grade)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                filterGrade === grade ? 'bg-sky-700 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            placeholder="Search continents, oceans & wonders..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Topic Navigator */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 mb-1">
            Choose World Topic ({filteredTopics.length})
          </div>
          {filteredTopics.map(topic => {
            const isSelected = topic.id === selectedTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-sky-50 border-sky-500 shadow-sm ring-2 ring-sky-300'
                    : 'bg-white border-slate-200 hover:border-sky-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl p-2 bg-sky-100/70 rounded-xl shrink-0">{topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-900 bg-sky-100 px-2 py-0.5 rounded-md">
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
          <div className="rounded-3xl bg-white border border-sky-100 p-6 shadow-sm space-y-6">
            {/* Header & TTS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedTopic.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full">
                    {selectedTopic.category} · {selectedTopic.grade}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{selectedTopic.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-800">{selectedTopic.funTitle}</p>
              </div>

              <button
                onClick={toggleSpeak}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-sm transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-sky-700 hover:bg-sky-800 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
              </button>
            </div>

            {/* Core Knowledge Concept */}
            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-sky-900 font-black text-xs uppercase tracking-wider mb-2">
                <Globe size={16} className="text-sky-600" /> Core World Fact
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedTopic.concept}</p>
            </div>

            {/* Character & Story */}
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl p-1.5 bg-sky-100 rounded-xl">{selectedTopic.character.avatar}</span>
                <div>
                  <h5 className="font-black text-sm text-slate-900">{selectedTopic.character.name}</h5>
                  <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wide">
                    {selectedTopic.character.role}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">Setting the Scene:</strong> {selectedTopic.funStory.setup}
                </p>
                <p>
                  <strong className="text-slate-900">The Expedition:</strong> {selectedTopic.funStory.action}
                </p>
                <p className="text-sky-900 font-semibold bg-sky-100/70 p-2.5 rounded-xl">
                  ✨ <strong>Discovery:</strong> {selectedTopic.funStory.result}
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

            {/* INTERACTIVE TOY PLAYGROUND FOR WORLD KNOWLEDGE */}
            <div className="rounded-2xl border-2 border-sky-300 bg-sky-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-sky-900 bg-sky-200/70 px-3 py-1 rounded-full">
                  <Sparkles size={14} /> Interactive World Explorer Toy
                </span>
                <span className="text-xs font-bold text-sky-700">Tap to Travel!</span>
              </div>

              {/* 1. Continents Explorer */}
              {selectedTopic.id === 'continents-explorer' && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Tap all 7 continents to stamp your global explorer passport ({visitedContinents.length} / 7 stamped)!
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5">
                    {Object.keys(continentsData).map(k => {
                      const cont = continentsData[k];
                      const isVisited = visitedContinents.includes(k);
                      return (
                        <button
                          key={k}
                          onClick={() => {
                            setActiveContinent(k);
                            if (!visitedContinents.includes(k)) {
                              const updated = [...visitedContinents, k];
                              setVisitedContinents(updated);
                              addLearningPoints(2);
                              if (updated.length === 7) {
                                addLearningPoints(5);
                                confetti({ particleCount: 70, spread: 80 });
                              }
                            }
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                            activeContinent === k
                              ? `${cont.color} text-white shadow-md scale-105 ring-2 ring-sky-300`
                              : isVisited
                              ? 'bg-sky-100 text-sky-900'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {cont.emoji} {cont.name} {isVisited && '✓'}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-5 bg-sky-50 rounded-2xl border border-sky-100 text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{continentsData[activeContinent].emoji}</span>
                      <span className="text-xs font-black bg-sky-200/70 text-sky-900 px-3 py-1 rounded-full">
                        {continentsData[activeContinent].rank}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900">{continentsData[activeContinent].name}</h4>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-white p-2.5 rounded-xl border border-sky-100">
                        <strong className="text-slate-900 block">👥 Population:</strong>
                        <span className="text-slate-600">{continentsData[activeContinent].pop}</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-sky-100">
                        <strong className="text-slate-900 block">🐾 Signature Wildlife:</strong>
                        <span className="text-slate-600">{continentsData[activeContinent].mascot}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-sky-100">
                      📍 <strong>Famous Landmarks:</strong> {continentsData[activeContinent].landmark}
                    </p>
                  </div>
                </div>
              )}

              {/* 2. Oceans Diver Submarine */}
              {selectedTopic.id === 'oceans-diver' && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {Object.keys(oceansData).map(k => (
                      <button
                        key={k}
                        onClick={() => setActiveOcean(k)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                          activeOcean === k ? 'bg-sky-800 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {oceansData[k].name}
                      </button>
                    ))}
                  </div>

                  <div className={`p-6 rounded-2xl ${oceansData[activeOcean].color} transition-colors space-y-3`}>
                    <div className="text-5xl">🤿 🐋</div>
                    <h4 className="text-2xl font-black">{oceansData[activeOcean].name}</h4>
                    <div className="inline-block bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold">
                      ⚓ Deepest Trench: {oceansData[activeOcean].depth}
                    </div>
                    <p className="text-xs max-w-md mx-auto opacity-95">
                      {oceansData[activeOcean].fact}
                    </p>
                    <div className="text-xs font-black bg-white/25 inline-block px-4 py-1.5 rounded-xl">
                      Marine Life: {oceansData[activeOcean].creature}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. World Wonders Passport Tour */}
              {selectedTopic.id === 'world-wonders' && (
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-500">
                    Tap to visit each wonder and stamp your passport ({stampedWonders.length} of 6 visited)!
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {wondersList.map(w => {
                      const isStamped = stampedWonders.includes(w.id);
                      return (
                        <button
                          key={w.id}
                          onClick={() => {
                            if (!isStamped) {
                              setStampedWonders([...stampedWonders, w.id]);
                              addLearningPoints(2);
                              confetti({ particleCount: 35 });
                            }
                          }}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isStamped
                              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300'
                              : 'bg-slate-50 border-slate-200 hover:bg-amber-50/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-2xl">{w.emoji}</span>
                            {isStamped ? (
                              <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200 px-1.5 py-0.5 rounded">
                                STAMPED ✓
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-slate-400">Tap to Visit</span>
                            )}
                          </div>
                          <h6 className="font-black text-xs text-slate-900 mt-1">{w.name}</h6>
                          <p className="text-[11px] text-slate-500">{w.country}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Animal Habitats Matcher */}
              {selectedTopic.id === 'animal-habitats' && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    Wildlife Mystery #{habitatQuestionIdx + 1} of {animalQuestions.length}
                  </span>
                  <div className="text-6xl">{animalQuestions[habitatQuestionIdx].animal.split(' ')[1]}</div>
                  <h4 className="text-lg font-black text-slate-900">
                    Where does the {animalQuestions[habitatQuestionIdx].animal.split(' ')[0]} live in the wild?
                  </h4>

                  <div className="flex flex-wrap justify-center gap-2">
                    {animalQuestions[habitatQuestionIdx].options.map(opt => {
                      const isCorrect = opt === animalQuestions[habitatQuestionIdx].correctContinent;
                      return (
                        <button
                          key={opt}
                          onClick={() => {
                            if (isCorrect) {
                              addLearningPoints(3);
                              confetti({ particleCount: 40, spread: 50 });
                            }
                            setHabitatQuestionIdx((habitatQuestionIdx + 1) % animalQuestions.length);
                          }}
                          className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-black text-xs rounded-xl transition-transform hover:scale-105"
                        >
                          📍 {opt}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Hint: {animalQuestions[habitatQuestionIdx].info}
                  </p>
                </div>
              )}

              {/* 5. Day & Night city explorer */}
              {selectedTopic.id === 'day-night-spin' && (
                <div className="bg-white p-5 rounded-2xl border border-indigo-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {(['karachi', 'tokyo', 'london', 'newyork'] as const).map(c => (
                      <button
                        key={c}
                        onClick={() => setSelectedCity(c)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                          selectedCity === c ? 'bg-indigo-700 text-white shadow-md' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {cityTimes[c].name.split(',')[0]}
                      </button>
                    ))}
                  </div>

                  <div className={`p-6 rounded-2xl ${cityTimes[selectedCity].sky} transition-all space-y-2`}>
                    <div className="text-5xl">{cityTimes[selectedCity].isDay ? '☀️' : '🌙✨'}</div>
                    <h4 className="text-xl font-black">{cityTimes[selectedCity].name}</h4>
                    <div className="text-base font-extrabold bg-white/20 inline-block px-4 py-1 rounded-full">
                      🕒 Local Time: {cityTimes[selectedCity].time}
                    </div>
                    <p className="text-xs opacity-90 max-w-md mx-auto pt-1 font-medium">
                      {cityTimes[selectedCity].desc}
                    </p>
                  </div>
                </div>
              )}

              {/* 6. World Greetings Jukebox */}
              {selectedTopic.id === 'world-greetings' && (
                <div className="bg-white p-5 rounded-2xl border border-purple-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {Object.keys(greetingsData).map(k => (
                      <button
                        key={k}
                        onClick={() => setActiveGreeting(k)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                          activeGreeting === k ? 'bg-purple-700 text-white shadow-md' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {greetingsData[k].flag} {greetingsData[k].lang}
                      </button>
                    ))}
                  </div>

                  <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 space-y-2">
                    <span className="text-3xl">{greetingsData[activeGreeting].flag}</span>
                    <h4 className="text-xl font-black text-purple-950">{greetingsData[activeGreeting].phrase}</h4>
                    <p className="text-xs text-slate-700 italic">"{greetingsData[activeGreeting].meaning}"</p>
                  </div>
                </div>
              )}

              {/* 7. Mountain Elevation Elevator */}
              {selectedTopic.id === 'mountain-elevation' && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {altitudeSteps.map((step, idx) => (
                      <button
                        key={step.name}
                        onClick={() => setAltitudeIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                          altitudeIdx === idx ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {step.icon} {step.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  <div className={`p-6 rounded-2xl ${altitudeSteps[altitudeIdx].bg} transition-all space-y-2`}>
                    <span className="text-5xl">{altitudeSteps[altitudeIdx].icon}</span>
                    <h4 className="text-xl font-black">{altitudeSteps[altitudeIdx].name}</h4>
                    <div className="text-base font-extrabold bg-white/20 inline-block px-4 py-1 rounded-full">
                      📏 Height: {altitudeSteps[altitudeIdx].height}
                    </div>
                    <p className="text-xs opacity-90 max-w-md mx-auto pt-1 font-medium">
                      {altitudeSteps[altitudeIdx].desc}
                    </p>
                  </div>
                </div>
              )}

              {/* Generic fallback for remaining topics */}
              {![
                'continents-explorer',
                'oceans-diver',
                'world-wonders',
                'animal-habitats',
                'day-night-spin',
                'world-greetings',
                'mountain-elevation'
              ].includes(selectedTopic.id) && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-2">
                  <div className="text-4xl">🌍✨</div>
                  <h6 className="font-black text-slate-900 text-sm">Global Geography Lab</h6>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Look up this wonder on an atlas or globe with your teachers and family!
                  </p>
                </div>
              )}
            </div>

            {/* Secret Explorer Fact */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <span className="text-2xl p-1 bg-amber-200/70 rounded-xl shrink-0">🧭</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">Secret Explorer Fact:</span>
                <p className="text-xs sm:text-sm font-semibold text-amber-950 mt-0.5">{selectedTopic.funSecret}</p>
              </div>
            </div>

            {/* Quick Challenge Quiz */}
            <div className="rounded-2xl border-2 border-sky-200 p-5 bg-gradient-to-b from-white to-sky-50/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-900 bg-sky-100 px-3 py-1 rounded-full">
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
                          ? 'bg-white hover:bg-sky-50 hover:border-sky-300 border-slate-200 text-slate-800'
                          : isCorrect
                          ? 'bg-sky-700 border-sky-800 text-white shadow-md'
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
                      ? 'bg-sky-100 text-sky-950 border border-sky-300'
                      : 'bg-amber-100 text-amber-950 border border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black mb-1">
                    {quizAnswered === selectedTopic.quickQuiz.correctIndex ? (
                      <>
                        <CheckCircle2 size={16} className="text-sky-700" /> High Five, Explorer! +5 Points Added!
                      </>
                    ) : (
                      <>
                        <HelpCircle size={16} className="text-amber-700" /> Keep Exploring!
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
