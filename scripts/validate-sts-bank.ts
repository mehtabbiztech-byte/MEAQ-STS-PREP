import { STS_IBA_MCQS, STS_IBA_SOURCES, validateStsIbaBank } from '../src/data/stsIba5000';
import { PAST_PAPERS_DATA } from '../src/data/pastPapersData';

const result = validateStsIbaBank();
const counts = STS_IBA_MCQS.reduce<Record<string, number>>((all, item) => {
  all[item.category] = (all[item.category] || 0) + 1;
  return all;
}, {});

if (result.count !== 5000) result.errors.push(`Expected 5000 questions, received ${result.count}`);
if (STS_IBA_SOURCES.length < 5) result.errors.push('Expected at least five independent reference sources.');
const records = PAST_PAPERS_DATA.filter(item => item.exam === 'STS');
for (const record of records) {
  if (!record.testDateLabel) result.errors.push(`Missing STS reference date: ${record.id}`);
  if (!record.recordType) result.errors.push(`Missing STS record type: ${record.id}`);
  if (!record.sourceUrl) result.errors.push(`Missing STS source URL: ${record.id}`);
}
for (const required of ['JEST', 'PST', 'Matriculation', 'Intermediate', 'Graduation']) {
  if (!records.some(item => `${item.title} ${item.postName}`.includes(required))) result.errors.push(`Missing STS series: ${required}`);
}
if (result.errors.length) {
  console.error(result.errors.slice(0, 30).join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({ count: result.count, sources: STS_IBA_SOURCES.length, officialRecords: records.length, categories: counts }, null, 2));
