import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv } from './csv';

test('CSV parser preserves commas, quotes and newlines inside quoted fields', () => {
  const rows = parseCsv('question,a,b\n"What, exactly?","A ""quoted"" option","line 1\nline 2"');
  assert.deepEqual(rows, [
    ['question', 'a', 'b'],
    ['What, exactly?', 'A "quoted" option', 'line 1\nline 2'],
  ]);
});

test('CSV parser rejects unclosed quoted fields', () => {
  assert.throws(() => parseCsv('question\n"unfinished'), /unclosed quoted field/);
});
