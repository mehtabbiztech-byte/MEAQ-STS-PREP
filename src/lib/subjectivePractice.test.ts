import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readWritingSession, remainingSeconds, validateWritingFeedback } from './subjectivePractice';
import handler from '../../api/subjective-feedback';
test('wall-clock countdown accounts for refresh and clamps expired attempts', () => {
  assert.equal(remainingSeconds(10000, 1001), 9);
  assert.equal(remainingSeconds(10000, 20000), 0);
  const restored = readWritingSession(JSON.stringify({ answer: 'My response', deadline: 10000, submitted: false }));
  assert.equal(remainingSeconds(restored.deadline!, 11000), 0);
});
test('recovers legacy drafts and rejects malformed saved sessions', () => {
  assert.equal(readWritingSession('{broken', 'old draft').answer, 'old draft');
  assert.equal(readWritingSession('{"answer":"x","deadline":"invalid","submitted":false}').deadline, null);
});
test('rejects incomplete AI feedback and accepts criterion-aligned feedback', () => {
  assert.throws(() => validateWritingFeedback({ criteria: [], nextSteps: [] }, 3));
  assert.throws(() => validateWritingFeedback({ criteria: [{ feedback: 2, missingPoints: [] }], nextSteps: [] }, 1));
  assert.equal(validateWritingFeedback({ criteria: [{ feedback: 'Relevant explanation', missingPoints: ['Add a classroom example'] }], nextSteps: ['Revise'] }, 1).criteria.length, 1);
});
test('API rejects invalid input before contacting the provider', async () => {
  let code = 0;
  const res = { status(n: number) { code = n; return this; }, json(_: unknown) {}, setHeader(_: string, __: string) {} };
  await handler({ method: 'GET' }, res); assert.equal(code, 405);
  await handler({ method: 'POST', body: { questionId: 'invented', answer: 'A sufficiently long learner response.' } }, res); assert.equal(code, 400);
});
test('API handles missing configuration and validates provider feedback', async () => {
  const oldKey = process.env.GEMINI_API_KEY;
  const oldFetch = globalThis.fetch;
  let code = 0; let body: any;
  const res = { status(n: number) { code = n; return this; }, json(value: unknown) { body = value; }, setHeader(_: string, __: string) {} };
  const req = { method: 'POST', body: { questionId: 'tl-crq-1', answer: 'The learner needs guided scaffolding before working independently.' } };
  try {
    delete process.env.GEMINI_API_KEY;
    await handler(req, res); assert.equal(code, 503);
    process.env.GEMINI_API_KEY = 'test-only';
    const feedback = { criteria: Array.from({ length: 3 }, () => ({ feedback: 'Relevant idea; develop the example.', missingPoints: ['Add a specific teacher action.'] })), nextSteps: ['Revise your classroom example.'] };
    globalThis.fetch = async () => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(feedback) }] } }] }), { status: 200 });
    await handler(req, res); assert.equal(code, 200); assert.deepEqual(body, feedback);
    globalThis.fetch = async () => new Response('{}', { status: 200 });
    await handler(req, res); assert.equal(code, 502);
  } finally { globalThis.fetch = oldFetch; if (oldKey === undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY = oldKey; }
});
