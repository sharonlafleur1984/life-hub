import { z } from 'zod';
import { Instant, Link } from './primitives.js';

/** Which real calendar an event came from. All four are always-on sources. */
export const CalendarSource = z.enum([
  'primary',
  'blake-family',
  'kids-mirror',
  'personal-mirror',
  'other',
]);
export type CalendarSource = z.infer<typeof CalendarSource>;

/** Where an event happens. Never inline on the page; it lives in the popover. */
export const EventPlace = z.discriminatedUnion('type', [
  z.object({ type: z.literal('video'), joinUrl: z.string().url() }),
  z.object({ type: z.literal('address'), address: z.string().min(1), directions: Link }),
  z.object({ type: z.literal('none') }),
]);
export type EventPlace = z.infer<typeof EventPlace>;

export const CalendarEvent = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  /** Offsets are authoritative. A source timeZone label is not to be trusted. */
  start: Instant,
  end: Instant.optional(),
  allDay: z.boolean().default(false),
  source: CalendarSource,
  place: EventPlace.default({ type: 'none' }),
  link: Link.optional(),
  /** Present when this is one occurrence of a series we expanded ourselves. */
  seriesId: z.string().optional(),
  note: z.string().optional(),
});
export type CalendarEvent = z.infer<typeof CalendarEvent>;

/** Which bucket of the calendar panel's scope toggle an event belongs to. */
export const EventScope = z.enum(['this-week', 'this-month', 'next-month']);
export type EventScope = z.infer<typeof EventScope>;

export const ScopedEvent = CalendarEvent.extend({ scope: EventScope });
export type ScopedEvent = z.infer<typeof ScopedEvent>;
