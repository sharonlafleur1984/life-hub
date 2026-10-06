import { describe, expect, it } from 'vitest';
import type { AttentionItem, Link } from '@life-hub/domain';
import { mayHaveAction, stripDisallowedActions } from '../src/buttons.js';

const action: Link = { kind: 'external', href: 'https://example.com', label: 'Do it' };
const item = (topics: AttentionItem['topics']): AttentionItem => ({
  id: 'x',
  source: 'gmail',
  sourceLabel: 'Test',
  sourceLink: {
    kind: 'gmail',
    href: 'https://mail.google.com/mail/u/0/#all/1',
    label: 'Open',
  },
  summary: 'something',
  urgency: 'action',
  topics,
  action,
});

describe('action button policy', () => {
  it('keeps a real button on an ordinary item', () => {
    expect(stripDisallowedActions(item([])).action).toEqual(action);
    expect(mayHaveAction(item([]))).toBe(true);
  });

  it.each(['money', 'health', 'credentials'] as const)(
    'strips the button on %s items',
    (topic) => {
      expect(stripDisallowedActions(item([topic])).action).toBeUndefined();
      expect(mayHaveAction(item([topic]))).toBe(false);
    },
  );
});
