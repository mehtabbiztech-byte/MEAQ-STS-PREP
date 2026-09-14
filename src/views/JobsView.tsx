import React, { useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, Building2, CalendarDays, Clock, ExternalLink, MapPin, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { JOBS_DATA, JOBS_LAST_VERIFIED } from '../data/jobsData';

const FILTERS = ['All', 'Pakistan Railways', 'ATH', 'PARC', 'Air University', 'AWKUM', 'NUST'];

export const JobsView: React.FC = () => {
  const { setTab } = useApp();
  const [agencyFilter, setAgencyFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return JOBS_DATA.filter((job) => {
      const agencyMatch = agencyFilter === 'All' ||
        `${job.agency} ${job.department}`.toLowerCase().includes(agencyFilter.toLowerCase());
      const searchMatch = !query || [
        job.title, job.department, job.agency, job.location, job.bps,
        job.eligibility, job.advertisementNo,
      ].some((value) => value.toLowerCase().includes(query));
      return agencyMatch && searchMatch;
    });
  }, [agencyFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7">
      <section className="overflow-hidden rounded-3xl border border-emerald-200 dark:border-emerald-900 bg-linear-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-950/50 dark:via-slate-900 dark:to-cyan-950/40 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
              <BadgeCheck className="h-4 w-4" />
              Official-source verified
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-display">
              Latest Pakistan Jobs — September 2026
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              Exact deadlines, eligibility guidance and direct official links. Every listing below was checked on {JOBS_LAST_VERIFIED}.
            </p>
          </div>
          <button
            onClick={() => { setTab('exams'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Prepare for job tests <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Verified listings', JOBS_DATA.length],
            ['Open organizations', new Set(JOBS_DATA.map((job) => job.agency)).size],
            ['Walk-in notices', JOBS_DATA.filter((job) => job.status === 'Walk-in').length],
            ['Updated', '14 Sep'],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-2xl border border-white/80 bg-white/80 dark:border-slate-700 dark:bg-slate-900/70 p-3">
              <div className="text-xl font-extrabold text-slate-950 dark:text-white">{value}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search title, organization, location or qualification…"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-hidden focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setAgencyFilter(filter)}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                agencyFilter === filter
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filteredJobs.map((job) => {
          const expanded = expandedId === job.id;
          return (
            <article key={job.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-400 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-extrabold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">{job.agency}</span>
                <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${
                  job.status === 'Closing Soon' ? 'bg-rose-100 text-rose-700' :
                  job.status === 'Walk-in' ? 'bg-amber-100 text-amber-800' :
                  'bg-cyan-100 text-cyan-800'
                }`}>{job.status}</span>
              </div>

              <h2 className="mt-4 text-lg font-extrabold leading-snug text-slate-950 dark:text-white font-display">{job.title}</h2>
              <div className="mt-2 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0" /><span>{job.department}</span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400"><CalendarDays className="h-3.5 w-3.5" /> Published</span>
                  <strong className="mt-1 block text-xs text-slate-800 dark:text-slate-200">{job.publishedDate}</strong>
                </div>
                <div className="rounded-xl bg-rose-50 p-3 dark:bg-rose-950/20">
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-rose-500"><Clock className="h-3.5 w-3.5" /> Deadline</span>
                  <strong className="mt-1 block text-xs text-rose-700 dark:text-rose-300">{job.lastDate}</strong>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400"><MapPin className="h-3.5 w-3.5" /> Location</span>
                  <strong className="mt-1 block text-xs text-slate-800 dark:text-slate-200">{job.location}</strong>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Scale / openings</span>
                  <strong className="mt-1 block text-xs text-slate-800 dark:text-slate-200">{job.bps} · {job.postsCount} listed</strong>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300"><strong>Eligibility:</strong> {job.eligibility}</p>

              {expanded && (
                <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 p-4 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  <p><strong>Qualification:</strong> {job.qualification || 'See official notice.'}</p>
                  <p><strong>Experience:</strong> {job.experience || 'See official notice.'}</p>
                  <p><strong>Age limit:</strong> {job.ageLimit || 'See official notice.'}</p>
                  <p><strong>How to apply:</strong> {job.applicationMethod || 'Follow the official notice.'}</p>
                  <p><strong>Reference:</strong> {job.advertisementNo}</p>
                  <p className="flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400"><BadgeCheck className="h-3.5 w-3.5" /> {job.sourceLabel} · checked {job.verifiedAt}</p>
                </div>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
                <button onClick={() => setExpandedId(expanded ? null : job.id)} className="rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200">
                  {expanded ? 'Hide details' : 'View all details'}
                </button>
                <a href={job.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-50 dark:border-emerald-900 dark:text-emerald-300">
                  Official notice <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href={job.applyUrl || job.sourceUrl} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700">
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {filteredJobs.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-sm text-slate-500 dark:border-slate-700">No jobs match this search.</div>
      )}

      <p className="text-center text-xs text-slate-500">
        Always re-check the official notice before paying a fee or submitting personal information. Vacancy counts shown for grouped listings are the number of listed role families, not guaranteed seats.
      </p>
    </div>
  );
};
