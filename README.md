# FlyRank Capstone

A concise capstone repository for building a flight-ranking application with modern Node.js tooling and AI-assisted development.

## Status
- Initial repository scaffold is ready.
- Core application code is pending implementation.

## Requirements
- Node.js 24 LTS
- AI coding assistant available for implementation support

## Development
- Use the Node.js 24 LTS runtime for local development.
- Keep commits small and focused.
- Document new features and setup changes clearly.
- Use the AI coding assistant for help with coding, review, and implementation guidance.

## Notes
This repository is prepared for an iterative development workflow, with AI-assisted coding and a professional Node.js 24 LTS setup.

## Settings UI
A production-quality settings UI is included as a small standalone frontend under the `settings` folder.

- Open `settings/index.html` in a browser to try the form.
- Uses semantic HTML, accessible labels, keyboard focus styles, and responsive layout.
- Validation rules: `username` (min 3 chars), `email` (valid), `updateInterval` (integer 1–60 minutes).
- Settings are saved to `localStorage` under the key `flyrank.settings`.

To run the validation tests (no dependencies required):

```bash
node settings/tests/run-validation-tests.mjs
```

