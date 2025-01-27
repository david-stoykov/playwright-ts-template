# README

This is a simple template for Playwright test framework with pom, fixtures, eslint, prettier and husky pre-commit hooks

# AFTER CLONING

Run `npm run setup` this will install all dependencies and initialize the husky library.

# Inside this repo we have:

- pages (seperated per feature which houses locators and methods)
- tests (\*.spec.ts which is where we're using playwright/test framework to run our tests)
- utils (Helper methods, currently only fixtures)

# How to run a test

- Simply use the default Playwright command - `npx playwright test`, you can add `--headed` to it to see the tests execute

# PRE-COMMIT HOOK

upon attempting to git commit , our husky/eslint/prettier will run according to our rules highlighted in eslint.config.mjs
this will indentify any errors or issues that you may be trying to commit.
