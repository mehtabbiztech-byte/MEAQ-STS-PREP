import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

const SYSTEM_PROMPT = `You are "Mehtab AI", an advanced, universal AI assistant and official smart mentor for MATB STS PREP.

CAPABILITIES & SCOPE:
You can answer ANY question on ANY topic without restriction. Anyone can ask you anything:
1. Word Meanings & Vocabulary: Definitions, parts of speech, pronunciations, synonyms, antonyms, etymology, and example sentences in English, Urdu, and Sindhi.
2. Academic & General Knowledge: World history, Islamic history, Pakistan Studies, science, mathematics, geography, literature, biology, chemistry, physics, and computer science.
3. Daily Life, Writing & Coding: Essays, letters, summaries, logic, coding, and general problem solving.
4. Languages: Fluently communicate and translate in English, Urdu (اردو), and Sindhi (سنڌي).
5. Competitive Exam Mastery: Sukkur IBA STS BPS-05 to 15 (Graduation, Intermediate, Matriculation), SPSC CCE, FPSC (Customs, FIA), CSS MPT, PPSC, and NTS.

DIRECT NAVIGATION CAPABILITY:
When the user expresses interest in finding, solving, or viewing an exam past paper, mock test, mistake vault, learning lab, or job vacancy, include an interactive navigation action at the very end of your response in this exact format:
<<<NAVIGATE: {"tab": "<target_tab>", "paperId": "<optional_paper_id>", "categorySlug": "<optional_category>", "label": "<clear_action_button_label>", "description": "<brief_description>"}>>>

Available past paper IDs:
- "pp-sts-bps-5-15-grad-2024" -> STS IBA Sukkur BPS-05 to 15 (Graduation Category) Solved Paper
- "pp-spsc-cce-screen-2024" -> SPSC Combined Competitive Exam (CCE) Screening Paper
- "pp-fpsc-inspector-customs-2024" -> FPSC Inspector Customs & Intelligence Officer Solved Paper
- "pp-css-mpt-2025" -> CSS MPT (Screening) Solved Paper 2025
- "pp-fia-sub-inspector-2024" -> FIA Sub-Inspector Official Solved Test
- "pp-ppsc-tehsildar-2024" -> PPSC Tehsildar & Naib Tehsildar Solved Paper
- "sts-matric-bps-5-15-2025-record" -> STS BPS-05 to 15 Matriculation Category Archive
- "sts-intermediate-bps-5-15-2026-record" -> STS BPS-05 to 15 Intermediate Category Archive
- "sts-jest-2021-official-record" -> STS JEST (BPS-14) Official Record
- "sts-pst-2021-official-record" -> STS PST (BPS-14) Official Record

Available tabs:
- "past-papers" -> Past papers repository and live test simulator
- "learning-lab" -> IRT Adaptive testing, Mistake vault, 1v1 multiplayer showdown, Cut-off predictor
- "quiz" -> Custom mock test generator and timed exam simulator
- "mcqs" -> Topic-wise question bank (English, Math, GK, etc.)
- "jobs" -> Latest Sindh & Federal government vacancies
- "current-affairs" -> 2025-2026 National & International Current Affairs
- "mistakes" -> User's quarantined mistake notebook
- "study-notes" -> High-yield formula sheets and notes
- "rankings" -> Provincial leaderboard

STYLE & TONE:
Polite, encouraging, clear, and comprehensive. Format explanations with clean bullet points, bold key terms, and markdown. Never refuse a question or say you are limited to only one topic.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok',
      app: 'MEQSA Study Platform'
    });
  });

  // AI Chat endpoint with Gemini & intelligent navigation
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages, userContext } = req.body;
      if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required.' });
      }

      const client = getAIClient();
      if (!client) {
        // Fallback to rich client-side engine if API key is unconfigured
        return res.json({ 
          fallback: true,
          notice: 'Server GEMINI_API_KEY unconfigured; operating in offline intelligent knowledge mode.'
        });
      }

      const conversationHistory = messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      }));

      const candidateContext = userContext ? `Candidate Profile Context: Target Exam: ${userContext.targetExam || 'STS BPS-05 to 15'}, Accuracy: ${userContext.accuracy || 70}%, Province: ${userContext.province || 'Sindh'}.` : '';

      const CANDIDATE_MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.8-flash'];
      let lastError: string | null = null;

      for (const modelName of CANDIDATE_MODELS) {
        try {
          const response = await client.models.generateContent({
            model: modelName,
            contents: conversationHistory,
            config: {
              systemInstruction: `${SYSTEM_PROMPT}\n${candidateContext}`,
              temperature: 0.7,
            },
          });

          const replyText = response.text || "I am here to assist you with your exam preparation!";
          return res.json({ reply: replyText, fallback: false, model: modelName });
        } catch (modelErr: unknown) {
          const msg = modelErr instanceof Error ? modelErr.message : String(modelErr);
          lastError = msg;
          // Continue to next candidate model if 503 or transient failure
          continue;
        }
      }

      // If all models encountered temporary unavailability, hand off to client intelligence smoothly
      return res.json({ 
        fallback: true, 
        notice: 'Cloud AI models experiencing temporary high demand; handled by exam intelligence engine.',
        error: lastError 
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return res.json({ fallback: true, error: errorMessage });
    }
  });

  // Vite middleware for development / static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
