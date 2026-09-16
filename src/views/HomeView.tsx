import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  BookOpen, 
  Trophy, 
  FileText, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Clock, 
  Globe2, 
  Landmark, 
  Moon, 
  BookOpenCheck, 
  Laptop, 
  Atom, 
  Calculator, 
  Zap, 
  FlaskConical, 
  Dna, 
  GraduationCap, 
  PenTool, 
  Compass, 
  Hourglass, 
  TrendingUp, 
  Building2, 
  Network, 
  Sprout,
  Bookmark,
  Share2
} from 'lucide-react';
import { POPULAR_CATEGORIES } from '../data/categoriesData';
import { EXAMS_DATA } from '../data/examsData';
import { PersonalizedDashboard } from '../components/PersonalizedDashboard';

// Map string icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Globe2: <Globe2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Landmark: <Landmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Flame: <Flame className="w-5 h-5 text-amber-500" />,
  Moon: <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Laptop: <Laptop className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Atom: <Atom className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Calculator: <Calculator className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-500" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Dna: <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  PenTool: <PenTool className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Compass: <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Hourglass: <Hourglass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Users: <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Building2: <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Network: <Network className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Sprout: <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export const HomeView: React.FC = () => {
  const { 
    setTab, 
    setSelectedCategorySlug, 
    setSelectedExamId, 
    setSelectedPastPaperId,
    setSearchOpen,
    toggleBookmark,
    isBookmarked,
    launchSimulator
  } = useApp();

  const [searchInput, setSearchInput] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Daily Question interactive state
  const dailyMcq = {
    id: 'daily-constitution',
    question: 'In which year was Pakistan’s current Constitution adopted?',
    options: ['1956', '1962', '1973', '1985'],
    correctIndex: 2,
    explanation: 'Pakistan’s current Constitution was adopted in 1973.',
    examTags: ['Pakistan Studies', 'General Knowledge'],
  };
  const featuredPaperRecords = [
    { id: 'sts-jest-official-sample', exam: 'STS', year: 2021, title: 'JEST — Official STS Sample Paper', postName: 'JEST', bps: 'BPS-14', totalQuestions: 100 },
    { id: 'sts-graduation-bps-5-15-2025-record', exam: 'STS', year: 2025, title: 'Graduation Category — Official Date Record', postName: 'Screening test record', bps: 'BPS-05–15', totalQuestions: 0 },
    { id: 'pp-css-mpt-2025', exam: 'CSS', year: 2025, title: 'CSS MPT — Tagged Practice Selection', postName: 'CSS MPT practice', bps: 'BS-17', totalQuestions: 100 },
  ];
  const [dailySelected, setDailySelected] = useState<number | null>(null);
  const [dailyShowExplanation, setDailyShowExplanation] = useState(false);

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(true);
  };

  const visibleCategories = showAllCategories 
    ? POPULAR_CATEGORIES 
    : POPULAR_CATEGORIES.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-y border-white/15 shadow-2xl" style={{ backgroundImage: "linear-gradient(125deg, rgba(8,18,52,.94) 0%, rgba(42,35,110,.88) 48%, rgba(5,100,138,.82) 100%), url('/themes/pastel-network-uhd.webp')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
        
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-28 -right-20 w-[32rem] h-[32rem] bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-20 w-[34rem] h-[34rem] bg-violet-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-200/30 text-cyan-100 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pakistan’s Most Comprehensive Competitive Exam Portal</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Prepare for Pakistan's <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-200 to-fuchsia-300 drop-shadow-sm">
              Competitive & Government Exams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-xl text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed">
            “Practice thousands of MCQs, solve past papers, take timed quizzes, and track your preparation.”
          </p>

          {/* Buttons: Start Practicing, Take a Quiz */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-start-practicing-btn"
              onClick={() => {
                setTab('mcqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-base shadow-xl shadow-cyan-950/40 hover:shadow-cyan-400/20 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 border border-white/20"
            >
              <span>Start Practicing</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-take-quiz-btn"
              onClick={() => {
                setTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white font-semibold text-base border border-white/20 hover:border-cyan-200/50 shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>⚡ STS & FPSC Simulator (100 Marks)</span>
            </button>
          </div>

          {/* Prominent Global Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form onSubmit={handleHeroSearchSubmit} className="relative group">
              <div className="relative flex items-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-950/30 border-2 border-white/40 group-focus-within:border-emerald-300 transition-all overflow-hidden p-1.5">
                <Search className="w-6 h-6 text-emerald-600 dark:text-emerald-400 ml-3.5 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onClick={() => setSearchOpen(true)}
                  placeholder="Search MCQs, subjects, exams, topics..."
                  className="w-full px-3 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base bg-transparent focus:outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-sm transition shrink-0 cursor-pointer hidden sm:block shadow-md shadow-emerald-950/20"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Keyword Pills */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Popular:</span>
              {[
                { label: 'CSS MPT 2025', action: () => { setSelectedExamId('css'); setTab('exams'); } },
                { label: 'STS BPS 5-15', action: () => { setSelectedExamId('sts'); setTab('exams'); } },
                { label: 'Pakistan Studies', action: () => { setSelectedCategorySlug('pakistan-studies'); setTab('mcqs'); } },
                { label: 'Current Affairs 2026', action: () => setTab('current-affairs') },
                { label: 'PPSC Tehsildar', action: () => { setSelectedExamId('ppsc'); setTab('exams'); } },
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={p.action}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-emerald-900/60 border border-slate-700/60 hover:border-emerald-500/40 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 2. STATISTICS SECTION (Below hero show statistics) */}
        <div className="mt-16 max-w-6xl mx-auto pt-10 border-t border-emerald-900/40">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg">
              <div className="font-extrabold text-2xl sm:text-3xl text-emerald-400 font-display">
                5,000
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Generated STS Practice Items
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg">
              <div className="font-extrabold text-2xl sm:text-3xl text-teal-400 font-display">
                100+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Subjects & Topics
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg">
              <div className="font-extrabold text-2xl sm:text-3xl text-amber-400 font-display">
                500+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Timed Quizzes
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg">
              <div className="font-extrabold text-2xl sm:text-3xl text-cyan-400 font-display">
                100+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Solved Past Papers
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg col-span-2 md:col-span-1">
              <div className="font-extrabold text-2xl sm:text-3xl text-emerald-300 font-display">
                Thousands
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                of Students & Aspirants
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. ADAPTIVE PERSONALIZED DASHBOARD */}
      <PersonalizedDashboard />

      {/* 3. INTERACTIVE QUESTION OF THE DAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50/40 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                <Flame className="w-3.5 h-3.5 fill-white" />
                Question of the Day
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Pakistan Studies • Constitutional History
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(dailyMcq.id)}
                className={`p-2 rounded-lg border transition cursor-pointer ${
                  isBookmarked(dailyMcq.id)
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-emerald-600'
                }`}
                title="Bookmark this question"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(`${dailyMcq.question}\nOptions: ${dailyMcq.options.join(', ')}`);
                  }
                }}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-emerald-600 transition cursor-pointer"
                title="Copy question text"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed mb-6">
            {dailyMcq.question}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {dailyMcq.options.map((option, idx) => {
              const isSelected = dailySelected === idx;
              const isCorrect = idx === dailyMcq.correctIndex;
              let btnStyle = 'border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200';

              if (dailySelected !== null) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/80 text-rose-900 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDailySelected(idx);
                    setDailyShowExplanation(true);
                  }}
                  className={`p-3.5 rounded-xl border text-left text-sm font-medium transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {dailySelected !== null && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {dailyShowExplanation && (
            <div className="p-4 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200 text-sm space-y-1 animate-in fade-in duration-200">
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Correct Answer: Option {String.fromCharCode(65 + dailyMcq.correctIndex)} ({dailyMcq.options[dailyMcq.correctIndex]})</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {dailyMcq.explanation}
              </p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Tags: {dailyMcq.examTags?.join(', ')}</span>
            <button
              onClick={() => {
                setSelectedCategorySlug('pakistan-studies');
                setTab('mcqs');
              }}
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
            >
              Practice More Pakistan Studies MCQs →
            </button>
          </div>
        </div>
      </section>

      {/* 3.5 OFFICIAL STS & FPSC PATTERN SIMULATORS & OMR CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Exact Official Blueprints & Carbon-Copy OMR Suite</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">100 Marks • 100 Minutes • Official Blueprints</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  STS BPS 05–15 & FPSC One-Paper Exam Simulators
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Practice under verified official test formats. Experience Sukkur IBA’s strict 40–20–40 sectional split, FPSC General Recruitment & Professional Law papers, and evaluate your responses with our virtual Carbon-Copy OMR Key Checker.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => {
                      launchSimulator({
                        simulatorId: 'sts',
                        category: 'Graduation (BPS 11–15)',
                        negativeMarking: false,
                        timeMinutes: 100,
                      });
                    }}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition cursor-pointer flex items-center gap-2"
                  >
                    <Trophy className="w-4 h-4 text-amber-300" />
                    <span>Launch STS 100-Mark Mock</span>
                  </button>

                  <button
                    onClick={() => {
                      launchSimulator({
                        simulatorId: 'fpsc',
                        category: 'General Recruitment',
                        negativeMarking: false,
                        timeMinutes: 100,
                      });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-600 transition cursor-pointer flex items-center gap-2"
                  >
                    <BookOpenCheck className="w-4 h-4 text-cyan-300" />
                    <span>Launch FPSC One-Paper Mock</span>
                  </button>

                  <button
                    onClick={() => {
                      setTab('quiz');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition cursor-pointer flex items-center gap-2"
                  >
                    <span>Open Carbon-Copy OMR Suite →</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span>Sukkur IBA STS (40–20–40)</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px]">Active</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• English (40 Marks): RC, Syn/Ant, Spellings</li>
                    <li>• Mathematics (20 Marks): Arithmetic, Algebra</li>
                    <li>• General Knowledge (40 Marks): GK, Science, CA</li>
                    <li>• Tiers: Graduation, Inter, Matric, PST/JEST</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="flex items-center justify-between text-xs text-cyan-400 font-bold">
                    <span>FPSC One-Paper & Laws</span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-[10px]">Active</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Part I: English Grammar & Vocab (20%)</li>
                    <li>• Part II: Professional & Law Modules (80%)</li>
                    <li>• FIA Act 1974, PECA 2016, AML Act 2010</li>
                    <li>• Customs Act 1969 & PPRA Rules 2004</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Subject-Wise MCQ Banks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Popular Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Select any core competitive discipline to study chapter-wise and topic-wise MCQs.
            </p>
          </div>

          <button
            onClick={() => setShowAllCategories((prev) => !prev)}
            className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
          >
            <span>{showAllCategories ? 'Show Fewer Categories' : 'View All 20 Categories'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategorySlug(cat.slug);
                setTab('mcqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 dark:hover:border-emerald-500/70 hover:shadow-md transition group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/80 flex items-center justify-center transition">
                    {iconMap[cat.iconName] || <BookOpen className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                    {cat.totalMcqs.toLocaleString()} items
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition font-display">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">{cat.subtopics.length} Subtopics</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline flex items-center gap-1">
                  <span>Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        {!showAllCategories && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllCategories(true)}
              className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-emerald-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              View All 20 Categories (Urdu, Economics, Pedagogy, Geography, Agriculture & more)
            </button>
          </div>
        )}
      </section>

      {/* 5. EXAM CATEGORIES (Dedicated preparation areas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            Official Commission Portals
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Dedicated Exam Preparation Hubs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Access exam overview, official syllabus, subject weightage, solved past papers, and mock tests for every Pakistani testing commission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXAMS_DATA.map((exam) => (
            <div
              key={exam.id}
              onClick={() => {
                setSelectedExamId(exam.id);
                setTab('exams');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 dark:hover:border-emerald-500/70 hover:shadow-md transition group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-extrabold text-lg text-emerald-700 dark:text-emerald-400 font-display">
                    {exam.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                    {exam.conductedBy.split(' ')[0]}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition line-clamp-1">
                  {exam.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {exam.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {exam.subjects.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {sub}
                    </span>
                  ))}
                  {exam.subjects.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{exam.subjects.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  {exam.pastPapersCount} Papers • {exam.mockTestsCount} Mocks
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                  View Syllabus →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LATEST SOLVED PAST PAPERS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Authentic Solved Archive
              </div>
              <h3 className="text-2xl font-bold font-display">
                Latest Solved Competitive Past Papers
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Use clearly labelled official records, official samples and reconstructed practice selections.
              </p>
            </div>

            <button
              onClick={() => {
                setTab('past-papers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition cursor-pointer"
            >
              Browse All Papers
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPaperRecords.map((paper) => (
              <div
                key={paper.id}
                onClick={() => {
                  setSelectedPastPaperId(paper.id);
                  setTab('past-papers');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500 transition cursor-pointer group"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-emerald-400">{paper.exam}</span>
                  <span>{paper.year}</span>
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition line-clamp-1">
                  {paper.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {paper.postName} ({paper.bps})
                </p>
                <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-700 text-slate-400">
                  <span>{paper.totalQuestions} Questions</span>
                  <span className="text-emerald-400 font-semibold group-hover:underline">Solve Online →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUIZ ENGINE PROMOTIONAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-emerald-800/40">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-teal-400/30 text-teal-200 text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Real-Time Exam Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              Test Your Speed with Timed Online Quizzes
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base mt-2 leading-relaxed">
              Experience the pressure of actual exam conditions with countdown timers, 0.25 negative marking toggles, instant graphical performance scorecards, and a dedicated mistake review book.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setTab('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-md hover:bg-emerald-50 transition cursor-pointer flex items-center gap-2"
              >
                <span>Launch Mock Exam</span>
                <ArrowRight className="w-4 h-4 text-emerald-800" />
              </button>
              <button
                onClick={() => {
                  setTab('mistakes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-semibold text-sm border border-emerald-500/40 transition cursor-pointer"
              >
                Review My Mistakes Notebook
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
