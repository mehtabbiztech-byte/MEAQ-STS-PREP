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
      const popupWidth = Math.min(420, window.innerWidth - 24);
      const popupMaxHeight = Math.min(600, window.innerHeight - 24);
      setSelectedWord(word);
      setPosition({
        x: Math.max(12, Math.min(x + 8, window.innerWidth - popupWidth - 12)),
        y: Math.max(12, Math.min(y + 16, window.innerHeight - popupMaxHeight - 12)),
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
      className="fixed z-[100] flex w-[min(420px,calc(100vw-24px))] max-h-[min(600px,calc(100vh-24px))] flex-col overflow-hidden rounded-[28px] border border-emerald-300/80 bg-white/95 text-slate-900 shadow-[0_24px_70px_-20px_rgba(6,78,59,0.45)] ring-1 ring-white/80 backdrop-blur-xl dark:border-emerald-700/80 dark:bg-slate-950/95 dark:text-slate-100 dark:ring-slate-700/60"
      style={{ left: Math.max(12, position.x), top: Math.max(12, position.y) }}
      data-disable-word-meaning
    >
      <div className="h-1.5 shrink-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200/80 px-5 pb-4 pt-4 dark:border-slate-800">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">Word meaning</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="font-display break-words text-[clamp(1.75rem,7vw,2.25rem)] font-extrabold leading-none tracking-tight text-slate-950 dark:text-white">{selectedWord}</h2>
            <button
              onClick={() => {
                setSpeaking(true);
                speakSlowly(selectedWord, () => setSpeaking(false));
              }}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
              aria-label={`Hear ${selectedWord} pronounced slowly`}
            >
              <Volume2 size={18} className={speaking ? 'animate-pulse' : ''} />
              {speaking ? 'Speaking…' : 'Slow pronunciation'}
            </button>
          </div>
        </div>
        <button onClick={() => setSelectedWord('')} className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:rotate-90 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Close word meaning">
          <X size={21} strokeWidth={2.5} />
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-3 px-5 py-14 text-sm font-semibold text-slate-500"><LoaderCircle className="animate-spin text-emerald-600" size={21} /> Finding meanings…</div>
      ) : meaning && (
        <div className="space-y-4 overflow-y-auto overscroll-contain px-5 py-5 text-[15px] leading-7 [scrollbar-color:rgb(16_185_129)_transparent] [scrollbar-width:thin]">
          <p className="inline-flex max-w-full rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-sm font-bold leading-5 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">{meaning.partOfSpeech}</p>
          <p className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold leading-5 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            {source === 'online' ? <Wifi size={13} /> : <Database size={13} />}
            {source === 'online' && 'Online meaning — saved for offline use'}
            {source === 'saved' && 'Saved offline meaning'}
            {source === 'built-in' && 'Built-in offline dictionary'}
            {source === 'fallback' && 'Offline guidance'}
          </p>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="mb-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">Simple English</p>
            <p className="text-[16px] font-medium leading-7 text-slate-800 dark:text-slate-100">{meaning.simpleEnglish}</p>
          </section>
          <section dir="rtl" lang="ur" className="font-urdu rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-right shadow-sm dark:border-blue-900/60 dark:bg-blue-950/30">
            <p className="mb-2 text-base font-bold text-blue-800 dark:text-blue-300">اردو معنی</p>
            <p className="text-lg leading-[2.15] text-slate-800 dark:text-slate-100">{meaning.urdu}</p>
          </section>
          <section dir="rtl" lang="sd" className="font-urdu rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-right shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <p className="mb-2 text-base font-bold text-emerald-800 dark:text-emerald-300">سنڌي معنيٰ</p>
            <p className="text-lg leading-[2.15] text-slate-800 dark:text-slate-100">{meaning.sindhi}</p>
          </section>
          {meaning.example && <section className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4 dark:border-amber-900/50 dark:bg-amber-950/30"><p className="mb-1 text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">Example</p><p className="font-medium text-slate-800 dark:text-slate-100">{meaning.example}</p></section>}
          <p className="flex items-center gap-2 border-t border-slate-200 pt-3 text-xs font-semibold text-slate-500 dark:border-slate-800"><BookOpen size={14} className="text-emerald-600" /> Click another word to continue.</p>
        </div>
      )}
    </aside>
  );
};
