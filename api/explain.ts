import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

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
  provider?: 'auto' | 'gemini' | 'chatgpt';
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

  // Retrieve configured keys from server environment
  const geminiKeys: string[] = [
    process.env.GEMINI_API_KEY,
    process.env.GEMINI_API_KEY_2,
  ].map(k => (k || '').trim()).filter(Boolean);

  const openaiKey = (process.env.OPENAI_API_KEY || process.env.CHATGPT_API_KEY || '').trim();

  // Health / status check
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'ok',
      endpoint: '/api/explain',
      service: 'MATB STS Prep Multi-Engine AI Tutor',
      providers: {
        gemini: {
          configured: geminiKeys.length > 0,
          keyCount: geminiKeys.length,
          primaryConfigured: Boolean(process.env.GEMINI_API_KEY),
          secondaryConfigured: Boolean(process.env.GEMINI_API_KEY_2),
          models: ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.8-flash']
        },
        chatgpt: {
          configured: Boolean(openaiKey),
          model: 'gpt-4o-mini'
        }
      },
      availableProviders: [
        ...(geminiKeys.length > 0 ? ['gemini'] : []),
        ...(openaiKey ? ['chatgpt'] : []),
      ]
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.'
    });
  }

  try {
    const body: RequestBody = req.body || {};
    const { action = 'explain', provider = 'auto', mcq, doubt, chatHistory, examContext } = body;

    if (!mcq || !mcq.question || !Array.isArray(mcq.options)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request payload: Valid MCQ object with question and options is required.'
      });
    }

    const correctOptionLetter = String.fromCharCode(65 + (mcq.correctIndex ?? 0));
    const correctOptionText = mcq.options[mcq.correctIndex] || 'Option ' + correctOptionLetter;
    const formattedOptions = mcq.options
      .map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`)
      .join('\n');

    // Prepare system instructions & prompts
    const systemRole = 'You are an elite academic instructor and exam preparation coach for Pakistani competitive and recruitment exams, specifically STS (Sukkur IBA BPS 5-15), FPSC, SPSC, PPSC, and NTS.';

    let prompt = '';
    let systemInstruction = systemRole;

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

      prompt = `A candidate preparing for ${examContext || 'STS Sukkur IBA / competitive exams'} has a doubt regarding the following question:

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
1. Address the candidate's doubt directly, empathetically, and clearly.
2. Explain precisely why Option ${correctOptionLetter} holds true based on authoritative Pakistani academic standards, historical facts, or scientific principles.
3. If the candidate asked about another option, explain why that option is incorrect or what classic exam trap/distractor it represents.
4. Keep the explanation concise, encouraging, and structured (2 to 3 focused paragraphs or bullet points).
5. Use clean markdown formatting (bold key terms).`;
    } else {
      prompt = `Generate an on-demand, high-yield conceptual explanation for the following multiple choice question:

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
    }

    // Runner A: Gemini API Execution (with key rotation across Key 1 & Key 2 and candidate models)
    const runGemini = async (): Promise<{ text: string; modelUsed: string; keyUsed: number }> => {
      if (geminiKeys.length === 0) {
        throw new Error('GEMINI_KEY_MISSING');
      }

      const candidateModels = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
      let lastError: any = null;

      // Try each available Gemini key (Primary Key 1, then Secondary Key 2)
      for (let keyIdx = 0; keyIdx < geminiKeys.length; keyIdx++) {
        const currentKey = geminiKeys[keyIdx];
        const ai = new GoogleGenAI({
          apiKey: currentKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        for (const model of candidateModels) {
          try {
            const res = await ai.models.generateContent({
              model,
              contents: prompt,
            });
            if (res.text && res.text.trim().length > 0) {
              return { 
                text: res.text, 
                modelUsed: `Gemini (${model})`, 
                keyUsed: keyIdx + 1 
              };
            }
          } catch (err: any) {
            lastError = err;
            const msg = (err?.message || '').toLowerCase();
            if (msg.includes('api_key') || msg.includes('unauthorized') || msg.includes('forbidden')) {
              // Current key is invalid, try next key
              console.warn(`Gemini key #${keyIdx + 1} unauthorized, trying next key...`);
              break;
            }
            // If temporary 503/429/quota, try next model or next key
            console.warn(`Gemini key #${keyIdx + 1} model ${model} error:`, err?.message);
          }
        }
      }

      throw lastError || new Error('All Gemini keys and models failed to generate content.');
    };

    // Runner B: ChatGPT / OpenAI API Execution
    const runChatGpt = async (): Promise<{ text: string; modelUsed: string }> => {
      if (!openaiKey) {
        throw new Error('OPENAI_KEY_MISSING');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemInstruction },
            { role: 'user', content: prompt }
          ],
          temperature: 0.5,
          max_tokens: 1500,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        const errMsg = errJson?.error?.message || `OpenAI API returned status ${response.status}`;
        throw new Error(errMsg);
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content;
      if (!reply) {
        throw new Error('No completion returned by OpenAI API.');
      }

      return {
        text: reply,
        modelUsed: `ChatGPT (${data?.model || 'gpt-4o-mini'})`
      };
    };

    // Orchestration based on requested provider
    let resultText = '';
    let chosenProvider = '';
    let chosenModel = '';
    let chosenKey = 1;

    if (provider === 'chatgpt') {
      if (!openaiKey) {
        return res.status(200).json({
          success: false,
          isConfigured: false,
          provider: 'chatgpt',
          error: 'OPENAI_API_KEY is not configured in the server environment. Please configure OPENAI_API_KEY in Settings > Secrets or environment variables to use ChatGPT, or switch to Gemini AI Tutor.',
        });
      }
      const gptResult = await runChatGpt();
      resultText = gptResult.text;
      chosenProvider = 'chatgpt';
      chosenModel = gptResult.modelUsed;
    } else if (provider === 'gemini') {
      if (geminiKeys.length === 0) {
        return res.status(200).json({
          success: false,
          isConfigured: false,
          provider: 'gemini',
          error: 'Neither GEMINI_API_KEY nor GEMINI_API_KEY_2 is configured in the server environment. Please configure your key in Settings > Secrets or environment variables.',
        });
      }
      const geminiResult = await runGemini();
      resultText = geminiResult.text;
      chosenProvider = 'gemini';
      chosenModel = geminiResult.modelUsed;
      chosenKey = geminiResult.keyUsed;
    } else {
      // provider === 'auto': Try Gemini first (Key 1 -> Key 2), then ChatGPT fallback if Gemini fails and OpenAI is set
      let handled = false;

      if (geminiKeys.length > 0) {
        try {
          const geminiResult = await runGemini();
          resultText = geminiResult.text;
          chosenProvider = 'gemini';
          chosenModel = geminiResult.modelUsed;
          chosenKey = geminiResult.keyUsed;
          handled = true;
        } catch (geminiErr: any) {
          console.warn('Gemini auto run failed, attempting ChatGPT fallback if available...', geminiErr?.message);
        }
      }

      if (!handled && openaiKey) {
        try {
          const gptResult = await runChatGpt();
          resultText = gptResult.text;
          chosenProvider = 'chatgpt';
          chosenModel = gptResult.modelUsed;
          handled = true;
        } catch (gptErr: any) {
          console.error('ChatGPT fallback also failed:', gptErr?.message);
        }
      }

      if (!handled) {
        if (geminiKeys.length === 0 && !openaiKey) {
          return res.status(200).json({
            success: false,
            isConfigured: false,
            error: 'No AI API key is configured. Please configure GEMINI_API_KEY, GEMINI_API_KEY_2, or OPENAI_API_KEY in your server environment.',
          });
        }
        return res.status(500).json({
          success: false,
          isConfigured: true,
          error: 'AI service is temporarily unavailable across all configured models. Please try again in a moment.'
        });
      }
    }

    if (action === 'doubt') {
      return res.status(200).json({
        success: true,
        isConfigured: true,
        action: 'doubt',
        provider: chosenProvider,
        reply: resultText,
        model: chosenModel,
        keyUsed: chosenProvider === 'gemini' ? chosenKey : undefined,
      });
    }

    return res.status(200).json({
      success: true,
      isConfigured: true,
      action: 'explain',
      provider: chosenProvider,
      explanation: resultText,
      model: chosenModel,
      keyUsed: chosenProvider === 'gemini' ? chosenKey : undefined,
    });

  } catch (error: any) {
    console.error('Server error during AI explanation generation:', error);
    
    const errorMessage = error?.message || 'Failed to communicate with AI provider.';
    const isKeyError = errorMessage.toLowerCase().includes('api_key') || 
                       errorMessage.toLowerCase().includes('apikey') || 
                       errorMessage.toLowerCase().includes('unauthorized') ||
                       errorMessage.includes('GEMINI_KEY_MISSING') ||
                       errorMessage.includes('OPENAI_KEY_MISSING');

    return res.status(500).json({
      success: false,
      isConfigured: !isKeyError,
      error: isKeyError 
        ? 'AI API key is missing or invalid. Please check your GEMINI_API_KEY / GEMINI_API_KEY_2 or OPENAI_API_KEY in Settings > Secrets.'
        : `AI tutor service encountered an error: ${errorMessage}`
    });
  }
}
