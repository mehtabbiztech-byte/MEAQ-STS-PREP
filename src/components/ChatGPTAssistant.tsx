import React, { useEffect, useRef, useState } from 'react';
import { Bot, ChevronDown, Loader2, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { NavigationTab } from '../types';

type Message = { role: 'user' | 'assistant'; content: string };

export const ChatGPTAssistant: React.FC<{ page: NavigationTab }> = ({ page }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, loading]);

  const send = async (prompt?: string) => {
    const message = (prompt || input).trim();
    if (!message || loading) return;
    setMessages(current => [...current, { role: 'user', content: message }]);
    setInput(''); setError(''); setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: messages, page }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || 'Unable to get an answer.');
      setMessages(current => [...current, { role: 'assistant', content: data.reply }]);
    } catch (err: any) { setError(err.message || 'ChatGPT is temporarily unavailable.'); }
    finally { setLoading(false); }
  };

  const suggestions = ['Make a 7-day study plan', 'Quiz me with 5 MCQs', 'Explain this topic simply'];
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {open && (
        <section className="mb-3 w-[calc(100vw-2rem)] sm:w-[390px] h-[min(620px,72vh)] flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 shadow-2xl shadow-slate-900/20 backdrop-blur-xl" aria-label="ChatGPT study assistant">
          <header className="flex items-center justify-between px-4 py-3.5 text-white bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25"><Sparkles className="h-5 w-5" /></span>
              <div><h2 className="font-bold leading-tight">MATB Study AI</h2><p className="text-[11px] text-emerald-100">Powered by ChatGPT</p></div>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-xl p-2 hover:bg-white/15" aria-label="Close assistant"><ChevronDown className="h-5 w-5" /></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50/80 dark:bg-slate-950/50 p-4" aria-live="polite">
            {messages.length === 0 && (
              <div className="pt-3 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Bot className="h-7 w-7" /></span>
                <h3 className="mt-3 font-bold text-slate-900 dark:text-white">How can I help you study?</h3>
                <p className="mx-auto mt-1 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">Ask for explanations, practice questions, revision notes, or a personalized plan.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {suggestions.map(item => <button key={item} onClick={() => send(item)} className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300">{item}</button>)}
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${message.role === 'user' ? 'rounded-br-md bg-emerald-600 text-white' : 'rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>{message.content}</div>
              </div>
            ))}
            {loading && <div className="flex items-center gap-2 text-xs text-slate-500"><Loader2 className="h-4 w-4 animate-spin text-emerald-600" /> ChatGPT is thinking…</div>}
            {error && <div className="flex items-start justify-between gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/30 dark:text-red-300"><span>{error}</span><button onClick={() => setError('')}><X className="h-4 w-4" /></button></div>}
            <div ref={endRef} />
          </div>
          <form onSubmit={event => { event.preventDefault(); send(); }} className="border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/15 dark:border-slate-700 dark:bg-slate-800">
              <textarea value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); send(); } }} rows={1} maxLength={2000} placeholder="Ask anything about your studies…" className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-slate-400" />
              <button type="submit" disabled={!input.trim() || loading} className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send message"><Send className="h-4 w-4" /></button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-slate-400">AI can make mistakes. Verify important exam facts.</p>
          </form>
        </section>
      )}
      <button onClick={() => setOpen(value => !value)} className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-3.5 text-white shadow-xl shadow-emerald-900/25 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400/30" aria-expanded={open} aria-label="Open ChatGPT study assistant">
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}<span className="hidden pr-1 text-sm font-bold sm:inline">Ask ChatGPT</span>
      </button>
    </div>
  );
};
