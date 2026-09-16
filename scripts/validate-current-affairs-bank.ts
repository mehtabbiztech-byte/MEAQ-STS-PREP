import { validateCurrentAffairsBank } from '../src/data/currentAffairs2000';

const result = validateCurrentAffairsBank();
if (result.total < 1) result.errors.push('Current Affairs bank is empty');
if (result.errors.length) {
  console.error(result.errors.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log(JSON.stringify({
  totalDistinctQuestions: result.total,
  pakistan: result.pakistan,
  world: result.world,
  sources: result.sources,
  targetPerScope: 1000,
  note: 'Counts include distinct source-aligned questions only; paraphrased duplicates are rejected.',
}, null, 2));
