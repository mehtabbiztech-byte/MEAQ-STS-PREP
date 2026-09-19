import React, { useState, useEffect } from 'react';
import { ResumeData } from '../types/resume';
import { SAMPLE_STS_CANDIDATE_RESUME, SAMPLE_CORPORATE_RESUME } from '../data/resumeSampleData';
import { ResumeEditor } from '../components/resume/ResumeEditor';
import { ResumePreview } from '../components/resume/ResumePreview';
import { 
  Printer, 
  Download, 
  Copy, 
  RotateCcw, 
  Sparkles, 
  FileText, 
  Briefcase, 
  Check, 
  Eye, 
  Edit3,
  FileCheck2,
  Share2,
  UploadCloud,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const STORAGE_KEY = 'meaq_sts_resume_draft_v1';

export const ResumeView: React.FC = () => {
  const { setTab } = useApp();
  
  // Load saved draft from localStorage or default to STS sample
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading resume draft:', e);
    }
    return SAMPLE_STS_CANDIDATE_RESUME;
  });

  const [activeMobileView, setActiveMobileView] = useState<'editor' | 'preview'>('editor');
  const [copiedText, setCopiedText] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  // Auto-save to localStorage on every keystroke
  useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
        setSaveStatus('saved');
      } catch (e) {
        console.error('Failed to save resume draft to localStorage:', e);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [resumeData]);

  // Print handler
  const handlePrint = () => {
    window.print();
  };

  // Copy Plain Text for Online Portals (STS IBA, SPSC, Rozee)
  const handleCopyPlainText = () => {
    const lines = [
      `CURRICULUM VITAE: ${resumeData.fullName.toUpperCase()}`,
      resumeData.targetHeadline ? `TARGET: ${resumeData.targetHeadline}` : '',
      `----------------------------------------`,
      `Father's Name: ${resumeData.fatherName}`,
      `CNIC: ${resumeData.cnic}`,
      `Domicile: ${resumeData.domicileDistrict} (${resumeData.province})`,
      `Phone: ${resumeData.phone}`,
      `Email: ${resumeData.email}`,
      `Address: ${resumeData.address}, ${resumeData.city}`,
      resumeData.hafizEQuran ? `Hafiz-e-Quran: Yes (Eligible for Quota Marks)` : '',
      `\n--- PROFESSIONAL SUMMARY ---`,
      resumeData.professionalSummary,
      `\n--- EDUCATION & QUALIFICATIONS ---`,
      ...resumeData.education.map(
        (e) => `• ${e.degreeTitle} (${e.degreeLevel}) | ${e.instituteOrBoard} | Year: ${e.passingYear} | Marks: ${e.obtainedMarks}/${e.totalMarks} (${e.percentageOrCgpa || e.divisionOrGrade})`
      ),
      `\n--- WORK EXPERIENCE ---`,
      ...resumeData.experience.map(
        (exp) => `• ${exp.designation} at ${exp.organization} (${exp.startDate} - ${exp.isCurrent ? 'Present' : exp.endDate})\n  ${exp.responsibilities.join('; ')}`
      ),
      `\n--- SKILLS & PROFICIENCIES ---`,
      resumeData.skills.map((s) => `${s.name} (${s.level})`).join(', '),
      `\n--- CERTIFICATIONS & LICENSES ---`,
      ...resumeData.certifications.map(
        (c) => `• ${c.title} - ${c.issuingAuthority} (${c.issueYear})`
      ),
    ].filter(Boolean);

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    });
  };

  // Export JSON
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Resume_${resumeData.fullName.replace(/\s+/g, '_') || 'Candidate'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.fullName !== undefined) {
          setResumeData(parsed);
        }
      } catch (err) {
        alert('Invalid JSON resume file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetToBlank = () => {
    if (window.confirm('Reset all fields to an empty resume?')) {
      setResumeData({
        fullName: '',
        fatherName: '',
        cnic: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        domicileDistrict: '',
        province: 'Sindh',
        dob: '',
        gender: '',
        maritalStatus: '',
        religion: 'Islam',
        hafizEQuran: false,
        targetHeadline: '',
        professionalSummary: '',
        education: [],
        experience: [],
        skills: [],
        certifications: [],
        references: [],
        template: 'sts-govt',
        accentColor: 'emerald',
        fontSize: 'normal',
        showPhoto: false,
        showFatherName: true,
        showCnic: true,
        showDomicile: true,
        showHafizStatus: true,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner & Title */}
      <div className="bg-linear-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-700/50 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2">
              <FileCheck2 size={14} />
              <span>ATS & Public Sector Scrutiny Ready</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white">
              Create Resume / CV Builder
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
              Design a verified, scrutiny-compliant CV for Sukkur IBA STS (BPS 05–15), SPSC, FPSC, STEDA Teaching Licenses, and modern corporate job openings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-extrabold hover:bg-slate-100 shadow-lg transition-transform active:scale-95"
            >
              <Printer size={15} />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={() => {
                setTab('jobs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 text-white text-xs font-bold border border-emerald-500/40 transition-colors"
            >
              <Briefcase size={15} />
              <span>View Open Jobs</span>
            </button>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Quick Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-1">
            Presets:
          </span>
          <button
            type="button"
            onClick={() => setResumeData(SAMPLE_STS_CANDIDATE_RESUME)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
          >
            <Sparkles size={13} />
            <span>Load STS Candidate Sample</span>
          </button>
          <button
            type="button"
            onClick={() => setResumeData(SAMPLE_CORPORATE_RESUME)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors"
          >
            <Briefcase size={13} />
            <span>Load Corporate ATS Sample</span>
          </button>
          <button
            type="button"
            onClick={handleResetToBlank}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-rose-600 text-xs font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
          >
            <RotateCcw size={13} />
            <span>Blank</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyPlainText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition-colors"
            title="Copy formatted text for online job portals"
          >
            {copiedText ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            <span>{copiedText ? 'Copied Text!' : 'Copy Portal Text'}</span>
          </button>

          <button
            type="button"
            onClick={handleExportJson}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold"
            title="Export resume backup file"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Export</span>
          </button>

          <label className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold cursor-pointer">
            <UploadCloud size={13} />
            <span className="hidden sm:inline">Import</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJson}
              className="hidden"
            />
          </label>

          <span className="text-[11px] text-slate-400 font-mono hidden md:inline-block pl-2 border-l border-slate-200 dark:border-slate-700">
            {saveStatus === 'saving' ? 'Auto-saving...' : 'Draft saved'}
          </span>
        </div>
      </div>

      {/* Mobile Toggle Bar: Form Editor vs Preview */}
      <div className="flex lg:hidden rounded-2xl bg-slate-200 dark:bg-slate-800 p-1">
        <button
          onClick={() => setActiveMobileView('editor')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
            activeMobileView === 'editor'
              ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Edit3 size={15} />
          <span>Edit Form</span>
        </button>
        <button
          onClick={() => setActiveMobileView('preview')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
            activeMobileView === 'preview'
              ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Eye size={15} />
          <span>Live Preview</span>
        </button>
      </div>

      {/* Main Split Screen Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Editor Pane (Left Column) */}
        <div className={`lg:col-span-6 space-y-4 ${activeMobileView === 'preview' ? 'hidden lg:block' : 'block'}`}>
          <ResumeEditor
            data={resumeData}
            onChange={setResumeData}
          />
        </div>

        {/* Live Preview Pane (Right Column) */}
        <div className={`lg:col-span-6 space-y-3 lg:sticky lg:top-20 ${activeMobileView === 'editor' ? 'hidden lg:block' : 'block'}`}>
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-emerald-600" />
              <span>Live A4 Document Preview</span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline font-bold"
            >
              <Printer size={13} />
              <span>Print to PDF</span>
            </button>
          </div>

          {/* Scaled Preview Frame */}
          <div className="bg-slate-200/80 dark:bg-slate-950 p-2 sm:p-5 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-inner overflow-x-auto">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};
