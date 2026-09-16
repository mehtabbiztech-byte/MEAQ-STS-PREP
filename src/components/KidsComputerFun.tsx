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
  Cpu,
  Monitor,
  MousePointer,
  ShieldCheck,
  Code,
  HardDrive,
  Grid,
  Play
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { KIDS_COMPUTER_TOPICS, ComputerTopic } from '../data/kidsComputerTopics';
import confetti from 'canvas-confetti';

interface KidsComputerFunProps {
  onBack: () => void;
  onPlayGame?: () => void;
}

export const KidsComputerFun: React.FC<KidsComputerFunProps> = ({ onBack, onPlayGame }) => {
  const { userProfile, addLearningPoints } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(KIDS_COMPUTER_TOPICS[0].id);
  const [filterGrade, setFilterGrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Playground interactive states
  // 1. Hardware vs Software Sorter
  const [hwSwItemIdx, setHwSwItemIdx] = useState<number>(0);
  const [hwSwScore, setHwSwScore] = useState<number>(0);
  const hwSwItems = [
    { name: 'Computer Mouse', emoji: '🖱️', isHardware: true, reason: 'Physical plastic device you hold with your hand!' },
    { name: 'MS Paint App', emoji: '🎨', isHardware: false, reason: 'Digital program running inside the computer screen!' },
    { name: 'Color Monitor', emoji: '🖥️', isHardware: true, reason: 'Glass and plastic screen hardware you can touch.' },
    { name: 'Minecraft Game', emoji: '⛏️', isHardware: false, reason: 'Software game made of code lines!' },
    { name: 'Typing Keyboard', emoji: '⌨️', isHardware: true, reason: 'Physical keys you press with fingers.' },
    { name: 'Google Chrome', emoji: '🌐', isHardware: false, reason: 'Web browser software to surf the internet.' }
  ];

  // 2. IPO Cycle Juicer & Calculator
  const [ipoInput, setIpoInput] = useState<number>(7);
  const [ipoProcessed, setIpoProcessed] = useState<boolean>(false);

  // 3. CPU Calculator
  const [cpuNum1, setCpuNum1] = useState<number>(25);
  const [cpuNum2, setCpuNum2] = useState<number>(15);
  const [cpuOp, setCpuOp] = useState<'+' | '-' | '×'>('+');
  const [cpuSpeedTime, setCpuSpeedTime] = useState<string>('0.00002 ms');

  // 4. Typing & Mouse Lab
  const [typedText, setTypedText] = useState<string>('HELLO WORLD');
  const [mouseActionFeedback, setMouseActionFeedback] = useState<string>('Click anywhere on the trackpad!');

  // 5. RAM vs SSD
  const [powerOn, setPowerOn] = useState<boolean>(true);
  const [ramFiles, setRamFiles] = useState<string[]>(['Drawing.png', 'YouTube Video']);
  const [ssdFiles, setSsdFiles] = useState<string[]>(['Windows OS', 'Saved Game', 'Family Photo']);

  // 6. Algorithm Maze
  const [codeCommands, setCodeCommands] = useState<string[]>(['Forward', 'Turn Right']);
  const [robotPos, setRobotPos] = useState<number>(0);
  const [robotSuccess, setRobotSuccess] = useState<boolean>(false);

  // 7. Cyber Shield
  const [cyberScenarioIdx, setCyberScenarioIdx] = useState<number>(0);
  const cyberScenarios = [
    {
      text: 'A game stranger in chat asks: "Tell me your home address and school to send you a gift!"',
      safe: false,
      reason: 'NEVER share home address, school, or phone number with strangers!'
    },
    {
      text: 'Creating a password like: SuperTiger#942! (mixed letters, numbers, symbols)',
      safe: true,
      reason: 'Awesome! Strong passwords protect your account from hackers!'
    },
    {
      text: 'A flashy pop-up says: "YOU WON 1 MILLION DOLLARS! Click here to download!"',
      safe: false,
      reason: 'Dangerous pop-up! It could download harmful viruses onto the PC!'
    }
  ];

  // 8. Binary Decoder (4-bit switches)
  const [bits, setBits] = useState<[number, number, number, number]>([0, 1, 0, 1]); // 5

  // 9. Pixel Painter (8x8 mini grid)
  const [pixelGrid, setPixelGrid] = useState<string[]>(Array(16).fill('#ffffff'));
  const [chosenColor, setChosenColor] = useState<string>('#3b82f6');

  const selectedTopic = KIDS_COMPUTER_TOPICS.find(t => t.id === selectedTopicId) || KIDS_COMPUTER_TOPICS[0];

  const filteredTopics = KIDS_COMPUTER_TOPICS.filter(t => {
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
        const text = `${selectedTopic.title}. ${selectedTopic.concept} Here is a fun story: ${selectedTopic.funStory.setup} ${selectedTopic.funStory.action} ${selectedTopic.funStory.result} Remember this secret tech tip: ${selectedTopic.funSecret}`;
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

  // Binary value calculation
  const binaryValue = bits[0] * 8 + bits[1] * 4 + bits[2] * 2 + bits[3] * 1;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-15 select-none pointer-events-none">💻</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Kids Ocean
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">💻</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Computer Fun & Coding 🤖</h2>
                <p className="text-blue-100 text-sm mt-0.5 max-w-xl">
                  Explore how computers think, code algorithms, binary light switches, and internet safety toys!
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
              <span className="text-xs uppercase font-bold text-blue-100 block">Class 1–5 Computer</span>
              <span className="text-lg font-black">{KIDS_COMPUTER_TOPICS.length} Tech Topics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grade filter & search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-blue-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {['All', 'Class 1–2', 'Class 3–4', 'Class 5'].map(grade => (
            <button
              key={grade}
              onClick={() => setFilterGrade(grade)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-colors ${
                filterGrade === grade ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            placeholder="Search coding, hardware & internet..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Topic Navigator */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[850px] overflow-y-auto pr-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 px-1 mb-1">
            Choose Tech Topic ({filteredTopics.length})
          </div>
          {filteredTopics.map(topic => {
            const isSelected = topic.id === selectedTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-sm ring-2 ring-blue-300'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl p-2 bg-blue-100/70 rounded-xl shrink-0">{topic.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-900 bg-blue-100 px-2 py-0.5 rounded-md">
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
          <div className="rounded-3xl bg-white border border-blue-100 p-6 shadow-sm space-y-6">
            {/* Header & TTS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedTopic.emoji}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full">
                    {selectedTopic.category} · {selectedTopic.grade}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{selectedTopic.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-800">{selectedTopic.funTitle}</p>
              </div>

              <button
                onClick={toggleSpeak}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs shadow-sm transition-all ${
                  isSpeaking
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                }`}
              >
                {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {isSpeaking ? 'Stop Reading' : '🔊 Read to Me!'}
              </button>
            </div>

            {/* Core Tech Concept */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-blue-900 font-black text-xs uppercase tracking-wider mb-2">
                <Cpu size={16} className="text-blue-600" /> Core Tech Concept
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedTopic.concept}</p>
            </div>

            {/* Character & Story */}
            <div className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl p-1.5 bg-blue-100 rounded-xl">{selectedTopic.character.avatar}</span>
                <div>
                  <h5 className="font-black text-sm text-slate-900">{selectedTopic.character.name}</h5>
                  <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wide">
                    {selectedTopic.character.role}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  <strong className="text-slate-900">The Problem:</strong> {selectedTopic.funStory.setup}
                </p>
                <p>
                  <strong className="text-slate-900">How Code/Tech Solved It:</strong> {selectedTopic.funStory.action}
                </p>
                <p className="text-blue-900 font-semibold bg-blue-100/70 p-2.5 rounded-xl">
                  ✨ <strong>Takeaway:</strong> {selectedTopic.funStory.result}
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

            {/* INTERACTIVE TECH PLAYGROUND */}
            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/40 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-black text-xs uppercase tracking-wider text-blue-900 bg-blue-200/70 px-3 py-1 rounded-full">
                  <Sparkles size={14} /> Interactive Tech Toy
                </span>
                <span className="text-xs font-bold text-blue-700">Test & Build!</span>
              </div>

              {/* 1. Hardware vs Software Sorter */}
              {selectedTopic.id === 'hw-sw-lab' && (
                <div className="bg-white p-5 rounded-2xl border border-blue-200 text-center space-y-4">
                  <span className="text-xs font-bold text-slate-400 uppercase">Item #{hwSwItemIdx + 1} of {hwSwItems.length}</span>
                  <div className="text-6xl">{hwSwItems[hwSwItemIdx].emoji}</div>
                  <h4 className="text-lg font-black text-slate-900">{hwSwItems[hwSwItemIdx].name}</h4>
                  <p className="text-xs text-slate-500">Can you touch it with your hands, or is it a program inside?</p>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        const itm = hwSwItems[hwSwItemIdx];
                        if (itm.isHardware) {
                          addLearningPoints(2);
                          setHwSwScore(hwSwScore + 1);
                        }
                        setHwSwItemIdx((hwSwItemIdx + 1) % hwSwItems.length);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition-transform hover:scale-105"
                    >
                      🖥️ HARDWARE (Physical Body)
                    </button>
                    <button
                      onClick={() => {
                        const itm = hwSwItems[hwSwItemIdx];
                        if (!itm.isHardware) {
                          addLearningPoints(2);
                          setHwSwScore(hwSwScore + 1);
                        }
                        setHwSwItemIdx((hwSwItemIdx + 1) % hwSwItems.length);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs transition-transform hover:scale-105"
                    >
                      🎨 SOFTWARE (Mind & Program)
                    </button>
                  </div>
                </div>
              )}

              {/* 2. IPO Juicer / Conveyor */}
              {selectedTopic.id === 'ipo-cycle' && (
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <span className="text-xs font-bold text-blue-900 block">1. INPUT</span>
                      <div className="text-2xl mt-1">🍊🍊</div>
                      <span className="text-[11px] font-bold text-slate-600">You drop oranges</span>
                    </div>

                    <span className="text-xl">➡️</span>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                      <span className="text-xs font-bold text-amber-900 block">2. PROCESS</span>
                      <div className="text-2xl mt-1 animate-spin">⚙️</div>
                      <span className="text-[11px] font-bold text-slate-600">Blades blend & press</span>
                    </div>

                    <span className="text-xl">➡️</span>

                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <span className="text-xs font-bold text-emerald-900 block">3. OUTPUT</span>
                      <div className="text-2xl mt-1">🧃</div>
                      <span className="text-[11px] font-bold text-slate-600">Fresh juice pours out!</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600">
                    Just like a juicer, you type on a <strong>Keyboard (Input)</strong>, the <strong>CPU (Process)</strong> calculates, and the <strong>Monitor (Output)</strong> shows the result!
                  </p>
                </div>
              )}

              {/* 3. CPU Nanosecond Math */}
              {selectedTopic.id === 'cpu-calculator' && (
                <div className="bg-slate-950 text-white p-5 rounded-2xl border border-indigo-500 text-center space-y-4">
                  <div className="flex items-center justify-between text-xs text-indigo-300 font-bold">
                    <span>⚡ 4.0 GHz MULTI-CORE PROCESSOR</span>
                    <span>10 BILLION TRANSISTORS</span>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <input
                      type="number"
                      value={cpuNum1}
                      onChange={e => setCpuNum1(Number(e.target.value))}
                      className="w-16 p-2 bg-slate-900 border border-indigo-700 text-center rounded-lg font-black text-amber-300"
                    />
                    <button
                      onClick={() => setCpuOp(cpuOp === '+' ? '-' : cpuOp === '-' ? '×' : '+')}
                      className="px-3 py-1.5 bg-indigo-600 rounded-lg font-black text-white hover:bg-indigo-500 text-base"
                    >
                      {cpuOp}
                    </button>
                    <input
                      type="number"
                      value={cpuNum2}
                      onChange={e => setCpuNum2(Number(e.target.value))}
                      className="w-16 p-2 bg-slate-900 border border-indigo-700 text-center rounded-lg font-black text-amber-300"
                    />
                    <span className="text-xl font-bold">=</span>
                    <div className="px-4 py-2 bg-emerald-600 rounded-lg font-black text-lg text-white">
                      {cpuOp === '+' ? cpuNum1 + cpuNum2 : cpuOp === '-' ? cpuNum1 - cpuNum2 : cpuNum1 * cpuNum2}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl text-xs text-indigo-300 font-mono">
                    ✅ Calculated in 0.0000001 seconds with zero errors!
                  </div>
                </div>
              )}

              {/* 4. Binary 4-Bit Switch Toy */}
              {selectedTopic.id === 'binary-decoder' && (
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-emerald-500 text-center space-y-4">
                  <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                    Flip the 4 Bit Switches (0 = Dark, 1 = Light)
                  </span>

                  <div className="flex justify-center gap-3">
                    {bits.map((bit, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const newBits: [number, number, number, number] = [bits[0], bits[1], bits[2], bits[3]];
                          newBits[idx] = bit === 0 ? 1 : 0;
                          setBits(newBits);
                        }}
                        className={`p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${
                          bit === 1 ? 'bg-emerald-600 ring-4 ring-emerald-400 scale-105' : 'bg-slate-800 opacity-60'
                        }`}
                      >
                        <span className="text-2xl">{bit === 1 ? '💡' : '⚫'}</span>
                        <span className="font-mono font-black text-xl">{bit}</span>
                        <span className="text-[10px] opacity-75">[{[8, 4, 2, 1][idx]}]</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-emerald-800 text-center">
                    <span className="text-xs text-slate-400">Decimal Number Value:</span>
                    <div className="text-3xl font-black text-emerald-300 mt-0.5">{binaryValue}</div>
                  </div>
                </div>
              )}

              {/* 5. Algorithm Maze */}
              {selectedTopic.id === 'algorithm-maze' && (
                <div className="bg-white p-5 rounded-2xl border border-pink-200 text-center space-y-4">
                  <div className="text-xs font-bold text-slate-600">
                    Direct Robot Bunny 🐰 to the Carrot 🥕 using Step-by-Step Code!
                  </div>

                  <div className="p-4 bg-slate-100 rounded-xl flex items-center justify-between max-w-sm mx-auto">
                    <span className="text-3xl">{robotPos === 0 ? '🐰' : '▫️'}</span>
                    <span className="text-3xl">{robotPos === 1 ? '🐰' : '▫️'}</span>
                    <span className="text-3xl">{robotPos === 2 ? '🐰' : '▫️'}</span>
                    <span className="text-3xl">🥕</span>
                  </div>

                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        if (robotPos < 2) {
                          setRobotPos(robotPos + 1);
                        } else {
                          setRobotPos(0);
                          addLearningPoints(3);
                          confetti({ particleCount: 50 });
                        }
                      }}
                      className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-black rounded-xl text-xs flex items-center gap-1.5"
                    >
                      <Play size={14} /> Execute: Step Forward
                    </button>
                    <button
                      onClick={() => setRobotPos(0)}
                      className="px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}

              {/* 6. Cyber Safety Shield */}
              {selectedTopic.id === 'cyber-shield' && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold text-emerald-950">
                    {cyberScenarios[cyberScenarioIdx].text}
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        if (cyberScenarios[cyberScenarioIdx].safe) {
                          addLearningPoints(2);
                          confetti({ particleCount: 30 });
                        }
                        setCyberScenarioIdx((cyberScenarioIdx + 1) % cyberScenarios.length);
                      }}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs flex items-center gap-1.5"
                    >
                      🛡️ SAFE CHOICE
                    </button>
                    <button
                      onClick={() => {
                        if (!cyberScenarios[cyberScenarioIdx].safe) {
                          addLearningPoints(2);
                          confetti({ particleCount: 30 });
                        }
                        setCyberScenarioIdx((cyberScenarioIdx + 1) % cyberScenarios.length);
                      }}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl text-xs flex items-center gap-1.5"
                    >
                      ⚠️ DANGEROUS! TELL ADULT
                    </button>
                  </div>
                </div>
              )}

              {/* Generic fallback for remaining topics */}
              {![
                'hw-sw-lab',
                'ipo-cycle',
                'cpu-calculator',
                'binary-decoder',
                'algorithm-maze',
                'cyber-shield'
              ].includes(selectedTopic.id) && (
                <div className="bg-white p-5 rounded-2xl border border-blue-200 text-center space-y-2">
                  <div className="text-4xl">💻⚡</div>
                  <h6 className="font-black text-slate-900 text-sm">Tech Lab Active</h6>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Try spotting {selectedTopic.title.toLowerCase()} on your laptop, tablet, or classroom computer!
                  </p>
                </div>
              )}
            </div>

            {/* Secret Tech Fact */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <span className="text-2xl p-1 bg-amber-200/70 rounded-xl shrink-0">💡</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">Secret Tech Secret:</span>
                <p className="text-xs sm:text-sm font-semibold text-amber-950 mt-0.5">{selectedTopic.funSecret}</p>
              </div>
            </div>

            {/* Quick Challenge Quiz */}
            <div className="rounded-2xl border-2 border-blue-200 p-5 bg-gradient-to-b from-white to-blue-50/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
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
                          ? 'bg-white hover:bg-blue-50 hover:border-blue-300 border-slate-200 text-slate-800'
                          : isCorrect
                          ? 'bg-blue-600 border-blue-700 text-white shadow-md'
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
                      ? 'bg-blue-100 text-blue-950 border border-blue-300'
                      : 'bg-amber-100 text-amber-950 border border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black mb-1">
                    {quizAnswered === selectedTopic.quickQuiz.correctIndex ? (
                      <>
                        <CheckCircle2 size={16} className="text-blue-700" /> High Five! +5 Points Added!
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
