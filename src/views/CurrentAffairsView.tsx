import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Globe2, 
  Calendar, 
  Search, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Trophy,
  Landmark,
  Share2,
  Sparkles
} from 'lucide-react';
import { CURRENT_AFFAIRS_DATA } from '../data/currentAffairsData';

export const CurrentAffairsView: React.FC = () => {
  const { setTab, setSelectedCategorySlug } = useApp();
  const [scopeFilter, setScopeFilter] = useState<'All' | 'Pakistan' | 'International'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return CURRENT_AFFAIRS_DATA.filter((item) => {
      if (scopeFilter !== 'All' && item.category !== scopeFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.date.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [scopeFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Updated Weekly for 2025 - 2026 Competitive Exams</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-display">
              Pakistan & International Current Affairs
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm mt-2 leading-relaxed">
              Curated digest of domestic governance, SCO summits, UN Security Council developments, 26th Amendment, and global geopolitics essential for CSS, PMS, and FPSC screening tests.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedCategorySlug('current-affairs');
                setTab('mcqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm shadow-md hover:bg-emerald-50 transition cursor-pointer flex items-center gap-2"
            >
              <span>Practice Current Affairs MCQs</span>
              <ArrowRight className="w-4 h-4 text-emerald-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, summits, appointments..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {/* Scope Buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {(['All', 'Pakistan', 'International'] as const).map((sc) => (
              <button
                key={sc}
                onClick={() => setScopeFilter(sc)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  scopeFilter === sc
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                {sc === 'All' ? 'All Developments' : `${sc} Affairs`}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium pl-2 whitespace-nowrap">
            Showing <strong className="text-emerald-600 dark:text-emerald-400">{filteredItems.length}</strong> topics
          </span>
        </div>

      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-500/60 transition group"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] ${
                  item.category === 'Pakistan'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                }`}>
                  {item.category}
                </span>

                <span className="text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug font-display">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {item.summary}
              </p>

              {/* Related High-Yield Examination Question */}
              {item.relatedMcq && (
                <div className="mt-4 p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Expected Exam Question:</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    {item.relatedMcq.question}
                  </p>
                  <div className="text-xs text-emerald-900 dark:text-emerald-200 font-medium">
                    Answer: <strong>{item.relatedMcq.options[item.relatedMcq.correctIndex]}</strong>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Importance: <strong className="text-emerald-600 dark:text-emerald-400">{item.importance}</strong>
              </span>

              <button
                onClick={() => {
                  setSelectedCategorySlug('current-affairs');
                  setTab('mcqs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Practice More MCQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
