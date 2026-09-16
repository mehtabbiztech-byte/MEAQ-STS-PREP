import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, FileQuestion, FileUp, LogIn, Plus, Save, Search, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CmsCollection, CmsRecord, deleteCmsRecord, importMcqs, isCmsAdmin, listCmsRecords, saveCmsRecord, statusOptions } from '../lib/cmsService';
import { CmsLesson, CmsMcq, CmsPastPaper, ContentStatus } from '../types';
import { parseCsv } from '../lib/csv';

const blankMcq = (): Partial<CmsMcq> => ({ kind: 'mcq', status: 'Draft', question: '', options: ['', '', '', ''], correctIndex: 0, explanation: '', category: 'current-affairs', examTags: ['STS', 'SPSC', 'FPSC', 'NTS', 'PTS'], difficulty: 'Medium', sourceUrls: [], syllabusReferences: [] });
const blankPaper = (): Partial<CmsPastPaper> => ({ kind: 'past-paper', status: 'Draft', title: '', exam: 'STS', conductedBy: '', year: new Date().getFullYear(), postName: '', bps: '', durationMinutes: 90, questions: [], sourceUrls: [], syllabusReferences: [] });
const blankLesson = (): Partial<CmsLesson> => ({ kind: 'lesson', status: 'Draft', subject: '', chapter: '', topic: '', title: '', explanation: '', importantPoints: [], examples: [], sourceUrls: [], syllabusReferences: [] });
const collectionFor = (kind: string): CmsCollection => kind === 'past-paper' ? 'cms_past_papers' : kind === 'lesson' ? 'cms_lessons' : 'cms_mcqs';
const split = (value: string) => value.split(/[\n,]/).map(item => item.trim()).filter(Boolean);

export const AdminView: React.FC = () => {
  const { user, authLoading, setAuthModalOpen, logout } = useApp();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [kind, setKind] = useState<'mcq' | 'past-paper' | 'lesson'>('mcq');
  const [records, setRecords] = useState<CmsRecord[]>([]);
  const [draft, setDraft] = useState<Partial<CmsRecord>>(blankMcq());
  const [queryText, setQueryText] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async () => setRecords(await listCmsRecords(collectionFor(kind)));
  useEffect(() => { if (!user) { setAllowed(false); return; } isCmsAdmin(user.uid).then(setAllowed).catch(() => setAllowed(false)); }, [user]);
  useEffect(() => { if (allowed) load().catch(err => setNotice(err.message)); }, [allowed, kind]);
  useEffect(() => { setDraft(kind === 'mcq' ? blankMcq() : kind === 'past-paper' ? blankPaper() : blankLesson()); }, [kind]);

  const visible = useMemo(() => records.filter(item => JSON.stringify(item).toLowerCase().includes(queryText.toLowerCase())), [records, queryText]);
  const setField = (name: string, value: unknown) => setDraft(current => ({ ...current, [name]: value }));
  const save = async () => {
    if (!user) return;
    setBusy(true); setNotice('');
    try { await saveCmsRecord(collectionFor(kind), draft, user.uid); setNotice('Saved successfully. Published content updates live without redeployment.'); setDraft(kind === 'mcq' ? blankMcq() : kind === 'past-paper' ? blankPaper() : blankLesson()); await load(); }
    catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to save.'); }
    finally { setBusy(false); }
  };
  const importFile = async (file?: File) => {
    if (!file || !user) return;
    setBusy(true);
    try {
      const text = await file.text();
      const rows = file.name.endsWith('.json') ? JSON.parse(text) : parseCsv(text).slice(1).map(columns => {
        const [question, a, b, c, d, correctIndex, explanation, category, examTags, sourceUrl] = columns;
        return { question, options: [a, b, c, d], correctIndex: Number(correctIndex), explanation, category, examTags: split(examTags || ''), sourceUrls: split(sourceUrl || ''), difficulty: 'Medium', status: 'Draft' };
      });
      if (kind === 'mcq') { const result = await importMcqs(rows, user.uid); setNotice(`Imported ${result.imported}; skipped ${result.duplicates} duplicates.`); }
      else {
        for (const row of rows) await saveCmsRecord(collectionFor(kind), { ...row, kind }, user.uid);
        setNotice(`Imported ${rows.length} ${kind} records.`);
      }
      await load();
    } catch (error) { setNotice(error instanceof Error ? error.message : 'Import failed. Use valid JSON or the documented CSV columns.'); }
    finally { setBusy(false); }
  };

  if (authLoading || allowed === null) return <main className="min-h-screen grid place-items-center bg-slate-950 text-white">Checking administrator access…</main>;
  if (!user) return <main className="min-h-screen grid place-items-center bg-slate-950 text-white p-6"><section className="max-w-md text-center"><LogIn className="mx-auto mb-4"/><h1 className="text-2xl font-bold">Admin sign-in required</h1><p className="text-slate-400 my-4">Sign in with the account registered in the Firestore administrators collection.</p><button onClick={() => setAuthModalOpen(true)} className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950">Open sign in</button></section></main>;
  if (!allowed) return <main className="min-h-screen grid place-items-center bg-slate-950 text-white p-6"><section className="max-w-xl text-center"><h1 className="text-2xl font-bold">Administrator access not enabled</h1><p className="text-slate-400 my-4">Create <code>admins/{user.uid}</code> in Firestore with <code>active: true</code>. Your UID is:</p><code className="block rounded-xl bg-slate-900 p-4 select-all">{user.uid}</code><button onClick={logout} className="mt-5 underline">Sign out</button></section></main>;

  return <main className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white">
    <header className="sticky top-0 z-20 bg-slate-950 text-white border-b border-slate-800"><div className="max-w-7xl mx-auto p-4 flex items-center justify-between"><div><p className="text-xs font-bold text-emerald-400">MEQSA CONTENT MANAGEMENT</p><h1 className="text-xl font-extrabold">Editorial Admin Portal</h1></div><a href="/" className="flex gap-2 items-center text-sm"><ArrowLeft size={16}/>Back to website</a></div></header>
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-5">
      <section className="grid sm:grid-cols-3 gap-3">{([['mcq','MCQs',FileQuestion],['past-paper','Past Papers',FileUp],['lesson','Lessons',BookOpen]] as const).map(([id,label,Icon]) => <button key={id} onClick={() => setKind(id)} className={`rounded-2xl border p-4 flex gap-3 items-center font-bold ${kind === id ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}><Icon/>{label}</button>)}</section>
      {notice && <p className="rounded-xl border border-emerald-300 bg-emerald-50 dark:bg-emerald-950 p-3 text-sm">{notice}</p>}
      <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-5">
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
          <div className="flex justify-between items-center"><h2 className="font-extrabold">{draft.id ? 'Edit' : 'Add'} {kind}</h2><label className="cursor-pointer rounded-xl border px-3 py-2 text-xs font-bold"><FileUp className="inline mr-2" size={15}/>Import JSON/CSV<input type="file" accept=".json,.csv" className="hidden" onChange={e => importFile(e.target.files?.[0])}/></label></div>
          <div className="grid sm:grid-cols-2 gap-3">
            {kind === 'mcq' && <><Field label="Question" value={(draft as Partial<CmsMcq>).question} onChange={v => setField('question', v)} wide/>{(draft as Partial<CmsMcq>).options?.map((option,index) => <Field key={index} label={`Option ${index + 1}`} value={option} onChange={v => setField('options', (draft as Partial<CmsMcq>).options?.map((old,i) => i === index ? v : old))}/>)}<Field label="Correct option (1–4)" type="number" value={String(((draft as Partial<CmsMcq>).correctIndex || 0) + 1)} onChange={v => setField('correctIndex', Math.max(0, Math.min(3, Number(v) - 1)))}/><Field label="Category" value={(draft as Partial<CmsMcq>).category} onChange={v => setField('category', v)}/><Field label="Subtopic" value={(draft as Partial<CmsMcq>).subtopic} onChange={v => setField('subtopic', v)}/><Field label="Explanation" value={(draft as Partial<CmsMcq>).explanation} onChange={v => setField('explanation', v)} wide textarea/><Field label="Exam tags (comma separated)" value={(draft as Partial<CmsMcq>).examTags?.join(', ')} onChange={v => setField('examTags', split(v))} wide/></>}
            {kind === 'past-paper' && <><Field label="Paper title" value={(draft as Partial<CmsPastPaper>).title} onChange={v => setField('title', v)} wide/><Field label="Exam" value={(draft as Partial<CmsPastPaper>).exam} onChange={v => setField('exam', v)}/><Field label="Conducted by" value={(draft as Partial<CmsPastPaper>).conductedBy} onChange={v => setField('conductedBy', v)}/><Field label="Year" type="number" value={String((draft as Partial<CmsPastPaper>).year || '')} onChange={v => setField('year', Number(v))}/><Field label="Post name" value={(draft as Partial<CmsPastPaper>).postName} onChange={v => setField('postName', v)}/><Field label="BPS/category" value={(draft as Partial<CmsPastPaper>).bps} onChange={v => setField('bps', v)}/><Field label="Duration minutes" type="number" value={String((draft as Partial<CmsPastPaper>).durationMinutes || '')} onChange={v => setField('durationMinutes', Number(v))}/><Field label="Questions JSON" value={JSON.stringify((draft as Partial<CmsPastPaper>).questions || [], null, 2)} onChange={v => { try { setField('questions', JSON.parse(v)); } catch { /* keep last valid JSON */ } }} wide textarea/></>}
            {kind === 'lesson' && <><Field label="Subject" value={(draft as Partial<CmsLesson>).subject} onChange={v => setField('subject', v)}/><Field label="Chapter" value={(draft as Partial<CmsLesson>).chapter} onChange={v => setField('chapter', v)}/><Field label="Topic" value={(draft as Partial<CmsLesson>).topic} onChange={v => setField('topic', v)}/><Field label="Lesson title" value={(draft as Partial<CmsLesson>).title} onChange={v => setField('title', v)}/><Field label="Lesson content" value={(draft as Partial<CmsLesson>).explanation} onChange={v => setField('explanation', v)} wide textarea/><Field label="Important points (one per line)" value={(draft as Partial<CmsLesson>).importantPoints?.join('\n')} onChange={v => setField('importantPoints', split(v))} wide textarea/><Field label="Examples (one per line)" value={(draft as Partial<CmsLesson>).examples?.join('\n')} onChange={v => setField('examples', split(v))} wide textarea/></>}
            <label className="text-sm font-bold">Status<select value={draft.status} onChange={e => setField('status', e.target.value as ContentStatus)} className="mt-1 block w-full rounded-xl border p-3 bg-transparent">{statusOptions.map(s => <option key={s}>{s}</option>)}</select></label><Field label="Schedule publication" type="datetime-local" value={draft.publishAt?.slice(0,16)} onChange={v => setField('publishAt', v ? new Date(v).toISOString() : '')}/><Field label="Source URLs (one per line)" value={draft.sourceUrls?.join('\n')} onChange={v => setField('sourceUrls', split(v))} wide textarea/><Field label="Official syllabus references" value={draft.syllabusReferences?.join('\n')} onChange={v => setField('syllabusReferences', split(v))} wide textarea/>
          </div>
          <button disabled={busy} onClick={save} className="w-full rounded-xl bg-emerald-600 text-white p-3 font-extrabold disabled:opacity-50"><Save className="inline mr-2" size={17}/>{busy ? 'Working…' : 'Save content'}</button>
        </section>
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5"><div className="flex items-center justify-between gap-3 mb-4"><h2 className="font-extrabold">Content library ({records.length})</h2><div className="relative"><Search size={15} className="absolute left-3 top-3 text-slate-400"/><input value={queryText} onChange={e => setQueryText(e.target.value)} placeholder="Search" className="rounded-xl border py-2 pl-9 pr-3 bg-transparent"/></div></div><div className="space-y-2 max-h-[760px] overflow-auto">{visible.map(item => <article key={item.id} className="rounded-xl border border-slate-200 dark:border-slate-700 p-3"><div className="flex justify-between gap-3"><button onClick={() => setDraft(item)} className="text-left min-w-0"><p className="font-bold truncate">{'question' in item ? item.question : item.title}</p><p className="text-xs text-slate-500">{item.status} · Updated {new Date(item.updatedAt).toLocaleDateString()}</p></button><button aria-label="Delete" onClick={async () => { if (confirm('Delete this record?')) { await deleteCmsRecord(collectionFor(kind), item.id); await load(); } }} className="text-rose-600"><Trash2 size={17}/></button></div>{item.status === 'Published' && <p className="mt-2 text-xs text-emerald-600 flex gap-1"><CheckCircle2 size={14}/>Live content</p>}</article>)}</div><button onClick={() => setDraft(kind === 'mcq' ? blankMcq() : kind === 'past-paper' ? blankPaper() : blankLesson())} className="mt-4 w-full rounded-xl border p-2 font-bold"><Plus className="inline mr-2" size={16}/>New record</button></section>
      </div>
    </div>
  </main>;
};

const Field: React.FC<{ label: string; value?: string; onChange: (value: string) => void; wide?: boolean; textarea?: boolean; type?: string }> = ({ label, value = '', onChange, wide, textarea, type = 'text' }) => <label className={`text-sm font-bold ${wide ? 'sm:col-span-2' : ''}`}>{label}{textarea ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={4} className="mt-1 block w-full rounded-xl border p-3 bg-transparent font-normal"/> : <input type={type} value={value} onChange={e => onChange(e.target.value)} className="mt-1 block w-full rounded-xl border p-3 bg-transparent font-normal"/>}</label>;
