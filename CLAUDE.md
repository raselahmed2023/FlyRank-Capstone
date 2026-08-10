# Project Guidelines

## Project
FlyRank Capstone

## Environment
- Node.js 24 LTS
- Git and GitHub
- VS Code

## AI Assistance
This project uses AI coding assistance for reviewing documentation, suggesting improvements, and supporting development tasks.

## Development Guidelines
- Write clean and readable code
- Use meaningful variable and function names
- Keep components reusable and focused
- Avoid unnecessary dependencies
- Follow the existing project structure
- Do not commit secrets or environment variables
- Review AI-generated code before accepting changes

## Git Conventions
Use Conventional Commits.

Examples:
- feat: add new feature
- fix: resolve bug
- docs: update documentation
- chore: update project configuration
- refactor: improve code structure

## AI Instructions
When assisting with this project:
- Keep solutions simple and maintainable
- Explain major changes
- Do not create unnecessary files
- Follow the current tech stack and conventions

## Project-Specific Rules Learned

1. Settings forms must validate update intervals as integers between 1 and 60 minutes.
2. Form validation logic should be kept in a separate reusable module instead of being mixed directly into UI event handlers.
3. Every settings form must include accessible labels, keyboard-visible focus states, and validation tests for invalid and boundary values.