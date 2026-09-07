import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileText, 
  Search, 
  Calendar, 
  CheckCircle2, 
  Eye, 
  Trophy, 
  Download,
  BookOpen,
  ArrowRight,
  Filter
} from 'lucide-react';
import { PAST_PAPERS_DATA } from '../data/pastPapersData';
import { PastPaper } from '../types';
import { AiTutorSection } from '../components/AiTutorSection';

export const PastPapersView: React.FC = () => {
  const { selectedPastPaperId, setSelectedPastPaperId, setTab, userProfile } = useApp();
  const [examFilter, setExamFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedOptions, setRevealedOptions] = useState<Record<string, boolean>>({});

  const filteredPapers = useMemo(() => {
    return PAST_PAPERS_DATA.filter((paper) => {
      if (examFilter !== 'All' && paper.exam !== examFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = paper.title.toLowerCase().includes(q) ||
          paper.conductedBy.toLowerCase().includes(q) ||
          paper.postName.toLowerCase().includes(q);
        if (!matchTitle) return false;
      }
      return true;
    });
  }, [examFilter, searchQuery]);

  const activePaper: PastPaper = useMemo(() => {
    return PAST_PAPERS_DATA.find((p) => p.id === selectedPastPaperId) || PAST_PAPERS_DATA[0];
  }, [selectedPastPaperId]);

  const toggleAnswer = (mcqId: string) => {
    setRevealedOptions((prev) => ({ ...prev, [mcqId]: !prev[mcqId] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Official Solved Question Papers
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Solved Past Papers Repository (2020 - 2025)
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
              Real questions asked by FPSC, PPSC, SPSC, STS IBA Sukkur, and NTS with step-by-step verified explanations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Simulate Timed Paper</span>
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search papers by commission, post..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {['All', 'CSS', 'STS', 'PPSC', 'SPSC / CCE', 'FPSC', 'FIA', 'Police', 'NTS'].map((ex) => (
              <button
                key={ex}
                onClick={() => setExamFilter(ex)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  examFilter === ex
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Papers Selector + Active Solved Paper Reader */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: List of Papers */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Available Solved Papers ({filteredPapers.length})
          </div>

          <div className="space-y-2.5">
            {filteredPapers.map((paper) => {
              const isSelected = activePaper.id === paper.id;
              return (
                <div
                  key={paper.id}
                  onClick={() => setSelectedPastPaperId(paper.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500/50'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-extrabold text-emerald-700 dark:text-emerald-400">
                      {paper.exam}
                    </span>
                    <span className="text-slate-500 font-semibold">{paper.year}</span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {paper.title}
                  </h3>

                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{paper.postName}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {paper.totalQuestions} Questions
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Paper Interactive Reader */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  {activePaper.conductedBy}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 font-display">
                  {activePaper.title}
                </h2>
                <div className="text-xs text-slate-500 mt-1">
                  Cadre: {activePaper.postName} ({activePaper.bps}) • Paper Solved in {activePaper.solvedDate || 'Recent'}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const all: Record<string, boolean> = {};
                    activePaper.mcqs.forEach((m) => { all[m.id] = true; });
                    setRevealedOptions(all);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Reveal All Answers
                </button>
              </div>
            </div>

            {/* Questions list inside paper */}
            <div className="mt-6 space-y-6">
              {activePaper.mcqs.map((mcq, idx) => {
                const isRevealed = revealedOptions[mcq.id] || false;
                return (
                  <div key={mcq.id} className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        Q {idx + 1}. ({mcq.category.replace('-', ' ')})
                      </span>
                      <button
                        onClick={() => toggleAnswer(mcq.id)}
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
                      >
                        {isRevealed ? 'Hide Answer' : 'Show Answer'}
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {mcq.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {mcq.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === mcq.correctIndex;
                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-xl border flex items-center justify-between ${
                              isRevealed && isCorrect
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-100 font-bold ring-1 ring-emerald-500'
                                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                              <span>{opt}</span>
                            </div>
                            {isRevealed && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {isRevealed && (
                      <div className="p-3 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200">
                        <strong className="block mb-0.5">Explanation:</strong>
                        {mcq.explanation}
                      </div>
                    )}

                    {/* ChatGPT Explanation & Doubt Resolver */}
                    <AiTutorSection mcq={mcq} examContext={activePaper.exam} />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
