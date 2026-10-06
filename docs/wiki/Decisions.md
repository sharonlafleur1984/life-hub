# Decisions

**Last updated:** October 4, 2026

Two kinds of decision, two homes. Nothing is kept in both.

| Kind                                                               | Where it lives                                                    | Why                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------- |
| Household decisions: areas, rules, tools, privacy boundary, naming | Notion, Life Hub, Project Documents, the Decisions page (private) | They describe a real household and never leave it |
| Code decisions: architecture, libraries, contracts                 | `docs/adr/` in this repo, one record per decision                 | They describe software and belong next to it      |

Research in this wiki informs decisions but does not record them. When a research page leads to a decision, the decision is written in its home above and the research page is left as it was.

## Decisions that shape this repo

- **Public repo, code and research only.** No data, no secrets, no personal details. Household documents stay in Notion. Decided 26 Sep 2026.
- **Set up like After Graduation.** Wiki pages edited in `docs/wiki/` and published on merge; a Documents index with a read-this-when column; every document also gets one row in the private Notion index. Decided 26 Sep 2026.
- **Deliberately deprioritized code work.** The monorepo would make the daily jobs cheaper and testable but adds no life coverage, so it sits below the household work. Decided 5 Sep 2026.
