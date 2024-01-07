# cypress-todo

Cypress tests of Alan Richardson's TODO app

![CI](https://github.com/Fishbowler/cypress-todo/actions/workflows/build.yml/badge.svg)

## Running

There's a Github Action running any commits or PRs to main

To run locally, clone, install dependencies with `npm ci` and run with `npm test`.

## State

Things I like:

* Page object model
* Visual regression testing
* Checks for explicit cookies
* Use of Github Actions

Things I want:

* Generic checks for error-level logging in the browser console - it will pick up javascript errors and missing resources
* Store credentials in an Ansible vault - plain text credentials are gross

Additional tests needed:

* Admin View (it has no functionality, but for completeness)
  * Including log out
* Within Login Page
  * Remember me (an additional cookie property is set)
* Within task list:
  * Mark all as complete
  * Clear completed tasks button
* Generally, more variation on the established tests, e.g.
  * Can I uncheck the 2nd task of a list of 5?
  * What happens with extended character sets, e.g. emoji?
