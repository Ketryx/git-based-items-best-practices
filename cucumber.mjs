import { ensureDir } from 'fs-extra';

await ensureDir('test-results');

export default {
  require: ['features/support/*.js'],
  format: [
    'json:test-results/report.json',
    'html:test-results/report.html',
    'summary',
    'progress',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
};
