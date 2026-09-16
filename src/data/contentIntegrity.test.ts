import test from 'node:test';
import assert from 'node:assert/strict';
import { STS_IBA_MCQS } from './stsIba5000';
import { CURRENT_AFFAIRS_SOURCED, PAKISTAN_CURRENT_AFFAIRS_MCQS, WORLD_CURRENT_AFFAIRS_MCQS } from './currentAffairs2000';
import { PAST_PAPERS_DATA } from './pastPapersData';

test('generated STS items are never labelled as official or editorially verified', () => {
  assert.equal(STS_IBA_MCQS.length, 5000);
  assert.ok(STS_IBA_MCQS.every(item => item.verificationStatus === 'generated-practice'));
});

test('current-affairs names and totals reflect real distinct records', () => {
  assert.equal(CURRENT_AFFAIRS_SOURCED.length, PAKISTAN_CURRENT_AFFAIRS_MCQS.length + WORLD_CURRENT_AFFAIRS_MCQS.length);
  assert.equal(new Set(CURRENT_AFFAIRS_SOURCED.map(item => item.question)).size, CURRENT_AFFAIRS_SOURCED.length);
});

test('every populated paper set declares whether it is reconstructed practice', () => {
  for (const paper of PAST_PAPERS_DATA.filter(item => item.mcqs.length)) {
    assert.equal(paper.recordType, 'Reconstructed Practice Paper', paper.id);
    assert.match(paper.sourceNote || '', /not.*complete official paper/i);
  }
});
