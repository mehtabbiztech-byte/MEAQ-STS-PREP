import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Database, LoaderCircle, Volume2, Wifi, X } from 'lucide-react';
import { getBuiltInMeaning, normalizeDictionaryWord, type DictionaryMeaning } from '../data/builtInDictionary';
import { readSavedMeaning, saveMeaning } from '../lib/wordMeaningStore';

type MeaningSource = 'built-in' | 'saved' | 'online' | 'fallback';
type MeaningRequest = { word: string; x: number; y: number };

function wordAtPoint(x: number, y: number): string | null {
  let node: Node | null = null;
  let offset = 0;
  const doc = document as Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
  };

  const position = doc.caretPositionFromPoint?.(x, y);
  if (position) {
    node = position.offsetNode;
    offset = position.offset;
  } else {
    const range = doc.caretRangeFromPoint?.(x, y);
    if (range) {
      node = range.startContainer;
      offset = range.startOffset;
    }
  }

  if (!node || node.nodeType !== Node.TEXT_NODE) return null;
  const text = node.textContent ?? '';
  const matches = [...text.matchAll(/[\p{L}][\p{L}'’\-]*/gu)];
  const match = matches.find(item => {
    const start = item.index ?? 0;
    return offset >= start && offset <= start + item[0].length;
  });
  return match?.[0].replace(/^['’\-]+|['’\-]+$/g, '') || null;
}

function preferredEnglishVoice(voices: SpeechSynthesisVoice[]) {
  const englishVoices = voices.filter(voice => voice.lang.toLowerCase().startsWith('en'));
  const preferredNames = ['natural', 'neural', 'google', 'samantha', 'aria', 'jenny', 'guy', 'serena', 'daniel'];
  return englishVoices
    .map(voice => ({
      voice,
      score: preferredNames.reduce(
        (total, name, index) => total + (voice.name.toLowerCase().includes(name) ? preferredNames.length - index : 0),
        voice.localService ? 1 : 0,
      ),
    }))
    .sort((a, b) => b.score - a.score)[0]?.voice;
}

function speakSlowly(word: string, onEnd: () => void) {
  if (!('speechSynthesis' in window)) {
    onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-GB';
  utterance.rate = 0.68;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.voice = preferredEnglishVoice(window.speechSynthesis.getVoices()) ?? null;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
}

export const WordMeaningPopup: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [meaning, setMeaning] = useState<DictionaryMeaning | null>(null);
  const [source, setSource] = useState<MeaningSource>('built-in');
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const requestId = useRef(0);

  useEffect(() => {
    const openMeaning = ({ word, x, y }: MeaningRequest) => {
      if (!word || word.length < 2 || word.length > 45) return;
      setSelectedWord(word);
      setPosition({
        x: Math.min(x, window.innerWidth - 340),
        y: Math.min(y + 18, window.innerHeight - 390),
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('main') || target.closest('button, a, input, textarea, select, summary, [role="button"], [data-disable-word-meaning]')) return;

      const word = wordAtPoint(event.clientX, event.clientY);
      if (!word || word.length < 2 || word.length > 45) return;

      openMeaning({ word, x: event.clientX, y: event.clientY });
    };

    const onMeaningRequest = (event: Event) => {
      openMeaning((event as CustomEvent<MeaningRequest>).detail);
    };

    document.addEventListener('click', onClick);
    window.addEventListener('meqsa:word-meaning', onMeaningRequest);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('meqsa:word-meaning', onMeaningRequest);
    };
  }, []);

  useEffect(() => {
    if (!selectedWord) return;
    const currentRequest = ++requestId.current;
    const key = normalizeDictionaryWord(selectedWord);
    const local = getBuiltInMeaning(selectedWord);
    if (local) {
      setMeaning(local);
      setSource('built-in');
      setLoading(false);
      return;
    }

    const cached = sessionStorage.getItem(`meqsa-word-meaning:${key}`);
    if (cached) {
      try {
        setMeaning(JSON.parse(cached) as DictionaryMeaning);
        setSource('saved');
        setLoading(false);
        return;
      } catch {
        sessionStorage.removeItem(`meqsa-word-meaning:${key}`);
      }
    }

    const findMeaning = async () => {
      setMeaning(null);
      setLoading(true);

      const saved = await readSavedMeaning(key);
      if (currentRequest !== requestId.current) return;
      if (saved) {
        setMeaning({ ...saved, word: selectedWord });
        setSource('saved');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/word-meaning', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ word: selectedWord }),
        });
        if (!response.ok) throw new Error('Meaning service unavailable');
        const data = await response.json() as DictionaryMeaning;
        if (currentRequest !== requestId.current) return;
        setMeaning(data);
        setSource('online');
        sessionStorage.setItem(`meqsa-word-meaning:${key}`, JSON.stringify(data));
        await saveMeaning(key, data);
      } catch {
        if (currentRequest !== requestId.current) return;
        setMeaning({
          word: selectedWord,
          partOfSpeech: 'word',
          simpleEnglish: `“${selectedWord}” is not in the offline dictionary yet. Connect once to download and permanently save its full meaning.`,
          urdu: `“${selectedWord}” ابھی آف لائن لغت میں موجود نہیں۔ ایک بار انٹرنیٹ سے معنی حاصل ہونے پر یہ مستقل محفوظ ہو جائے گا۔`,
          sindhi: `“${selectedWord}” اڃا آف لائن لغت ۾ موجود ناهي۔ هڪ ڀيرو انٽرنيٽ سان معنيٰ ملڻ بعد اها مستقل محفوظ ٿي ويندي۔`,
        });
        setSource('fallback');
      } finally {
        if (currentRequest === requestId.current) setLoading(false);
      }
    };

    void findMeaning();
  }, [selectedWord]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  if (!selectedWord) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-label={`Meaning of ${selectedWord}`}
      className="fixed z-[100] w-[min(320px,calc(100vw-24px))] max-h-[min(370px,calc(100vh-24px))] overflow-y-auto rounded-2xl border border-emerald-200 bg-white/98 p-4 text-slate-900 shadow-2xl backdrop-blur dark:border-emerald-800 dark:bg-slate-900/98 dark:text-slate-100"
      style={{ left: Math.max(12, position.x), top: Math.max(12, position.y) }}
      data-disable-word-meaning
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Word meaning</p>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="text-2xl font-bold">{selectedWord}</h2>
            <button
              onClick={() => {
                setSpeaking(true);
                speakSlowly(selectedWord, () => setSpeaking(false));
              }}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-slate-800"
              aria-label={`Hear ${selectedWord} pronounced slowly`}
            >
              <Volume2 size={18} className={speaking ? 'animate-pulse' : ''} />
              {speaking ? 'Speaking…' : 'Slow pronunciation'}
            </button>
          </div>
        </div>
        <button onClick={() => setSelectedWord('')} className="rounded-full p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close word meaning">
          <X size={20} />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 py-8 text-sm text-slate-500"><LoaderCircle className="animate-spin" size={18} /> Finding meanings…</div>
      ) : meaning && (
        <div className="mt-4 space-y-3 text-sm leading-6">
          <p className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">{meaning.partOfSpeech}</p>
          <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            {source === 'online' ? <Wifi size={13} /> : <Database size={13} />}
            {source === 'online' && 'Online meaning — saved for offline use'}
            {source === 'saved' && 'Saved offline meaning'}
            {source === 'built-in' && 'Built-in offline dictionary'}
            {source === 'fallback' && 'Offline guidance'}
          </p>
          <div><p className="font-bold">Simple English</p><p>{meaning.simpleEnglish}</p></div>
          <div dir="rtl" className="rounded-xl bg-slate-50 p-3 text-right dark:bg-slate-800"><p className="font-bold">اردو</p><p>{meaning.urdu}</p></div>
          <div dir="rtl" className="rounded-xl bg-emerald-50 p-3 text-right dark:bg-emerald-950"><p className="font-bold">سنڌي</p><p>{meaning.sindhi}</p></div>
          {meaning.example && <div className="border-t border-slate-200 pt-3 dark:border-slate-700"><p className="font-bold">Example</p><p>{meaning.example}</p></div>}
          <p className="flex items-center gap-1.5 text-xs text-slate-500"><BookOpen size={13} /> Click another word to continue.</p>
        </div>
      )}
    </aside>
  );
};
