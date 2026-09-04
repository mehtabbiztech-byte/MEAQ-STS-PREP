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
import { MCQS_DATA } from '../data/mcqsData';
import { PAST_PAPERS_DATA } from '../data/pastPapersData';

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
    isBookmarked
  } = useApp();

  const [searchInput, setSearchInput] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Daily Question interactive state
  const dailyMcq = MCQS_DATA[0]; // 18th Constitutional amendment
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
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pakistan’s Most Comprehensive Competitive Exam Portal</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Prepare for Pakistan's <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-300">
              Competitive & Government Exams
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
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
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
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
              className="px-8 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-700/80 hover:border-emerald-500/50 shadow-md transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Take a Timed Quiz</span>
            </button>
          </div>

          {/* Prominent Global Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form onSubmit={handleHeroSearchSubmit} className="relative group">
              <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-2 border-emerald-600/60 group-focus-within:border-emerald-400 transition-all overflow-hidden p-1.5">
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
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shrink-0 cursor-pointer hidden sm:block"
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
        <div className="mt-16 max-w-6xl mx-auto pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-extrabold text-2xl sm:text-3xl text-emerald-400 font-display">
                50,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Verified MCQs
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-extrabold text-2xl sm:text-3xl text-teal-400 font-display">
                100+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Subjects & Topics
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-extrabold text-2xl sm:text-3xl text-amber-400 font-display">
                500+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Timed Quizzes
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-extrabold text-2xl sm:text-3xl text-sky-400 font-display">
                100+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Solved Past Papers
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 md:col-span-1">
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

      {/* 3. INTERACTIVE QUESTION OF THE DAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
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
                    {cat.totalMcqs.toLocaleString()} MCQs
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
                Learn the exact testing pattern with authentic questions asked in recent examinations.
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
            {PAST_PAPERS_DATA.slice(0, 3).map((paper) => (
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
        <div className="rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-3">
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
                className="px-6 py-3 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-500/40 transition cursor-pointer"
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
