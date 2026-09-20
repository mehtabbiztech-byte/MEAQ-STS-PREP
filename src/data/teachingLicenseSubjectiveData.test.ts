import test from 'node:test';
import assert from 'node:assert/strict';
import { TEACHING_LICENSE_SUBJECTIVE_QUESTIONS } from './teachingLicenseSubjectiveData';

test('Teaching License subjective bank contains complete CRQ and ERQ practice', () => {
  const crqs = TEACHING_LICENSE_SUBJECTIVE_QUESTIONS.filter((item) => item.type === 'CRQ');
  const erqs = TEACHING_LICENSE_SUBJECTIVE_QUESTIONS.filter((item) => item.type === 'ERQ');
  assert.equal(crqs.length, 4);
  assert.equal(erqs.length, 4);
  for (const item of TEACHING_LICENSE_SUBJECTIVE_QUESTIONS) {
    assert.ok(item.prompt.length > 40);
    assert.ok(item.modelAnswer.length > 100);
    assert.equal(item.rubric.reduce((sum, criterion) => sum + criterion.marks, 0), item.marks);
    assert.ok(item.answerPlan.length >= 3);
  }
});
