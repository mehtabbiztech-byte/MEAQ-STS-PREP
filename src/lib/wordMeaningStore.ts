import type { DictionaryMeaning } from '../data/builtInDictionary';

export type SavedMeaning = DictionaryMeaning & {
  normalizedWord: string;
  savedAt: string;
};

const DB_NAME = 'meqsa-dictionary';
const STORE_NAME = 'meanings';
const DB_VERSION = 1;
const LOCAL_PREFIX = 'meqsa-saved-meaning:';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('IndexedDB unavailable'));
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'normalizedWord' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Could not open dictionary database'));
  });
}

function localRead(normalizedWord: string): SavedMeaning | null {
  try {
    const value = localStorage.getItem(`${LOCAL_PREFIX}${normalizedWord}`);
    return value ? JSON.parse(value) as SavedMeaning : null;
  } catch {
    return null;
  }
}

export async function readSavedMeaning(normalizedWord: string): Promise<SavedMeaning | null> {
  try {
    const database = await openDatabase();
    return await new Promise((resolve, reject) => {
      const request = database.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(normalizedWord);
      request.onsuccess = () => resolve((request.result as SavedMeaning | undefined) ?? null);
      request.onerror = () => reject(request.error);
      request.transaction.oncomplete = () => database.close();
    });
  } catch {
    return localRead(normalizedWord);
  }
}

export async function saveMeaning(normalizedWord: string, meaning: DictionaryMeaning): Promise<void> {
  const saved: SavedMeaning = { ...meaning, normalizedWord, savedAt: new Date().toISOString() };
  try {
    const database = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).put(saved);
      transaction.oncomplete = () => { database.close(); resolve(); };
      transaction.onerror = () => reject(transaction.error);
    });
  } catch {
    try {
      localStorage.setItem(`${LOCAL_PREFIX}${normalizedWord}`, JSON.stringify(saved));
    } catch {
      // Storage may be disabled or full; the current meaning still remains visible.
    }
  }
}
