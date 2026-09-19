import assert from 'node:assert/strict';
import test from 'node:test';
import { isDifficultWord } from './MeaningText';

test('marks longer vocabulary as difficult and ignores common words', () => {
  assert.equal(isDifficultWord('jurisdiction'), true);
  assert.equal(isDifficultWord('constitutional'), true);
  assert.equal(isDifficultWord('because'), false);
  assert.equal(isDifficultWord('book'), false);
});
