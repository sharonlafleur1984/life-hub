import { TRACKER_RETIRE_AFTER, type SuggestionTracker } from '@life-hub/domain';

export interface TrackerStep {
  tracker: SuggestionTracker;
  /** Ids that hit the retire threshold and move to Recently Resolved. */
  retire: string[];
}

/**
 * Count an unverifiable suggestion one more time. Once it would be shown a
 * fifth time we assume she handled it and stop nagging, saying so plainly.
 * Anything verifiable resolves on the real signal and never reaches this.
 */
export function tickTracker(
  tracker: SuggestionTracker,
  showingIds: readonly string[],
  today: string,
): TrackerStep {
  const next: SuggestionTracker = {};
  const retire: string[] = [];

  for (const id of showingIds) {
    const seen = tracker[id];
    const timesShown = (seen?.timesShown ?? 0) + 1;
    if (timesShown >= TRACKER_RETIRE_AFTER) {
      retire.push(id);
      continue;
    }
    next[id] = { firstSeen: seen?.firstSeen ?? today, timesShown };
  }

  return { tracker: next, retire };
}
