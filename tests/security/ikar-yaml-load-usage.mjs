import { readFileSync } from 'node:fs';
const target = readFileSync('src/generateTestReport.ts', 'utf8');
if (/yaml\.load\s*\(\s*file\s*\)/.test(target)) {
  console.log('Baseline: vulnerable variant present');
  process.exit(0);
} else {
  console.log('Post-fix: vulnerable variant absent');
  process.exit(1);
}