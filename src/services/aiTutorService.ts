import { MCQ } from '../types';

export interface AiExplainResponse {
  success: boolean;
  explanation?: string;
  reply?: string;
  error?: string;
  isConfigured?: boolean;
  action?: 'explain' | 'doubt';
  model?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

/**
 * Request an on-demand, deep conceptual explanation for a specific MCQ
 * from the server-side ChatGPT endpoint (/api/explain).
 * Never exposes the OPENAI_API_KEY to the client.
 */
export async function requestAiExplanation(
  mcq: MCQ,
  examContext?: string
): Promise<AiExplainResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const res = await fetch('/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'explain',
        mcq: {
          id: mcq.id,
          question: mcq.question,
          options: mcq.options,
          correctIndex: mcq.correctIndex,
          category: mcq.category,
          subtopic: mcq.subtopic,
          difficulty: mcq.difficulty,
          explanation: mcq.explanation,
          examTags: mcq.examTags,
        },
        examContext: examContext || 'STS (Sukkur IBA) & Pakistani Competitive Exams',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || `Server responded with status ${res.status}`,
        isConfigured: errorData.isConfigured !== false,
      };
    }

    const data: AiExplainResponse = await res.json();
    return data;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'The AI explanation request timed out. Please check your connection and try again.',
        isConfigured: true,
      };
    }
    return {
      success: false,
      error: err.message || 'Unable to connect to the AI tutor service.',
      isConfigured: true,
    };
  }
}

/**
 * Ask a follow-up doubt or question regarding a specific MCQ
 * from the server-side ChatGPT endpoint (/api/explain).
 */
export async function askAiDoubt(
  mcq: MCQ,
  doubt: string,
  chatHistory: ChatMessage[] = [],
  examContext?: string
): Promise<AiExplainResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const historyPayload = chatHistory.slice(-4).map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    const res = await fetch('/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'doubt',
        mcq: {
          id: mcq.id,
          question: mcq.question,
          options: mcq.options,
          correctIndex: mcq.correctIndex,
          category: mcq.category,
          subtopic: mcq.subtopic,
          difficulty: mcq.difficulty,
          explanation: mcq.explanation,
          examTags: mcq.examTags,
        },
        doubt,
        chatHistory: historyPayload,
        examContext: examContext || 'STS (Sukkur IBA) & Pakistani Competitive Exams',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || `Server returned error status ${res.status}`,
        isConfigured: errorData.isConfigured !== false,
      };
    }

    const data: AiExplainResponse = await res.json();
    return data;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'The doubt resolution request timed out. Please try again.',
        isConfigured: true,
      };
    }
    return {
      success: false,
      error: err.message || 'Unable to reach the AI tutor service.',
      isConfigured: true,
    };
  }
}
