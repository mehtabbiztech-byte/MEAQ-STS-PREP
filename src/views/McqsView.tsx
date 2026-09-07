import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Filter, 
  Search, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  EyeOff, 
  Share2, 
  AlertTriangle, 
  Sparkles,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Check,
  MessageSquare
} from 'lucide-react';
import { MCQS_DATA } from '../data/mcqsData';
import { POPULAR_CATEGORIES } from '../data/categoriesData';
import { MCQ } from '../types';

export const McqsView: React.FC = () => {
  const { 
    selectedCategorySlug, 
    setSelectedCategorySlug, 
    toggleBookmark, 
    isBookmarked,
    addMistake,
    userProfile,
    setTab
  } = useApp();

  const [searchFilter, setSearchFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [examTagFilter, setExamTagFilter] = useState<string>('All');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [userSelections, setUserSelections] = useState<Record<string, number>>({});
  const [reportedMcqId, setReportedMcqId] = useState<string | null>(null);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Active category object
  const activeCategory = useMemo(() => {
    return POPULAR_CATEGORIES.find((c) => c.slug === selectedCategorySlug) || null;
  }, [selectedCategorySlug]);

  // Filtered MCQs list
  const filteredMcqs = useMemo(() => {
    return MCQS_DATA.filter((mcq) => {
      // Category filter
      if (selectedCategorySlug && mcq.category !== selectedCategorySlug) {
        return false;
      }
      // Difficulty
      if (difficultyFilter !== 'All' && mcq.difficulty !== difficultyFilter) {
        return false;
      }
      // Exam Tag
      if (examTagFilter !== 'All' && !mcq.examTags?.includes(examTagFilter)) {
        return false;
      }
      // Search
      if (searchFilter.trim()) {
        const q = searchFilter.toLowerCase();
        const matchesQ = mcq.question.toLowerCase().includes(q) ||
          mcq.explanation.toLowerCase().includes(q) ||
          mcq.options.some((o) => o.toLowerCase().includes(q));
        if (!matchesQ) return false;
      }
      return true;
    });
  }, [selectedCategorySlug, difficultyFilter, examTagFilter, searchFilter]);

  const toggleReveal = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (mcq: MCQ, optionIndex: number) => {
    setUserSelections((prev) => ({ ...prev, [mcq.id]: optionIndex }));
    setRevealedAnswers((prev) => ({ ...prev, [mcq.id]: true }));

    // If selected answer is wrong, record in Mistake Book
    if (optionIndex !== mcq.correctIndex) {
      addMistake(mcq.id);
    }
  };

  const handleShare = (mcq: MCQ) => {
    const text = `MATB STS PREP MCQ:\n${mcq.question}\nOptions:\nA) ${mcq.options[0]}\nB) ${mcq.options[1]}\nC) ${mcq.options[2]}\nD) ${mcq.options[3]}\n\nPractice more on MATB STS PREP!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(mcq.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setReportedMcqId(null);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Category Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              <span>MCQ Practice Bank</span>
              {activeCategory && <span>• {activeCategory.name}</span>}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {activeCategory ? `${activeCategory.name} MCQs` : 'All Subject MCQs & Solved Questions'}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
              {activeCategory 
                ? activeCategory.description 
                : 'Browse thousands of syllabus-aligned multiple choice questions with authentic rationales, past paper references, and explanations.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Test Mode Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Selector Chips */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategorySlug(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedCategorySlug === null
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Subjects
          </button>
          {POPULAR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategorySlug(cat.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategorySlug === cat.slug
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search within these MCQs..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Dropdown Filters */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {/* Exam Tag */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-medium whitespace-nowrap">Exam:</span>
            <select
              value={examTagFilter}
              onChange={(e) => setExamTagFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Exams</option>
              <option value="CSS">CSS</option>
              <option value="FPSC">FPSC</option>
              <option value="PPSC">PPSC</option>
              <option value="SPSC">SPSC</option>
              <option value="STS">STS (IBA Sukkur)</option>
              <option value="NTS">NTS</option>
              <option value="FIA">FIA</option>
              <option value="Police">Police</option>
            </select>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-500 font-medium whitespace-nowrap">Level:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium pl-2 whitespace-nowrap">
            Showing <strong className="text-emerald-600 dark:text-emerald-400">{filteredMcqs.length}</strong> questions
          </div>
        </div>
      </div>

      {/* MCQs List */}
      <div className="space-y-6">
        {filteredMcqs.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400">
            <BookOpen className="w-10 h-10 mx-auto text-slate-400 mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No MCQs Match Your Current Filters</h3>
            <p className="text-xs mt-1">Try resetting the difficulty or exam commission filter.</p>
            <button
              onClick={() => {
                setSearchFilter('');
                setDifficultyFilter('All');
                setExamTagFilter('All');
                setSelectedCategorySlug(null);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredMcqs.map((mcq, mcqIndex) => {
            const isRevealed = revealedAnswers[mcq.id] || false;
            const userChoice = userSelections[mcq.id];
            const bookmarked = isBookmarked(mcq.id);

            return (
              <div 
                key={mcq.id}
                id={`mcq-card-${mcq.id}`}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-[11px] bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md">
                      Q {mcqIndex + 1} • {mcq.category.replace('-', ' ')}
                    </span>
                    {mcq.subtopic && (
                      <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
                        • {mcq.subtopic}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {mcq.examTags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      mcq.difficulty === 'Easy'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : mcq.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {mcq.difficulty}
                    </span>
                  </div>
                </div>

                {/* Question statement */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed mb-4">
                  {mcq.question}
                </h3>

                {/* Four Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {mcq.options.map((option, idx) => {
                    const isSelected = userChoice === idx;
                    const isCorrect = idx === mcq.correctIndex;
                    
                    let optionClass = 'border-slate-200 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';

                    if (userChoice !== undefined) {
                      if (isCorrect) {
                        optionClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 font-semibold ring-1 ring-rose-500';
                      }
                    } else if (isRevealed && isCorrect) {
                      optionClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 font-semibold';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(mcq, idx)}
                        className={`p-3 rounded-xl border text-left text-sm transition flex items-center justify-between cursor-pointer ${optionClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-bold flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-snug">{option}</span>
                        </div>

                        {userChoice !== undefined && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                        {userChoice !== undefined && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Drawer (when revealed) */}
                {isRevealed && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 mb-4 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Correct Answer: Option {String.fromCharCode(65 + mcq.correctIndex)} — {mcq.options[mcq.correctIndex]}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {mcq.explanation}
                    </p>
                    {mcq.submittedBy && (
                      <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                        <span>Academic reference verified by:</span>
                        <strong className="text-slate-500 dark:text-slate-300">{mcq.submittedBy}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Action Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleReveal(mcq.id)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'Hide Explanation' : 'View Answer & Explanation'}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(mcq.id)}
                      className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 cursor-pointer ${
                        bookmarked
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600'
                      }`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-emerald-600' : ''}`} />
                      <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare(mcq)}
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition cursor-pointer"
                      title="Copy Question"
                    >
                      {copiedId === mcq.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setReportedMcqId(mcq.id)}
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-rose-600 transition cursor-pointer"
                      title="Report discrepancy in question or answer"
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Report Form Modal / Inline */}
                {reportedMcqId === mcq.id && (
                  <div className="mt-4 p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/40 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-rose-800 dark:text-rose-300">
                        Report Issue in Question #{mcqIndex + 1}
                      </span>
                      <button 
                        onClick={() => setReportedMcqId(null)}
                        className="text-xs text-slate-400 hover:text-slate-600"
                      >
                        Cancel
                      </button>
                    </div>

                    <form onSubmit={handleReportSubmit} className="space-y-2">
                      <select className="w-full text-xs p-2 rounded-lg border border-rose-200 dark:border-rose-800 bg-white dark:bg-slate-800">
                        <option>Incorrect correct answer indicated</option>
                        <option>Factual error in explanation</option>
                        <option>Typo or spelling mistake</option>
                        <option>Outdated current affairs fact</option>
                      </select>
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition cursor-pointer"
                      >
                        {reportSuccess ? 'Submitted for Editorial Review!' : 'Submit Report'}
                      </button>
                    </form>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
