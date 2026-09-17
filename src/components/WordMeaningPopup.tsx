import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, LoaderCircle, Volume2, X } from 'lucide-react';

type Meaning = {
  word: string;
  partOfSpeech: string;
  simpleEnglish: string;
  urdu: string;
  sindhi: string;
  example?: string;
};

const FALLBACK: Record<string, Omit<Meaning, 'word'>> = {
  learn: { partOfSpeech: 'verb', simpleEnglish: 'To gain knowledge or a new skill.', urdu: 'سیکھنا', sindhi: 'سکڻ', example: 'We learn something new every day.' },
  knowledge: { partOfSpeech: 'noun', simpleEnglish: 'Information and understanding gained through learning.', urdu: 'علم، معلومات', sindhi: 'علم، ڄاڻ', example: 'Reading increases knowledge.' },
  important: { partOfSpeech: 'adjective', simpleEnglish: 'Having great value or meaning.', urdu: 'اہم', sindhi: 'اهم', example: 'Education is important for everyone.' },
  answer: { partOfSpeech: 'noun', simpleEnglish: 'A response to a question.', urdu: 'جواب', sindhi: 'جواب', example: 'Choose the correct answer.' },
  question: { partOfSpeech: 'noun', simpleEnglish: 'Something asked to get information.', urdu: 'سوال', sindhi: 'سوال', example: 'Read the question carefully.' },
  example: { partOfSpeech: 'noun', simpleEnglish: 'Something that helps explain an idea.', urdu: 'مثال', sindhi: 'مثال', example: 'The teacher gave an example.' },
  practice: { partOfSpeech: 'noun / verb', simpleEnglish: 'Repeated work that helps improve a skill.', urdu: 'مشق، عمل کرنا', sindhi: 'مشق، عمل ڪرڻ', example: 'Daily practice improves results.' },
  study: { partOfSpeech: 'verb', simpleEnglish: 'To spend time learning about a subject.', urdu: 'پڑھنا، مطالعہ کرنا', sindhi: 'پڙهڻ، مطالعو ڪرڻ', example: 'I study science every evening.' },
};

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

function speak(word: string) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(word));
}

export const WordMeaningPopup: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [meaning, setMeaning] = useState<Meaning | null>(null);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const requestId = useRef(0);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('main') || target.closest('button, a, input, textarea, select, summary, [role="button"], [data-disable-word-meaning]')) return;

      const word = wordAtPoint(event.clientX, event.clientY);
      if (!word || word.length < 2 || word.length > 45) return;

      setSelectedWord(word);
      setPosition({
        x: Math.min(event.clientX, window.innerWidth - 340),
        y: Math.min(event.clientY + 18, window.innerHeight - 390),
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!selectedWord) return;
    const currentRequest = ++requestId.current;
    const key = selectedWord.toLocaleLowerCase('en').replace(/[^\p{L}'’\-]/gu, '');
    const local = FALLBACK[key];
    if (local) {
      setMeaning({ word: selectedWord, ...local });
      setLoading(false);
      return;
    }

    const cached = sessionStorage.getItem(`meqsa-word-meaning:${key}`);
    if (cached) {
      try {
        setMeaning(JSON.parse(cached) as Meaning);
        setLoading(false);
        return;
      } catch {
        sessionStorage.removeItem(`meqsa-word-meaning:${key}`);
      }
    }

    setMeaning(null);
    setLoading(true);
    fetch('/api/word-meaning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: selectedWord }),
    })
      .then(async response => {
        if (!response.ok) throw new Error('Meaning service unavailable');
        return response.json() as Promise<Meaning>;
      })
      .then(data => {
        if (currentRequest !== requestId.current) return;
        setMeaning(data);
        sessionStorage.setItem(`meqsa-word-meaning:${key}`, JSON.stringify(data));
      })
      .catch(() => {
        if (currentRequest !== requestId.current) return;
        setMeaning({
          word: selectedWord,
          partOfSpeech: 'word',
          simpleEnglish: 'Meaning is temporarily unavailable. Please try again.',
          urdu: 'معنی عارضی طور پر دستیاب نہیں۔',
          sindhi: 'معنيٰ عارضي طور موجود ناهي۔',
        });
      })
      .finally(() => {
        if (currentRequest === requestId.current) setLoading(false);
      });
  }, [selectedWord]);

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
            <button onClick={() => speak(selectedWord)} className="rounded-full p-1.5 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-slate-800" aria-label={`Hear ${selectedWord}`}>
              <Volume2 size={18} />
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
