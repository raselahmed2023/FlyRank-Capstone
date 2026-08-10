# AI-Assisted Workflow Comparison

## Overview

For this exercise, I built the same settings form twice to compare the results of a vague prompt and a precise prompt. The goal was to see how prompt quality affects correctness, accessibility, validation, testing, and review effort.

## Round 1: Vague Prompt

The first version was created using a very short prompt:

> Create a settings form with validation for this project.

The AI produced a working settings form with username, email, update interval, notifications, Save, and Reset controls. The form was functional, but the implementation was basic. One mistake I identified was the update interval validation. The first version allowed values from 1 to 1440 minutes, while the intended requirement for the improved version was 1 to 60 minutes.

The first version also had less explicit accessibility and verification work. It did not include a separate test file or a dedicated validation module.

## Round 2: Precise Prompt

For the second version, I provided detailed requirements, validation rules, accessibility expectations, responsive behavior, and a verification step.

The resulting implementation was more structured. Validation logic was moved into `settings/validation.js`, and automated validation checks were added in `settings/tests/run-validation-tests.mjs`.

The precise version also improved accessibility through semantic HTML, accessible labels, keyboard focus styles, and a responsive layout. The update interval rule was correctly restricted to values between 1 and 60 minutes.

## Comparison

The branch diff showed 160 insertions and 93 deletions across six files. The precise version required more initial prompting, but it reduced review and correction effort because the expected behavior was clearly defined before implementation.

The vague version was faster to generate, but I had to inspect the result more carefully to identify incorrect assumptions and missing verification.

## What I Learned

This exercise showed that precise prompts produce more reliable and maintainable results. Clear constraints, expected behavior, accessibility requirements, and verification steps help the AI make fewer assumptions.

I also learned that AI-generated code should always be reviewed, even when the feature appears to work visually.