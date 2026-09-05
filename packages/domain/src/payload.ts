import { z } from 'zod';
import { AttentionItem, ResolvedItem, SuggestionTracker } from './attention.js';
import { CalendarEvent, ScopedEvent } from './event.js';
import { Instant, Link } from './primitives.js';
import { StatusRow, TodoItem } from './todo.js';

/** Bumped when the shape changes in a way the published page must know about. */
export const CONTRACT_VERSION = 1;

/**
 * A source that did not refresh this run. The panel keeps its previous content
 * and says so, rather than the whole refresh bailing out.
 */
export const StaleSource = z.object({
  source: z.string().min(1),
  lastFreshAt: Instant,
  reason: z.string().min(1),
});
export type StaleSource = z.infer<typeof StaleSource>;

export const DayShape = z.enum(['open', 'normal', 'heavy']);
export type DayShape = z.infer<typeof DayShape>;

export const DashboardPayload = z.object({
  contractVersion: z.literal(CONTRACT_VERSION),
  meta: z.object({
    refreshedAt: Instant,
    /** Denver-local wall clock, derived from a real clock, never a UTC date. */
    refreshedLabel: z.string().min(1),
    unreadApprox: z.number().int().min(0),
    importantApprox: z.number().int().min(0),
    stale: z.array(StaleSource).default([]),
  }),
  dayStrip: z.object({
    dateLabel: z.string().min(1),
    shape: DayShape,
    events: z.array(CalendarEvent).default([]),
  }),
  attention: z.array(AttentionItem).default([]),
  resolved: z.array(ResolvedItem).default([]),
  calendar: z.object({
    events: z.array(ScopedEvent).default([]),
    sources: z.array(z.string()).min(1),
    openCalendarLink: Link,
  }),
  chat: z.object({
    text: z.string().min(1),
    subText: z.string().optional(),
    link: Link.optional(),
  }),
  todos: z.object({
    items: z.array(TodoItem).max(5).default([]),
    remaining: z.number().int().min(0),
    link: Link,
  }),
  status: z.array(StatusRow).default([]),
  tracker: SuggestionTracker.default({}),
});
export type DashboardPayload = z.infer<typeof DashboardPayload>;
