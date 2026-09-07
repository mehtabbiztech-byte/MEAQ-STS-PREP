import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  Loader2, 
  AlertCircle, 
  Copy, 
  Check, 
  RefreshCw, 
  ChevronUp, 
  ChevronDown, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle2, 
  KeyRound,
  User,
  Zap,
  Cpu
} from 'lucide-react';
import { MCQ } from '../types';
import { requestAiExplanation, askAiDoubt, ChatMessage, AiProvider } from '../services/aiTutorService';

interface AiTutorSectionProps {
  mcq: MCQ;
  examContext?: string;
  defaultOpen?: boolean;
}

export const AiTutorSection: React.FC<AiTutorSectionProps> = ({ 
  mcq, 
  examContext,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  // AI Provider selection
  const [provider, setProvider] = useState<AiProvider>('auto');
  const [activeProvider, setActiveProvider] = useState<'gemini' | 'chatgpt' | null>(null);
  const [activeModel, setActiveModel] = useState<string>('gemini-2.5-flash');
  const [keyUsed, setKeyUsed] = useState<number | undefined>(undefined);

  // Explanation state
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const [explainError, setExplainError] = useState<string | null>(null);
  const [isKeyConfigured, setIsKeyConfigured] = useState<boolean>(true);

  // Doubt state
  const [doubtInput, setDoubtInput] = useState('');
  const [loadingDoubt, setLoadingDoubt] = useState(false);
  const [doubtError, setDoubtError] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Array<ChatMessage & { provider?: 'gemini' | 'chatgpt'; model?: string }>>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Toggle open and auto-fetch if first time
  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState && !explanation && !loadingExplanation) {
      handleFetchExplanation(provider);
    }
  };

  // Fetch AI Explanation
  const handleFetchExplanation = async (targetProvider: AiProvider = provider) => {
    setLoadingExplanation(true);
    setExplainError(null);

    const res = await requestAiExplanation(mcq, examContext, targetProvider);
    setLoadingExplanation(false);

    if (res.success && res.explanation) {
      setExplanation(res.explanation);
      setIsKeyConfigured(true);
      if (res.provider) setActiveProvider(res.provider);
      if (res.model) setActiveModel(res.model);
      if (res.keyUsed) setKeyUsed(res.keyUsed);
    } else {
      setExplainError(res.error || 'Failed to generate AI explanation.');
      if (res.isConfigured === false) {
        setIsKeyConfigured(false);
      }
    }
  };

  const handleProviderChange = (newProvider: AiProvider) => {
    setProvider(newProvider);
    handleFetchExplanation(newProvider);
  };

  // Ask Follow-Up Doubt
  const handleSendDoubt = async (e?: React.FormEvent, customQuestion?: string) => {
    if (e) e.preventDefault();
    const query = (customQuestion || doubtInput).trim();
    if (!query || loadingDoubt) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: Date.now(),
    };

    const updatedHistory = [...chatHistory, userMsg];
    setChatHistory(updatedHistory);
    setDoubtInput('');
    setLoadingDoubt(true);
    setDoubtError(null);

    const res = await askAiDoubt(mcq, query, updatedHistory, examContext, provider);
    setLoadingDoubt(false);

    if (res.success && res.reply) {
      const assistantMsg = {
        id: `a-${Date.now()}`,
        role: 'assistant' as const,
        content: res.reply,
        timestamp: Date.now(),
        provider: res.provider,
        model: res.model,
      };
      setChatHistory(prev => [...prev, assistantMsg]);
      if (res.provider) setActiveProvider(res.provider);
      if (res.model) setActiveModel(res.model);
      if (res.keyUsed) setKeyUsed(res.keyUsed);
    } else {
      setDoubtError(res.error || 'Could not resolve doubt at this moment.');
      if (res.isConfigured === false) {
        setIsKeyConfigured(false);
      }
    }
  };

  const handleCopyText = (text: string, index: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  // Quick doubt suggestion prompts
  const quickSuggestions = [
    `Why is Option ${String.fromCharCode(65 + (mcq.correctIndex === 0 ? 1 : 0))} incorrect?`,
    'Explain in simpler everyday terms',
    'Give a mnemonic or trick to remember this',
    'How does STS/FPSC frame questions on this topic?'
  ];

  // Lightweight markdown formatter for AI responses
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-1" />;

          // Heading ### or ##
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={idx} className="font-bold text-emerald-800 dark:text-emerald-300 text-sm mt-3 mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{trimmed.replace(/^###\s+/, '')}</span>
              </h4>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={idx} className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mt-3 mb-1">
                {trimmed.replace(/^##\s+/, '')}
              </h3>
            );
          }

          // Bullet point
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            const content = trimmed.replace(/^[\*\-]\s+/, '');
            return (
              <div key={idx} className="flex items-start gap-2 pl-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-1 text-xs">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
              </div>
            );
          }

          // Numbered point
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-2 mt-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                  {numMatch[1]}.
                </span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(numMatch[2]) }} />
              </div>
            );
          }

          // Regular paragraph
          return (
            <p key={idx} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
          );
        })}
      </div>
    );
  };

  // Helper to safely format **bold** and *italic*
  const formatInline = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800 dark:text-slate-200">$1</em>');
  };

  return (
    <div className="mt-3">
      {/* Toggle Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        id={`ai-tutor-toggle-${mcq.id}`}
        className={`w-full py-2 px-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition cursor-pointer ${
          isOpen
            ? 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-700/80 text-emerald-800 dark:text-emerald-300 shadow-2xs'
            : 'bg-slate-50/80 dark:bg-slate-800/50 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-lg bg-emerald-600 text-white shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="font-bold">AI Tutor & Doubt Solver</span>
          <div className="hidden sm:flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
              Gemini
            </span>
            <span className="px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 text-[10px] font-bold">
              ChatGPT
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>{isOpen ? 'Close Tutor' : 'Ask AI'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expandable Tutor Drawer */}
      {isOpen && (
        <div className="mt-2.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 dark:from-slate-800/80 dark:via-slate-850 dark:to-slate-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm animate-in fade-in duration-150">
          
          {/* Header Bar with Provider Selection */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-display">
                Multi-Engine AI Tutor
              </h4>
            </div>
            
            {/* Engine Selector Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/90 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-[11px]">
              <button
                type="button"
                onClick={() => handleProviderChange('auto')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition cursor-pointer whitespace-nowrap ${
                  provider === 'auto'
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Auto-selects best available model with failover"
              >
                🔄 Auto
              </button>

              <button
                type="button"
                onClick={() => handleProviderChange('gemini')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition cursor-pointer whitespace-nowrap ${
                  provider === 'gemini'
                    ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Google Gemini API (Key 1 & Key 2 Redundancy)"
              >
                ✨ Gemini
              </button>

              <button
                type="button"
                onClick={() => handleProviderChange('chatgpt')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition cursor-pointer whitespace-nowrap ${
                  provider === 'chatgpt'
                    ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="OpenAI ChatGPT API (gpt-4o-mini)"
              >
                ⚡ ChatGPT
              </button>
            </div>
          </div>

          {/* Active Model & Engine Status Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-[11px] text-slate-500 dark:text-slate-400 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Active Engine: <strong className="text-slate-800 dark:text-slate-200 font-semibold">{activeModel || 'Gemini 2.5 Flash'}</strong></span>
              {keyUsed && (
                <span className="px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                  Key {keyUsed}
                </span>
              )}
            </div>

            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              STS IBA • FPSC • SPSC Verified
            </span>
          </div>

          {/* 1. KEY NOT CONFIGURED BANNER */}
          {!isKeyConfigured && (
            <div className="mb-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-xs">
              <div className="flex items-start gap-2.5">
                <KeyRound className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5 flex-1">
                  <strong className="font-bold block">API Key Configuration Notice</strong>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {explainError || 'Please configure your API keys in the server environment.'}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Keys supported in <code className="bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded font-mono text-[10px]">.env</code>: <span className="font-mono text-emerald-700 dark:text-emerald-400">GEMINI_API_KEY</span>, <span className="font-mono text-emerald-700 dark:text-emerald-400">GEMINI_API_KEY_2</span>, <span className="font-mono text-teal-700 dark:text-teal-400">OPENAI_API_KEY</span>
                    </span>
                    {provider !== 'gemini' && (
                      <button
                        type="button"
                        onClick={() => handleProviderChange('gemini')}
                        className="px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer"
                      >
                        Switch to Gemini
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. LOADING STATE */}
          {loadingExplanation && (
            <div className="py-6 px-4 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {provider === 'chatgpt' ? 'ChatGPT' : 'Gemini'} is analyzing question #{mcq.id}...
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Verifying core syllabus concepts, eliminating distractor traps, and generating exam tips.
                </p>
              </div>
            </div>
          )}

          {/* 3. ERROR STATE (when key configured but request failed) */}
          {explainError && isKeyConfigured && !loadingExplanation && (
            <div className="mb-4 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-800 dark:text-rose-300 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">Could not load AI explanation</strong>
                  <p className="text-[11px] mt-0.5 text-slate-600 dark:text-slate-400">{explainError}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleFetchExplanation(provider)}
                className="px-2.5 py-1 rounded-lg bg-rose-600 text-white font-bold text-[11px] hover:bg-rose-700 transition flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retry</span>
              </button>
            </div>
          )}

          {/* 4. AI EXPLANATION CONTENT */}
          {explanation && !loadingExplanation && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Answer: Option {String.fromCharCode(65 + mcq.correctIndex)} — {mcq.options[mcq.correctIndex]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleFetchExplanation(provider)}
                      className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer p-1 rounded transition"
                      title="Regenerate explanation"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyText(explanation, -1)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-1 rounded transition"
                      title="Copy AI Explanation"
                    >
                      {copiedIndex === -1 ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {renderFormattedText(explanation)}
              </div>

              {/* 5. FOLLOW-UP DOUBT RESOLUTION SECTION */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-2.5">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Still have a doubt? Ask your {provider === 'chatgpt' ? 'ChatGPT' : 'Gemini'} Tutor
                  </h5>
                </div>

                {/* Quick suggestion prompt chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {quickSuggestions.map((promptText, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      disabled={loadingDoubt || !isKeyConfigured}
                      onClick={() => handleSendDoubt(undefined, promptText)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 transition cursor-pointer disabled:opacity-50 text-left"
                    >
                      💬 {promptText}
                    </button>
                  ))}
                </div>

                {/* Chat History Bubbles */}
                {chatHistory.length > 0 && (
                  <div className="space-y-3 mb-3.5 max-h-80 overflow-y-auto pr-1">
                    {chatHistory.map((msg, mIdx) => (
                      <div
                        key={msg.id}
                        className={`p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-emerald-600 text-white ml-6 rounded-tr-xs shadow-2xs'
                            : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 mr-6 rounded-tl-xs border border-slate-200 dark:border-slate-800 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1 opacity-80 text-[10px] uppercase font-bold tracking-wider">
                          <span className="flex items-center gap-1">
                            {msg.role === 'user' ? (
                              <>
                                <User className="w-3 h-3" />
                                <span>You (Candidate)</span>
                              </>
                            ) : (
                              <>
                                <Bot className="w-3 h-3 text-emerald-500" />
                                <span>{msg.provider === 'chatgpt' ? 'ChatGPT Tutor' : 'Gemini Tutor'}</span>
                              </>
                            )}
                          </span>
                          {msg.role === 'assistant' && (
                            <button
                              type="button"
                              onClick={() => handleCopyText(msg.content, mIdx)}
                              className="hover:opacity-100 cursor-pointer"
                              title="Copy Answer"
                            >
                              {copiedIndex === mIdx ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            </button>
                          )}
                        </div>

                        {msg.role === 'assistant' ? (
                          renderFormattedText(msg.content)
                        ) : (
                          <p>{msg.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Doubt Error Box */}
                {doubtError && (
                  <div className="mb-3 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{doubtError}</span>
                  </div>
                )}

                {/* Doubt Input Form */}
                <form onSubmit={(e) => handleSendDoubt(e)} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={doubtInput}
                    onChange={(e) => setDoubtInput(e.target.value)}
                    disabled={loadingDoubt || !isKeyConfigured}
                    placeholder={
                      isKeyConfigured 
                        ? `Ask anything about this question to ${provider === 'chatgpt' ? 'ChatGPT' : 'Gemini'}...`
                        : "Configure API key to ask doubt questions"
                    }
                    className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={!doubtInput.trim() || loadingDoubt || !isKeyConfigured}
                    className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer disabled:cursor-not-allowed shadow-2xs shrink-0"
                  >
                    {loadingDoubt ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Ask</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
