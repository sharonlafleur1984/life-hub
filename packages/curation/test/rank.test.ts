import { describe, expect, it } from 'vitest';
import type { AttentionItem } from '@life-hub/domain';
import { rankAttention } from '../src/rank.js';

const base = (over: Partial<AttentionItem> & Pick<AttentionItem, 'id'>): AttentionItem => ({
  source: 'gmail',
  sourceLabel: 'Test',
  sourceLink: { kind: 'gmail', href: 'https://mail.google.com/mail/u/0/#all/1', label: 'Open' },
  summary: 'something',
  urgency: 'fyi',
  topics: [],
  ...over,
});

describe('rankAttention', () => {
  it('puts hard deadlines above everything else', () => {
    const ranked = rankAttention([
      base({ id: 'fyi' }),
      base({ id: 'deadline', urgency: 'deadline' }),
    ]);
    expect(ranked.map((i) => i.id)).toEqual(['deadline', 'fyi']);
  });

  it('orders same-urgency items by how soon they are due', () => {
    const ranked = rankAttention([
      base({ id: 'later', urgency: 'action', dueAt: '2026-09-10T12:00:00-06:00' }),
      base({ id: 'sooner', urgency: 'action', dueAt: '2026-09-06T12:00:00-06:00' }),
    ]);
    expect(ranked.map((i) => i.id)).toEqual(['sooner', 'later']);
  });

  it('prefers a dated item over an undated one at the same urgency', () => {
    const ranked = rankAttention([
      base({ id: 'undated', urgency: 'action' }),
      base({ id: 'dated', urgency: 'action', dueAt: '2026-09-30T12:00:00-06:00' }),
    ]);
    expect(ranked.map((i) => i.id)).toEqual(['dated', 'undated']);
  });

  it('breaks remaining ties by money, then by incoming order', () => {
    const ranked = rankAttention([
      base({ id: 'plain', urgency: 'action' }),
      base({ id: 'money', urgency: 'action', topics: ['money'] }),
      base({ id: 'plain-2', urgency: 'action' }),
    ]);
    expect(ranked.map((i) => i.id)).toEqual(['money', 'plain', 'plain-2']);
  });
});
