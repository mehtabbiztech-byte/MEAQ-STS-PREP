interface ChatMessage { role: 'user' | 'assistant'; content: string }
const MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini';

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') return res.status(200).json({ status: 'ok', configured: Boolean(process.env.OPENAI_API_KEY), model: MODEL });
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed.' });
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(503).json({ success: false, isConfigured: false, error: 'Add OPENAI_API_KEY to enable ChatGPT.' });
    const { message, history = [], page = 'home' } = req.body || {};
    if (typeof message !== 'string' || !message.trim()) return res.status(400).json({ success: false, error: 'Please enter a question.' });
    if (message.length > 2000) return res.status(400).json({ success: false, error: 'Please keep your question under 2,000 characters.' });
    const recentHistory = (history as ChatMessage[]).slice(-8).map(item => `${item.role === 'user' ? 'Student' : 'Tutor'}: ${item.content}`).join('\n');
    const input = `Current app section: ${page}\n${recentHistory ? `Recent conversation:\n${recentHistory}\n` : ''}Student: ${message.trim()}`;
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        instructions: 'You are MATB Study AI, a friendly ChatGPT-powered tutor for Pakistani school, university, STS, NTS, FPSC, SPSC, PPSC and CSS learners. Give accurate, exam-focused answers in simple English. Use short headings or bullets when helpful. Never pretend uncertain current-affairs information is verified.',
        input, max_output_tokens: 900, store: false,
      }),
    });
    const data: any = await response.json();
    if (!response.ok) throw new Error(data?.error?.message || 'OpenAI request failed.');
    const reply = data.output_text || data.output?.flatMap((item: any) => item.content || []).filter((item: any) => item.type === 'output_text').map((item: any) => item.text).join('\n');
    if (!reply) throw new Error('ChatGPT returned an empty response.');
    return res.status(200).json({ success: true, reply, model: MODEL });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error?.message || 'ChatGPT is temporarily unavailable.' });
  }
}
