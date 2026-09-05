import type { AttentionItem } from '@life-hub/domain';

/**
 * Money, health and credentials items never get an action button. The rule
 * lives here so no renderer can quietly reintroduce one.
 */
export function stripDisallowedActions(item: AttentionItem): AttentionItem {
  if (item.topics.length === 0) return item;
  const { action: _dropped, ...rest } = item;
  return rest;
}

export function mayHaveAction(item: AttentionItem): boolean {
  return item.topics.length === 0;
}
