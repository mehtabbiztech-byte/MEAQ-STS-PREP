import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Trophy, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Search
} from 'lucide-react';
import { EXAMS_DATA } from '../data/examsData';
import { MCQS_DATA } from '../data/mcqsData';
import { PAST_PAPERS_DATA } from '../data/pastPapersData';
import { STSSyllabusExplorer } from './STSSyllabusExplorer';

export const ExamsView: React.FC = () => {
  const { 
    selectedExamId, 
    setSelectedExamId, 
    setTab, 
    setSelectedPastPaperId,
    setSelectedCategorySlug 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'mcqs' | 'papers' | 'resources'>('overview');

  // Currently selected exam
  const currentExam = useMemo(() => {
    return EXAMS_DATA.find((e) => e.id === selectedExamId) || EXAMS_DATA[0];
  }, [selectedExamId]);

  // Filtered exams list for sidebar
  const filteredExams = useMemo(() => {
    if (!searchQuery.trim()) return EXAMS_DATA;
    const q = searchQuery.toLowerCase();
    return EXAMS_DATA.filter((e) =>
      e.name.toLowerCase().includes(q) ||
      e.shortName.toLowerCase().includes(q) ||
      e.conductedBy.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Exam specific MCQs
  const examMcqs = useMemo(() => {
    return MCQS_DATA.filter((m) =>
      m.examTags?.some((tag) =>
        currentExam.shortName.toLowerCase().includes(tag.toLowerCase()) ||
        tag.toLowerCase().includes(currentExam.shortName.toLowerCase())
      )
    );
  }, [currentExam]);

  // Exam specific past papers
  const examPastPapers = useMemo(() => {
    return PAST_PAPERS_DATA.filter((p) =>
      p.exam.toLowerCase().includes(currentExam.shortName.toLowerCase()) ||
      currentExam.shortName.toLowerCase().includes(p.exam.toLowerCase())
    );
  }, [currentExam]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Top Header */}
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          Explore Exams
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Pakistan’s Complete Exam Preparation Directory
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          Explore school, college, university, recruitment and competitive pathways—then open detailed syllabi, past papers and mock tests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar: List of 16 Exams */}
        <div className="lg:col-span-1 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter 16 exams..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 space-y-1 max-h-[70vh] overflow-y-auto shadow-xs">
            {filteredExams.map((exam) => {
              const isSelected = currentExam.id === exam.id;
              return (
                <button
                  key={exam.id}
                  onClick={() => {
                    setSelectedExamId(exam.id);
                    setActiveTab('overview');
                  }}
                  className={`w-full p-2.5 rounded-xl text-left transition flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 text-white font-bold shadow-2xs'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold leading-tight">
                      {exam.shortName}
                    </div>
                    <div className={`text-[11px] truncate max-w-[180px] ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {exam.fullName}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Active Exam Header Banner */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                  {currentExam.conductedBy}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-2">
                  {currentExam.name}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {currentExam.fullName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setTab('quiz');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>Launch Mock Test</span>
                </button>
              </div>
            </div>

            {/* Inner Sub-Navigation Tabs */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Exam Overview & Eligibility
              </button>
              <button
                onClick={() => setActiveTab('syllabus')}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeTab === 'syllabus'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Official Syllabus & Weightage
              </button>
              <button
                onClick={() => setActiveTab('mcqs')}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeTab === 'mcqs'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Targeted MCQs ({examMcqs.length})
              </button>
              <button
                onClick={() => setActiveTab('papers')}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeTab === 'papers'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Past Papers ({examPastPapers.length})
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  activeTab === 'resources'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Preparation Resources
              </button>
            </div>
          </div>

          {/* Sub-tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  About This Examination
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentExam.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                    Eligibility Criteria
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {currentExam.eligibility}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                    Age Limit & Relaxations
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {currentExam.ageLimit}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                <div className="text-xs text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider mb-1">
                  Screening Test Pattern & Marks Scheme
                </div>
                <div className="text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
                  {currentExam.screeningStructure}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Core Subjects Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentExam.subjects.map((sub, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Syllabus */}
          {activeTab === 'syllabus' && currentExam.id === 'sts' && <STSSyllabusExplorer />}
          {activeTab === 'syllabus' && currentExam.id !== 'sts' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Official Syllabus Breakdown
                  </h3>
                  <p className="text-xs text-slate-500">
                    Prescribed curriculum and marks distribution for {currentExam.shortName}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {currentExam.syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.section}
                      </h4>
                      {item.weightage && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold">
                          {item.weightage}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 3: Targeted MCQs */}
          {activeTab === 'mcqs' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    High-Yield MCQs for {currentExam.shortName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Questions repeatedly asked in previous {currentExam.conductedBy} exams
                  </p>
                </div>
                <button
                  onClick={() => {
                    setTab('mcqs');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  View All MCQs →
                </button>
              </div>

              <div className="space-y-4">
                {examMcqs.map((mcq, idx) => (
                  <div
                    key={mcq.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Q {idx + 1} • {mcq.category.replace('-', ' ')}</span>
                      <span className="font-semibold text-emerald-600">{mcq.difficulty}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {mcq.question}
                    </p>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-950 dark:text-emerald-200">
                      <strong>Answer: {mcq.options[mcq.correctIndex]}</strong> — {mcq.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 4: Past Papers */}
          {activeTab === 'papers' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Solved Past Papers for {currentExam.shortName}
                </h3>
                <p className="text-xs text-slate-500">
                  Year-wise official questions with verified answers
                </p>
              </div>

              {examPastPapers.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  Showing master competitive collection. You can also view all papers in the Past Papers section.
                </div>
              ) : (
                <div className="space-y-3">
                  {examPastPapers.map((paper) => (
                    <div
                      key={paper.id}
                      onClick={() => {
                        setSelectedPastPaperId(paper.id);
                        setTab('past-papers');
                      }}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                          {paper.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {paper.postName} • Conducted in {paper.year}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 group-hover:underline">
                        Solve Online →
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sub-tab 5: Resources */}
          {activeTab === 'resources' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Recommended Preparation Resources & Books
                </h3>
                <p className="text-xs text-slate-500">
                  Curated study materials, books, and official portals for {currentExam.shortName}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentExam.resources.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {res.type}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {res.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Free Access</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 cursor-pointer hover:underline">
                        <span>Read Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
