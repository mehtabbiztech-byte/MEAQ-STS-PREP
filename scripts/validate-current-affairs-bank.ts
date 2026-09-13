import { validateCurrentAffairsBank } from '../src/data/currentAffairs2000';

const result = validateCurrentAffairsBank();
if (result.pakistan !== 1000) result.errors.push(`Expected 1000 Pakistan questions, received ${result.pakistan}`);
if (result.world !== 1000) result.errors.push(`Expected 1000 World questions, received ${result.world}`);
if (result.errors.length) {
  console.error(result.errors.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log(JSON.stringify({ total: result.total, pakistan: result.pakistan, world: result.world, sources: result.sources }, null, 2));
