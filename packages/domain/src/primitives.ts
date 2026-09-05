import { z } from 'zod';

/** Where a fact came from. The dashboard never shows an item without one. */
export const SourceKind = z.enum(['gmail', 'calendar', 'slack', 'notion']);
export type SourceKind = z.infer<typeof SourceKind>;

/**
 * A link the page may render. The house rule is: buttons are real, or absent.
 * Every href must open something that already exists, so the shape carries the
 * source kind rather than a bare string.
 */
export const Link = z.object({
  kind: SourceKind.or(z.enum(['maps', 'mailto', 'calendar-template', 'external'])),
  href: z.string().url().or(z.string().startsWith('mailto:')),
  label: z.string().min(1),
});
export type Link = z.infer<typeof Link>;

/** How loudly an item asks for attention. Ordered, lowest first. */
export const Urgency = z.enum(['fyi', 'soon', 'action', 'deadline']);
export type Urgency = z.infer<typeof Urgency>;

export const URGENCY_ORDER: readonly Urgency[] = ['fyi', 'soon', 'action', 'deadline'];

/**
 * Topics that never get an action button, by standing rule: money, health and
 * anything touching credentials. Curation checks this, not the renderer.
 */
export const SensitiveTopic = z.enum(['money', 'health', 'credentials']);
export type SensitiveTopic = z.infer<typeof SensitiveTopic>;

/** An ISO-8601 instant. Always stored with an offset, never a bare local time. */
export const Instant = z.string().datetime({ offset: true });
export type Instant = z.infer<typeof Instant>;
