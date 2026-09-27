import React, { useEffect, useRef, useState } from 'react';
import type { TeachingLicenseSubjectiveQuestion } from '../data/teachingLicenseSubjectiveData';
import { readWritingSession, remainingSeconds, validateWritingFeedback, type WritingFeedback } from '../lib/subjectivePractice';

export function SubjectiveAnswerEditor({ question, onTimedChange }: { question: TeachingLicenseSubjectiveQuestion; onTimedChange: (active: boolean) => void }) {
  const key = `meqsa-writing-session:${question.id}`;
  const [session, setSession] = useState(() => {
    try { return readWritingSession(localStorage.getItem(key), localStorage.getItem(`meqsa-teaching-license-subjective:${question.id}`) || ''); }
    catch { return readWritingSession(null); }
  });
  const [now, setNow] = useState(Date.now());
  const [storageError, setStorageError] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const request = useRef<AbortController | null>(null);
  const timed = session.deadline !== null && !session.submitted;
  const left = session.deadline === null ? question.suggestedMinutes * 60 : remainingSeconds(session.deadline, now);
  const locked = session.submitted || (timed && left === 0);
  const notify = useRef(onTimedChange); notify.current = onTimedChange;
  useEffect(() => { notify.current(timed); return () => notify.current(false); }, [timed]);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(session)); setStorageError(false); }
    catch { setStorageError(true); }
  }, [session, key]);
  useEffect(() => {
    if (!timed) return;
    const tick = () => {
      const current = Date.now(); setNow(current);
      if (remainingSeconds(session.deadline!, current) === 0) setSession(s => ({ ...s, submitted: true }));
    };
    tick(); const timer = window.setInterval(tick, 500);
    return () => window.clearInterval(timer);
  }, [timed, session.deadline]);
  const button = 'rounded-xl border border-purple-300 px-3 py-2 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed';
  async function review() {
    const controller = new AbortController(); request.current = controller;
    setBusy(true); setError(''); setFeedback(null);
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch('/api/subjective-feedback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ questionId: question.id, answer: session.answer }), signal: controller.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Feedback could not be generated.');
      setFeedback(validateWritingFeedback(data, question.rubric.length));
    } catch (e) { setError(e instanceof Error && e.name !== 'AbortError' ? e.message : 'Feedback request stopped. Please retry.'); }
    finally { clearTimeout(timeout); setBusy(false); }
  }
  return <div className="space-y-4 rounded-2xl border border-purple-200 bg-white p-4 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <strong>{session.submitted ? 'Answer submitted' : timed ? 'Timed practice' : 'Writing practice'}</strong>
      <span role="timer" aria-label="Time remaining" className="font-mono text-xl font-bold">{Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}</span>
    </div>
    <p className="text-xs text-slate-500">Suggested practice time: {question.suggestedMinutes} minutes. The timer continues when you leave or refresh. Answers lock when time expires.</p>
    <div className="flex flex-wrap gap-2">
      {!timed && !session.submitted && <button className={button} onClick={() => { if (session.answer.trim() && !window.confirm('Start a timed attempt with your existing draft?')) return; setNow(Date.now()); setSession(s => ({ ...s, deadline: Date.now() + question.suggestedMinutes * 60000 })); }}>Start timed practice</button>}
      {!session.submitted && <button className={button} disabled={!session.answer.trim() || locked} onClick={() => setSession(s => ({ ...s, submitted: true }))}>Submit answer</button>}
      <button className={button} disabled={busy} onClick={() => { if (!window.confirm('Clear this answer and start a new attempt?')) return; setSession({ answer: '', deadline: null, submitted: false }); setFeedback(null); setError(''); }}>New attempt</button>
    </div>
    <label htmlFor="subjective-answer" className="block text-sm font-bold">Your answer · {session.answer.trim() ? session.answer.trim().split(/\s+/).length : 0} words · Target: {question.wordRange}</label>
    <textarea id="subjective-answer" rows={question.type === 'ERQ' ? 14 : 8} maxLength={12000} readOnly={locked} value={session.answer} onChange={e => { if (session.deadline !== null && remainingSeconds(session.deadline) === 0) { setSession(s => ({ ...s, submitted: true })); return; } setSession(s => ({ ...s, answer: e.target.value })); }} placeholder="Write your response here…" className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 dark:bg-slate-950" />
    <p role="status" className="text-xs">{storageError ? 'Device storage is unavailable. Copy your answer before leaving.' : 'Answer and timer saved on this device.'} {session.submitted && 'Open the model answer below to compare and revise in a new attempt.'}</p>
    <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-950/30">
      <h4 className="font-bold">AI feedback — practice guidance only</h4>
      <p className="my-2 text-xs leading-5">AI can miss valid points or make mistakes. This is not an official STEDA/STS assessment or exam score. Requesting feedback sends your answer to the AI service; avoid personal information.</p>
      <button className={button} disabled={!session.submitted || session.answer.trim().length < 20 || busy} onClick={review}>{busy ? 'Reviewing answer…' : 'Get feedback on missing points'}</button>
      {!session.submitted && <p className="mt-2 text-xs">Submit your answer to unlock feedback.</p>}
      {error && <p role="alert" className="mt-3 text-sm text-rose-700 dark:text-rose-300">{error}</p>}
      {feedback && <div aria-live="polite" className="mt-4 space-y-4">{feedback.criteria.map((item, i) => <div key={i} className="rounded-xl bg-white p-3 dark:bg-slate-900"><h5 className="font-bold">{question.rubric[i].criterion} <span className="text-xs">({question.rubric[i].marks} rubric marks)</span></h5><p className="mt-2 text-sm">{item.feedback}</p>{item.missingPoints.length > 0 && <><p className="mt-2 text-sm font-bold">Missing points / improvements</p><ul className="list-disc pl-5 text-sm">{item.missingPoints.map((point, j) => <li key={j}>{point}</li>)}</ul></>}</div>)}<h5 className="font-bold">Next revision steps</h5><ul className="list-disc pl-5 text-sm">{feedback.nextSteps.map((step, i) => <li key={i}>{step}</li>)}</ul></div>}
    </div>
  </div>;
}
