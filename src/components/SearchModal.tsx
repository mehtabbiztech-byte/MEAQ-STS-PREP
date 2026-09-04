import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  X, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MCQS_DATA } from '../data/mcqsData';
import { POPULAR_CATEGORIES } from '../data/categoriesData';
import { EXAMS_DATA } from '../data/examsData';
import { PAST_PAPERS_DATA } from '../data/pastPapersData';

export const SearchModal: React.FC = () => {
  const { 
    searchOpen, 
    setSearchOpen, 
    setTab, 
    setSelectedCategorySlug, 
    setSelectedExamId,
    setSelectedPastPaperId 
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'mcqs' | 'exams' | 'subjects' | 'papers'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  // Search Results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        mcqs: MCQS_DATA.slice(0, 4),
        exams: EXAMS_DATA.slice(0, 3),
        subjects: POPULAR_CATEGORIES.slice(0, 4),
        papers: PAST_PAPERS_DATA.slice(0, 2),
      };
    }

    const matchedMcqs = MCQS_DATA.filter((m) =>
      m.question.toLowerCase().includes(q) ||
      m.explanation.toLowerCase().includes(q) ||
      m.options.some((o) => o.toLowerCase().includes(q)) ||
      m.examTags?.some((t) => t.toLowerCase().includes(q)) ||
      m.subtopic?.toLowerCase().includes(q)
    );

    const matchedExams = EXAMS_DATA.filter((e) =>
      e.name.toLowerCase().includes(q) ||
      e.shortName.toLowerCase().includes(q) ||
      e.fullName.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q)
    );

    const matchedSubjects = POPULAR_CATEGORIES.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.subtopics.some((st) => st.toLowerCase().includes(q))
    );

    const matchedPapers = PAST_PAPERS_DATA.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.exam.toLowerCase().includes(q) ||
      p.postName.toLowerCase().includes(q)
    );

    return {
      mcqs: matchedMcqs,
      exams: matchedExams,
      subjects: matchedSubjects,
      papers: matchedPapers,
    };
  }, [query]);

  if (!searchOpen) return null;

  const totalResultsCount = 
    results.mcqs.length + results.exams.length + results.subjects.length + results.papers.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-6 sm:mt-12 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search MCQs, subjects, exams, topics (e.g., '18th amendment', 'STS', 'prepositions')..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 text-base focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setSearchOpen(false)}
            className="px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-800 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Results ({totalResultsCount})
          </button>
          <button
            onClick={() => setActiveFilter('mcqs')}
            className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'mcqs'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            MCQs ({results.mcqs.length})
          </button>
          <button
            onClick={() => setActiveFilter('subjects')}
            className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'subjects'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Subjects ({results.subjects.length})
          </button>
          <button
            onClick={() => setActiveFilter('exams')}
            className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'exams'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Exams ({results.exams.length})
          </button>
          <button
            onClick={() => setActiveFilter('papers')}
            className={`px-3 py-1 rounded-full font-medium transition whitespace-nowrap cursor-pointer ${
              activeFilter === 'papers'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Past Papers ({results.papers.length})
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Subjects Results */}
          {(activeFilter === 'all' || activeFilter === 'subjects') && results.subjects.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Subject Categories</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {results.subjects.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedCategorySlug(sub.slug);
                      setTab('mcqs');
                      setSearchOpen(false);
                    }}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 text-left transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {sub.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {sub.totalMcqs.toLocaleString()} MCQs available
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transform group-hover:translate-x-0.5 transition" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Exam Portals Results */}
          {(activeFilter === 'all' || activeFilter === 'exams') && results.exams.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Exam Preparation Portals</span>
              </div>
              <div className="space-y-1.5">
                {results.exams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => {
                      setSelectedExamId(exam.id);
                      setTab('exams');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 text-left transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {exam.shortName}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {exam.conductedBy}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {exam.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                      View Syllabus & Tests →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MCQs Results */}
          {(activeFilter === 'all' || activeFilter === 'mcqs') && results.mcqs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>MCQs & Practice Questions</span>
              </div>
              <div className="space-y-2">
                {results.mcqs.map((mcq) => (
                  <div
                    key={mcq.id}
                    onClick={() => {
                      setSelectedCategorySlug(mcq.category);
                      setTab('mcqs');
                      setSearchOpen(false);
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1 text-xs">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                        {mcq.category.replace('-', ' ')}
                      </span>
                      {mcq.subtopic && (
                        <span className="text-slate-400">• {mcq.subtopic}</span>
                      )}
                      {mcq.examTags && mcq.examTags[0] && (
                        <span className="ml-auto px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                          {mcq.examTags[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {mcq.question}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      Answer: <strong className="text-emerald-600 dark:text-emerald-400">{mcq.options[mcq.correctIndex]}</strong> — {mcq.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Papers Results */}
          {(activeFilter === 'all' || activeFilter === 'papers') && results.papers.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Solved Past Papers</span>
              </div>
              <div className="space-y-1.5">
                {results.papers.map((paper) => (
                  <button
                    key={paper.id}
                    onClick={() => {
                      setSelectedPastPaperId(paper.id);
                      setTab('past-papers');
                      setSearchOpen(false);
                    }}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 text-left transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-white">
                        {paper.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {paper.conductedBy} • {paper.year}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Solve Paper →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {totalResultsCount === 0 && (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              <Sparkles className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="font-medium text-base text-slate-700 dark:text-slate-300">
                No exact match found for "{query}"
              </p>
              <p className="text-xs mt-1 text-slate-500">
                Try searching for broader keywords like "Pakistan", "English", "Science", or "CSS".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>Tip: Use keyboard shortcuts to browse fast</span>
          <button
            onClick={() => {
              setTab('mcqs');
              setSearchOpen(false);
            }}
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            Explore All MCQs Archive →
          </button>
        </div>
      </div>
    </div>
  );
};
