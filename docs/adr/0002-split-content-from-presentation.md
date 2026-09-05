# 2. Split dashboard content from its presentation

Date: 2026-09-05

## Status

Accepted

## Context

The dashboard was a single 61KB HTML file with content and design welded
together. The daily job had to read all 1,282 lines and re-emit all of them to
change five. The scheduled runs stopped publishing: the artifact tool refuses a
republish from a session that has not read the current version in full, and the
job was spending its whole budget on gathering before it reached the publish.

## Decision

The page becomes a shell that renders from data. The daily job writes a
validated `DashboardPayload` and never touches HTML. The payload shape is
versioned in `contracts/`.

## Consequences

The daily run gets small and cheap, and cannot fail the publish gate. Design
changes become a separate, rare job that does not touch data. The page must
carry a baked-in last-known snapshot so it never renders blank when the store
is unreachable.
