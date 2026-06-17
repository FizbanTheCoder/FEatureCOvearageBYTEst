import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const targetFilePath = join(process.cwd(), 'src', 'generateTestRunResults.ts');
const content = readFileSync(targetFilePath, 'utf8');

// Vulnerable pattern: yaml.load(file) with a single argument
const vulnerablePattern = /yaml\.load\(file\)/;

if (vulnerablePattern.test(content)) {
  // Baseline (vulnerable) state: pattern present
  process.exit(0);
} else {
  // Fixed state: pattern absent
  process.exit(1);
}
