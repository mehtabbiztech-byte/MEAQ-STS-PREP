import React, { useState, useMemo } from 'react';
import { 
  CSS_ALL_SUBJECTS, 
  CSS_EXAM_SCHEME, 
  CSS_OPTIONAL_GROUPS, 
  CssSubjectDetail 
} from '../data/cssDetailedSyllabusData';
import { 
  BookOpen, 
  Search, 
  Award, 
  CheckCircle2, 
  Layers, 
  Clock, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Sparkles,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CssSyllabusExplorerProps {
  initialSubjectCode?: number;
  compact?: boolean;
}

export const CssSyllabusExplorer: React.FC<CssSyllabusExplorerProps> = ({ 
  initialSubjectCode,
  compact = false 
}) => {
  const { setTab, setSelectedCategorySlug } = useApp();

  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubjectCode, setActiveSubjectCode] = useState<number>(initialSubjectCode || 1);
  const [showRulesModal, setShowRulesModal] = useState(false);

  // Filtered subjects based on group and search query
  const filteredSubjects = useMemo(() => {
    return CSS_ALL_SUBJECTS.filter((sub) => {
      // Group filter
      if (selectedGroup === 'compulsory' && sub.type !== 'compulsory') return false;
      if (selectedGroup.startsWith('Group-') && sub.group !== selectedGroup) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = sub.name.toLowerCase().includes(q);
        const matchesCode = sub.code.toString().includes(q);
        const matchesGroup = sub.group ? sub.group.toLowerCase().includes(q) : false;
        const matchesTopic = sub.syllabusParts.some((part) =>
          part.title.toLowerCase().includes(q) ||
          part.topics.some((t) => t.toLowerCase().includes(q))
        );
        return matchesName || matchesCode || matchesGroup || matchesTopic;
      }

      return true;
    });
  }, [selectedGroup, searchQuery]);

  // Selected subject detail
  const activeSubject = useMemo(() => {
    return CSS_ALL_SUBJECTS.find((s) => s.code === activeSubjectCode) || CSS_ALL_SUBJECTS[0];
  }, [activeSubjectCode]);

  const handleLaunchPractice = (subjectName: string) => {
    // Map to relevant category if possible
    setTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-7 shadow-xs">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              FPSC Official Syllabus
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Revised Scheme (1200 Marks)
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display mt-2">
            CSS Complete Scheme of Examination & Subject Syllabi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Official curriculum issued by the Federal Public Service Commission (FPSC). Covers all 6 Compulsory subjects (600 marks) and 49 Optional subjects categorized across Groups I to VII.
          </p>
        </div>

        {/* Quick stats & rules trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowRulesModal(true)}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-xs border border-slate-200 dark:border-slate-700 transition cursor-pointer flex items-center gap-1.5"
          >
            <Info className="w-4 h-4 text-emerald-500" />
            <span>FPSC Rules & Notes</span>
          </button>
        </div>
      </div>

      {/* Scheme Summary Quick Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Total Examination
          </div>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
            1200 Marks
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            50% Aggregate Pass
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            Compulsory (6 Papers)
          </div>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
            600 Marks
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            40% Pass in Each Paper
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
            Optional (Groups I–VII)
          </div>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
            600 Marks
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            33% Pass in Each Paper
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Screening MPT
          </div>
          <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
            200 MCQs
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            33% (66 Marks) Threshold
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="space-y-3 mb-6">
        {/* Group selector pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          {[
            { id: 'all', label: 'All (55 Subjects)' },
            { id: 'compulsory', label: 'Compulsory (600M)' },
            { id: 'Group-I', label: 'Group I (200M)' },
            { id: 'Group-II', label: 'Group II (200M/Sciences)' },
            { id: 'Group-III', label: 'Group III (100M/Admin)' },
            { id: 'Group-IV', label: 'Group IV (100M/History)' },
            { id: 'Group-V', label: 'Group V (100M/Literature)' },
            { id: 'Group-VI', label: 'Group VI (100M/Law)' },
            { id: 'Group-VII', label: 'Group VII (100M/Social/Languages)' },
          ].map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedGroup === grp.id
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search CSS subjects or specific topics (e.g. Criminology, Sindhi, IR, Chemistry, Precis, Shura)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Main Split View: Left list + Right detailed syllabus */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Subjects list */}
        <div className="lg:col-span-5 space-y-2 max-h-[650px] overflow-y-auto pr-1">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 pb-1">
            Showing {filteredSubjects.length} subjects:
          </div>

          {filteredSubjects.map((sub) => {
            const isSelected = sub.code === activeSubject.code;
            return (
              <button
                key={sub.code}
                onClick={() => setActiveSubjectCode(sub.code)}
                className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer flex items-start justify-between gap-2 ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-600 shadow-2xs'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      sub.type === 'compulsory'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      Code {sub.code}
                    </span>
                    {sub.group && (
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                        {sub.group}
                      </span>
                    )}
                  </div>
                  <div className={`text-sm font-bold leading-snug ${
                    isSelected ? 'text-emerald-950 dark:text-emerald-100' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    {sub.name}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span>{sub.marks} Marks</span>
                    <span>•</span>
                    <span>{sub.papersCount} {sub.papersCount === 1 ? 'Paper' : 'Papers'}</span>
                  </div>
                </div>

                <div className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ${
                  isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {sub.marks}M
                </div>
              </button>
            );
          })}

          {filteredSubjects.length === 0 && (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-xs">
              No CSS subjects matched your query "{searchQuery}".
            </div>
          )}
        </div>

        {/* Right Column: Detailed Syllabus of Active Subject */}
        <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 space-y-6">
          
          {/* Active Subject Heading */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                activeSubject.type === 'compulsory'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 text-white'
              }`}>
                {activeSubject.type === 'compulsory' ? 'Compulsory Subject' : `Optional (${activeSubject.group})`}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold">
                Code No. {activeSubject.code}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 text-xs font-bold">
                {activeSubject.marks} Marks
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
              {activeSubject.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeSubject.description}
            </p>
          </div>

          {/* Exam metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                {activeSubject.durationHours} Hours {activeSubject.papersCount > 1 ? `(${activeSubject.papersCount} x 3 hrs)` : ''}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">MCQ Component</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                {activeSubject.mcqRatio}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Language of Paper</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                {activeSubject.language}
              </span>
            </div>
          </div>

          {/* Detailed Syllabus Sections */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-500" />
              Prescribed Detailed Topics Breakdown
            </h4>

            <div className="space-y-3">
              {activeSubject.syllabusParts.map((part, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-bold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                      {part.title}
                    </div>
                    {part.marks && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold shrink-0">
                        {part.marks}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {part.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Official Recommended Readings */}
          {activeSubject.suggestedReadings && activeSubject.suggestedReadings.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-500" />
                FPSC Recommended Readings & Authors
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeSubject.suggestedReadings.map((book, bidx) => (
                  <div 
                    key={bidx} 
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      {book.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      by {book.author}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleLaunchPractice(activeSubject.name)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Practice MCQs for {activeSubject.name}</span>
            </button>
          </div>

        </div>

      </div>

      {/* FPSC Rules Modal */}
      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-500" />
                FPSC CSS Competitive Examination Rules & Notes
              </h3>
              <button 
                onClick={() => setShowRulesModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {CSS_EXAM_SCHEME.generalNotes.map((note) => (
                <div key={note.noteNo} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-400 block mb-1">
                    Note-{note.noteNo}:
                  </span>
                  {note.text}
                </div>
              ))}

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="font-extrabold text-emerald-800 dark:text-emerald-300">
                  Selection of Optional Subjects (600 Marks):
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  • Group I: Choose one subject of 200 marks.<br />
                  • Group II: Choose subject(s) of 200 marks (one 200-mark science or two 100-mark subjects).<br />
                  • Groups III, IV, V, VI, VII: Choose one subject of 100 marks from each selected group.
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowRulesModal(false)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
