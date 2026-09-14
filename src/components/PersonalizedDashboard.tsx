import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserPersona } from '../types';
import { 
  Sparkles, 
  Flame, 
  Trophy, 
  Target, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Award, 
  Brain, 
  Zap, 
  Compass, 
  ShieldCheck, 
  Bookmark, 
  AlertCircle,
  GraduationCap,
  Briefcase,
  School,
  Baby,
  Building,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { CssSyllabusExplorer } from './CssSyllabusExplorer';
import { KidsPlayground } from './KidsPlayground';
import { MiddleSchoolHub } from './MiddleSchoolHub';
import { MatricBoardHub } from './MatricBoardHub';
import { IntermediateBoardHub } from './IntermediateBoardHub';
import { EntryTestPrepHub } from './EntryTestPrepHub';
import { UniversityHub } from './UniversityHub';

export const PersonalizedDashboard: React.FC = () => {
  const { 
    userProfile, 
    updatePersona, 
    setTab, 
    setSelectedExamId, 
    setSelectedCategorySlug,
    setAuthModalOpen,
    user
  } = useApp();

  const currentPersona: UserPersona = userProfile.persona || 'jobs';
  const [activeTab, setActiveTab] = useState<UserPersona>(currentPersona);
  const [showCssSyllabus, setShowCssSyllabus] = useState<boolean>(false);
  useEffect(() => setActiveTab(currentPersona), [currentPersona]);

  const handlePersonaChange = (persona: UserPersona) => {
    setActiveTab(persona);
    updatePersona(persona);
  };

  return (
    <section id="kids-hub" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
      
      {/* Container Card */}
      <div className="bg-white/95 dark:bg-slate-900/95 border-2 border-emerald-500/30 dark:border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-950/5 relative overflow-hidden backdrop-blur-md">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header with Persona Switcher in Sequence of 3 and 3 */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Smart Adaptive Learning Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Personalized for Your Learning Goal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Switch anytime to customize questions, syllabus trackers, and mock exams for your specific target.
            </p>
          </div>

          {/* Persona Switcher with Middle 6-8 and Matric 9-10 separated */}
          <div className="w-full lg:max-w-2xl bg-slate-100/90 dark:bg-slate-800/90 p-2 rounded-2xl border border-emerald-200/60 dark:border-slate-700/80 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'kids' as UserPersona, label: 'Kids (1–5)', emoji: '👧' },
                { id: 'middle' as UserPersona, label: 'Middle (6–8)', emoji: '🎒' },
                { id: 'matric' as UserPersona, label: 'Matric (9–10)', emoji: '🏫' },
                { id: 'college' as UserPersona, label: '1st & 2nd Year', emoji: '📚' },
                { id: 'entry-test' as UserPersona, label: 'Entry Test Prep', emoji: '🎯' },
                { id: 'university' as UserPersona, label: 'University', emoji: '🎓' },
                { id: 'jobs' as UserPersona, label: 'Job Seekers', emoji: '💼' },
                { id: 'competitive' as UserPersona, label: 'CSS & FPSC', emoji: '🏆' },
              ].map((item) => {
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePersonaChange(item.id)}
                    className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer text-center select-none ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400/50'
                        : 'bg-white/95 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-700'
                    }`}
                  >
                    <span className="text-sm leading-none">{item.emoji}</span>
                    <span className="whitespace-nowrap font-bold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Content Body based on selected Persona */}
        <div className="mt-8">

          {/* ========================================================= */}
          {/* 1. 👧 KIDS DASHBOARD (Class 1–5)                          */}
          {/* ========================================================= */}
          {activeTab === 'kids' && <KidsPlayground />}

          {/* ========================================================= */}
          {/* 2. 🎒 MIDDLE SCHOOL DASHBOARD (Class 6–8)                 */}
          {/* ========================================================= */}
          {activeTab === 'middle' && <MiddleSchoolHub />}

          {/* ========================================================= */}
          {/* 3. 🏫 MATRIC BOARD DASHBOARD (Class 9 & 10)               */}
          {/* ========================================================= */}
          {(activeTab === 'matric' || activeTab === 'school') && <MatricBoardHub />}

          {/* ========================================================= */}
          {/* 4. 📚 1ST & 2ND YEAR INTERMEDIATE HUB                     */}
          {/* ========================================================= */}
          {(activeTab === 'college' || activeTab === 'intermediate') && <IntermediateBoardHub />}

          {/* ========================================================= */}
          {/* 5. 🎯 ENTRY TEST PREPARATION HUB (MDCAT, ECAT, NET, LAT)  */}
          {/* ========================================================= */}
          {activeTab === 'entry-test' && <EntryTestPrepHub />}

          {/* ========================================================= */}
          {/* 4. 🎓 UNIVERSITY HUB (Departments, Subjects, CGPA & Exams) */}
          {/* ========================================================= */}
          {activeTab === 'university' && <UniversityHub />}

          {/* ========================================================= */}
          {/* 5. 💼 JOB SEEKERS DASHBOARD (Exact STS & NTS layout)      */}
          {/* ========================================================= */}
          {activeTab === 'jobs' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Target Screening Test Card */}
              <div className="bg-gradient-to-r from-purple-900/10 via-fuchsia-900/10 to-pink-900/10 border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-extrabold uppercase">
                      Active Target
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                      SIBA Testing Services (Sukkur IBA)
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-2 flex items-center gap-2">
                    <span>🎯 STS Screening Test (BPS 5 to 15)</span>
                  </h3>

                  <div className="mt-3 flex items-center gap-4">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        Overall Preparation:
                      </span>
                      <span className="ml-2 font-extrabold text-purple-600 dark:text-pink-400 text-lg">
                        72%
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 w-full max-w-md bg-purple-100 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full" style={{ width: '72%' }} />
                  </div>

                  {/* Weak Question practice prompt */}
                  <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mt-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Practice 25 weak questions today to reach 80%+ threshold.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => {
                      setTab('mistakes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>Practice 25 Weak Questions</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedExamId('sts');
                      setTab('exams');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>STS Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Testing Agencies Quick Access */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Screening Tests by Testing Agency
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { id: 'sts', name: 'STS IBA', tag: 'Sindh BPS 5-15', color: 'border-emerald-500/40' },
                    { id: 'nts', name: 'NTS', tag: 'NAT, GAT, WAPDA', color: 'border-blue-500/40' },
                    { id: 'pts-ots-cts', name: 'PTS / OTS', tag: 'Ministries & NADRA', color: 'border-indigo-500/40' },
                    { id: 'etea', name: 'ETEA', tag: 'KPK Police & Teachers', color: 'border-amber-500/40' },
                    { id: 'fpsc', name: 'FPSC', tag: 'Customs, FIA, AD', color: 'border-teal-500/40' },
                    { id: 'ppsc', name: 'PPSC', tag: 'Tehsildar & Sub-Insp', color: 'border-rose-500/40' },
                  ].map((agency) => (
                    <div
                      key={agency.id}
                      onClick={() => {
                        setSelectedExamId(agency.id);
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border ${agency.color} hover:shadow-md transition cursor-pointer`}
                    >
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {agency.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {agency.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 6. 🏆 CSS & COMPETITIVE DASHBOARD (Exact requested format) */}
          {/* ========================================================= */}
          {activeTab === 'competitive' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* CSS Aspirant Welcome Card (Updated to Emerald Theme) */}
              <div className="bg-gradient-to-r from-emerald-950/85 via-slate-900/95 to-teal-950/75 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-950/25 relative overflow-hidden backdrop-blur-xl">
                {/* Decorative emerald ambient glow inside card */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-900/40 relative z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold shadow-xs">
                        Civil Services of Pakistan
                      </span>
                      <span className="text-xs text-emerald-200/70 font-medium">
                        Central Superior Services (CSS) & Provincial PMS
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-2">
                      👋 Welcome back, {userProfile.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                      Your Preparation Dashboard & Compulsory Subjects Mastery
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs text-emerald-200/70 font-medium">
                      Overall Progress
                    </div>
                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 font-display">
                      67%
                    </div>
                  </div>
                </div>

                {/* Specific Subject Progress Bars */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                  
                  {/* English — 74% */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('english');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-emerald-100 dark:border-emerald-900/40 hover:border-emerald-500 transition cursor-pointer shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">English Precis & Vocab</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">74%</span>
                    </div>
                    <div className="mt-2 w-full bg-emerald-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full rounded-full" style={{ width: '74%' }} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Dawn Vocabulary, Idioms, Prepositions
                    </p>
                  </div>

                  {/* Current Affairs — 61% */}
                  <div 
                    onClick={() => {
                      setTab('current-affairs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-emerald-100 dark:border-emerald-900/40 hover:border-teal-500 transition cursor-pointer shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Current Affairs</span>
                      <span className="text-teal-600 dark:text-teal-400 font-extrabold">61%</span>
                    </div>
                    <div className="mt-2 w-full bg-emerald-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-500 h-full rounded-full" style={{ width: '61%' }} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      2025-2026 Summits, Economy, Foreign Policy
                    </p>
                  </div>

                  {/* Pakistan Affairs — 78% */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('pakistan-studies');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-emerald-100 dark:border-emerald-900/40 hover:border-emerald-500 transition cursor-pointer shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Pakistan Affairs</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">78%</span>
                    </div>
                    <div className="mt-2 w-full bg-emerald-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-600 to-cyan-500 h-full rounded-full" style={{ width: '78%' }} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      1857-1947 Movement & 1973 Constitution
                    </p>
                  </div>

                  {/* General Science — 53% */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('everyday-science');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-emerald-100 dark:border-emerald-900/40 hover:border-amber-500 transition cursor-pointer shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">General Science & Ability</span>
                      <span className="text-amber-500 dark:text-amber-400 font-extrabold">53%</span>
                    </div>
                    <div className="mt-2 w-full bg-emerald-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full" style={{ width: '53%' }} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Everyday Science, Math & Analytical Logic
                    </p>
                  </div>

                </div>

                {/* CSS Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-900/40 relative z-10">
                  <div className="text-xs text-emerald-200/90">
                    Target Exam: <span className="text-teal-300 font-bold">CSS MPT 2026 (200 MCQs Screening) & Main (1200 Marks)</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setShowCssSyllabus(!showCssSyllabus)}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{showCssSyllabus ? 'Hide Syllabus Explorer' : 'ALL CSS Subjects & Syllabus'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamId('css');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-900/30"
                    >
                      <span>Full CSS Portal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setTab('quiz');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-emerald-200 text-xs font-bold transition cursor-pointer border border-emerald-500/30"
                    >
                      Start MPT Mock Quiz
                    </button>
                  </div>
                </div>
              </div>

              {/* Inline Full CSS Syllabus & Subjects Explorer */}
              {showCssSyllabus && (
                <div className="pt-2 animate-fadeIn">
                  <CssSyllabusExplorer />
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </section>
  );
};
