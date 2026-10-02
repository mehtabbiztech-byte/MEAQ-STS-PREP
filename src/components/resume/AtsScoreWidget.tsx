import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Zap, 
  Building2,
  TrendingUp,
  FileCheck2,
  Sliders,
  Check
} from 'lucide-react';
import { ResumeData } from '../../types/resume';
import { auditResumeAts, AtsCheckItem } from '../../lib/atsScoreEngine';

interface AtsScoreWidgetProps {
  data: ResumeData;
  onUpdate: (updated: ResumeData) => void;
  onOpenScanner: () => void;
  onOpenF500: () => void;
}

export const AtsScoreWidget: React.FC<AtsScoreWidgetProps> = ({
  data,
  onUpdate,
  onOpenScanner,
  onOpenF500,
}) => {
  const [expanded, setExpanded] = useState(false);
  const audit = auditResumeAts(data);

  // Auto-Fix handler for instant ATS compliance
  const handleAutoFix = () => {
    onUpdate({
      ...data,
      template: data.template === 'sts-govt' ? 'sts-govt' : 'modern-ats',
      showPhoto: false,
      showFatherName: data.template === 'sts-govt',
      showCnic: data.template === 'sts-govt',
      showDomicile: data.template === 'sts-govt',
      showHafizStatus: data.template === 'sts-govt',
      fontSize: 'normal',
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3 transition-all">
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Circular/Badge Score */}
          <div className={`px-3 py-1.5 rounded-xl border font-black text-sm font-display flex items-center gap-1.5 ${audit.gradeColor}`}>
            <ShieldCheck size={16} />
            <span>ATS Score: {audit.totalScore}/100</span>
            <span className="text-xs px-1.5 py-0.2 rounded-md bg-white/60 dark:bg-black/20 font-bold ml-1">
              Grade {audit.grade}
            </span>
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-bold text-slate-900 dark:text-white">
              {audit.summary}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5">
              <span>Metrics: <strong className="text-slate-700 dark:text-slate-300">{audit.metricsPercentage}%</strong></span>
              <span>•</span>
              <span>Action Verbs: <strong className="text-slate-700 dark:text-slate-300">{audit.powerVerbsPercentage}%</strong></span>
              <span>•</span>
              <span>Length: <strong className="text-slate-700 dark:text-slate-300">{audit.wordCount} words</strong></span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenScanner}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-colors"
          >
            <Zap size={13} className="text-emerald-600" />
            <span>Keyword Scanner</span>
          </button>

          <button
            type="button"
            onClick={onOpenF500}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors"
          >
            <Building2 size={13} className="text-indigo-600" />
            <span>F500 Portal</span>
          </button>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
          >
            <span>{expanded ? 'Hide Audit' : 'Audit Details'}</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 rounded-full ${
            audit.totalScore >= 80 
              ? 'bg-linear-to-r from-emerald-500 to-teal-500' 
              : audit.totalScore >= 60 
              ? 'bg-linear-to-r from-blue-500 to-cyan-500' 
              : 'bg-linear-to-r from-amber-500 to-rose-500'
          }`}
          style={{ width: `${audit.totalScore}%` }}
        />
      </div>

      {/* Expandable Detailed Checklist */}
      {expanded && (
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span>ATS Compliance Verification Checklist</span>
            {audit.totalScore < 90 && (
              <button
                type="button"
                onClick={handleAutoFix}
                className="text-emerald-700 dark:text-emerald-400 hover:underline normal-case font-bold text-xs inline-flex items-center gap-1"
              >
                <Sparkles size={12} />
                <span>1-Click ATS Preset Optimization</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {audit.items.map((item) => (
              <div 
                key={item.id}
                className={`p-2.5 rounded-xl border flex items-start justify-between gap-2 ${
                  item.passed 
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50' 
                    : 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50'
                }`}
              >
                <div className="flex items-start gap-2">
                  {item.passed ? (
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      {item.recommendation || item.description}
                    </div>
                  </div>
                </div>
                <span className="font-mono font-bold text-[11px] text-slate-600 dark:text-slate-300 shrink-0">
                  {item.score}/{item.maxScore}
                </span>
              </div>
            ))}
          </div>

          {/* Action Verbs Inspiration */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              🚀 Recommended High-Impact Power Verbs for Your Bullets:
            </span>
            <div className="flex flex-wrap gap-1">
              {audit.suggestedActionVerbs.map((verb, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[10.5px]"
                >
                  {verb}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
