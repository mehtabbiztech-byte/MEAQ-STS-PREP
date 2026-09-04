import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Share2,
  Check,
  HelpCircle
} from 'lucide-react';
import { STUDY_NOTES_DATA } from '../data/studyNotesData';

export const StudyNotesView: React.FC = () => {
  const { setTab, setSelectedCategorySlug } = useApp();
  const [selectedSub, setSelectedSub] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const subjects = ['All', 'Pakistan Studies', 'General Knowledge & Pakistan Geography', 'Everyday Science', 'Computer Science', 'Islamic Studies'];

  const filteredNotes = useMemo(() => {
    return STUDY_NOTES_DATA.filter((note) => {
      if (selectedSub !== 'All' && !note.subject.toLowerCase().includes(selectedSub.toLowerCase())) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = note.title.toLowerCase().includes(q) ||
          note.summary.toLowerCase().includes(q) ||
          note.subject.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedSub, searchQuery]);

  const handleShare = (title: string, summary: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${title}\n\n${summary}\n\nSource: MATB STS PREP`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              High-Yield Revision Sheets
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Exam Study Notes & Quick Summaries
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">
              Concise, high-retention notes curated for last-minute revision of competitive examinations in Pakistan.
            </p>
          </div>

          <button
            onClick={() => {
              setTab('mcqs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <span>Practice Associated MCQs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes, topics, formulas..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSub(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedSub === s
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-500 transition"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-extrabold text-[11px] capitalize">
                  {note.subject}
                </span>
                <span className="text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{note.readTime}</span>
                </span>
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">
                {note.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {note.summary}
              </p>

              {/* High Yield Keypoints */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Key Examination Takeaways:
                </div>
                {note.keyPoints.map((kp, kIdx) => (
                  <div key={kIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </div>
                ))}
              </div>

              {/* Frequently Asked In Tests */}
              {note.frequentlyAsked && note.frequentlyAsked.length > 0 && (
                <div className="mt-3 p-3 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    <span>Frequently Asked in Tests:</span>
                  </div>
                  {note.frequentlyAsked.map((faq, fIdx) => (
                    <div key={fIdx} className="text-xs text-slate-700 dark:text-slate-300 pl-2 border-l-2 border-amber-400">
                      {faq}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Exam Preparation Sheet
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(note.title, note.summary, note.id)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-emerald-600 cursor-pointer"
                  title="Copy notes"
                >
                  {copiedId === note.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    setTab('mcqs');
                  }}
                  className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Solve MCQs →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
