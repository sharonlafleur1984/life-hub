import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/test/**/*.test.ts', 'apps/**/test/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['packages/*/src/**', 'packages/adapters/*/src/**'],
      thresholds: { lines: 80, functions: 80, branches: 75, statements: 80 },
    },
  },
  resolve: {
    alias: {
      '@life-hub/domain': new URL('./packages/domain/src/index.ts', import.meta.url).pathname,
      '@life-hub/curation': new URL('./packages/curation/src/index.ts', import.meta.url).pathname,
    },
  },
});
