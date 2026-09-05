# Contracts

`DashboardPayload` in `@life-hub/domain` is the agreement between the daily job
and the published dashboard. The job writes it; the page renders it.

Rules:

- The page never reads a payload it has not validated.
- The job never publishes a payload that fails validation.
- Breaking the shape means bumping `CONTRACT_VERSION` and teaching the page to
  read both versions until the old one is gone.

`schema.json` is generated from the Zod schema. Do not hand-edit it.
