# Decisions

**Last updated:** October 6, 2026

Two kinds of decision, two homes. Nothing is kept in both.

| Kind                                                               | Where it lives                                                    | Why                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------- |
| Household decisions: areas, rules, tools, privacy boundary, naming | Notion, Life Hub, Project Documents, the Decisions page (private) | They describe a real household and never leave it |
| Code decisions: architecture, libraries, contracts                 | `docs/adr/` in this repo, one record per decision                 | They describe software and belong next to it      |

Research in this wiki informs decisions but does not record them. When a research page leads to a decision, the decision is written in its home above and the research page is left as it was.

## Decisions that shape this repo

| Decision                            | What it means                                                                                                                                                                                                                  | Decided      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| Public repo, code and research only | No data, secrets or personal details; household documents stay in Notion                                                                                                                                                       | Sep 26, 2026 |
| Set up like After Graduation        | Wiki pages edited in `docs/wiki/` and published on merge, a Documents index, and one row per document in the private Notion index                                                                                              | Sep 26, 2026 |
| Three homes                         | Product and code here, household documents in Notion, physical files in Google Drive linked from Notion                                                                                                                        | Oct 5, 2026  |
| The Life Hub becomes a real web app | React, TypeScript and Storybook on Netlify, data in Supabase; the Claude artifact is the wireframe until then ([ADR 0004](https://github.com/sharonlafleur1984/life-hub/blob/main/docs/adr/0004-web-app-replaces-artifact.md)) | Oct 2026     |
| Code work is a priority             | Reverses the Sep 5, 2026 decision to put it below the household work                                                                                                                                                           | Oct 2026     |
