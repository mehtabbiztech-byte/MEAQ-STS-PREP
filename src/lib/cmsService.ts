import {
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy,
  query, setDoc, where, writeBatch, type Unsubscribe,
} from 'firebase/firestore';
import { db } from './firebase';
import { CmsLesson, CmsMcq, CmsPastPaper, ContentStatus } from '../types';

export type CmsCollection = 'cms_mcqs' | 'cms_past_papers' | 'cms_lessons';
export type CmsRecord = CmsMcq | CmsPastPaper | CmsLesson;
const COLLECTIONS: CmsCollection[] = ['cms_mcqs', 'cms_past_papers', 'cms_lessons'];

export const normalizeQuestion = (value: string) => value.toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, ' ').trim();

export async function isCmsAdmin(uid: string) {
  const snap = await getDoc(doc(db, 'admins', uid));
  return snap.exists() && snap.data().active === true;
}

export async function listCmsRecords(name: CmsCollection): Promise<CmsRecord[]> {
  const snap = await getDocs(query(collection(db, name), orderBy('updatedAt', 'desc')));
  return snap.docs.map(item => ({ id: item.id, ...item.data() } as CmsRecord));
}

export async function findDuplicateMcq(question: string, excludeId?: string) {
  const normalizedQuestion = normalizeQuestion(question);
  if (!normalizedQuestion) return null;
  const snap = await getDocs(query(collection(db, 'cms_mcqs'), where('normalizedQuestion', '==', normalizedQuestion)));
  const match = snap.docs.find(item => item.id !== excludeId);
  return match ? ({ id: match.id, ...match.data() } as CmsMcq) : null;
}

export async function saveCmsRecord(name: CmsCollection, record: Partial<CmsRecord>, uid: string) {
  const now = new Date().toISOString();
  const id = record.id || doc(collection(db, name)).id;
  if (name === 'cms_mcqs') {
    const question = String((record as Partial<CmsMcq>).question || '');
    const duplicate = await findDuplicateMcq(question, record.id);
    if (duplicate) throw new Error(`Duplicate question matches record ${duplicate.id}.`);
    (record as Partial<CmsMcq>).normalizedQuestion = normalizeQuestion(question);
  }
  const publishAtEpoch = record.publishAt ? new Date(record.publishAt).getTime() : 0;
  const payload = { ...record, publishAtEpoch, id, createdAt: record.createdAt || now, updatedAt: now, createdBy: record.createdBy || uid, updatedBy: uid };
  await setDoc(doc(db, name, id), payload, { merge: true });
  return id;
}

export async function deleteCmsRecord(name: CmsCollection, id: string) {
  await deleteDoc(doc(db, name, id));
}

export async function importMcqs(rows: Partial<CmsMcq>[], uid: string) {
  const existing = await getDocs(collection(db, 'cms_mcqs'));
  const known = new Set(existing.docs.map(item => item.data().normalizedQuestion));
  const accepted: Partial<CmsMcq>[] = [];
  let duplicates = 0;
  for (const row of rows) {
    const normalized = normalizeQuestion(String(row.question || ''));
    if (!normalized || known.has(normalized)) { duplicates++; continue; }
    known.add(normalized);
    accepted.push({ ...row, normalizedQuestion: normalized });
  }
  for (let start = 0; start < accepted.length; start += 450) {
    const batch = writeBatch(db);
    accepted.slice(start, start + 450).forEach(row => {
      const ref = doc(collection(db, 'cms_mcqs'));
      const now = new Date().toISOString();
      batch.set(ref, { ...row, publishAtEpoch: row.publishAt ? new Date(row.publishAt).getTime() : 0, id: ref.id, kind: 'mcq', status: row.status || 'Draft', sourceUrls: row.sourceUrls || [], syllabusReferences: row.syllabusReferences || [], examTags: row.examTags || [], createdAt: now, updatedAt: now, createdBy: uid, updatedBy: uid });
    });
    await batch.commit();
  }
  return { imported: accepted.length, duplicates };
}

export function subscribePublishedContent(onChange: (records: CmsRecord[]) => void): Unsubscribe {
  const byCollection = new Map<CmsCollection, CmsRecord[]>();
  const emit = () => onChange(COLLECTIONS.flatMap(name => byCollection.get(name) || []));
  const unsubscribers = COLLECTIONS.map(name => onSnapshot(query(collection(db, name), where('status', '==', 'Published'), where('publishAtEpoch', '<=', Date.now())), snap => {
    const now = Date.now();
    byCollection.set(name, snap.docs.map(item => ({ id: item.id, ...item.data() } as CmsRecord)).filter(item => !item.publishAt || new Date(item.publishAt).getTime() <= now));
    emit();
  }, error => console.warn(`CMS ${name} listener unavailable:`, error.message)));
  return () => unsubscribers.forEach(unsubscribe => unsubscribe());
}

export const statusOptions: ContentStatus[] = ['Draft', 'Reviewed', 'Published'];
