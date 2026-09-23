import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Building2, 
  Copy, 
  Check, 
  ShieldCheck, 
  FileCheck2, 
  TrendingUp, 
  Send, 
  Search,
  Filter,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ResumeData } from '../../types/resume';
import { 
  FORTUNE_500_COMPANIES, 
  FORTUNE_500_POWER_VERBS, 
  OUTREACH_TEMPLATES, 
  Fortune500Company 
} from '../../data/fortune500Data';

interface Fortune500HubModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeData: ResumeData;
  onUpdateResumeData: (newData: ResumeData) => void;
}

export const Fortune500HubModal: React.FC<Fortune500HubModalProps> = ({
  isOpen,
  onClose,
  resumeData,
  onUpdateResumeData,
}) => {
  const [activeTab, setActiveTab] = useState<'companies' | 'checker' | 'outreach' | 'verbs'>('companies');
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Fortune500Company>(FORTUNE_500_COMPANIES[0]);

  if (!isOpen) return null;

  // Filtered companies
  const filteredCompanies = FORTUNE_500_COMPANIES.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.keySkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      comp.searchTips.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === 'All' || comp.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  // Calculate ATS Readiness Audit
  const checkEeoCompliant = !resumeData.showPhoto && !resumeData.showFatherName && !resumeData.showCnic && !resumeData.showDomicile && !resumeData.showHafizStatus;
  const checkTemplateIsF500 = resumeData.template === 'fortune-500';
  const checkHasLinkedIn = !!resumeData.linkedinUrl && resumeData.linkedinUrl.trim().length > 0;
  const checkHasSummary = !!resumeData.professionalSummary && resumeData.professionalSummary.length > 50;
  
  // Check quantifiable metrics in experience bullets (% or $ or numbers)
  const experienceBullets = resumeData.experience.flatMap(e => e.responsibilities || []);
  const bulletsWithMetrics = experienceBullets.filter(b => /[\d%+$]/.test(b));
  const metricsPercentage = experienceBullets.length > 0 ? Math.round((bulletsWithMetrics.length / experienceBullets.length) * 100) : 0;
  const checkMetricsPass = metricsPercentage >= 60;

  // Check action verbs
  const allVerbs = FORTUNE_500_POWER_VERBS.flatMap(v => v.verbs);
  const bulletsWithPowerVerbs = experienceBullets.filter(b => {
    const firstWord = b.trim().split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, '');
    return allVerbs.some(v => v.toLowerCase() === firstWord?.toLowerCase());
  });
  const verbsPercentage = experienceBullets.length > 0 ? Math.round((bulletsWithPowerVerbs.length / experienceBullets.length) * 100) : 0;

  const scoreItems = [
    { label: 'EEO Anti-Bias Compliance (No Photo/CNIC/Religion)', passed: checkEeoCompliant, points: 25 },
    { label: 'Fortune 500 ATS Single-Column Layout', passed: checkTemplateIsF500, points: 20 },
    { label: 'Professional LinkedIn Profile URL', passed: checkHasLinkedIn, points: 15 },
    { label: 'Metrics-driven Accomplishments (Google XYZ formula)', passed: checkMetricsPass, points: 25 },
    { label: 'High-Impact Executive Summary', passed: checkHasSummary, points: 15 },
  ];

  const totalScore = scoreItems.reduce((acc, item) => acc + (item.passed ? item.points : 0), 0);

  // Auto fix for Fortune 500
  const handleAutoFixFortune500 = () => {
    onUpdateResumeData({
      ...resumeData,
      template: 'fortune-500',
      showPhoto: false,
      showFatherName: false,
      showCnic: false,
      showDomicile: false,
      showHafizStatus: false,
      accentColor: 'navy',
      fontSize: 'normal',
    });
  };

  const handleCopyText = (text: string, index: number) => {
    // Fill in placeholders
    const filled = text
      .replace(/{FullName}/g, resumeData.fullName || 'Candidate')
      .replace(/{RoleTitle}/g, resumeData.targetHeadline || 'Senior Engineer / Specialist')
      .replace(/{CompanyName}/g, selectedCompany.name)
      .replace(/{RecruiterName}/g, 'Recruiting Team')
      .replace(/{HiringManagerName}/g, 'Hiring Manager')
      .replace(/{ContactName}/g, 'Valued Alum')
      .replace(/{ContactRole}/g, 'Team Member')
      .replace(/{KeySkill1}/g, resumeData.skills[0]?.name || 'Cloud Architecture')
      .replace(/{KeySkill2}/g, resumeData.skills[1]?.name || 'Distributed Systems')
      .replace(/{KeyAchievementMetric}/g, experienceBullets[0] || 'improved throughput by 40% with zero downtime')
      .replace(/{BulletPoint1WithMetrics}/g, experienceBullets[0] || 'Accelerated pipeline throughput by 42%')
      .replace(/{BulletPoint2WithMetrics}/g, experienceBullets[1] || 'Engineered automated multi-region microservices')
      .replace(/{DepartmentOrProject}/g, selectedCompany.industry)
      .replace(/{IndustryOrDomain}/g, selectedCompany.industry)
      .replace(/{UniversityOrNetwork}/g, resumeData.education[0]?.instituteOrBoard || 'Alumni Network')
      .replace(/{Email}/g, resumeData.email || 'email@example.com')
      .replace(/{Phone}/g, resumeData.phone || '+92 300 1234567')
      .replace(/{LinkedInUrl}/g, resumeData.linkedinUrl || 'linkedin.com/in/candidate')
      .replace(/{PortfolioOrGithub}/g, resumeData.portfolioUrl || resumeData.githubUrl || resumeData.linkedinUrl || '');

    navigator.clipboard.writeText(filled).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="bg-linear-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
              <Building2 size={24} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-indigo-400 text-[11px] font-black uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Fortune 500 Portal & Application Hub</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                Send Resume to Global Fortune 500 Companies
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 pt-2 gap-2 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'companies', label: 'Company Directory & Direct Apply', icon: <Building2 size={15} /> },
            { id: 'checker', label: `ATS Resume Audit (${totalScore}%)`, icon: <ShieldCheck size={15} /> },
            { id: 'outreach', label: 'Outreach & Referral Templates', icon: <Send size={15} /> },
            { id: 'verbs', label: 'Action Verb Bank', icon: <Zap size={15} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 shadow-xs'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* 1. COMPANIES DIRECTORY */}
          {activeTab === 'companies' && (
            <div className="space-y-5">
              {/* Search & Industry Filters */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="relative w-full sm:w-72">
                  <Search size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Google, AWS, Workday..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
                  {['All', 'Tech & Cloud', 'Consulting & Strategy', 'Banking & Finance', 'Consumer Goods (FMCG)', 'Telecom & Hardware'].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setIndustryFilter(ind)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                        industryFilter === ind
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCompanies.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-indigo-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-sm text-slate-950 dark:text-white">
                              {comp.name}
                            </h3>
                            {comp.ticker && (
                              <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                                {comp.ticker}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                            {comp.industry} • ATS: {comp.atsSystem}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 text-right">
                          {comp.headquarters}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {comp.searchTips}
                      </p>

                      <div className="mt-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 text-[11px] text-slate-700 dark:text-slate-300">
                        <strong className="font-bold text-indigo-700 dark:text-indigo-300">Application Advice: </strong>
                        {comp.applicationAdvice}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {comp.keySkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[10px] font-medium"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => {
                          setSelectedCompany(comp);
                          setActiveTab('outreach');
                        }}
                        className="text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        Generate Outreach Note →
                      </button>
                      <a
                        href={comp.careersUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-transform active:scale-95"
                      >
                        <span>Open Careers Portal</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. ATS RESUME READINESS CHECKER */}
          {activeTab === 'checker' && (
            <div className="space-y-6">
              {/* Scorecard Banner */}
              <div className="p-6 rounded-3xl bg-linear-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-5 border border-indigo-900/50">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                    Fortune 500 ATS Compatibility Score
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">{totalScore}%</span>
                    <span className="text-sm font-semibold text-slate-300">
                      {totalScore >= 80 ? 'Ready for Google / Amazon / Microsoft ATS' : 'Needs ATS Formatting Adjustments'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 max-w-xl">
                    Fortune 500 recruiters utilize automated ATS parsers (Workday, Taleo, Greenhouse). Resumes must follow strict single-column flow, zero EEO demographic indicators, and quantifiable accomplishments.
                  </p>
                </div>
                {totalScore < 100 && (
                  <button
                    onClick={handleAutoFixFortune500}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg transition-transform active:scale-95 whitespace-nowrap"
                  >
                    <Sparkles size={16} />
                    <span>Auto-Sanitize for Fortune 500 ATS</span>
                  </button>
                )}
              </div>

              {/* Individual Checks */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-sm text-slate-950 dark:text-white">
                  ATS Audit Breakdown
                </h3>
                {scoreItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                      item.passed
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20'
                        : 'border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.passed ? (
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      ) : (
                        <AlertCircle size={18} className="text-amber-600 shrink-0" />
                      )}
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {item.passed ? `+${item.points} Points Awarded` : 'Action required to pass automated parser checks'}
                        </div>
                      </div>
                    </div>
                    <div>
                      {item.passed ? (
                        <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">PASSED</span>
                      ) : (
                        <button
                          onClick={handleAutoFixFortune500}
                          className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold"
                        >
                          Fix Now
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google XYZ Formula Guidance */}
              <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-extrabold text-xs">
                  <TrendingUp size={16} />
                  <span>The Google "XYZ" Formula For Fortune 500 Resumes</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Formula: <strong>"Accomplished [X], as measured by [Y], by doing [Z]"</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/60 text-slate-700 dark:text-slate-300">
                    <span className="text-rose-600 font-bold block mb-1">❌ Weak Bullet (Rejected):</span>
                    "Responsible for working on cloud servers and making databases run faster."
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 text-slate-700 dark:text-slate-300">
                    <span className="text-emerald-600 font-bold block mb-1">✅ Fortune 500 Bullet (Approved):</span>
                    "Spearheaded PostgreSQL query optimization, reducing p99 database response latency by 44% for 3.2M daily users."
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. OUTREACH & REFERRAL TEMPLATES */}
          {activeTab === 'outreach' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-950 dark:text-white">
                    Personalized Outreach Notes for {selectedCompany.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Use these messages on LinkedIn InMail, Cold Email, or Employee Referrals.
                  </p>
                </div>
                <select
                  value={selectedCompany.id}
                  onChange={(e) => {
                    const found = FORTUNE_500_COMPANIES.find(c => c.id === e.target.value);
                    if (found) setSelectedCompany(found);
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                >
                  {FORTUNE_500_COMPANIES.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                {OUTREACH_TEMPLATES.map((tmpl, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                        {tmpl.title}
                      </span>
                      <button
                        onClick={() => handleCopyText(tmpl.text, idx)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={14} />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Template</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs whitespace-pre-wrap leading-relaxed border border-slate-200 dark:border-slate-800">
                      {tmpl.text
                        .replace(/{FullName}/g, resumeData.fullName || '[Your Full Name]')
                        .replace(/{RoleTitle}/g, resumeData.targetHeadline || '[Target Role / Title]')
                        .replace(/{CompanyName}/g, selectedCompany.name)
                        .replace(/{RecruiterName}/g, '[Recruiter Name]')
                        .replace(/{HiringManagerName}/g, '[Hiring Manager Name]')
                        .replace(/{ContactName}/g, '[Contact Name]')
                        .replace(/{ContactRole}/g, '[Role / Alumni]')
                        .replace(/{KeySkill1}/g, resumeData.skills[0]?.name || '[Primary Skill]')
                        .replace(/{KeySkill2}/g, resumeData.skills[1]?.name || '[Secondary Skill]')
                        .replace(/{KeyAchievementMetric}/g, experienceBullets[0] || '[Key Metric Accomplishment]')
                        .replace(/{BulletPoint1WithMetrics}/g, experienceBullets[0] || '[Accomplishment with metrics]')
                        .replace(/{BulletPoint2WithMetrics}/g, experienceBullets[1] || '[Accomplishment with metrics]')
                        .replace(/{DepartmentOrProject}/g, selectedCompany.industry)
                        .replace(/{IndustryOrDomain}/g, selectedCompany.industry)
                        .replace(/{UniversityOrNetwork}/g, resumeData.education[0]?.instituteOrBoard || '[University / Network]')
                        .replace(/{Email}/g, resumeData.email || '[Email Address]')
                        .replace(/{Phone}/g, resumeData.phone || '[Phone Number]')
                        .replace(/{LinkedInUrl}/g, resumeData.linkedinUrl || '[LinkedIn URL]')
                        .replace(/{PortfolioOrGithub}/g, resumeData.portfolioUrl || resumeData.githubUrl || '[Portfolio/GitHub Link]')}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. ACTION VERBS BANK */}
          {activeTab === 'verbs' && (
            <div className="space-y-5">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="font-bold text-sm text-slate-950 dark:text-white">
                  High-Impact Power Verbs for Fortune 500 Resumes
                </h3>
                <p className="text-xs text-slate-500">
                  Begin every experience and project bullet with one of these approved action verbs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FORTUNE_500_POWER_VERBS.map((cat) => (
                  <div
                    key={cat.category}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                  >
                    <h4 className="font-bold text-xs text-indigo-600 dark:text-indigo-400 mb-2.5">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.verbs.map((verb) => (
                        <span
                          key={verb}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold"
                        >
                          {verb}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0">
          <span className="text-xs text-slate-500">
            Fortune 500 Template Status: {resumeData.template === 'fortune-500' ? 'Active' : 'Standard'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
