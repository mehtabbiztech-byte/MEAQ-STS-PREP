import React, { useState } from 'react';
import { QuizCertificate, RankTier } from '../types';
import { getRankTierBadge } from '../lib/certificateService';
import { 
  Award, 
  Printer, 
  Share2, 
  Check, 
  Copy, 
  X, 
  Edit2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Trophy,
  ExternalLink
} from 'lucide-react';

interface CertificateModalProps {
  certificate: QuizCertificate;
  isOpen: boolean;
  onClose: () => void;
  onUpdateCandidateName?: (newName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
  onUpdateCandidateName,
}) => {
  if (!isOpen || !certificate) return null;

  const [candidateName, setCandidateName] = useState(certificate.candidateName || 'Aspirant Candidate');
  const [isEditingName, setIsEditingName] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const tierBadge = getRankTierBadge(certificate.rankTier);

  const handleSaveName = () => {
    setIsEditingName(false);
    if (onUpdateCandidateName && candidateName.trim()) {
      onUpdateCandidateName(candidateName.trim());
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCode = () => {
    const textToCopy = `MATB STS PREP Official Digital Certificate\nCandidate: ${candidateName}\nExam: ${certificate.quizTitle}\nRank: ${certificate.rankTier} (Rank #${certificate.rankPosition}, Top ${100 - certificate.percentile}%)\nScore: ${certificate.score}/${certificate.totalQuestions} (${certificate.percentage}%)\nVerification ID: ${certificate.verificationCode}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🎓 *Official Examination Certificate*\n\n` +
      `I scored *${certificate.score}/${certificate.totalQuestions} (${certificate.percentage}%)* on *${certificate.quizTitle}* on *MATB STS PREP*!\n\n` +
      `🏅 *National Rank:* #${certificate.rankPosition} (${certificate.rankTier})\n` +
      `✨ *National Percentile:* ${certificate.percentile}th Percentile\n` +
      `🆔 *Verification ID:* ${certificate.verificationCode}\n\n` +
      `Prepare smart for CSS, PMS, FPSC, SPSC & STS tests at MATB STS PREP!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static">
      
      {/* Modal Card Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col my-auto print:border-none print:shadow-none print:max-w-none print:w-full print:rounded-none">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-850 border-b border-slate-800 text-white print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">
              Verified Digital Credential • {certificate.verificationCode}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">Share WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action helper bar for name editing (Hidden on Print) */}
        <div className="bg-slate-800/60 px-4 sm:px-6 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Name on certificate:</span>
            {isEditingName ? (
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-600 text-white text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-hidden"
                  placeholder="Enter full name"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 cursor-pointer"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <strong className="text-emerald-400 font-semibold">{candidateName}</strong>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-slate-400 hover:text-white transition flex items-center gap-1 cursor-pointer"
                  title="Change name on certificate"
                >
                  <Edit2 className="w-3 h-3 text-slate-400" />
                  <span className="underline">Change</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Verification info copied!' : 'Copy Verification ID'}</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* THE OFFICIAL CERTIFICATE CANVAS (Designed for Display and Print)         */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-8 bg-slate-950/40 print:p-0 print:bg-white overflow-x-auto">
          
          <div 
            id="printable-certificate"
            className="w-full max-w-[800px] mx-auto bg-gradient-to-br from-[#fcfbf7] via-[#fffdf9] to-[#f7f5ed] text-slate-900 border-8 sm:border-[12px] border-[#064e3b] p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden print:border-[10px] print:border-[#064e3b] print:shadow-none print:w-full print:max-w-none print:rounded-none"
            style={{ minHeight: '520px' }}
          >
            {/* Outer Decorative Inset Border */}
            <div className="absolute inset-1.5 sm:inset-2.5 border border-amber-600/40 rounded-xl pointer-events-none" />
            <div className="absolute inset-2.5 sm:inset-4 border border-dashed border-emerald-800/30 rounded-lg pointer-events-none" />

            {/* Corner Ornamental Rosettes */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-amber-700/60 text-lg sm:text-2xl font-serif select-none pointer-events-none">❖</div>
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-amber-700/60 text-lg sm:text-2xl font-serif select-none pointer-events-none">❖</div>
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-amber-700/60 text-lg sm:text-2xl font-serif select-none pointer-events-none">❖</div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-amber-700/60 text-lg sm:text-2xl font-serif select-none pointer-events-none">❖</div>

            {/* Subtle Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
              <div className="w-96 h-96 rounded-full border-[20px] border-emerald-950 flex items-center justify-center font-black text-6xl tracking-widest text-emerald-950">
                MATB STS
              </div>
            </div>

            {/* Certificate Header */}
            <div className="text-center relative z-10 space-y-1">
              <div className="flex items-center justify-center gap-2">
                <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-600" />
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center shadow-xs">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-600" />
              </div>

              <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-emerald-900 pt-1">
                MATB STS PREP • Pakistan Competitive Examination Board
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight text-emerald-950 pt-1">
                Certificate of Merit & National Rank
              </h1>

              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-800">
                Official Standardized Assessment Credential
              </div>
            </div>

            {/* Recipient Statement */}
            <div className="mt-6 text-center relative z-10 space-y-2">
              <p className="text-xs sm:text-sm text-slate-600 italic font-serif">
                This honor credential is duly presented to
              </p>

              <div className="py-1 border-b-2 border-emerald-900/30 max-w-md mx-auto">
                <h2 className="text-xl sm:text-3xl font-extrabold font-serif text-emerald-950 tracking-wide">
                  {candidateName}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed pt-1">
                for demonstrating outstanding academic proficiency, time efficiency, and ranked distinction in the timed competitive mock examination:
              </p>

              <div className="inline-block px-4 py-1.5 rounded-xl bg-emerald-900/5 border border-emerald-800/30 text-emerald-950 font-extrabold text-sm sm:text-base">
                {certificate.quizTitle}
              </div>
            </div>

            {/* Score & Rank Badges Row */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10 max-w-2xl mx-auto">
              
              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-900/20 text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  National Standing
                </span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-900 flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-base sm:text-lg">{tierBadge.medal}</span>
                  <span>Rank #{certificate.rankPosition}</span>
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-900/20 text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Distinction Tier
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-800 block mt-1">
                  {certificate.rankTier}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-900/20 text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Score & Grade
                </span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-900 block mt-0.5">
                  {certificate.score}/{certificate.totalQuestions} ({certificate.grade})
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-900/20 text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Percentile Rank
                </span>
                <span className="text-sm sm:text-base font-extrabold text-teal-800 block mt-0.5">
                  {certificate.percentile}th %
                </span>
              </div>

            </div>

            {/* Signatures & Official Embossed Seal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-300 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left Signature: Examination Controller */}
              <div className="text-center sm:text-left order-2 sm:order-1">
                <div className="font-serif italic text-base sm:text-lg font-bold text-emerald-950 leading-none">
                  Abdul Rasheed Soomro
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">
                  Controller of Mock Examinations
                </div>
                <div className="text-[9px] text-slate-400">
                  MATB Testing Assessment Board
                </div>
              </div>

              {/* Center: Gold & Green Embossed Seal */}
              <div className="order-1 sm:order-2 flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-amber-500 bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1 shadow-md flex items-center justify-center text-center">
                  <div className="w-full h-full rounded-full border border-dashed border-amber-900 flex flex-col items-center justify-center p-1 bg-gradient-to-b from-amber-400 to-amber-500 text-amber-950 font-serif">
                    <span className="text-[7px] uppercase tracking-tighter font-extrabold">VERIFIED</span>
                    <Award className="w-5 h-5 text-amber-950 my-0.5" />
                    <span className="text-[7px] uppercase tracking-tighter font-extrabold">2026</span>
                  </div>
                </div>
              </div>

              {/* Right Signature: Founder & Academic Director */}
              <div className="text-center sm:text-right order-3">
                <div className="font-serif italic text-base sm:text-lg font-bold text-emerald-950 leading-none">
                  Mehtab Ali
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">
                  Founder & Head of Academics
                </div>
                <div className="text-[9px] text-slate-400">
                  MATB STS PREP System
                </div>
              </div>

            </div>

            {/* Bottom Verification Code Stamp */}
            <div className="mt-5 pt-3 border-t border-dashed border-slate-300/80 flex items-center justify-between text-[10px] text-slate-500 relative z-10 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Doc No: <strong>{certificate.verificationCode}</strong></span>
              </div>
              <div>
                Date of Issue: <strong>{certificate.issuedDate}</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
