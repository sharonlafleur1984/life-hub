import { z } from 'zod';
import { Link } from './primitives.js';

export const TodoItem = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  link: Link,
  priority: z.enum(['high', 'normal', 'low']).default('normal'),
  sendToReminders: z.boolean().default(false),
  status: z.string().min(1),
  category: z.string().optional(),
});
export type TodoItem = z.infer<typeof TodoItem>;

/** One row of the system-status modal. */
export const StatusRow = z.object({
  name: z.string().min(1),
  note: z.string().min(1),
  state: z.enum(['active', 'started', 'empty', 'planned']),
});
export type StatusRow = z.infer<typeof StatusRow>;
