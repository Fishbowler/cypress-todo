# cypress-todo

Cypress tests of Alan Richardson's TODO app

## Running

There's a Github Action running any commits or PRs to main

To run locally, clone, install dependencies with `npm ci` and run with `npm test`.

## State

Things I like:

* Page object model
* Visual regression testing
* Checks for explicit cookies

Things I want:

* Generic checks for error-level logging in the console
* More variation on the established tests, e.g.
  * Can I uncheck the 2nd task of a list of 5?
  * What happens with extended character sets, e.g. emoji?
* Use the fixtures to abstract magic strings
