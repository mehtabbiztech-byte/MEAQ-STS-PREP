import React, { useState } from 'react';
import {
  TrendingUp,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  BarChart2,
  Gauge,
  ShieldCheck,
  Zap,
  ArrowRight,
  PieChart,
} from 'lucide-react';

interface ExamCutoffProfile {
  name: string;
  totalMarks: number;
  historicalCutoffMin: number;
  historicalMeritTop: number;
  timeLimitMinutes: number;
  negativeMarking: boolean;
}

const EXAM_PROFILES: Record<string, ExamCutoffProfile> = {
  'STS IBA (BPS-05 to 15)': {
    name: 'STS IBA (BPS-05 to 15)',
    totalMarks: 100,
    historicalCutoffMin: 50,
    historicalMeritTop: 68,
    timeLimitMinutes: 90,
    negativeMarking: false,
  },
  'SPSC CCE Screening': {
    name: 'SPSC CCE Combined Competitive',
    totalMarks: 100,
    historicalCutoffMin: 50,
    historicalMeritTop: 72,
    timeLimitMinutes: 100,
    negativeMarking: true, // 0.25 penalty
  },
  'FPSC General Recruitment': {
    name: 'FPSC Inspector / Patrol Officer',
    totalMarks: 100,
    historicalCutoffMin: 65,
    historicalMeritTop: 81,
    timeLimitMinutes: 100,
    negativeMarking: false,
  },
  'CSS MPT (Preliminary)': {
    name: 'CSS MPT Screening Test',
    totalMarks: 200,
    historicalCutoffMin: 66, // 33% passing
    historicalMeritTop: 130,
    timeLimitMinutes: 200,
    negativeMarking: false,
  },
};

interface HeatmapCategory {
  name: string;
  parent: 'English' | 'Mathematics' | 'General Knowledge';
  mastery: number; // 0 to 100
  attempted: number;
  avgTimeSec: number;
  status: 'Strong' | 'Moderate' | 'Vulnerable';
}

const INITIAL_HEATMAP: HeatmapCategory[] = [
  // English
  { name: 'Prepositions & Idioms', parent: 'English', mastery: 54, attempted: 38, avgTimeSec: 18, status: 'Moderate' },
  { name: 'Sentence Correction & Tenses', parent: 'English', mastery: 82, attempted: 45, avgTimeSec: 22, status: 'Strong' },
  { name: 'Synonyms & Antonyms', parent: 'English', mastery: 42, attempted: 50, avgTimeSec: 15, status: 'Vulnerable' },
  { name: 'Reading Comprehension', parent: 'English', mastery: 70, attempted: 20, avgTimeSec: 65, status: 'Moderate' },

  // Mathematics
  { name: 'Percentages & Profit/Loss', parent: 'Mathematics', mastery: 88, attempted: 42, avgTimeSec: 48, status: 'Strong' },
  { name: 'Ratios & Proportions', parent: 'Mathematics', mastery: 76, attempted: 30, avgTimeSec: 42, status: 'Strong' },
  { name: 'Time, Speed & Work', parent: 'Mathematics', mastery: 38, attempted: 28, avgTimeSec: 92, status: 'Vulnerable' },
  { name: 'Basic Geometry & Mensuration', parent: 'Mathematics', mastery: 48, attempted: 25, avgTimeSec: 74, status: 'Vulnerable' },

  // General Knowledge
  { name: 'Everyday Science (Physics/Bio)', parent: 'General Knowledge', mastery: 84, attempted: 60, avgTimeSec: 14, status: 'Strong' },
  { name: 'Pakistan Studies & Movement', parent: 'General Knowledge', mastery: 90, attempted: 75, avgTimeSec: 12, status: 'Strong' },
  { name: '1973 Constitution & Amendments', parent: 'General Knowledge', mastery: 62, attempted: 34, avgTimeSec: 20, status: 'Moderate' },
  { name: 'Current Affairs (National/Global)', parent: 'General Knowledge', mastery: 58, attempted: 40, avgTimeSec: 16, status: 'Moderate' },
  { name: 'Islamic Studies / Ethics', parent: 'General Knowledge', mastery: 92, attempted: 50, avgTimeSec: 11, status: 'Strong' },
  { name: 'Computer & MS Office Literacy', parent: 'General Knowledge', mastery: 78, attempted: 35, avgTimeSec: 15, status: 'Strong' },
];

export const ExamDiagnostics: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'forecaster' | 'radar' | 'heatmap'>('forecaster');

  // Forecaster state
  const [selectedExamKey, setSelectedExamKey] = useState<string>('STS IBA (BPS-05 to 15)');
  const [userAccuracy, setUserAccuracy] = useState<number>(72);
  const [userSpeedSec, setUserSpeedSec] = useState<number>(35);
  const [questionsAttempted, setQuestionsAttempted] = useState<number>(85);

  const targetExam = EXAM_PROFILES[selectedExamKey];

  // Calculations
  const expectedRawScore = Math.round((questionsAttempted * userAccuracy) / 100);
  const penalty = targetExam.negativeMarking
    ? Math.round((questionsAttempted * (100 - userAccuracy)) / 100 * 0.25)
    : 0;
  const predictedScore = Math.max(0, expectedRawScore - penalty);

  let clearanceChance = 'High (85%+)';
  if (predictedScore < targetExam.historicalCutoffMin) clearanceChance = 'Critical Risk (<35%)';
  else if (predictedScore < targetExam.historicalCutoffMin + 8) clearanceChance = 'Borderline (55-65%)';

  return (
    <div className="space-y-6">
      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection('forecaster')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSection === 'forecaster'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>Predictive Cut-Off Forecaster</span>
          </button>

          <button
            onClick={() => setActiveSection('radar')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSection === 'radar'
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Pacing & Time-Drain Radar</span>
          </button>

          <button
            onClick={() => setActiveSection('heatmap')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSection === 'heatmap'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Weakness Heatmap</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
          Pillar 3: Exam Diagnostics & Readiness Forecaster
        </span>
      </div>

      {/* 3A. PREDICTIVE CUT-OFF & SCORE ESTIMATOR */}
      {activeSection === 'forecaster' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white border border-blue-500/30 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-black border border-blue-500/30 uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                  <Target className="w-3.5 h-3.5" /> Statistical Forecast
                </span>
                <h3 className="text-2xl font-black">Official Merit Cut-Off Predictor</h3>
                <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-xl">
                  Simulates your official score against past historical cut-offs for STS IBA Sukkur, SPSC CCE, and FPSC tests.
                </p>
              </div>

              {/* Score Display Card */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center min-w-[200px] shrink-0">
                <span className="text-xs text-blue-200 font-bold block uppercase tracking-wider">
                  Predicted Net Score
                </span>
                <div className="text-4xl font-black text-amber-300 mt-1">
                  {predictedScore}{' '}
                  <span className="text-sm font-bold text-white">/ {targetExam.totalMarks}</span>
                </div>
                <div className="mt-2 text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 inline-block">
                  Passing Chance: {clearanceChance}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Controls */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6 shadow-sm">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Calibrate Your Practice Baseline
              </h4>

              {/* Exam Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Target Competitive Examination:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(EXAM_PROFILES).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedExamKey(key)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition cursor-pointer ${
                        selectedExamKey === key
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-200 font-black'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accuracy Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Practice Accuracy:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-black text-sm">{userAccuracy}%</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="100"
                  value={userAccuracy}
                  onChange={(e) => setUserAccuracy(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Attempted Questions Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Questions Attempted:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-black text-sm">
                    {questionsAttempted} / {targetExam.totalMarks}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max={targetExam.totalMarks}
                  value={questionsAttempted}
                  onChange={(e) => setQuestionsAttempted(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Benchmark Comparison */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Official Benchmark Comparison
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-slate-400 font-bold block">Minimum Qualifying Threshold</span>
                  <p className="text-base font-black text-slate-900 dark:text-white">
                    {targetExam.historicalCutoffMin} Marks
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {predictedScore >= targetExam.historicalCutoffMin ? '✅ Projected to qualify' : '❌ Below minimum qualifying line'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-slate-400 font-bold block">Top Merit Position Range</span>
                  <p className="text-base font-black text-amber-600 dark:text-amber-400">
                    {targetExam.historicalMeritTop}+ Marks
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Needed for top municipal/assistant commissioner quota.
                  </p>
                </div>

                {targetExam.negativeMarking && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-900 text-[11px]">
                    <strong>Negative Marking Active:</strong> Estimated penalty of -{penalty} marks for inaccurate guesses.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3B. PACING & TIME-DRAIN RADAR */}
      {activeSection === 'radar' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
            <h3 className="text-base sm:text-lg font-black text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Section Pacing & Hazard Detection</span>
            </h3>
            <p className="text-xs text-amber-800/80 dark:text-amber-300 mt-0.5">
              The official exam allows <strong>~54 seconds per MCQ</strong>. Spending 90+ seconds on single arithmetic problems starves easy General Knowledge marks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> High Time Drain Hazard
                </span>
                <span className="text-xs font-mono font-bold text-rose-600">92s / MCQ</span>
              </div>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                Mathematics: Time, Speed & Work
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                You are currently spending 1.5+ minutes per question with only 38% accuracy. This drains 15 crucial minutes that could be used to secure 20 GK marks.
              </p>
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-950 dark:text-rose-200 font-bold">
                💡 Pacing Remedy: Use the 45-second rule. If you do not have the algebraic equation set up by second 45, mark the question and immediately move on.
              </div>
            </div>

            <div className="p-5 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Optimal Blitz Speed
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600">12s / MCQ</span>
              </div>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                Pakistan Studies & Everyday Science
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Excellent tempo! You read, decide, and lock in 12 seconds with 90% accuracy, creating a surplus bank of 18 minutes for tricky word problems.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-950 dark:text-emerald-200 font-bold">
                ⚡ Exam Strategy: Always solve General Knowledge, Pakistan Studies, and Islamic Studies during the first 25 minutes of your exam.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3C. CATEGORY WEAKNESS HEATMAP */}
      {activeSection === 'heatmap' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-black flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-cyan-400" />
                <span>Syllabus Mastery Heatmap</span>
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Identifies vulnerable subtopics across English, Mathematics, and General Knowledge.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Strong (75%+)
              </span>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Moderate (50-74%)
              </span>
              <span className="flex items-center gap-1 text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Vulnerable (&lt;50%)
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INITIAL_HEATMAP.map((item, idx) => {
              let statusBg = 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/60 dark:bg-emerald-950/20';
              let textBadge = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
              if (item.status === 'Vulnerable') {
                statusBg = 'border-rose-200 bg-rose-50/50 dark:border-rose-900/60 dark:bg-rose-950/20';
                textBadge = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';
              } else if (item.status === 'Moderate') {
                statusBg = 'border-amber-200 bg-amber-50/50 dark:border-amber-900/60 dark:bg-amber-950/20';
                textBadge = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
              }

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${statusBg} space-y-2.5 transition hover:scale-[1.01]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      {item.parent}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${textBadge}`}>
                      {item.status}
                    </span>
                  </div>

                  <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </h5>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-500">Mastery</span>
                      <span className="font-mono font-black">{item.mastery}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.status === 'Strong'
                            ? 'bg-emerald-500'
                            : item.status === 'Moderate'
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${item.mastery}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                    <span>{item.attempted} attempted</span>
                    <span className="font-mono">{item.avgTimeSec}s / MCQ</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
