# .context

Project context that isn't derivable from the code: client requests, decisions and a running change log. Agents read this before picking up a task (see `CLAUDE.md`).

## Layout

- `client-requests/YYYY-MM-DD-<slug>.md`: one file per client communication, dated by when it was received. Contains the verbatim source text, a breakdown of what it asks for, open questions, and per-item status. Never edit the verbatim section; add clarifications and answers below it, dated.
- `changelog.md`: running, newest-first log of what has shipped, linked to the request that triggered it and the PR.

## Rules

- New client email or message → new dated file in `client-requests/`. Date = date received (use today's date if unknown).
- Update item statuses in the request file as work progresses (`todo`, `blocked`, `in progress`, `done`) and add a `changelog.md` entry when a PR is opened or merged.
- Record decisions and answers from the user with the date, so later tasks don't re-ask.
- Client attachments (images, logos) are not stored here. Record where they came from and where they were placed in `public/`.
