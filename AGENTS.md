# AGENTS.md

## Project Snapshot

This repository stores the Svelte v5 source code for building the static website for Alex Lende, a principal software engineer consultant.

## Core Priorities

1. Simplicity first - code is a communication tool for humans to tell other humans what the computer is doing
2. Performance when it counts - simple code is often performant enough, measure before optimizing
3. Correctness over convenience - if a tradeoff is required, choose correctness

## Adding New Functionality

First check for other instances of similar logic in the codebase. Evaluate if the existing logic should be extracted into a shared utility. "Don't Repeat Yourself" is helpful in some circumstances, but it is not gospel. Sometimes abstracting too early can make the code harder to evolve over time. Use your best judgement according to the core priorities.

Don't be afraid to change or refactor existing code to better fit the changing requirements. You should check the git history to better understand the context of the existing code if it isn't immediately obvious. If you find a better way to do something given the updated requirements, do it. Proposing sweeping changes that improve long-term maintainability is encouraged.

Before you complete the task, do one pass of simplification of the code while maintaining correctness. Warn if the simplification has a potential performance impact.

## Task Completion Requirements

Ensure `bun run check`, `bun run format`, and `bun run lint` all pass.
