import React, { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronDown, ExternalLink, FileText, Scale, Trophy } from 'lucide-react';

const SOURCE_URL = 'https://spsc.gos.pk/Syllabus/Dec2023/Revised-Syallabus-CCE.pdf';

const compulsory = [
  { code: '01', subject: 'English Essay', marks: 100 },
  { code: '02', subject: 'English (Precis and Composition)', marks: 100 },
  { code: '03', subject: 'General Paper in Sindhi OR General Paper in Urdu', marks: 100 },
  { code: '04', subject: 'Current Affairs & Pakistan Affairs', marks: 100 },
  { code: '05', subject: 'General Science and Ability', marks: 100 },
  { code: '06', subject: 'Islamic Studies OR Comparative Study of Major Religions (for non-Muslims)', marks: 100 },
];

const optionalGroups = [
  { group: 'Group I', rule: 'Select one 200-mark subject', subjects: ['07 · Accountancy & Auditing — 200', '08 · Economics — 200', '09 · Computer Science — 200', '10 · Political Science — 200', '11 · International Relations — 200'] },
  { group: 'Group II', rule: 'Select at most one 100-mark subject', subjects: ['12 · Physics', '13 · Chemistry', '14 · Applied Mathematics', '15 · Pure Mathematics', '16 · Statistics', '17 · Geology'] },
  { group: 'Group III', rule: 'Select at most one 100-mark subject', subjects: ['18 · Business Administration', '19 · Public Administration', '20 · Governance & Public Policies', '21 · Town Planning & Urban Management'] },
  { group: 'Group IV', rule: 'Select at most one 100-mark subject', subjects: ['22 · History of Pakistan & India', '23 · Islamic History & Culture', '24 · European History', '25 · History of U.S.A.'] },
  { group: 'Group V', rule: 'Select at most one 100-mark subject', subjects: ['26 · Gender Studies', '27 · Environmental Sciences', '28 · Agriculture & Forestry', '29 · Botany', '30 · Zoology', '31 · English Literature', '32 · Urdu Literature', '33 · Sindhi Literature'] },
  { group: 'Group VI', rule: 'Select at most one 100-mark subject', subjects: ['34 · Law', '35 · Constitutional Law', '36 · International Law', '37 · Mercantile Law', '38 · Muslim Law & Jurisprudence', '39 · Criminology', '40 · Philosophy'] },
  { group: 'Group VII', rule: 'Select at most one 100-mark subject', subjects: ['41 · Journalism & Mass Communication', '42 · Psychology', '43 · Geography', '44 · Sociology', '45 · Anthropology'] },
];

const detailedPapers = [
  { title: 'English Essay', topics: ['Write one organized essay in English from the given subjects.', 'Assessment emphasizes argument, structure, relevance, expression and command of English.'] },
  { title: 'English (Precis and Composition)', topics: ['Precis writing and comprehension', 'Sentence correction, grammar and vocabulary', 'Pair of words, idioms and translation where prescribed'] },
  { title: 'General Paper in Sindhi or Urdu', topics: ['Language comprehension and expression', 'Grammar, vocabulary and usage', 'Literary, social and cultural understanding', 'Answers must be written in the selected language'] },
  { title: 'Current Affairs & Pakistan Affairs', topics: ['Pakistan’s political, economic and social affairs', 'Relations with neighbouring states, the Muslim world, the United States and international organizations', 'International security, political economy, human rights and environment', 'Population, terrorism, energy, nuclear politics, trade and globalization', 'Kashmir, Palestine and major regional or global developments', 'Pakistan movement, constitutional development, geography, economy and society'] },
  { title: 'General Science and Ability', topics: ['Physical and biological sciences in everyday life', 'Environment, food, energy, information technology and public health', 'Quantitative ability, arithmetic and algebra', 'Logical, analytical and mental ability', 'Data interpretation and problem solving'] },
  { title: 'Islamic Studies / Comparative Religions', topics: ['Fundamental Islamic beliefs and practices', 'Life and teachings of the Holy Prophet (PBUH)', 'Islamic social, political, economic and ethical systems', 'Contemporary issues and Islamic perspective', 'Non-Muslim candidates may select Comparative Study of Major Religions'] },
];

const rules = [
  'Written examination: 1,000 marks — 600 compulsory and 400 optional.',
  'Candidates take all six compulsory papers and optional subjects totaling 400 marks.',
  'Not more than one optional subject may be selected from any one group.',
  'A 200-mark subject consists of two 100-mark papers.',
  'Every written paper is three hours.',
  'Sindhi and Urdu papers must be answered in the respective language.',
  'Candidates select either General Paper in Sindhi or General Paper in Urdu.',
  'The revised syllabus document requires at least 33% in each written paper and 50% in aggregate to reach the interview stage.',
  'No grace marks are provided.',
];

const panel = 'rounded-2xl border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 p-5 sm:p-6';

export const CceSyllabusExplorer: React.FC = () => {
  const [openGroup, setOpenGroup] = useState('Group I');
  return <div className="space-y-6 animate-in fade-in duration-150">
    <header className="rounded-3xl bg-gradient-to-br from-sky-950 via-cyan-950 to-emerald-950 p-6 sm:p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-5"><div><p className="text-cyan-300 text-xs font-black uppercase tracking-widest">Official revised syllabus</p><h3 className="text-2xl sm:text-3xl font-black mt-2">SPSC Combined Competitive Examination</h3><p className="text-sky-100 mt-2 max-w-2xl">Complete written-examination scheme, compulsory papers, optional groups and essential selection rules.</p></div><a href={SOURCE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-sky-950 hover:bg-cyan-50"><FileText size={18}/>Open official PDF <ExternalLink size={15}/></a></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">{[{label:'Compulsory',value:'600 marks'},{label:'Optional',value:'400 marks'},{label:'Written total',value:'1,000 marks'},{label:'Viva voce',value:'200 marks'}].map(item=><div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4"><span className="text-xs text-cyan-200">{item.label}</span><strong className="block text-xl mt-1">{item.value}</strong></div>)}</div>
    </header>

    <section className={panel}><div className="flex items-center gap-2"><BookOpen className="text-sky-700"/><h4 className="text-xl font-black">Compulsory subjects · 600 marks</h4></div><div className="overflow-x-auto mt-4"><table className="w-full text-left text-sm"><thead><tr className="bg-sky-50 dark:bg-sky-950/40"><th className="p-3">Code</th><th className="p-3">Paper</th><th className="p-3 text-right">Marks</th></tr></thead><tbody>{compulsory.map(item=><tr key={item.code} className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono">{item.code}</td><td className="p-3 font-semibold">{item.subject}</td><td className="p-3 text-right font-black">{item.marks}</td></tr>)}</tbody><tfoot><tr><td className="p-3 font-black" colSpan={2}>Total compulsory marks</td><td className="p-3 text-right font-black">600</td></tr></tfoot></table></div></section>

    <section className={panel}><div className="flex items-center gap-2"><Trophy className="text-amber-600"/><h4 className="text-xl font-black">Optional subjects · choose 400 marks</h4></div><p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Select subjects totaling 400 marks. You cannot select more than one subject from the same group.</p><div className="space-y-3 mt-5">{optionalGroups.map(group=><div key={group.group} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"><button onClick={()=>setOpenGroup(openGroup===group.group?'':group.group)} aria-expanded={openGroup===group.group} className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800"><span><strong>{group.group}</strong><span className="block text-xs text-slate-500 mt-1">{group.rule}</span></span><ChevronDown className={`transition-transform ${openGroup===group.group?'rotate-180':''}`} size={19}/></button>{openGroup===group.group&&<div className="grid sm:grid-cols-2 gap-2 border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50/60 dark:bg-slate-800/40">{group.subjects.map(subject=><div key={subject} className="flex gap-2 text-sm"><CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5"/><span>{subject}{group.group!=='Group I'&&' — 100 marks'}</span></div>)}</div>}</div>)}</div></section>

    <section className={panel}><h4 className="text-xl font-black">Compulsory-paper syllabus guide</h4><p className="text-xs text-slate-500 mt-1">A study-friendly outline of the prescribed areas. Consult the official PDF for the complete wording and recommended readings.</p><div className="grid lg:grid-cols-2 gap-4 mt-5">{detailedPapers.map(paper=><article key={paper.title} className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4"><h5 className="font-black text-sky-800 dark:text-cyan-300">{paper.title}</h5><ul className="space-y-2 mt-3">{paper.topics.map(topic=><li key={topic} className="flex gap-2 text-sm leading-6"><CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-1"/><span>{topic}</span></li>)}</ul></article>)}</div></section>

    <section className={panel}><div className="flex items-center gap-2"><Scale className="text-violet-600"/><h4 className="text-xl font-black">Essential examination rules</h4></div><ul className="space-y-3 mt-4">{rules.map(rule=><li key={rule} className="flex gap-3 text-sm leading-6"><CheckCircle2 size={17} className="text-violet-600 shrink-0 mt-1"/><span>{rule}</span></li>)}</ul><div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 p-4 mt-5"><AlertTriangle className="text-amber-700 shrink-0"/><p className="text-sm leading-6"><strong>Important:</strong> Active advertisements and the latest SPSC Recruitment Management Regulations can amend eligibility, attempts, age limits, screening rules or interview thresholds. Always confirm these from SPSC before applying.</p></div></section>
  </div>;
};
