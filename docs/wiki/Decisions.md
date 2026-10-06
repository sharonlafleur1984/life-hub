# Decisions

**Last updated:** October 5, 2026

Two kinds of decision, two homes. Nothing is kept in both.

| Kind                                                               | Where it lives                                                    | Why                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------- |
| Household decisions: areas, rules, tools, privacy boundary, naming | Notion, Life Hub, Project Documents, the Decisions page (private) | They describe a real household and never leave it |
| Code decisions: architecture, libraries, contracts                 | `docs/adr/` in this repo, one record per decision                 | They describe software and belong next to it      |

Research in this wiki informs decisions but does not record them. When a research page leads to a decision, the decision is written in its home above and the research page is left as it was.

## Decisions that shape this repo

- **Public repo, code and research only.** No data, no secrets, no personal details. Household documents stay in Notion. Decided 26 Sep 2026.
- **Set up like After Graduation.** Wiki pages edited in `docs/wiki/` and published on merge; a Documents index with a read-this-when column; every document also gets one row in the private Notion index. Decided 26 Sep 2026.
- **Three homes.** Product and code live in this repo. Household documents live in Notion. Physical files live in Google Drive, linked from Notion. Decided 5 Oct 2026.
- **The Life Hub becomes a real web app.** React, TypeScript and Storybook, hosted on Netlify, data in Supabase. The Claude artifact is the wireframe until then. See [ADR 0004](https://github.com/sharonlafleur1984/life-hub/blob/main/docs/adr/0004-web-app-replaces-artifact.md). Decided Oct 2026.
- **Code work is a priority.** Reverses the 5 Sep 2026 decision to deprioritize it below the household work. Decided Oct 2026.
