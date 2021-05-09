import { sample } from './problem-000';

describe('sample', (): void => {
  test('', () => {
    expect(sample(1)).toBe(1);
  });
  test('', () => {
    expect(sample(2)).toBe(2);
  });
  test('', () => {
    expect(sample(42)).toBe(42);
  });
});
