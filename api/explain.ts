import { GoogleGenAI } from '@google/genai';

interface McqPayload {
  id?: string;
  question: string;
  options: string[];
  correctIndex: number;
  category?: string;
  subtopic?: string;
  difficulty?: string;
  explanation?: string;
  examTags?: string[];
}

interface RequestBody {
  action?: 'explain' | 'doubt';
  mcq: McqPayload;
  doubt?: string;
  chatHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
  examContext?: string;
}

export default async function handler(req: any, res: any) {
  // CORS Headers for API calls
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health / info check
  if (req.method === 'GET') {
    const isKeyConfigured = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
    return res.status(200).json({
      status: 'ok',
      endpoint: '/api/explain',
      service: 'MATB STS Prep Gemini AI Tutor',
      model: 'gemini-3.8-flash',
      configured: isKeyConfigured,
      capabilities: ['on_demand_explanation', 'doubt_resolution']
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.'
    });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Graceful handling when key is not configured on the server
    if (!apiKey || apiKey.trim() === '') {
      return res.status(200).json({
        success: false,
        isConfigured: false,
        error: 'GEMINI_API_KEY is not configured in the server environment. Please configure your GEMINI_API_KEY in Settings > Secrets or your deployment environment variables.',
      });
    }

    const body: RequestBody = req.body || {};
    const { action = 'explain', mcq, doubt, chatHistory, examContext } = body;

    if (!mcq || !mcq.question || !Array.isArray(mcq.options)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request payload: Valid MCQ object with question and options is required.'
      });
    }

    // Lazy initialization of GoogleGenAI SDK with user agent
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Helper for resilient model execution across available high-performance aliases
    const executeWithFallback = async (prompt: string): Promise<{ text: string; modelUsed: string }> => {
      const candidateModels = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
      let lastError: any = null;

      for (const model of candidateModels) {
        try {
          const res = await ai.models.generateContent({
            model,
            contents: prompt,
          });
          if (res.text) {
            return { text: res.text, modelUsed: model };
          }
        } catch (err: any) {
          lastError = err;
          // If error is unauthorized or invalid key, break early
          const msg = (err?.message || '').toLowerCase();
          if (msg.includes('api_key') || msg.includes('unauthorized') || msg.includes('forbidden')) {
            throw err;
          }
          // Continue to next model on temporary 503 or overload
          console.warn(`Model ${model} returned error, trying fallback...`, err?.message);
        }
      }
      throw lastError || new Error('All model candidates failed to respond.');
    };

    const correctOptionLetter = String.fromCharCode(65 + (mcq.correctIndex ?? 0));
    const correctOptionText = mcq.options[mcq.correctIndex] || 'Option ' + correctOptionLetter;
    const formattedOptions = mcq.options
      .map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`)
      .join('\n');

    // (b) Answer student's follow-up "doubt" question about this specific MCQ
    if (action === 'doubt') {
      if (!doubt || typeof doubt !== 'string' || !doubt.trim()) {
        return res.status(400).json({
          success: false,
          error: 'Doubt question query is required.'
        });
      }

      const conversationHistoryText = (chatHistory && chatHistory.length > 0)
        ? `\nPRIOR CONVERSATION CONTEXT:\n` + chatHistory.slice(-4).map(m => `${m.role === 'user' ? 'Candidate' : 'Tutor'}: ${m.content}`).join('\n')
        : '';

      const doubtPrompt = `You are a distinguished mentor and academic coach for Pakistani competitive and recruitment exams, specifically STS (Sukkur IBA BPS 5-15), FPSC, SPSC, PPSC, and CSS.

A candidate preparing for ${examContext || 'competitive exams'} has a doubt regarding the following question:

QUESTION:
${mcq.question}

OPTIONS:
${formattedOptions}

VERIFIED CORRECT ANSWER:
Option ${correctOptionLetter}: ${correctOptionText}

${mcq.explanation ? `REFERENCE NOTE: ${mcq.explanation}\n` : ''}${conversationHistoryText}

CANDIDATE'S DOUBT / QUESTION:
"${doubt.trim()}"

YOUR TASK AS THE TUTOR:
1. Address the student's doubt directly, empathetically, and clearly.
2. Explain precisely why the verified answer (Option ${correctOptionLetter}) holds true based on authoritative Pakistani academic standards, historical facts, or scientific principles.
3. If the student asked why another option is wrong, explain the flaw, nuance, or common candidate confusion with that option.
4. Keep the explanation concise, encouraging, and structured (2 to 3 focused paragraphs or bullet points).
5. Use clean markdown formatting (bold key terms).`;

      const { text: replyText, modelUsed } = await executeWithFallback(doubtPrompt);

      return res.status(200).json({
        success: true,
        isConfigured: true,
        action: 'doubt',
        reply: replyText,
        model: modelUsed
      });
    }

    // (a) Generate an on-demand comprehensive explanation for the MCQ
    const explainPrompt = `You are an elite academic instructor and exam preparation coach for Pakistani competitive examinations, specifically STS (Sukkur IBA BPS 5-15), FPSC, SPSC CCE, PPSC, and NTS.

Generate an on-demand, high-yield conceptual explanation for the following multiple choice question:

SUBJECT: ${mcq.category || 'General Knowledge'}
${mcq.subtopic ? `SUBTOPIC: ${mcq.subtopic}` : ''}
EXAM FOCUS: ${examContext || (mcq.examTags?.join(', ') || 'STS Sukkur IBA / General Recruitment')}
DIFFICULTY: ${mcq.difficulty || 'Medium'}

QUESTION:
${mcq.question}

OPTIONS:
${formattedOptions}

CORRECT ANSWER:
Option ${correctOptionLetter}: ${correctOptionText}

${mcq.explanation ? `EXISTING REFERENCE NOTE: ${mcq.explanation}` : ''}

Please generate a well-structured, authoritative explanation following these sections:

### 1. Why Option ${correctOptionLetter} is Correct
Provide a clear, verified explanation of the core concept. Include key historical dates, constitutional provisions, scientific mechanisms, or grammatical rules where relevant to Pakistani syllabus.

### 2. Analysis of Incorrect Options
Briefly explain why each of the other options is incorrect or what classic exam trap/distractor it represents.

### 3. High-Yield Exam Memory Tip
Provide a quick memory anchor, mnemonic, or related high-frequency fact that frequently appears alongside this topic in past STS, FPSC, or SPSC papers.

Format using clean, readable Markdown with bullet points and bold highlights. Keep it strictly focused and avoid fluff.`;

    const { text: explanationText, modelUsed } = await executeWithFallback(explainPrompt);

    return res.status(200).json({
      success: true,
      isConfigured: true,
      action: 'explain',
      explanation: explanationText,
      model: modelUsed
    });

  } catch (error: any) {
    console.error('Server error generating Gemini explanation:', error);
    
    // Check for common API key issues
    const errorMessage = error?.message || 'Failed to communicate with Gemini API.';
    const isKeyError = errorMessage.toLowerCase().includes('api_key') || errorMessage.toLowerCase().includes('apikey') || errorMessage.toLowerCase().includes('unauthorized');

    return res.status(500).json({
      success: false,
      isConfigured: !isKeyError,
      error: isKeyError 
        ? 'Gemini API key is invalid or unauthorized. Please verify your GEMINI_API_KEY in Settings > Secrets.'
        : `AI tutor service encountered an error: ${errorMessage}`
    });
  }
}
