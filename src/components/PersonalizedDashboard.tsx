import React, { useState } from 'react';
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

  const handlePersonaChange = (persona: UserPersona) => {
    setActiveTab(persona);
    updatePersona(persona);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Container Card */}
      <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/30 dark:border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header with Persona Switcher */}
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

          {/* Quick Persona Pills Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 max-w-full overflow-x-auto">
            {[
              { id: 'kids' as UserPersona, label: '👧 Kids (Class 1–5)', icon: Baby },
              { id: 'school' as UserPersona, label: '🎒 School (6–10)', icon: School },
              { id: 'college' as UserPersona, label: '📚 College & Entry', icon: GraduationCap },
              { id: 'university' as UserPersona, label: '🎓 University', icon: Building },
              { id: 'jobs' as UserPersona, label: '💼 Job Seekers', icon: Briefcase },
              { id: 'competitive' as UserPersona, label: '🏆 CSS & Commissions', icon: Trophy },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePersonaChange(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Body based on selected Persona */}
        <div className="mt-8">

          {/* ========================================================= */}
          {/* 1. 👧 KIDS DASHBOARD (Class 1–5)                          */}
          {/* ========================================================= */}
          {activeTab === 'kids' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Joyful Greeting Header */}
              <div className="bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-emerald-500/10 border border-amber-200 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    <span>👋 Hello {userProfile.name === 'Aspirant' ? 'Ahmed' : userProfile.name}!</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                    Ready for today's fun learning quest? Learn fast, collect golden stars, and keep your streak burning!
                  </p>
                  
                  {/* Streak & Badges */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 font-extrabold text-xs sm:text-sm">
                      <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>{userProfile.streakDays || 5} Day Streak! Keep it going! 🔥</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 font-extrabold text-xs sm:text-sm">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>{userProfile.points || 450} Learning Stars</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedExamId('primary-school');
                    setTab('mcqs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition transform hover:scale-105 cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <Star className="w-5 h-5 fill-slate-950" />
                  <span>Start Daily Brain Quest</span>
                </button>
              </div>

              {/* Today's Learning Breakdown (Exact format requested) */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>Today's Learning</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Math Quest */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('mathematics');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-amber-400 dark:hover:border-amber-500 transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 flex items-center justify-center text-amber-600 text-xl font-bold">
                        ⭐
                      </div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span>Practice</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </span>
                    </div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-3">
                      Mathematics
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      10 questions — Tables, addition & fun shapes
                    </p>
                    <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full w-3/4" />
                    </div>
                  </div>

                  {/* English Quest */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('english');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-sky-400 dark:hover:border-sky-500 transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/80 flex items-center justify-center text-sky-600 text-xl font-bold">
                        📖
                      </div>
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                        <span>Read Lesson</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </span>
                    </div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-3">
                      English
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      1 lesson — Phonics, rhyming words & simple stories
                    </p>
                    <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full rounded-full w-1/2" />
                    </div>
                  </div>

                  {/* General Knowledge Quest */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('general-knowledge');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-400 dark:hover:border-emerald-500 transition cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 text-xl font-bold">
                        🧠
                      </div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span>Explore</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </span>
                    </div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-3">
                      General Knowledge
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      10 questions — Animals, seasons, earth & Pakistan
                    </p>
                    <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-5/6" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Kids Subject Quick Badges (Urdu, Sindhi, Science, Islamiat, Computer) */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  All Class 1–5 Subjects
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  {[
                    { name: 'Mathematics', emoji: '🧮', slug: 'mathematics', color: 'hover:border-amber-400' },
                    { name: 'English', emoji: '🔤', slug: 'english', color: 'hover:border-sky-400' },
                    { name: 'Urdu', emoji: '✍️', slug: 'urdu', color: 'hover:border-emerald-400' },
                    { name: 'Sindhi', emoji: '📜', slug: 'sindhi', color: 'hover:border-teal-400' },
                    { name: 'Science', emoji: '🌱', slug: 'everyday-science', color: 'hover:border-green-400' },
                    { name: 'Islamiat', emoji: '🌙', slug: 'islamic-studies', color: 'hover:border-indigo-400' },
                    { name: 'Computer', emoji: '💻', slug: 'computer', color: 'hover:border-purple-400' },
                  ].map((sub, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedCategorySlug(sub.slug);
                        setTab('mcqs');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 ${sub.color} transition text-center cursor-pointer`}
                    >
                      <div className="text-2xl mb-1">{sub.emoji}</div>
                      <div className="font-bold text-xs text-slate-800 dark:text-slate-200">{sub.name}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 2. 🎒 SCHOOL DASHBOARD (Class 6–10 / Matric / Boards)     */}
          {/* ========================================================= */}
          {activeTab === 'school' && (
            <div className="space-y-8 animate-fadeIn">
              
              <div className="bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-emerald-900/10 border border-blue-200 dark:border-blue-900/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    Secondary Education & Board Target
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    Matric & Board Preparation (Class 9 & 10)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                    Targeting FBISE Federal Board, BISE Lahore, BISE Karachi, and provincial boards. Master textbook SLO concepts and past board objective papers.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                      Syllabus Coverage: 68%
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      50+ Board Past Papers
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedExamId('matric-board');
                    setTab('exams');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>Explore Matric Board Hub</span>
                </button>
              </div>

              {/* School Subjects Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Physics (9th & 10th)', progress: 75, slug: 'physics', desc: 'Kinematics, Dynamics, Current Electricity' },
                  { name: 'Chemistry (9th & 10th)', progress: 62, slug: 'chemistry', desc: 'Atomic Structure, Bonding, Organic Chemistry' },
                  { name: 'Mathematics', progress: 84, slug: 'mathematics', desc: 'Matrices, Quadratic Equations, Theorems' },
                  { name: 'Biology & Computer', progress: 70, slug: 'biology', desc: 'Bioenergetics, Enzymes, C++ / Python' },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => {
                      setSelectedCategorySlug(item.slug);
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">{item.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{item.progress}%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 3. 📚 COLLEGE DASHBOARD (Inter, FSc, MDCAT, ECAT)        */}
          {/* ========================================================= */}
          {activeTab === 'college' && (
            <div className="space-y-8 animate-fadeIn">
              
              <div className="bg-gradient-to-r from-teal-900/10 via-emerald-900/10 to-sky-900/10 border border-teal-200 dark:border-teal-900/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    College Intermediate & Professional Admissions
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    FSc, Intermediate & Entry-Test Preparation
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                    High aggregate mastery for MBBS/BDS (MDCAT PMDC) and Engineering/Computing (ECAT UET, FAST, NUST). Practice negative-marking simulations and speed math.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedExamId('mdcat');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition cursor-pointer"
                    >
                      MDCAT Hub (MBBS) →
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamId('ecat');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition cursor-pointer"
                    >
                      ECAT Hub (Engineering) →
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamId('intermediate-fsc');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold transition cursor-pointer"
                    >
                      FSc 1st & 2nd Year →
                    </button>
                  </div>
                </div>

                <div className="text-center bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs shrink-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    Entry-Test Readiness
                  </div>
                  <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-display mt-1">
                    74%
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Target: 85%+</div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 4. 🎓 UNIVERSITY DASHBOARD (Semester, Entry, Scholarships)*/}
          {/* ========================================================= */}
          {activeTab === 'university' && (
            <div className="space-y-8 animate-fadeIn">
              
              <div className="bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-slate-900/10 border border-purple-200 dark:border-purple-900/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                    Undergraduate, Graduate & Licensing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    University Exams, GAT & Scholarships
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
                    Higher education assessments including HEC USAT, NUST NET, FAST, GAT General & Subject, HEC Indigenous/Overseas scholarships, and professional licensing (LAW-GAT, PMDC NRE).
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedExamId('hec-usat-gat');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition cursor-pointer"
                    >
                      HEC USAT & GAT →
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamId('scholarships-pk');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition cursor-pointer"
                    >
                      Scholarships Guide →
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamId('professional-licensing');
                        setTab('exams');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold transition cursor-pointer"
                    >
                      LAW-GAT & NRE →
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setTab('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <Brain className="w-4 h-4" />
                  <span>Take Analytical Logic Test</span>
                </button>
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 5. 💼 JOB SEEKERS DASHBOARD (Exact STS & NTS layout)      */}
          {/* ========================================================= */}
          {activeTab === 'jobs' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Target Screening Test Card (Exact requested format) */}
              <div className="bg-gradient-to-r from-emerald-900/10 via-teal-900/10 to-slate-900/10 border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold uppercase">
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
                      <span className="ml-2 font-extrabold text-emerald-600 dark:text-emerald-400 text-lg">
                        72%
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 w-full max-w-md bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '72%' }} />
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
              
              {/* CSS Aspirant Welcome Card (Exact requested format) */}
              <div className="bg-gradient-to-r from-emerald-950/20 via-slate-900 to-teal-950/20 border border-emerald-500/30 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-extrabold">
                        Civil Services of Pakistan
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Central Superior Services (CSS) & Provincial PMS
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-2">
                      👋 Welcome back, {userProfile.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Your Preparation Dashboard & Compulsory Subjects Mastery
                    </p>
                  </div>

                  <div className="text-right sm:text-right">
                    <div className="text-xs text-slate-400 font-medium">
                      Overall Progress
                    </div>
                    <div className="text-3xl font-extrabold text-emerald-500 font-display">
                      67%
                    </div>
                  </div>
                </div>

                {/* Specific Subject Progress Bars (Exact numbers requested) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* English — 74% */}
                  <div 
                    onClick={() => {
                      setSelectedCategorySlug('english');
                      setTab('mcqs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">English Precis & Vocab</span>
                      <span className="text-emerald-500 font-extrabold">74%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '74%' }} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Dawn Vocabulary, Idioms, Prepositions
                    </p>
                  </div>

                  {/* Current Affairs — 61% */}
                  <div 
                    onClick={() => {
                      setTab('current-affairs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-teal-500 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Current Affairs</span>
                      <span className="text-teal-400 font-extrabold">61%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: '61%' }} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
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
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Pakistan Affairs</span>
                      <span className="text-emerald-400 font-extrabold">78%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '78%' }} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
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
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-amber-500 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">General Science & Ability</span>
                      <span className="text-amber-400 font-extrabold">53%</span>
                    </div>
                    <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '53%' }} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Everyday Science, Math & Analytical Logic
                    </p>
                  </div>

                </div>

                {/* CSS Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs text-slate-400">
                    Target Exam: <span className="text-emerald-400 font-bold">CSS MPT 2026 (200 MCQs Screening) & Main (1200 Marks)</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setShowCssSyllabus(!showCssSyllabus)}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 shadow-sm"
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
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Full CSS Portal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setTab('quiz');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
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
