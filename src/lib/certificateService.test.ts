import test from 'node:test';
import assert from 'node:assert/strict';
import { generateCertificateFromAttempt } from './certificateService';
import { QuizAttempt } from '../types';

const attempt: QuizAttempt = {
  id: 'attempt-1',
  date: '2026-09-16',
  title: 'STS Practice',
  totalQuestions: 10,
  score: 8,
  timeSpentSeconds: 300,
  incorrectQuestions: [],
};

test('practice records are deterministic and do not assign national ranks', () => {
  const first = generateCertificateFromAttempt(attempt, 'Learner');
  const second = generateCertificateFromAttempt(attempt, 'Learner');
  assert.equal(first.verificationCode, second.verificationCode);
  assert.equal(first.rankPosition, 0);
  assert.equal(first.percentage, 80);
});

test('practice record scores are bounded by total questions', () => {
  const result = generateCertificateFromAttempt({ ...attempt, score: 999 }, 'Learner');
  assert.equal(result.score, 10);
  assert.equal(result.percentage, 100);
});
