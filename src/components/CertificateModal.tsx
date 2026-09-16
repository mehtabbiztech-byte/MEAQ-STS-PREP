import React, { useState } from 'react';
import { Award, Check, Copy, Edit2, Printer, Share2, X } from 'lucide-react';
import { QuizCertificate } from '../types';
import { getRankTierBadge } from '../lib/certificateService';

interface Props {
  certificate: QuizCertificate;
  isOpen: boolean;
  onClose: () => void;
  onUpdateCandidateName?: (name: string) => void;
}

export const CertificateModal: React.FC<Props> = ({ certificate, isOpen, onClose, onUpdateCandidateName }) => {
  const [candidateName, setCandidateName] = useState(certificate.candidateName || 'Learner');
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;
  const badge = getRankTierBadge(certificate.rankTier);
  const copy = () => {
    navigator.clipboard?.writeText(
      `MEQSA Practice Completion Record\nCandidate: ${candidateName}\nPractice: ${certificate.quizTitle}\nScore: ${certificate.score}/${certificate.totalQuestions} (${certificate.percentage}%)\nRecord ID: ${certificate.verificationCode}\nThis is a practice result, not an official exam credential or national rank.`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const share = () => {
    const text = encodeURIComponent(`I completed ${certificate.quizTitle} on MEQSA and scored ${certificate.score}/${certificate.totalQuestions} (${certificate.percentage}%). This is a practice result.`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };
  const saveName = () => {
    const value = candidateName.trim() || 'Learner';
    setCandidateName(value);
    onUpdateCandidateName?.(value);
    setEditing(false);
  };

  return <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-4 flex items-center justify-center print:bg-white print:static">
    <div className="w-full max-w-3xl rounded-3xl bg-slate-900 text-white overflow-hidden print:bg-white print:text-slate-900">
      <div className="flex justify-between items-center p-4 border-b border-slate-700 print:hidden">
        <p className="font-bold">Practice record · {certificate.verificationCode}</p>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="p-2 rounded-lg bg-emerald-700" aria-label="Print"><Printer size={17}/></button>
          <button onClick={share} className="p-2 rounded-lg bg-emerald-700" aria-label="Share"><Share2 size={17}/></button>
          <button onClick={onClose} className="p-2" aria-label="Close"><X size={19}/></button>
        </div>
      </div>
      <section id="printable-certificate" className="m-4 sm:m-8 rounded-2xl border-8 border-emerald-800 bg-[#fffdf7] text-slate-900 p-7 sm:p-12 text-center">
        <Award className="mx-auto text-amber-600" size={48}/>
        <p className="mt-4 text-xs font-black uppercase tracking-[.25em] text-emerald-800">MEQSA Study Platform</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-serif font-black text-emerald-950">Practice Completion Record</h1>
        <p className="mt-4 text-sm text-slate-600">Presented to</p>
        <div className="mt-2 flex justify-center items-center gap-2">
          {editing ? <><input value={candidateName} onChange={e => setCandidateName(e.target.value)} className="border rounded-lg px-3 py-2"/><button onClick={saveName} className="text-emerald-700 font-bold">Save</button></> : <><h2 className="text-2xl sm:text-3xl font-serif font-bold">{candidateName}</h2><button onClick={() => setEditing(true)} className="print:hidden" aria-label="Edit name"><Edit2 size={15}/></button></>}
        </div>
        <p className="mt-5 text-slate-600">for completing the timed practice activity</p>
        <p className="mt-2 text-xl font-black text-emerald-900">{certificate.quizTitle}</p>
        <div className="mt-7 grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Score</p><p className="text-xl font-black">{certificate.score}/{certificate.totalQuestions}</p></div>
          <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Percentage</p><p className="text-xl font-black">{certificate.percentage}%</p></div>
          <div className="rounded-xl border p-4"><p className="text-xs text-slate-500">Practice level</p><p className="text-sm font-black">{badge.label}</p></div>
        </div>
        <p className="mt-7 text-xs leading-5 text-slate-500">This document records activity completed inside MEQSA. It is not an official examination certificate, qualification, national rank, or nationally calculated percentile.</p>
        <div className="mt-6 pt-4 border-t flex flex-wrap justify-between gap-2 text-xs font-mono text-slate-500">
          <span>Record ID: {certificate.verificationCode}</span><span>{certificate.issuedDate}</span>
        </div>
      </section>
      <button onClick={copy} className="mx-auto mb-5 flex items-center gap-2 text-sm text-emerald-300 print:hidden">{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? 'Copied' : 'Copy practice result'}</button>
    </div>
  </div>;
};
