# CLAUDE.md

Start here. This file tells Claude (and any developer) where everything lives, so only the needed file gets opened.

## What this is

Life Hub: a household operating system run by Claude, with Notion as the system of record. One house manager coordinates eight life-area specialists, each a Claude skill. This repo holds the code-facing side: the `life-hub` TypeScript monorepo (planned, see the Repo Plan in Notion) and the public wiki, including research the house relies on.

## Rules

- **How Sharon works:** the process, skills and templates live in [how-i-work](https://github.com/sharonlafleur1984/how-i-work). This file only covers what's specific to Life Hub.
- **Public repo, code and research only.** No data, no secrets, no personal details, no account identifiers, no health details. Household documents stay in Notion, which is private. If a page needs a household detail to make sense, it does not belong here.
- **Specialist names stay in the household.** The house's internal names for its specialists never appear in this repo. Use the role instead: house manager, parenting specialist, finance specialist, and so on.
- **No em dashes** in anything written for Sharon.
- **Every fact needs a source link,** or a label saying it's an estimate. Research pages carry [P] [S] [I] confidence tags; keep them.
- **Ask before changing or deleting anything.** A recommendation is not approval.
- **Wiki pages are edited in `docs/wiki/`,** never in the GitHub Wiki tab. They publish automatically on merge to main.

## Where everything is

Start with [`docs/wiki/Documents.md`](docs/wiki/Documents.md): every document in this repo and when to open it. Open only what matches the task.

When you add or remove a document, update its row in `docs/wiki/Documents.md` in the same pull request, and in Sharon's private Notion index (Project Documents, Project = Life Hub) in the same pass.

## Skills to use

- `house-manager` for any Life Hub work; it holds the rules every specialist shares
- `idea-bench` whenever a specialist pitches an idea
- `product-engineer` for any code work
- `product-designer` for design, page structure and Storybook work
- `ux-writer` for any words people will read
- `working-with-sharon` for how to write to Sharon

## Outside the repo (private)

- Household documents, decisions and the document index: Notion, Life Hub, Project Documents
- Tasks: Notion, Life Hub, To Do
- The Blueprint and the Idea Bench: Claude artifacts, linked from Project Documents
