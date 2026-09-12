import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scorePaper, practiceMinutes } from './paperResults';
import type { MCQ } from '../types';

const questions: MCQ[] = [
  { id: 'a', question: 'One?', options: ['No', 'Yes'], correctIndex: 1, explanation: '', category: 'science', difficulty: 'Easy' },
  { id: 'b', question: 'Two?', options: ['No', 'Yes'], correctIndex: 0, explanation: '', category: 'science', difficulty: 'Easy' },
  { id: 'c', question: 'Three?', options: ['No', 'Yes'], correctIndex: 1, explanation: '', category: 'english', difficulty: 'Easy' },
];

test('score, accuracy and weak subjects account for wrong and skipped answers', () => {
  const result = scorePaper(questions, { a: 1, b: 1 });
  assert.deepEqual([result.correct, result.attempted, result.skipped, result.percentage, result.accuracy], [1, 2, 1, 33, 50]);
  assert.deepEqual(result.subjects, { science: { correct: 1, total: 2 }, english: { correct: 0, total: 1 } });
  assert.deepEqual(result.incorrectQuestions.map(q => q.selectedIndex), [1, -1]);
});

test('zero answered questions and invalid option indices never earn marks', () => {
  const result = scorePaper(questions, { a: 99 });
  assert.deepEqual([result.correct, result.attempted, result.skipped, result.accuracy], [0, 0, 3, 0]);
  assert.equal(practiceMinutes(0), 1);
  assert.equal(practiceMinutes(100), 90);
});
