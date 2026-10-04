# Research: Finance software for the Life Hub

**Last updated:** October 4, 2026

**Read this when:** Before changing budgeting software, adding a finance connector, or deciding how the house reads money without a login.

**How to read the tags:** [P] verified from a primary source, [S] a single secondary source, [I] an inference from the evidence. "Re-check" marks a figure that reached us through a summarizing fetch rather than the page itself. Raw research notes are not published; this page is the record.

---

**Verdict in one line: stay on YNAB, do not switch.** No all-in-one app beats YNAB on the one criterion that matters most for the Life Hub: a way for Claude to read your money without a password. YNAB has an official API and an official Zapier app that you already have connected [P] ([api.ynab.com](https://api.ynab.com/); [Zapier YNAB](https://zapier.com/mcp/ynab)). Of the all-in-one rivals, Monarch's official MCP has been paused since 2026-06-29 and its community tools need your email, password and MFA secret [P]; Simplifi, Rocket Money and Empower offer CSV export only [P]; Copilot is Apple-only with a beta MCP [S]; and the only app with a true official read-only connector, PocketSmith, costs about $120 a year for six bank connections and would still mean leaving the UI you like [P, from a summarizing fetch]. Switching would save $9 to $61 a year at most, and the cheaper options are exactly the ones Claude cannot read [I]. The recommended shape is **YNAB ($109) plus a free investment view**: Empower's free dashboard for your own eyes on Fidelity and Principal, and investment balances held as YNAB tracking accounts so Claude sees one picture through Zapier. The two things nobody could confirm, Principal linking and YNAB tracking-account behavior, you can test yourself this week for free inside the subscription you already pay for.

## What we could not verify

Three items the decision leans on were not confirmed by any primary source, and you should treat them as open until you test them. **Principal IRA/401k linking** was not found as supported or broken for any app; the only source is Beagle, a competitor selling a $3.99/mo dashboard, which claims Principal tightened API access in summer 2025 and broke YNAB and Monarch connections, with no dated proof, and it misdates Mint's shutdown, so confidence is low [S] ([Beagle](https://meetbeagle.com/resources/articles/connecting-principal-401k-mint-ynab-monarch-finicity-changes-2025)). **YNAB tracking accounts**: four YNAB help pages were fetched but returned only metadata, so whether an investment account can be linked for balance-only sync is unverified; the researcher's own unsourced recollection is that tracking accounts hold a balance and adjustments, not holdings [I]. **The coverage matrix** is fragments only: no source confirmed or denied insurance-policy tracking in any app, so "no app covers insurance" is absence of evidence, not a finding [I]. Also unconfirmed: Monarch's vendor price table (third-party figures only), YNAB's aggregator, and whether YNAB offers automatic subscription detection.

## Machine reach: only three apps let Claude read without a password

This is the first-class criterion. The question is not "does an API exist" but "can Claude read, and only read, without a stored bank or app password." The table marks each app's best path and whether it passes your security rule.

| App | Official API | Zapier | MCP | Sheets or CSV | Passes the no-password rule? |
|---|---|---|---|---|---|
| YNAB | Yes, REST, bearer token, 200 req/hr [P] | Official app, 8 triggers plus write actions [P] | Community only, listed on YNAB's dev page [P] | CSV | Yes via Zapier (already connected). Token is full-access; no read-only scope found [I] |
| PocketSmith | Yes, free, OpenAPI [P] | Not retrieved | Official, with a separate read-only endpoint, OAuth, in the Claude connector directory [P] | CSV | Yes, and the only true read-only official path |
| Tiller | No | No | No | Writes to your Google Sheet [P] | Yes in effect: Claude reads a Drive file; chain is inferred, not vendor-documented [I] |
| Lunch Money | Yes, v2, bearer token [P] | Official, in-house [P] | Community only [P] | CSV | Partly: token has no read-only scope; a user built a read-only wrapper to work around it [P] |
| Monarch | No public API [P] | Not found | Official MCP paused since 2026-06-29, no restore date [P] | CSV [P] | No. Community libraries require email, password and MFA secret: fails the rule [P] |
| Copilot | No public API [P] | Not found | Beta, read-only, announced 2026-05-15 [S] | CSV [S] | Beta only; community live mode uses a stored Firebase token: fails the rule [P]. Apple-only, no Android [S] |
| Simplifi | No, still a community request as of Aug 2026 [P] | Not found | No | CSV, web only [P] | No machine path |
| Rocket Money | No | No | No | CSV, emailed [P] | No machine path |
| Empower | No consumer API; developer portal is for retirement plan participants [P] | No | No verified server [P] | CSV [P] | No machine path |
| Actual Budget | Node API against your own server [P] | Not found | Not found | CSV | Self-hosted; SimpleFIN tokens stored server-side outside end-to-end encryption [P] |

Sources: [YNAB API](https://api.ynab.com/v1), [YNAB support](https://support.ynab.com/en_us/the-ynab-api-an-overview-BJMgQ3zAq), [PocketSmith MCP docs](https://developers.pocketsmith.com/docs/pocketsmith-mcp-server), [Tiller feeds](https://tiller.com/how-tiller-works/tiller-money-feeds), [Lunch Money feedback board](https://feedback.lunchmoney.app/developer-api), [Lunch Money on Zapier](https://lunchmoney.app/blog/lunch-money-is-now-on-zapier), [Monarch MCP help](https://help.monarch.com/hc/en-us/articles/50207234679956-Monarch-MCP-Connector), [monarch-mcp-jamiew](https://pypi.org/project/monarch-mcp-jamiew/0.4.0), [Copilot release notes](https://releasebot.io/updates/copilot-money), [copilot-money-mcp](https://github.com/ignaciohermosillacornejo/copilot-money-mcp), [Simplifi community](https://community.simplifimoney.com/discussion/683/public-api-edited/p3), [Rocket Money help](https://help.rocketmoney.com/en/articles/10296106-exporting-transactions), [Empower support](https://support-personalwealth.empower.com/hc/en-us/articles/18679551671703-Export-Transactions-To-A-CSV-File-Through-Our-Web-Application), [Actual bank sync](https://actualbudget.org/docs/advanced/bank-sync/).

Two practical notes on YNAB. The API token is full access, so Claude should reach YNAB through Zapier with only the read triggers enabled and the token kept inside Zapier, not in the Hub [I]. YNAB's two vendor pages disagree on whether the 200 requests per hour limit is a rolling window or resets each clock hour [P]; at Life Hub volumes this will not matter. YNAB's API also stamps direct-import transactions with an `import_id` of the form `YNAB:[milliunit_amount]:[iso_date]:[occurrence]`, which makes deduplication in the Hub straightforward [P] ([api.ynab.com/v1](https://api.ynab.com/v1)).

## Institutions: Fidelity mostly links, Principal is a blank

Fidelity links widely but with caveats. Monarch's own connection-status page shows Fidelity via Finicity with "Issues reported" at crawl time [P] ([Monarch status](https://www.monarchmoney.com/connection-status)). Tiller pulls Fidelity through Yodlee and announced an open-banking path that covers many employer 401k sites serviced by Fidelity, but its help page says brokerage feeds "usually pull the balances and transactions ... but not the stock position details" [P] ([Tiller help](https://help.tiller.com/en/articles/432693-tiller-supported-financial-institutions-and-accounts)). Copilot's marketing shows Fidelity as a sample account [P], and Empower has a support article on Fidelity Cash Management grouping, which implies the link works [P] ([Empower support](https://support-personalwealth.empower.com/hc/en-us/articles/23481877705751-Re-sync-Account-Transactions)). YNAB's direct import covers "select US, Canadian, UK, and EU banks" with no investment-feed claim found [P] ([YNAB pricing](https://www.ynab.com/pricing)). Expect balances, not positions, from any household view [I].

Principal appears in no institution list, status page or help article that was retrieved, for any app. Monarch's "Financial Institution Not Listed" page does not mention it [P] ([Monarch help](https://help.monarch.com/hc/en-us/articles/30552887967892-Financial-Institution-Not-Listed)). Plan for Principal to be a manual balance until you confirm otherwise, and use free trials (Empower, Monarch) plus your existing YNAB login to test it [I].

## UI and daily feel: switchers miss exactly what you like

YNAB's ritual is per-transaction approval and assigning every dollar, which reviewers call hands-on and Business Insider lists as a con [S] ([Business Insider](https://www.businessinsider.com/personal-finance/banking/ynab-review-budgeting-app)). The switching evidence, thin and partly old, is consistent: ex-YNABers on Monarch gained rollover of overspending and an investment view but describe "a hard time retraining" and no longer budgeting all their funds [S] ([r/MonarchMoney 2026](https://www.reddit.com/r/MonarchMoney/comments/1usyist/exynabershow_did_you_move_on_from_zero_based); [r/MonarchMoney, older](https://www.reddit.com/r/MonarchMoney/comments/thyio7/how_we_moved_from_ynab_to_monarch_money_thoughts)). A 2025 r/ynab poster who left over price for Actual still said "I miss some features of YNAB" after loving its "philosophy and UI" [S] ([r/ynab](https://www.reddit.com/r/ynab/comments/1ijv9ve/leaving_ynab_after_6_years_pricing_is_the_final)). YipitData found 10.1% of YNAB app-store subscribers also paid Monarch, versus 0.6% of other subscribers, and explicitly says this does not establish switching; it reads more like people pairing the two [S] ([YipitData](https://ask.yipitdata.com/insights/ynab-subscribers-monarch-money-overlap)).

| App | Daily model | Risk for a low-attention-budget user [I] |
|---|---|---|
| YNAB | Approve each transaction, assign dollars; phone for 90% of use per one user [S] | Backlog of unapproved transactions, but visible and finite |
| Lunch Money | Review queue; nothing posts until you look; 10 to 20 min/week per a competitor's blog [S] | Queue grows silently |
| Monarch, Simplifi, Copilot | Tracking-first; review optional; Monarch has "mark all as reviewed" [P, vendor] | Low friction, low structure; denser screens after Monarch's 2024 refresh [P] |
| PocketSmith, Empower | Reports and forecast first [P, vendor] | Passive; little that pulls you back |
| Tiller | Spreadsheet, daily email [S] | DIY; a 2021 r/ynab trial called setup not "a piece of cake" [S] |

On design for attention and executive-function load there is no research evidence, only marketing and listicles [I]. Vendor campaigns and magazine listicles cover the topic, but none of it is evidence [S]. The recurring criteria across those writers are fast mobile capture, a short weekly review, visible goals and no judgment; one vendor's version is "the one you can keep using after a busy week, a bad week, or a distracted week" [S]. By that test the app you already keep using wins [I].

## Cost and coverage: switching saves $9 to $61 at most

| App | Annual | Monthly | Investments and net worth | Subscriptions auto-detected | Source quality |
|---|---|---|---|---|---|
| YNAB | $109 | $14.99 | Tracking accounts only (behavior unverified) | Not verified | Vendor page [P] |
| Monarch Core | about $99.99; Plus $199 | $14.99 | Yes [S] | Yes [P] | Third-party only; vendor table not retrievable [S] |
| Copilot | $95 | $13 | Yes, incl. crypto, real estate [P, vendor] | Yes [P] | $95 vendor; $13 from Finny, a competitor [S] |
| Lunch Money | $100 | $10 | Net worth, crypto [P, vendor] | Yes [P] | Vendor page [P] |
| PocketSmith | Free (2 accounts, manual import); Foundation about $120 (6 banks); Flourish about $200 | $14.95 | Yes, plus forecasting [P, vendor] | Not verified | Vendor plans page via summarizing fetch [P] |
| Tiller | $99 | n/a, annual only | Balances, not positions [P] | Not verified | Vendor $99 via summarizing fetch [P]; $79 from SheetLink and freenance, competitor-adjacent [S] |
| Simplifi | about $48 at $3.99/mo; regular $6.99/mo | | Portfolio with cost basis [P, vendor] | Yes [S] | Vendor via summarizing fetch; promo status unclear [P] |
| Rocket Money | Free; Premium $7 to $14/mo | | Basic balance view [S, competitor] | Yes, core purpose [S] | Vendor article [P] |
| Empower | Free | | Yes, 401k/IRA, fee analyzer [S] | No | Finny review, competitor [S]; vendor page 404 |
| Actual | Free + SimpleFIN $15/yr | | Not stated | No | Vendor docs [P] |

Sources: [YNAB](https://www.ynab.com/pricing), [Monarch](https://www.monarchmoney.com/pricing), [Copilot](http://copilot.money/pricing), [Lunch Money](https://lunchmoney.app/pricing), [PocketSmith plans](https://my.pocketsmith.com/plans), [Tiller](https://tiller.com/pricing/), [Simplifi](https://www.quicken.com/products/simplifi), [Rocket Money](https://www.rocketmoney.com/learn/personal-finance/how-much-does-rocket-money-cost), [Empower review](https://getfinny.app/blog/empower-personal-dashboard-review-2026), [SimpleFIN](https://actualbudget.org/docs/advanced/bank-sync/simplefin/).

YNAB is at the top of the range, but the gap to the all-in-one apps that can also show investments is $9 to $14 a year (Monarch, Copilot, Lunch Money), and the one that saves real money, Simplifi at about $61, has no machine path at all [I]. Kubera, at $250 a year, is out of range while income is tight [P, summarizing fetch] ([Kubera](https://www.kubera.com/)). Insurance was not mentioned in any feature list, so expect to track policies by hand or in Notion regardless of app [I]. Empower is free because it sells advisory at 0.49% to 0.89% of assets and calls people above a balance threshold [S]; take the dashboard, decline the calls.

## The three strategies, side by side

| Strategy | Year-1 cost | How Claude reads it | What it misses |
|---|---|---|---|
| A. Stay on YNAB alone | $109 | Zapier (already connected) | Investments only as manual or balance-only tracking accounts; Principal unverified; no confirmed subscription detection; insurance |
| B. YNAB plus a free investment view (recommended) | $109 | Zapier for YNAB; investments reach Claude as YNAB tracking balances. Empower itself has no machine path | Same gaps as A for Principal and insurance; Empower sales calls; a second login for you (not for Claude) |
| C. Switch to one all-in-one | $48 to $120 | Only PocketSmith passes the security rule today; Monarch fails it until its MCP returns; Simplifi and Rocket have no path; Copilot is Apple-only | Loses the YNAB UI and method; savings of $9 to $61 or a cost increase; Principal still unverified |

Choose B. Keep YNAB and the Zapier link, but tighten Zapier to read triggers only [I]. Add the brokerage and retirement accounts as YNAB tracking accounts now and try linking them; that test is free and settles the two biggest unknowns inside a week [I]. Use Empower's free dashboard for your own view of holdings and retirement, knowing Claude will not see it [P on the lack of API]. If you want a no-password reader for investments specifically, PocketSmith's free tier holds two manually imported accounts and its official read-only MCP is in the Claude connector directory, which would give the Hub a $0 investment feed at the cost of a monthly manual balance update [P on the tier and MCP; I on the pairing].

Set two tripwires for revisiting: Monarch restores its MCP connector and confirms Principal links, or YNAB adds a read-only token scope. Either would change the answer; nothing in the current field does [I].

## Gaps and method

The research tool was rate-limited during all three notes, so coverage is partial: the UI note's App Store rating query was never completed, the cost note fell back to summarizing fetches that return paraphrased page text rather than verbatim prices, and Reddit threads came back as snippets, not full posts. Not verified: Lunch Money rate limits, PocketSmith's Zapier support and pricing beyond the plans page, Actual's MCP status, Zapier apps for Monarch, Copilot, Simplifi, Rocket Money and Empower, aggregators behind YNAB, Copilot, PocketSmith and Simplifi, YNAB's own subscription detection, and any 2026 shutdowns or acquisitions beyond Mint's 2024 closure. Several comparison figures come from competitors' marketing (Finny, SheetLink, Beagle, FinancialAha, BudgetEase) and are tagged [S] above. No attention-focused UX research on finance apps was found at all; that section is assembled from vendor pages and listicles.

## Conclusion

The field moved against all-in-one apps on the exact axis the Life Hub needs. Twelve months ago Monarch would have been the obvious switch; its MCP is now paused at a data provider's request, which is a reminder that machine access to aggregated bank data sits on partner permissions that can be withdrawn without notice. YNAB's API and Zapier app are older, duller and still standing, and that stability is worth more to an automation project than a prettier net-worth chart.

The real finding is that your remaining gaps are not app problems. Principal, insurance and investment holdings will be manual entries in any product on this list, so the Hub should treat them as a small recurring task that Claude prompts for, not as a reason to migrate. Spend the switching energy on a free test of YNAB tracking accounts this week, and keep the $109.
