import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  FileText, 
  ArrowRight, 
  Search, 
  Trophy, 
  CheckCircle2, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { JOBS_DATA } from '../data/jobsData';

export const JobsView: React.FC = () => {
  const { setSelectedExamId, setTab, setSelectedCategorySlug } = useApp();
  const [commissionFilter, setCommissionFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      if (commissionFilter !== 'All' && !job.agency.toLowerCase().includes(commissionFilter.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q) ||
          job.agency.toLowerCase().includes(q) ||
          job.bps.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [commissionFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Federal & Provincial Job Notifications
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Latest Government Jobs & Testing Alerts 2025-2026
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
              Stay ahead with official vacancy announcements, test schedules, eligibility, age limits, and one-click preparation packs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setTab('exams');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span>View Exam Syllabi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by post, department, BPS..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            {['All', 'FPSC', 'PPSC', 'STS', 'SPSC', 'KPPSC', 'FIA'].map((comm) => (
              <button
                key={comm}
                onClick={() => setCommissionFilter(comm)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  commissionFilter === comm
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {comm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-500 transition group"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-extrabold text-[11px]">
                  {job.agency}
                </span>

                <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Last Date: {job.lastDate}</span>
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug font-display">
                {job.title}
              </h3>

              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>{job.department}</span>
                <span>•</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">{job.bps}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Vacancies</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{job.postsCount} Seats</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Location / Domicile</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{job.location}</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-500">Eligibility:</span> {job.eligibility}
              </div>

              <div className="mt-1 text-[11px] text-slate-400">
                <span>Advt Ref: {job.advertisementNo}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setTab('mcqs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>Start Exam Prep</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setTab('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 cursor-pointer"
              >
                Take Sample Test →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
