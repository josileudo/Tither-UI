import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html']
    },
    environment: 'happy-dom'
  }
});
