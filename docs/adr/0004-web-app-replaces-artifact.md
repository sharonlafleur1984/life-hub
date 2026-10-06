# 4. The Life Hub web app replaces the artifact

Date: 2026-10-05

## Status

Accepted. Supersedes the parts of ADR 0002 and ADR 0003 that assume the
dashboard is a Claude artifact.

## Context

ADR 0002 made the dashboard a Claude artifact that renders from a data
payload, and ADR 0003 kept private data in that artifact's own store. The
artifact was always a fast way to try the dashboard, not the product. The Life
Hub is now meant to exist as real, tested code with its own design system.

## Decision

The dashboard becomes the Life Hub web app: React, TypeScript and Storybook,
hosted on Netlify, with data and server functions in Supabase. The Claude
artifact stays as the wireframe until the app replaces it. The split between
content and presentation from ADR 0002 still holds; only the page that renders
the payload changes.

## Consequences

`apps/dashboard` is a web app, not an artifact shell. Private data moves from
the artifact's store to Supabase, behind a login, and still never enters this
repo. Netlify builds a preview link for every pull request.
