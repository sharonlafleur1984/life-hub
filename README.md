# Life Hub

The code behind Sharon's Life Hub: a once-daily read of Gmail, Google
Calendar, family Slack and the Life Hub Notion boards, curated down to the
handful of things that actually need a decision, and shown in the Life Hub web
app (React, TypeScript and Storybook, hosted on Netlify, data in Supabase).
Until the app exists, a Claude artifact serves as the wireframe.

This repository holds **code only**. No personal data, no credentials, no
exports. That is what lets the scheduled job fetch a built bundle without
authenticating.

## Layout

| Path                  | What lives there                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `packages/domain`     | The semantic layer. Zod schemas are the source of truth; types are derived. Knows nothing about any API.  |
| `packages/adapters/*` | Planned. One per source. Maps raw API responses to domain objects. Every provider quirk is absorbed here. |
| `packages/curation`   | The rules: ranking, the button policy, suggestion aging. Pure functions, no I/O.                          |
| `packages/render`     | Planned. Curated payload to dashboard JSON.                                                               |
| `apps/daily-refresh`  | Planned. What the scheduled job runs.                                                                     |
| `apps/dashboard`      | Planned. The Life Hub web app, deployed to Netlify.                                                       |
| `contracts`           | The versioned agreement between job and page.                                                             |
| `docs/adr`            | Why things are the way they are.                                                                          |

## Working on it

```bash
npm install
npm run check   # lint, format, typecheck, test with coverage
```

## The rules that are not negotiable

1. **Buttons are real, or absent.** Every link opens something that already
   exists. A button that means "go ask Claude" is worse than no button.
2. **Never fabricate logistics.** Drive times, deadlines, attire and durations
   are shown only when they came from a real source.
3. **Money, health and credentials items never get an action button.**
4. **Publishing beats completeness.** A refresh that publishes thinner data
   beats one that gathers perfectly and publishes nothing.
5. **A failed source stales one panel**, and says so. It never cancels the run.
