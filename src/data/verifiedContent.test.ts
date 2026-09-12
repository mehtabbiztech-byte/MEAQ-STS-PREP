import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STS_SYLLABI } from './stsSyllabi';
import { PAKISTAN_CURRENT_AFFAIRS_MCQS } from './pakistanCurrentAffairsMcqs';
import { SOURCED_CURRENT_AFFAIRS_MCQS } from './sourcedCurrentAffairsMcqs';

test('published STS distributions sum to 100 and link to their project documents', () => {
  for (const syllabus of STS_SYLLABI) {
    assert.equal(syllabus.sections.reduce((total, section) => total + section.percent, 0), 100, syllabus.name);
    assert.match(syllabus.sourceUrl, /^https:\/\/(apps\.iba-suk\.edu\.pk|districtcourtslarkana\.gos\.pk)\//);
  }
  assert.equal(new Set(STS_SYLLABI.map(s => s.id)).size, STS_SYLLABI.length);
});

test('new current-affairs questions have distinct IDs, valid answers and source links', () => {
  assert.equal(new Set(PAKISTAN_CURRENT_AFFAIRS_MCQS.map(q => q.id)).size, PAKISTAN_CURRENT_AFFAIRS_MCQS.length);
  for (const question of SOURCED_CURRENT_AFFAIRS_MCQS) {
    assert.ok(question.options.length >= 3);
    assert.ok(question.correctIndex >= 0 && question.correctIndex < question.options.length);
    assert.ok(question.sourceUrl?.startsWith('https://'));
    assert.ok(question.sourceCheckedOn);
  }
});
