import assert from 'node:assert/strict';
import test from 'node:test';
import { NADRA_JUNIOR_EXECUTIVE_PAPERS, NADRA_JUNIOR_EXECUTIVE_QUESTIONS, NADRA_TEST_BLUEPRINT } from './nadraJuniorExecutiveData';

test('NADRA preparation bank contains 100 valid unique questions', () => {
  assert.equal(NADRA_JUNIOR_EXECUTIVE_QUESTIONS.length, 100);
  assert.equal(new Set(NADRA_JUNIOR_EXECUTIVE_QUESTIONS.map((question) => question.id)).size, 100);
  assert.equal(new Set(NADRA_JUNIOR_EXECUTIVE_QUESTIONS.map((question) => question.question)).size, 100);
  for (const question of NADRA_JUNIOR_EXECUTIVE_QUESTIONS) {
    assert.equal(question.options.length, 4);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.ok(question.explanation.length > 0);
    assert.equal(question.verificationStatus, 'generated-practice');
  }
});

test('NADRA papers and mock use the declared 50-question pattern', () => {
  assert.equal(NADRA_JUNIOR_EXECUTIVE_PAPERS.length, 3);
  assert.equal(NADRA_TEST_BLUEPRINT.reduce((total, section) => total + section.questions, 0), 50);
  for (const paper of NADRA_JUNIOR_EXECUTIVE_PAPERS) {
    assert.equal(paper.mcqs.length, 50);
    assert.equal(paper.totalQuestions, 50);
    assert.equal(paper.durationMinutes, 50);
    assert.equal(new Set(paper.mcqs.map((question) => question.id)).size, 50);
    assert.equal(paper.recordType, 'Reconstructed Practice Paper');
  }
});
