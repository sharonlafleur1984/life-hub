# Roadmap

**Last updated:** October 6, 2026

| Now                                                                                                                                                                                                                           | Next                                                                                        | Later                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **A real app:** the Life Hub as tested code on the design system, not a page a prompt rebuilds ([#16](https://github.com/sharonlafleur1984/life-hub/issues/16))                                                               | **Ask Claude without leaving:** a chat in the dashboard ([Backlog](Backlog))                | **Can someone else use it?** A demo, then coaching sessions and pre-built versions |
| **Mornings that don't break:** a small daily job writes the data, and the page only shows it ([#18](https://github.com/sharonlafleur1984/life-hub/issues/18), [#19](https://github.com/sharonlafleur1984/life-hub/issues/19)) | **Private data stays private:** a login and data rules before any real data reaches the app | **Counts that are current:** live numbers when the page opens, not once a day      |
| **Nothing comes due by surprise:** every recurring obligation shows up 30 days ahead (tracked privately)                                                                                                                      | **No more long prompt:** the house manager makes every change                               |                                                                                    |
| **Every area covered:** 4 of 8 specialist skills written                                                                                                                                                                      |                                                                                             |                                                                                    |

## Milestones

| Milestone              | Done when                                                                                                                                 | Timing                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| App shell live         | [#17](https://github.com/sharonlafleur1984/life-hub/issues/17): a React app on the Life Hub theme, on Netlify, behind a login             | Not set yet               |
| Dashboard from data    | [#18](https://github.com/sharonlafleur1984/life-hub/issues/18): the app renders the daily payload, with a fallback if the data can't load | After the app shell       |
| Daily job live         | [#19](https://github.com/sharonlafleur1984/life-hub/issues/19): the job writes the payload and the long prompt is retired                 | After dashboard from data |
| Comes-due list running | Every recurring obligation surfaces 30 days ahead                                                                                         | Not set yet               |
| Every area staffed     | Eight of eight specialist skills written                                                                                                  | Not set yet               |

<details>
<summary>Already done</summary>

- Design system and Storybook live, with contrast and visual checks ([design-system-skeleton](https://github.com/sharonlafleur1984/design-system-skeleton))
- CI passing on every pull request; security alerts and code scanning on (Oct 2026)
- Three homes decided: repo, Notion, Google Drive (Oct 2026)

</details>

## What could go wrong

| If this happens...                            | ...then                                 | So we're...                                                                                                |
| --------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Personal details land in this public repo     | Private family information is public    | Keeping household data in Notion and Supabase only, and Sharon reviews every pull request before it merges |
| Structure gets built before anything needs it | Empty databases and screens nobody uses | Building only when something real is waiting to go in it                                                   |
| Upkeep outgrows the time available            | The system gets abandoned               | Editing and deleting before adding; if it can't be explained in two minutes, it's too complex              |
| Tool upgrades eat the build time              | Work that protects nothing              | Security fixes only until the app ships ([#20](https://github.com/sharonlafleur1984/life-hub/issues/20))   |

**Where things live:** [Backlog](Backlog) for ideas. [Issues](https://github.com/sharonlafleur1984/life-hub/issues) for tasks. [Decisions](Decisions) for choices made.
