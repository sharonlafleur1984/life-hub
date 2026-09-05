# 3. Public repository, code only

Date: 2026-09-05

## Status

Accepted

## Context

The daily refresh runs in a fresh cloud session with no credentials and no
clone of a private repository. Getting private code to that runner needs
plumbing, and that plumbing is the part most likely to break unattended.

## Decision

The repository is public and contains code only. No data, no secrets, no
exports, no personal details. The scheduled job fetches a built bundle by URL.

## Consequences

Every contributor must treat personal data as something that never enters a
commit. Fixtures for tests are recorded from real responses and scrubbed before
they land. Anything that must stay private lives in the artifact's own store,
not here.
