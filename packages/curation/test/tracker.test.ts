import { describe, expect, it } from 'vitest';
import { tickTracker } from '../src/tracker.js';

describe('tickTracker', () => {
  it('starts a count the first time a suggestion is shown', () => {
    const { tracker, retire } = tickTracker({}, ['thread-1'], '2026-09-05');
    expect(tracker['thread-1']).toEqual({ firstSeen: '2026-09-05', timesShown: 1 });
    expect(retire).toEqual([]);
  });

  it('keeps the original firstSeen while incrementing', () => {
    const { tracker } = tickTracker(
      { 'thread-1': { firstSeen: '2026-09-01', timesShown: 2 } },
      ['thread-1'],
      '2026-09-05',
    );
    expect(tracker['thread-1']).toEqual({ firstSeen: '2026-09-01', timesShown: 3 });
  });

  it('retires a suggestion instead of nagging a fourth time', () => {
    const { tracker, retire } = tickTracker(
      { 'thread-1': { firstSeen: '2026-09-01', timesShown: 3 } },
      ['thread-1'],
      '2026-09-05',
    );
    expect(retire).toEqual(['thread-1']);
    expect(tracker['thread-1']).toBeUndefined();
  });

  it('drops entries that are no longer being shown', () => {
    const { tracker } = tickTracker(
      { gone: { firstSeen: '2026-09-01', timesShown: 1 } },
      [],
      '2026-09-05',
    );
    expect(tracker).toEqual({});
  });
});
