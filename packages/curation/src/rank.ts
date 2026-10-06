import { URGENCY_ORDER, type AttentionItem } from '@life-hub/domain';

/**
 * Rank by genuine urgency: hard deadlines first, soonest first, then money and
 * decisions, then everything else. Ties keep their incoming order so a run is
 * reproducible against the same inputs.
 */
export function rankAttention(items: readonly AttentionItem[]): AttentionItem[] {
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const byUrgency =
        URGENCY_ORDER.indexOf(b.item.urgency) - URGENCY_ORDER.indexOf(a.item.urgency);
      if (byUrgency !== 0) return byUrgency;

      const aDue = a.item.dueAt ? Date.parse(a.item.dueAt) : null;
      const bDue = b.item.dueAt ? Date.parse(b.item.dueAt) : null;
      if (aDue !== null && bDue !== null && aDue !== bDue) return aDue - bDue;
      if (aDue !== null && bDue === null) return -1;
      if (aDue === null && bDue !== null) return 1;

      const byMoney =
        Number(b.item.topics.includes('money')) - Number(a.item.topics.includes('money'));
      if (byMoney !== 0) return byMoney;

      return a.index - b.index;
    })
    .map(({ item }) => item);
}
