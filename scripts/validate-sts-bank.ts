import { STS_IBA_MCQS, STS_IBA_SOURCES, validateStsIbaBank } from '../src/data/stsIba5000';

const result = validateStsIbaBank();
const counts = STS_IBA_MCQS.reduce<Record<string, number>>((all, item) => {
  all[item.category] = (all[item.category] || 0) + 1;
  return all;
}, {});

if (result.count !== 5000) result.errors.push(`Expected 5000 questions, received ${result.count}`);
if (STS_IBA_SOURCES.length < 5) result.errors.push('Expected at least five independent reference sources.');
if (result.errors.length) {
  console.error(result.errors.slice(0, 30).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({ count: result.count, sources: STS_IBA_SOURCES.length, categories: counts }, null, 2));
