# Capdash2

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Main Technologies Used

* [Angular 4](https://angular.io/) Angular4 JavaScript Client-Side MVC Framework (bundles Typescript and RxJS)
* [Redux](http://redux.js.org/) predictable state container for JavaScript apps
* [Redux Observables](https://redux-observable.js.org/) RxJS 5-based middleware for Redux.
* [Jasmine](https://jasmine.github.io/) Behavior-driven development framework for unit testing JavaScript code
* [Protractor](http://www.protractortest.org/#/) end-to-end test framework for Angular and AngularJS applications; runs tests against your application running in a real browser, interacting with it as a user would.
* [CucumberJS](https://cucumber.io/docs/reference/javascript) Cucumber implementation written in pure JavaScript, for feature tests.

## Architectural Notes


## Development server
Run `npm run json-server` along with one of the following:

- `npm start` for standard build
- `npm run hmr` for hot module reloading. Preferred option for development, recompiles changed files only.

Open your browser and navigate to http://localhost:4200/

NOTE: JSON-Server is a substitute for actual Ruby on Rails backend and is not needed if running the Rails server.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Please note that the `npm test` command will run `ng lint` after running unit tests.

Run `npm run coverage` to generate a unit test coverage report.  `npm run coverage-open` will open the coverage report in a new browser tab.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [CucumberJS](https://cucumber.io/docs/reference/javascript) and [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `npm run json-server`.

For much faster e2e execution, use `npm run e2e-no-server`.  Before doing so, run `npm run json-server` along with `npm run hmr`.

E2E test results are available in HTML format.  Run `npm run e2e-report` to run e2e tests (using e2e-no-server) and open the newly created report after completion.  Run `npm run e2e-report-open` to simply open the most recent report.  

## Code Linting

Run `npm run lint` to run Typescript linter across all project files, including e2e specs.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
