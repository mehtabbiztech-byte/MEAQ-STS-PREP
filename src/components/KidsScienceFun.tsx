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
  Lightbulb,
  Zap,
  Flame,
  Droplets,
  Sun,
  Compass,
  Thermometer
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_SCIENCE_TOPICS, ScienceTopic } from '../data/kidsScienceTopics';
import confetti from 'canvas-confetti';

interface KidsScienceFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsScienceFun: React.FC<KidsScienceFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_SCIENCE_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground interactive states
  // 1. Living vs Non-Living Scanner
  const [livingItemIdx, setLivingItemIdx] = useState<number>(0);
  const [livingSortedHistory, setLivingSortedHistory] = useState<{ name: string; isLiving: boolean; userGuess: boolean; correct: boolean }[]>([]);
  const livingItems = [
    { name: 'Baby Bunny', emoji: '🐇', isLiving: true, reason: 'Eats carrots, breathes air, hops and grows!' },
    { name: 'Toy Robot', emoji: '🤖', isLiving: false, reason: 'Made of plastic and metal; needs batteries and cannot grow.' },
    { name: 'Mango Tree', emoji: '🌳', isLiving: true, reason: 'Drinks water through roots, uses sunlight to make food, grows giant!' },
    { name: 'Smooth Stone', emoji: '🪨', isLiving: false, reason: 'Never breathes, never eats, cannot move by itself.' },
    { name: 'Goldfish', emoji: '🐟', isLiving: true, reason: 'Swims in water, breathes with gills, eats fish flakes!' },
    { name: 'Soccer Ball', emoji: '⚽', isLiving: false, reason: 'Non-living object; only moves when kicked!' }
  ];

  // 2. Plant Grower
  const [waterLevel, setWaterLevel] = useState<number>(40);
  const [sunlightLevel, setSunlightLevel] = useState<number>(50);

  // 3. Senses Lab
  const [activeSense, setActiveSense] = useState<'sight' | 'sound' | 'smell' | 'taste' | 'touch'>('sight');

  // 4. Matter States (Temperature slider)
  const [temperature, setTemperature] = useState<number>(25);

  // 5. Solar System Explorer
  const [selectedPlanetIdx, setSelectedPlanetIdx] = useState<number>(2); // Default Earth
  const planets = [
    { name: 'Mercury', emoji: '🪨', color: 'bg-slate-400', desc: 'Closest to Sun, scorching day, freezing night, zero moons.' },
    { name: 'Venus', emoji: '🌋', color: 'bg-amber-300', desc: 'Hottest planet! Thick sulfuric acid clouds trap volcano heat like an oven.' },
    { name: 'Earth', emoji: '🌍', color: 'bg-blue-500', desc: 'Our home! Perfect liquid water, breathable air, 1 lovely Moon.' },
    { name: 'Mars', emoji: '🔴', color: 'bg-red-500', desc: 'The Red Planet with iron-rich rust dust and giant dormant volcanoes.' },
    { name: 'Jupiter', emoji: '🪐', color: 'bg-amber-600', desc: 'King of planets! A gigantic gas ball that could fit 1,300 Earths inside.' },
    { name: 'Saturn', emoji: '🪐', color: 'bg-yellow-500', desc: 'Famous for its dazzling wide rings made of ice, dust, and boulders.' },
    { name: 'Uranus', emoji: '🧊', color: 'bg-teal-400', desc: 'Tilted ice giant rotating on its side like a bowling ball.' },
    { name: 'Neptune', emoji: '🌊', color: 'bg-blue-700', desc: 'Deep blue icy world with the fastest supersonic hurricane winds!' }
  ];

  // 6. Water Cycle
  const [waterCycleStep, setWaterCycleStep] = useState<number>(0);
  const waterSteps = [
    { title: '☀️ 1. Evaporation', emoji: '♨️', desc: 'Warm sun turns surface lake water into rising invisible vapor gas!' },
    { title: '☁️ 2. Condensation', emoji: '☁️', desc: 'High in cold air, vapor cools and bunches into fluffy water droplets.' },
    { title: '🌧️ 3. Precipitation', emoji: '🌧️', desc: 'Clouds get too heavy and rain, snow, or hail falls down to earth!' },
    { title: '🌊 4. Collection', emoji: '🌊', desc: 'Rivers carry fresh water down mountain slopes back into the Arabian Sea.' }
  ];

  // 7. Human Body Organs
  const [activeOrgan, setActiveOrgan] = useState<'heart' | 'lungs' | 'brain' | 'stomach'>('heart');

  // 8. Magnet Lab
  const [magnetPoleOrientation, setMagnetPoleOrientation] = useState<'attract' | 'repel'>('attract');
  const [testedMaterials, setTestedMaterials] = useState<string[]>([]);

  // 9. Habitats Map
  const [activeHabitat, setActiveHabitat] = useState<'desert' | 'arctic' | 'ocean' | 'jungle'>('desert');

  // 10. Light & Shadows
  const [flashlightDistance, setFlashlightDistance] = useState<'close' | 'medium' | 'far'>('medium');
  const [objectOpacity, setObjectOpacity] = useState<'opaque' | 'transparent' | 'translucent'>('opaque');

  // 11. Simple Machines
  const [chosenMachine, setChosenMachine] = useState<'hands' | 'ramp' | 'pulley' | 'lever'>('ramp');

  // 12. Forces & Motion
  const [pushPower, setPushPower] = useState<'gentle' | 'strong' | 'mega'>('strong');
  const [surfaceFriction, setSurfaceFriction] = useState<'ice' | 'wood' | 'grass'>('wood');

  const selectedTopic = KIDS_SCIENCE_TOPICS.find(t => t.id === selectedTopicId) || KIDS_SCIENCE_TOPICS[0];

  // Filter topics
  const filteredTopics = KIDS_SCIENCE_TOPICS.filter(t => {
    const matchesGrade =
      filterGrade === 'All' ||
      (filterGrade === 'Class 1–2' && t.grade.includes('Class 1') || t.grade.includes('Class 2')) ||
      (filterGrade === 'Class 3–4' && t.grade.includes('Class 3') || t.grade.includes('Class 4')) ||
      (filterGrade === 'Class 5' && t.grade.includes('Class 5'));
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.funTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  // Text to Speech
  const toggleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        window.speechSynthesis.cancel();
        const text = `${selectedTopic.title}. ${selectedTopic.concept} Here is a fun story: ${selectedTopic.funStory.setup} ${selectedTopic.funStory.action} ${selectedTopic.funStory.result} Remember the secret science trick: ${selectedTopic.funSecret}`;
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
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-15 select-none pointer-events-none">🌱</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Kids Ocean
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">🔬</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Science Fun Lab 🧪</h2>
                <p className="text-emerald-100 text-sm mt-0.5 max-w-xl">
                  Explore living wonders, solar planets, ice to steam, and secret forces with interactive toys!
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
              <span className="text-xs uppercase font-bold text-emerald-100 block">Class 1–5 Science</span>
              <span className="text-lg font-black">{KIDS_SCIENCE_TOPICS.length} Lab Topics</span>
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
                filterGrade === grade ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            placeholder="Search experiments & topics..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>

      {/* Main Grid: Left Topics Drawer / Selector, Right Active Interactive Workspace */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Topic Navigator */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 mb-1">
            Pick a Science Discovery ({filteredTopics.length})
          </div>
          {filteredTopics.map(topic => {
            const isSelected = topic.id === selectedTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-400 shadow-sm ring-2 ring-emerald-300'
                    : 'bg-white border-slate-200 hover:border-emerald-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl p-2 bg-emerald-100/60 rounded-xl shrink-0">{topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
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

        {/* Workspace: Topic Deep-Dive & Playground */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Topic Card */}
          <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-sm space-y-6">
            {/* Header with Title & Read to Me TTS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedTopic.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    {selectedTopic.category} · {selectedTopic.grade}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{selectedTopic.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-700">{selectedTopic.funTitle}</p>
              </div>

              <button
                onClick={toggleSpeak}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-sm transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
              </button>
            </div>

            {/* Core Science Concept Card */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-emerald-900 font-black text-xs uppercase tracking-wider mb-2">
                <Lightbulb size={16} className="text-emerald-600" /> Core Science Concept
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedTopic.concept}</p>
            </div>

            {/* Character & Story */}
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl p-1.5 bg-emerald-100 rounded-xl">{selectedTopic.character.avatar}</span>
                <div>
                  <h5 className="font-black text-sm text-slate-900">{selectedTopic.character.name}</h5>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                    {selectedTopic.character.role}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">The Discovery:</strong> {selectedTopic.funStory.setup}
                </p>
                <p>
                  <strong className="text-slate-900">What Happened:</strong> {selectedTopic.funStory.action}
                </p>
                <p className="text-emerald-800 font-semibold bg-emerald-100/60 p-2.5 rounded-xl">
                  ✨ <strong>Result:</strong> {selectedTopic.funStory.result}
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

            {/* INTERACTIVE LAB PLAYGROUND (CUSTOM TOY FOR EACH TOPIC) */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-emerald-900 bg-emerald-200/70 px-3 py-1 rounded-full">
                  <Sparkles size={14} /> Interactive Lab Playground
                </span>
                <span className="text-xs font-bold text-emerald-700">Tap & Experiment!</span>
              </div>

              {/* 1. Living vs Non-Living Scanner */}
              {selectedTopic.id === 'living-sorting' && (
                <div className="space-y-4 text-center">
                  <div className="p-5 bg-white rounded-2xl border border-emerald-200 shadow-sm max-w-md mx-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Specimen #{livingItemIdx + 1} of {livingItems.length}
                    </span>
                    <div className="text-6xl my-3">{livingItems[livingItemIdx].emoji}</div>
                    <div className="text-lg font-black text-slate-900">{livingItems[livingItemIdx].name}</div>
                    <p className="text-xs text-slate-500 mt-1">Does it eat, breathe, grow, and move naturally?</p>

                    <div className="flex justify-center gap-3 mt-4">
                      <button
                        onClick={() => {
                          const item = livingItems[livingItemIdx];
                          const correct = item.isLiving === true;
                          setLivingSortedHistory([
                            ...livingSortedHistory,
                            { name: item.name, isLiving: item.isLiving, userGuess: true, correct }
                          ]);
                          if (correct) addLearningPoints(2);
                          setLivingItemIdx((livingItemIdx + 1) % livingItems.length);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-sm transition-transform hover:scale-105"
                      >
                        🌱 LIVING (Alive!)
                      </button>
                      <button
                        onClick={() => {
                          const item = livingItems[livingItemIdx];
                          const correct = item.isLiving === false;
                          setLivingSortedHistory([
                            ...livingSortedHistory,
                            { name: item.name, isLiving: item.isLiving, userGuess: false, correct }
                          ]);
                          if (correct) addLearningPoints(2);
                          setLivingItemIdx((livingItemIdx + 1) % livingItems.length);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-800 text-white font-black text-sm shadow-sm transition-transform hover:scale-105"
                      >
                        🪨 NON-LIVING (Object)
                      </button>
                    </div>
                  </div>

                  {livingSortedHistory.length > 0 && (
                    <div className="p-3 bg-white rounded-xl border border-emerald-100 text-xs text-left max-w-md mx-auto space-y-1">
                      <span className="font-bold text-slate-600 block">Recent Detective Scans:</span>
                      {livingSortedHistory.slice(-3).map((h, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span>{h.name}</span>
                          <span className={h.correct ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>
                            {h.correct ? '✅ Correct!' : '❌ Oops!'} ({h.isLiving ? 'Living' : 'Non-Living'})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 2. Plant Growth Lab */}
              {selectedTopic.id === 'plant-grower' && (
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center">
                    <div className="h-40 flex flex-col items-center justify-end pb-2">
                      {waterLevel < 20 || sunlightLevel < 20 ? (
                        <div className="space-y-2">
                          <span className="text-4xl block">🌰</span>
                          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                            Asleep in soil! Add water & sunlight
                          </span>
                        </div>
                      ) : waterLevel > 40 && sunlightLevel > 40 ? (
                        <div className="space-y-2 animate-bounce">
                          <span className="text-7xl block">🌻</span>
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                            Full Bloom! Making sweet nectar & fresh oxygen 💨
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <span className="text-5xl block">🌱</span>
                          <span className="text-xs font-bold text-lime-800 bg-lime-100 px-3 py-1 rounded-full">
                            Sprouting stem & tiny green leaves!
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                      <div>
                        <label className="text-xs font-bold text-slate-700 flex items-center justify-between mb-1">
                          <span>💧 Water: {waterLevel}%</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={waterLevel}
                          onChange={e => setWaterLevel(Number(e.target.value))}
                          className="w-full accent-blue-600 cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 flex items-center justify-between mb-1">
                          <span>☀️ Sunlight: {sunlightLevel}%</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sunlightLevel}
                          onChange={e => setSunlightLevel(Number(e.target.value))}
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Senses Lab */}
              {selectedTopic.id === 'senses-lab' && (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'sight', name: 'Eyes (Sight)', emoji: '👁️' },
                      { id: 'sound', name: 'Ears (Sound)', emoji: '👂' },
                      { id: 'smell', name: 'Nose (Smell)', emoji: '👃' },
                      { id: 'taste', name: 'Tongue (Taste)', emoji: '👅' },
                      { id: 'touch', name: 'Skin (Touch)', emoji: '✋' }
                    ].map(s => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSense(s.id as any)}
                        className={`px-3 py-2 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all ${
                          activeSense === s.id
                            ? 'bg-amber-500 text-white shadow-md scale-105'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span>{s.emoji}</span> {s.name}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-amber-200 text-center">
                    {activeSense === 'sight' && (
                      <div>
                        <span className="text-4xl">🌈</span>
                        <h6 className="font-black text-slate-900 mt-2">Sight Power!</h6>
                        <p className="text-xs text-slate-600 mt-1">
                          Your eyes detect light reflections to recognize red strawberries, sparkling stars, and book words!
                        </p>
                      </div>
                    )}
                    {activeSense === 'sound' && (
                      <div>
                        <span className="text-4xl">🔔</span>
                        <h6 className="font-black text-slate-900 mt-2">Hearing Power!</h6>
                        <p className="text-xs text-slate-600 mt-1">
                          Sound vibrations shake your eardrum, letting you hear bird chirps, whispering winds, and school bells!
                        </p>
                      </div>
                    )}
                    {activeSense === 'smell' && (
                      <div>
                        <span className="text-4xl">🌹</span>
                        <h6 className="font-black text-slate-900 mt-2">Smell Power!</h6>
                        <p className="text-xs text-slate-600 mt-1">
                          Tiny airborne scent molecules enter your nostrils to tell your brain about fragrant roses and warm biryani!
                        </p>
                      </div>
                    )}
                    {activeSense === 'taste' && (
                      <div>
                        <span className="text-4xl">🍋</span>
                        <h6 className="font-black text-slate-900 mt-2">Taste Power!</h6>
                        <p className="text-xs text-slate-600 mt-1">
                          10,000 tongue buds instantly classify Sweet (mango), Sour (lemon), Salty (pretzels), and Bitter!
                        </p>
                      </div>
                    )}
                    {activeSense === 'touch' && (
                      <div>
                        <span className="text-4xl">🧸</span>
                        <h6 className="font-black text-slate-900 mt-2">Touch Power!</h6>
                        <p className="text-xs text-slate-600 mt-1">
                          Millions of skin nerve endings detect cozy soft teddy bear fur, cold ice cubes, and gentle hugs!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. States of Matter Thermostat */}
              {selectedTopic.id === 'matter-states' && (
                <div className="bg-white p-5 rounded-2xl border border-sky-200 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 font-black text-sm text-slate-700">
                    <Thermometer size={18} className="text-rose-500" /> Temperature: {temperature}°C
                  </div>

                  <div className="p-6 rounded-2xl bg-sky-50 flex flex-col items-center justify-center min-h-[140px]">
                    {temperature < 0 ? (
                      <div>
                        <span className="text-6xl block">🧊</span>
                        <span className="font-black text-blue-900 text-lg block mt-2">SOLID ICE</span>
                        <span className="text-xs text-blue-700">Tightly locked vibrating molecules with a fixed, rigid shape!</span>
                      </div>
                    ) : temperature < 100 ? (
                      <div>
                        <span className="text-6xl block animate-pulse">💧</span>
                        <span className="font-black text-cyan-900 text-lg block mt-2">LIQUID WATER</span>
                        <span className="text-xs text-cyan-700">Molecules freely slide and flow, taking the shape of any glass!</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-6xl block animate-bounce">♨️</span>
                        <span className="font-black text-purple-900 text-lg block mt-2">STEAM (GAS)</span>
                        <span className="text-xs text-purple-700">Molecules fly crazy-fast, expanding to fill the entire sky!</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <input
                      type="range"
                      min="-20"
                      max="120"
                      value={temperature}
                      onChange={e => setTemperature(Number(e.target.value))}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-1">
                      <span>-20°C (Freezing Ice)</span>
                      <span>0°C (Melting)</span>
                      <span>100°C (Boiling Steam)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Solar System Explorer */}
              {selectedTopic.id === 'solar-system' && (
                <div className="bg-slate-950 text-white p-5 rounded-2xl border border-indigo-500 space-y-4">
                  <div className="flex items-center justify-between text-xs text-indigo-300 font-bold">
                    <span>☀️ SUN IN CENTER</span>
                    <span>TAP A PLANET TO ORBIT</span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {planets.map((p, idx) => (
                      <button
                        key={p.name}
                        onClick={() => setSelectedPlanetIdx(idx)}
                        className={`p-2 rounded-xl text-center transition-all ${
                          selectedPlanetIdx === idx ? 'bg-indigo-600 scale-105 ring-2 ring-amber-400' : 'bg-slate-900 hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-2xl block">{p.emoji}</span>
                        <span className="text-[10px] font-bold truncate block mt-1">{p.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-900 rounded-xl border border-indigo-700/50">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{planets[selectedPlanetIdx].emoji}</span>
                      <div>
                        <h6 className="font-black text-amber-300 text-sm">{planets[selectedPlanetIdx].name}</h6>
                        <p className="text-xs text-slate-300 mt-0.5">{planets[selectedPlanetIdx].desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Water Cycle Step Pump */}
              {selectedTopic.id === 'water-cycle' && (
                <div className="bg-white p-5 rounded-2xl border border-cyan-200 text-center space-y-4">
                  <div className="flex justify-center gap-2">
                    {waterSteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setWaterCycleStep(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          waterCycleStep === idx ? 'bg-cyan-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        Step {idx + 1}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                    <span className="text-6xl block">{waterSteps[waterCycleStep].emoji}</span>
                    <h5 className="font-black text-cyan-900 text-lg mt-2">{waterSteps[waterCycleStep].title}</h5>
                    <p className="text-xs text-slate-700 max-w-md mx-auto mt-1">{waterSteps[waterCycleStep].desc}</p>
                  </div>

                  <button
                    onClick={() => setWaterCycleStep((waterCycleStep + 1) % waterSteps.length)}
                    className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs inline-flex items-center gap-1.5"
                  >
                    Next Water Cycle Step <ArrowRight size={14} />
                  </button>
                </div>
              )}

              {/* 7. Human Body Organs */}
              {selectedTopic.id === 'body-organs' && (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'heart', name: 'Heart 🫀', color: 'rose' },
                      { id: 'lungs', name: 'Lungs 🫁', color: 'sky' },
                      { id: 'brain', name: 'Brain 🧠', color: 'purple' },
                      { id: 'stomach', name: 'Stomach 🥣', color: 'amber' }
                    ].map(o => (
                      <button
                        key={o.id}
                        onClick={() => setActiveOrgan(o.id as any)}
                        className={`px-3 py-2 rounded-xl font-black text-xs transition-all ${
                          activeOrgan === o.id
                            ? 'bg-rose-600 text-white shadow-md'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {o.name}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-rose-200 text-center">
                    {activeOrgan === 'heart' && (
                      <div>
                        <span className="text-5xl block animate-pulse">🫀</span>
                        <h6 className="font-black text-rose-900 text-base mt-2">The Tireless 24/7 Pump!</h6>
                        <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                          Beats ~100,000 times a day pumping 5 liters of nutrient-rich red blood to your toes and brain!
                        </p>
                      </div>
                    )}
                    {activeOrgan === 'lungs' && (
                      <div>
                        <span className="text-5xl block animate-bounce">🫁</span>
                        <h6 className="font-black text-sky-900 text-base mt-2">The Oxygen Sponge Balloons!</h6>
                        <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                          Inhales fresh clean air and transfers oxygen into blood while exhaling carbon dioxide waste!
                        </p>
                      </div>
                    )}
                    {activeOrgan === 'brain' && (
                      <div>
                        <span className="text-5xl block">🧠</span>
                        <h6 className="font-black text-purple-900 text-base mt-2">The 100-Billion Neuron Commander!</h6>
                        <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                          Controls memories, feelings, calculations, eyesight, and lets you dream while sleeping!
                        </p>
                      </div>
                    )}
                    {activeOrgan === 'stomach' && (
                      <div>
                        <span className="text-5xl block">🥣</span>
                        <h6 className="font-black text-amber-900 text-base mt-2">The Bio Blender!</h6>
                        <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                          Uses digestive gastric juices and muscles to churn food into soup-like fuel for energy!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 8. Magnet Lab */}
              {selectedTopic.id === 'magnet-lab' && (
                <div className="bg-white p-5 rounded-2xl border border-red-200 text-center space-y-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setMagnetPoleOrientation('attract')}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs ${
                        magnetPoleOrientation === 'attract' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      North + South (Opposites)
                    </button>
                    <button
                      onClick={() => setMagnetPoleOrientation('repel')}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs ${
                        magnetPoleOrientation === 'repel' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      North + North (Likes)
                    </button>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center gap-6">
                    <div className="px-4 py-2 bg-red-500 text-white font-black rounded-lg shadow-sm">N (North)</div>
                    <span className="text-2xl">{magnetPoleOrientation === 'attract' ? '➡️ SNAP! ⬅️' : '⬅️ PUSH! ➡️'}</span>
                    <div
                      className={`px-4 py-2 text-white font-black rounded-lg shadow-sm ${
                        magnetPoleOrientation === 'attract' ? 'bg-blue-500' : 'bg-red-500'
                      }`}
                    >
                      {magnetPoleOrientation === 'attract' ? 'S (South)' : 'N (North)'}
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-600">
                    {magnetPoleOrientation === 'attract'
                      ? '❤️ Opposites Attract! Strong magnetic pull snaps them together.'
                      : '✋ Likes Repel! An invisible magnetic cushion pushes them apart.'}
                  </p>
                </div>
              )}

              {/* Fallback toy for other topics: Simple Machines or Force & Motion */}
              {selectedTopic.id === 'simple-machines' && (
                <div className="bg-white p-5 rounded-2xl border border-orange-200 text-center space-y-4">
                  <span className="text-xs font-bold text-slate-500 block">Goal: Lift a 100 kg Bolder!</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { id: 'hands', name: 'Bare Hands ✋' },
                      { id: 'ramp', name: 'Inclined Plane (Ramp) 🛝' },
                      { id: 'pulley', name: 'Pulley & Rope 🪢' },
                      { id: 'lever', name: 'Lever & Fulcrum ⚖️' }
                    ].map(m => (
                      <button
                        key={m.id}
                        onClick={() => setChosenMachine(m.id as any)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black ${
                          chosenMachine === m.id ? 'bg-orange-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-orange-50 rounded-xl text-xs text-orange-950 font-medium">
                    {chosenMachine === 'hands' && '😫 Too heavy! Muscle alone cannot safely lift 100 kg directly!'}
                    {chosenMachine === 'ramp' && '🎉 Smooth lift! The incline spreads the height over length, making effort easy!'}
                    {chosenMachine === 'pulley' && '🎈 Effortless! Pulling DOWN on the rope lets bodyweight lift the stone UP!'}
                    {chosenMachine === 'lever' && '💪 Superhero leverage! The fulcrum pivot lets you push with 1 hand to tilt the rock!'}
                  </div>
                </div>
              )}

              {selectedTopic.id === 'force-motion' && (
                <div className="bg-white p-5 rounded-2xl border border-teal-200 text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-xs font-bold text-slate-400 self-center">Surface:</span>
                    {['ice', 'wood', 'grass'].map(s => (
                      <button
                        key={s}
                        onClick={() => setSurfaceFriction(s as any)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold capitalize ${
                          surfaceFriction === s ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {s} {s === 'ice' ? '🧊 (Low Friction)' : s === 'wood' ? '🪵 (Medium)' : '🌿 (High Friction)'}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-100 rounded-xl">
                    <div className="text-4xl">⚽</div>
                    <div className="text-xs font-bold text-slate-700 mt-2">
                      {surfaceFriction === 'ice' && '⚡ Ball zooms 50 meters! Super low friction lets it glide non-stop!'}
                      {surfaceFriction === 'wood' && '🛼 Ball rolls smoothly for 20 meters, slowing gently.'}
                      {surfaceFriction === 'grass' && '🛑 Bumpy grass blades grab the ball with high friction, stopping in 5 meters!'}
                    </div>
                  </div>
                </div>
              )}

              {/* Other topics interactive banner */}
              {['habitats-map', 'shadow-light'].includes(selectedTopic.id) && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-2">
                  <div className="text-4xl">🔬✨</div>
                  <h6 className="font-black text-slate-900 text-sm">Laboratory Observation Active</h6>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Try spotting {selectedTopic.title.toLowerCase()} in your backyard, school playground, or kitchen today!
                  </p>
                </div>
              )}
            </div>

            {/* Secret Science Trick */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <span className="text-2xl p-1 bg-amber-200/70 rounded-xl shrink-0">💡</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">Secret Science Fact:</span>
                <p className="text-xs sm:text-sm font-semibold text-amber-950 mt-0.5">{selectedTopic.funSecret}</p>
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
                          ? 'bg-emerald-600 border-emerald-700 text-white shadow-md'
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
                        <CheckCircle2 size={16} className="text-emerald-700" /> Awesome Job! +5 Points Added!
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
