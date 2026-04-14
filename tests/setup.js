/**
 * Vitest global test setup file.
 * Extends expect with DOM matchers and cleans up after each test.
 */
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});

// Mock ResizeObserver (required by Recharts)
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserverMock;
