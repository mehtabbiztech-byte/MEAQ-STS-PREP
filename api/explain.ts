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

const MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini';

async function createResponse(input: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY_NOT_CONFIGURED');
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      instructions: 'You are a careful, encouraging tutor for Pakistani students and competitive-exam candidates. Be accurate, concise, syllabus-focused, and clearly flag uncertainty.',
      input,
      max_output_tokens: 1200,
      store: false,
    }),
  });
  const data: any = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || 'OpenAI request failed.');
  const text = data.output_text || data.output?.flatMap((item: any) => item.content || [])
    .filter((item: any) => item.type === 'output_text').map((item: any) => item.text).join('\n');
  if (!text) throw new Error('ChatGPT returned an empty response.');
  return text;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') return res.status(200).json({
    status: 'ok', endpoint: '/api/explain', service: 'MATB STS Prep ChatGPT Tutor',
    model: MODEL, configured: Boolean(process.env.OPENAI_API_KEY),
    capabilities: ['on_demand_explanation', 'doubt_resolution'],
  });
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed.' });

  try {
    const body: RequestBody = req.body || {};
    const { action = 'explain', mcq, doubt, chatHistory = [], examContext } = body;
    if (!mcq?.question || !Array.isArray(mcq.options)) return res.status(400).json({ success: false, error: 'A valid MCQ is required.' });
    const correctLetter = String.fromCharCode(65 + (mcq.correctIndex ?? 0));
    const correctText = mcq.options[mcq.correctIndex] || `Option ${correctLetter}`;
    const options = mcq.options.map((option, index) => `${String.fromCharCode(65 + index)}) ${option}`).join('\n');
    const shared = `Exam: ${examContext || 'Pakistani competitive exams'}\nSubject: ${mcq.category || 'General Knowledge'}\nQuestion: ${mcq.question}\nOptions:\n${options}\nVerified answer: ${correctLetter}) ${correctText}`;

    if (action === 'doubt') {
      if (!doubt?.trim()) return res.status(400).json({ success: false, error: 'Please enter your question.' });
      const history = chatHistory.slice(-6).map(message => `${message.role}: ${message.content}`).join('\n');
      const reply = await createResponse(`${shared}\n\nRecent conversation:\n${history}\n\nStudent question: ${doubt.trim()}\n\nAnswer directly in simple English. Explain misconceptions and include one useful exam tip.`);
      return res.status(200).json({ success: true, isConfigured: true, action, reply, model: MODEL });
    }

    const explanation = await createResponse(`${shared}\nDifficulty: ${mcq.difficulty || 'Medium'}\nReference note: ${mcq.explanation || 'None'}\n\nExplain with these short sections: Why the answer is correct; Why other options are wrong; Memory tip. Use clear Markdown.`);
    return res.status(200).json({ success: true, isConfigured: true, action, explanation, model: MODEL });
  } catch (error: any) {
    const missingKey = error?.message === 'OPENAI_API_KEY_NOT_CONFIGURED';
    return res.status(missingKey ? 503 : 500).json({
      success: false, isConfigured: !missingKey,
      error: missingKey ? 'ChatGPT is not configured yet. Add OPENAI_API_KEY to your deployment environment variables.' : error?.message || 'The ChatGPT tutor is temporarily unavailable.',
    });
  }
}
