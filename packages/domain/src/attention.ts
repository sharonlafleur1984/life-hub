import { z } from 'zod';
import { Instant, Link, SensitiveTopic, SourceKind, Urgency } from './primitives.js';

/**
 * One thing worth Sharon's attention today. `action` is optional on purpose:
 * most items have no honest next click, and that is correct, not a gap.
 */
export const AttentionItem = z.object({
  /** Stable across runs so the tracker and resolution logic can follow it. */
  id: z.string().min(1),
  source: SourceKind,
  sourceLabel: z.string().min(1),
  sourceLink: Link,
  summary: z.string().min(1),
  detail: z.string().optional(),
  urgency: Urgency,
  /** A real deadline found in the source. Never inferred. */
  dueAt: Instant.optional(),
  topics: z.array(SensitiveTopic).default([]),
  action: Link.optional(),
  /** Confirmed by email but not on any calendar we can check. */
  suggestion: z.object({ reason: z.string().min(1), addToCalendar: Link }).optional(),
});
export type AttentionItem = z.infer<typeof AttentionItem>;

export const ResolvedItem = z.object({
  id: z.string().min(1),
  what: z.string().min(1),
  whenLabel: z.string().min(1),
  resolvedAt: Instant,
  /** How we know it closed. `assumed` is the tracker aging out, and says so. */
  basis: z.enum(['verified', 'assumed', 'user']),
  link: Link.optional(),
});
export type ResolvedItem = z.infer<typeof ResolvedItem>;

/** Suggestions we cannot verify get counted, then retired rather than nagged. */
export const TrackerEntry = z.object({
  firstSeen: z.string().date(),
  timesShown: z.number().int().min(1),
});
export type TrackerEntry = z.infer<typeof TrackerEntry>;

export const SuggestionTracker = z.record(z.string(), TrackerEntry);
export type SuggestionTracker = z.infer<typeof SuggestionTracker>;

export const TRACKER_RETIRE_AFTER = 4;
