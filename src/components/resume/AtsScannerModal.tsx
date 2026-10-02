import React, { useState } from 'react';
import { 
  X, 
  Search, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Sparkles, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ResumeData, SkillEntry } from '../../types/resume';
import { scanJobDescriptionKeywords } from '../../lib/atsScoreEngine';

interface AtsScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeData: ResumeData;
  onUpdateResumeData: (data: ResumeData) => void;
}

const SAMPLE_JOB_POSTINGS = [
  {
    title: 'Sukkur IBA STS Junior Clerk (BPS-11)',
    text: `Job Description: Junior Clerk (BPS-11) - Sindh Government Department (Recruitment via SIBA Testing Services STS).
Requirements & Responsibilities:
- Minimum Intermediate (HSSC) 2nd Division with minimum 30 WPM English typing speed on computer.
- Proficient in MS Office suite (Word, Excel, PowerPoint) and computerized record keeping.
- Handling official correspondence, filing, dispatching, dairy register maintenance, and drafting departmental notes.
- Data entry, basic spreadsheet calculations, accounting entries, and internet research.
- Excellent communication, office ethics, time management, and administrative coordination skills.
- Knowledge of government rules, official file disposal, and inventory management is preferred.`
  },
  {
    title: 'STEDA PST / JEST Teacher (BPS-14)',
    text: `Job Description: Primary School Teacher (PST BPS-14) / Junior Elementary School Teacher (JEST).
Qualifications & Competencies:
- Minimum Graduation / Bachelor degree with valid STEDA Teaching License.
- Mastery of classroom management, student assessment, pedagogical methods, and modern teaching aids.
- Strong subject knowledge in English, Mathematics, General Science, and Social Studies.
- Lesson planning, formative evaluation, individualized educational support, and parent-teacher communication.
- Competent in digital literacy, interactive whiteboard tools, and activity-based learning.`
  },
  {
    title: 'Full Stack Software Engineer',
    text: `Job Description: Full Stack Developer / Software Engineer.
Requirements:
- Strong proficiency in TypeScript, React, Node.js, REST APIs, and relational databases (PostgreSQL/SQL).
- Experience with cloud platforms (AWS/GCP), Docker containers, CI/CD pipelines, and microservices architecture.
- Demonstrated ability to write clean, unit-tested code with 90%+ code coverage.
- Knowledge of system design, performance optimization, agile methodology, and Git version control.
- Excellent collaborative problem-solving, code reviews, and cross-functional leadership.`
  }
];

export const AtsScannerModal: React.FC<AtsScannerModalProps> = ({
  isOpen,
  onClose,
  resumeData,
  onUpdateResumeData
}) => {
  const [jobText, setJobText] = useState(SAMPLE_JOB_POSTINGS[0].text);
  const [addedSkills, setAddedSkills] = useState<string[]>([]);

  if (!isOpen) return null;

  const result = scanJobDescriptionKeywords(resumeData, jobText);

  const handleAddKeyword = (keyword: string) => {
    if (addedSkills.includes(keyword)) return;

    const formattedName = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    const existing = resumeData.skills.some(
      s => s.name.toLowerCase() === formattedName.toLowerCase()
    );

    if (!existing) {
      const newSkill: SkillEntry = {
        id: 'skill-' + Date.now() + Math.random().toString(36).slice(2, 6),
        name: formattedName,
        category: 'technical',
        level: 'Intermediate',
      };
      onUpdateResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill]
      });
    }

    setAddedSkills(prev => [...prev, keyword]);
  };

  const getMatchColor = (rate: number) => {
    if (rate >= 80) return 'text-emerald-700 bg-emerald-50 border-emerald-300';
    if (rate >= 60) return 'text-blue-700 bg-blue-50 border-blue-300';
    if (rate >= 40) return 'text-amber-700 bg-amber-50 border-amber-300';
    return 'text-rose-700 bg-rose-50 border-rose-300';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-linear-to-r from-emerald-900/10 via-teal-900/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                ATS Keyword Scanner & Job Matcher
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                  Live
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Paste any job vacancy description to measure resume keyword density & pass ATS filters
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                1. Select or Paste Job Description:
              </label>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400">Presets:</span>
                {SAMPLE_JOB_POSTINGS.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setJobText(sample.text);
                      setAddedSkills([]);
                    }}
                    className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline px-1.5 py-0.5 rounded-sm bg-emerald-50 dark:bg-emerald-950/60"
                  >
                    {sample.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              placeholder="Paste job posting duties, required qualifications, and key skills here..."
              rows={5}
              className="w-full text-xs font-mono rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-3.5 text-slate-900 dark:text-slate-100 focus:outline-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
            />
          </div>

          {/* Real-time Match Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Match Rate Card */}
            <div className={`p-4 rounded-2xl border flex flex-col justify-center items-center text-center ${getMatchColor(result.matchRate)}`}>
              <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">
                ATS Keyword Match Rate
              </span>
              <div className="text-4xl font-black my-1 font-display tracking-tight">
                {result.matchRate}%
              </div>
              <span className="text-xs font-semibold">
                {result.matchRate >= 75 ? '✨ Excellent Match!' : result.matchRate >= 50 ? '⚡ Moderate Match' : '⚠️ Low Match Rate'}
              </span>
            </div>

            {/* Keyword Count Summary */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex flex-col justify-center">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1">
                Target Role
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {resumeData.targetHeadline || 'General Candidate'}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span>Matched Keywords:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{result.matchedKeywords.length}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span>Missing Keywords:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">{result.missingKeywords.length}</span>
              </div>
            </div>

            {/* Quick Action Guide */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex flex-col justify-center text-xs space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                ATS Parser Benchmark
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                Taleo & Workday bots filter candidates with &lt;65% keyword alignment. Add the missing terms below to cross the threshold.
              </p>
            </div>
          </div>

          {/* Missing Keywords (Opportunity to Add) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <AlertTriangle size={14} />
                Missing High-Value Keywords in Resume ({result.missingKeywords.length})
              </h3>
              <span className="text-[11px] text-slate-400">Click "+" to inject into your Skills section</span>
            </div>

            {result.missingKeywords.length === 0 ? (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} />
                All top extracted job description keywords are present in your resume!
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60">
                {result.missingKeywords.map((kw, i) => {
                  const isAdded = addedSkills.includes(kw);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleAddKeyword(kw)}
                      disabled={isAdded}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                        isAdded
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-amber-300 dark:border-amber-700/60 hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:scale-105 active:scale-95'
                      }`}
                    >
                      {isAdded ? <CheckCircle2 size={12} className="text-emerald-600" /> : <Plus size={12} className="text-amber-600" />}
                      <span className="capitalize">{kw}</span>
                      {isAdded && <span className="text-[10px] text-emerald-700 font-bold ml-0.5">Added</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Matched Keywords */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              Matched Keywords Found in Resume ({result.matchedKeywords.length})
            </h3>
            <div className="flex flex-wrap gap-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              {result.matchedKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium border border-emerald-200 dark:border-emerald-800 capitalize"
                >
                  ✓ {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs">
          <div className="text-slate-500">
            {addedSkills.length > 0 && (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                ✓ Injected {addedSkills.length} new skill(s) into your resume.
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold hover:opacity-90 transition-opacity"
          >
            Done & Return to Builder
          </button>
        </div>
      </div>
    </div>
  );
};
