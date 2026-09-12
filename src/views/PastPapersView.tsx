import React, { useEffect, useRef, useState } from 'react';
import { Clock, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PAST_PAPERS_DATA } from '../data/pastPapersData';
import { PastPaper } from '../types';
import { practiceMinutes, scorePaper } from '../lib/paperResults';

const panel = 'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-7';
const button = 'px-4 py-2 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500';
const secondary = 'px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40';
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

function PaperSession({ paper, onExit, onRetake }: { paper: PastPaper; onExit: () => void; onRetake: () => void }) {
  const { recordQuizAttempt, userProfile, setTab } = useApp();
  const limit = practiceMinutes(paper.mcqs.length) * 60;
  const [started] = useState(Date.now);
  const [remaining, setRemaining] = useState(limit);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [saving, setSaving] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [onlyMistakes, setOnlyMistakes] = useState(false);
  const finished = useRef(false);
  const saveStarted = useRef(false);
  const result = scorePaper(paper.mcqs, answers);
  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setElapsed(Math.min(limit, Math.max(0, Math.floor((Date.now() - started) / 1000))));
  };
  useEffect(() => {
    if (elapsed !== null) return;
    const tick = () => {
      const left = Math.max(0, Math.ceil((started + limit * 1000 - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) finish();
    };
    const timer = window.setInterval(tick, 250);
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ''; };
    window.addEventListener('beforeunload', warn);
    return () => { window.clearInterval(timer); window.removeEventListener('beforeunload', warn); };
  }, [elapsed, started, limit]);

  const save = async () => {
    if (saveStarted.current || elapsed === null) return;
    saveStarted.current = true;
    setSaving('Saving…');
    try {
      const saved = await recordQuizAttempt({ id: crypto.randomUUID(), date: new Date().toISOString(),
        title: `${paper.exam} ${paper.year} — practice selection`, totalQuestions: paper.mcqs.length,
        score: result.correct, timeSpentSeconds: elapsed, incorrectQuestions: result.incorrectQuestions });
      setSaving(saved.success ? 'Result and mistakes saved.' : 'Saved on this device; account sync failed.');
    } catch { setSaving('Could not confirm saving. Check your history before trying again.'); }
  };

  if (elapsed !== null) return <div className="space-y-6">
    <div className={panel}>
      <p className="text-emerald-600 font-bold">Paper complete</p><h1 className="text-3xl font-bold mt-2">Your result</h1><p className="mt-2">{paper.title}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {[['Score', `${result.correct}/${paper.mcqs.length}`], ['Accuracy', `${result.accuracy}%`], ['Time (min:sec)', clock(elapsed)], ['Unanswered', result.skipped]].map(([label, value]) => <div key={label} className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4"><p className="text-sm">{label}</p><p className="text-2xl font-bold">{value}</p></div>)}
      </div>
      <p className="text-sm text-slate-500">Score: {result.percentage}% of all questions. Accuracy: correct ÷ answered. One mark per correct answer; no negative marking.</p>
      <p className="text-sm mt-2">Rank: unavailable — no verified comparison results yet.</p>
      <div className="flex flex-wrap gap-3 mt-5"><button className={button} disabled={saveStarted.current} onClick={save}>Save result & mistakes</button><button className={secondary} onClick={onRetake}>Retake paper</button><button className={secondary} onClick={onExit}>Back to papers</button><button className={secondary} onClick={() => setTab('mistakes')}>My mistakes</button></div>
      <p role="status" className="mt-3 text-sm">{saving}</p>
    </div>
    <section className={panel}><h2 className="text-xl font-bold">Subject breakdown</h2><p className="text-sm mt-1">Revise subjects below 70%; unanswered questions count as missed.</p><div className="space-y-4 mt-5">{Object.entries(result.subjects).sort((a,b) => a[1].correct/a[1].total - b[1].correct/b[1].total).map(([name, data]) => <div key={name}><div className="flex justify-between gap-3 text-sm"><span className="capitalize">{name.replaceAll('-', ' ')} {data.correct/data.total < .7 ? '· Needs practice' : '· On track'}</span><span>{data.correct}/{data.total}</span></div><progress aria-label={name} value={data.correct} max={data.total} className="w-full accent-emerald-600" /></div>)}</div></section>
    <section className="space-y-4"><div className="flex flex-wrap justify-between gap-3"><h2 className="text-xl font-bold">Question-by-question review</h2><label><input type="checkbox" checked={onlyMistakes} onChange={e => setOnlyMistakes(e.target.checked)} /> Only missed questions</label></div>
      {paper.mcqs.filter(q => !onlyMistakes || answers[q.id] !== q.correctIndex).map(q => <article className={panel} key={q.id}><p className="text-sm text-emerald-600">{answers[q.id] === q.correctIndex ? 'Correct' : answers[q.id] === undefined ? 'Unanswered' : 'Incorrect'}{userProfile.mistakeIds.includes(q.id) ? ' · In your mistakes' : ''}</p><h3 className="font-bold mt-2">{paper.mcqs.indexOf(q)+1}. {q.question}</h3><p className="mt-3">Your answer: {q.options[answers[q.id]] ?? 'Not answered'}</p><p className="font-semibold text-emerald-700 dark:text-emerald-400 mt-2">Correct answer: {q.options[q.correctIndex]}</p><p className="mt-3 text-sm leading-7">{q.explanation || 'An explanation has not been added yet.'}</p></article>)}
      {onlyMistakes && result.correct === paper.mcqs.length && <p>Perfect score — no mistakes to review.</p>}
    </section>
  </div>;

  const question = paper.mcqs[index];
  return <div className="space-y-5">
    <div className={panel}><div className="flex flex-wrap justify-between gap-4"><h1 className="text-xl font-bold">{paper.title}</h1><span role="timer" className={`font-mono font-bold flex gap-2 ${remaining < 60 ? 'text-red-600' : ''}`}><Clock size={20}/>{clock(remaining)} left</span></div><p className="mt-3 text-sm">{result.attempted}/{paper.mcqs.length} answered · Timer submits automatically. Leaving this page discards the attempt.</p><button className={`${secondary} mt-3`} onClick={() => { if(window.confirm('Discard this unfinished attempt?')) onExit(); }}>Exit attempt</button></div>
    <div className="grid lg:grid-cols-[1fr_260px] gap-5"><section className={panel}><p className="text-sm text-emerald-600 font-bold">Question {index+1} of {paper.mcqs.length}</p><h2 className="text-xl font-semibold my-5">{question.question}</h2><fieldset className="space-y-3"><legend className="sr-only">Choose one answer</legend>{question.options.map((option, i) => <label key={i} className={`flex gap-3 p-4 border rounded-xl cursor-pointer ${answers[question.id] === i ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950' : 'border-slate-300 dark:border-slate-700'}`}><input type="radio" name={question.id} checked={answers[question.id] === i} onChange={() => { if (Date.now() >= started + limit*1000) { finish(); return; } setAnswers(a => ({...a, [question.id]: i})); }} /><span>{option}</span></label>)}</fieldset><div className="flex flex-wrap gap-3 mt-6"><button className={secondary} disabled={index === 0} onClick={() => setIndex(index-1)}>Previous</button><button className={secondary} disabled={index === paper.mcqs.length-1} onClick={() => setIndex(index+1)}>Next</button><button className={secondary} onClick={() => { if(Date.now() >= started + limit*1000) { finish(); return; } setAnswers(a => { const copy = {...a}; delete copy[question.id]; return copy; }); }}>Clear answer</button></div></section>
    <aside className={panel}><h2 className="font-bold mb-4">Question navigator</h2><div className="grid grid-cols-4 gap-2">{paper.mcqs.map((q, i) => <button key={q.id} aria-label={`Question ${i+1}, ${answers[q.id] === undefined ? 'unanswered' : 'answered'}`} aria-current={index === i ? 'step' : undefined} className={`rounded-lg p-2 border ${index === i ? 'ring-2 ring-emerald-500' : ''} ${answers[q.id] !== undefined ? 'bg-emerald-700 text-white' : ''}`} onClick={() => setIndex(i)}>{i+1}</button>)}</div><button className={`${button} mt-6 w-full`} onClick={() => setConfirm(true)}>Finish paper</button>{confirm && <div className="mt-4 space-y-3" role="alert"><p>{result.skipped} unanswered. Submit now?</p><button className={button} onClick={finish}>Submit answers</button><button className={secondary} onClick={() => setConfirm(false)}>Keep working</button></div>}</aside></div>
  </div>;
}

export const PastPapersView: React.FC = () => {
  const { selectedPastPaperId, setSelectedPastPaperId } = useApp();
  const [active, setActive] = useState<PastPaper | null>(null);
  const [session, setSession] = useState(0);
  const [search, setSearch] = useState('');
  const [exam, setExam] = useState('All');
  const papers = PAST_PAPERS_DATA.filter(p => (exam === 'All' || p.exam === exam) && `${p.title} ${p.postName} ${p.year}`.toLowerCase().includes(search.toLowerCase()));
  return <main className="max-w-7xl mx-auto px-4 py-8 text-slate-900 dark:text-slate-100">{active ? <div key={`${active.id}-${session}`}><PaperSession paper={active} onExit={() => setActive(null)} onRetake={() => setSession(s => s+1)} /></div> : <div className="space-y-6">
    <header className="rounded-3xl bg-emerald-950 text-white p-8"><FileText className="mb-4 text-emerald-300"/><p className="text-emerald-300 text-sm font-semibold">PRACTICE • REVIEW • IMPROVE</p><h1 className="text-3xl font-bold mt-2">Past papers, real progress</h1><p className="mt-3 max-w-2xl text-emerald-100">Build confidence with timed practice, clear explanations and a personal mistake bank.</p></header>
    <p className="text-sm text-slate-500">Current sets use exam-tagged questions from our bank, not verified complete official papers. Counts and suggested practice times below reflect only the available questions.</p>
    <div className="flex flex-wrap gap-4"><label className="flex-1 min-w-52">Search papers<input value={search} onChange={e => setSearch(e.target.value)} placeholder="Exam, post or year" className="block border rounded-xl p-3 mt-1 w-full bg-transparent" /></label><label>Exam<select className="block border rounded-xl p-3 mt-1 bg-white dark:bg-slate-900" value={exam} onChange={e => setExam(e.target.value)}>{['All', ...new Set(PAST_PAPERS_DATA.map(p => p.exam))].map(e => <option key={e}>{e}</option>)}</select></label></div>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">{papers.map(p => <article key={p.id} className={`${panel} flex flex-col ${selectedPastPaperId === p.id ? 'ring-2 ring-emerald-500' : ''}`}><p className="text-emerald-600 font-bold">{p.exam} · {p.year}</p><h2 className="text-lg font-bold my-3">{p.title.replace(/Official |Solved /g, '')}</h2><p className="text-sm text-slate-500 mb-5">Practice selection · {p.mcqs.length} questions · {practiceMinutes(p.mcqs.length)} minutes</p><button className={`${button} mt-auto`} disabled={!p.mcqs.length} onClick={() => { setSelectedPastPaperId(p.id); setActive(p); }}>{p.mcqs.length ? 'Start paper' : 'Questions coming soon'}</button></article>)}</div>{papers.length === 0 && <p className={panel}>No matching papers. Try another exam or search.</p>}
  </div>}</main>;
};
