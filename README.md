# GTS e2e tests

For the GTS project e2e test automation, we use Cypress JavaScript End to End testing framework.

More info about Cypress can be found on [Cypress official website](https://www.cypress.io/).

We write our tests in TypeScript. Cypress ships with official [type declarations](https://github.com/cypress-io/cypress/tree/develop/cli/types) for [TypeScript](https://www.typescriptlang.org/). More info about using Cypress with Typescript can be found [here](https://docs.cypress.io/guides/tooling/typescript-support.html#Transpiling-TypeScript-test-files).

Because of the size and complexity of the GTS project we use Page Object Pattern with Cypress. More info about using Cypress with Page Object Pattern can be found [here](https://medium.com/reactbrasil/deep-diving-pageobject-pattern-and-using-it-with-cypress-e60b9d7d0d91).

## Installation

Use [Yarn](https://pip.pypa.io/en/stable/) package manager to install Cypress and all dependencies. You can install Yarn through the [Homebrew package manager](https://brew.sh/). This will also install [Node.js] if it is not already installed.

```bash
yarn install
```

## Usage

Run test in headless mode:

```
yarn cypress run
```

or

```
yarn cy:test
```

While developing tests it might be very useful to run tests in the [launched browser](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers). Cypress headed mode is comfortable for debugging. To run your tests in the headed mode open cypress app

```
yarn cypress open
```

and run all tests or select specific tests to run or just run:

```
yarn cypress run --headed
```

Run the single spec by providing `--spec` argument:

```
yarn cypress run --spec "cypress/integration/<path_to_the_spec>.ts"
```

All important URLs and credentials are set as Gitlab CI variables at the [project CI settings](https://gitlab.bootiq.io/jira-gtsalive/cypress-test/-/settings/ci_cd). To run tests locally change the name of cypress env file `cypress.env.json.sample` to `cypress.env.json`. The last-mentioned file is gitignored, so if you create a new Cypress variable, don't forget to add it to the `cypress.env.json.sample` file so other people can reuse it for their local runs. To add the environment variable at Gilab CI you have to add `CYPRESS_` prefix to the variable name, i.e. `"ABCD_BASE_URL": "http://xxx.com"` variable from `cypress.env.json` at Gilab CI variables settings has name `CYPRESS_ABCD_BASE_URL`. Only project maintainers have the rights to add the variables. If you need to add your own variable, contact the maintainer or ask for this right.

Cypress can record videos of our test runs. To enable video recording, replace the default `false` value of `video` argument with `true` at cypress config file `cypress.json`. Recorded videos can be found at `cypress/videos` path. These video files are gitignored.

Cypress takes screenshots on test fails. These screenshots can be found at `cypress/screenshots` path. If your tests failed during the CI pipeline run, you can view these screenshots at CI run artifacts tab.

Currently, the testing pipeline has been set to run once a day (master) and after commiting to branches or merge the branch to master.

### Specs

All specs are located at the `cypress/integration/<name_of_product>/` paths.

### Page objects

Since we use the Page Object pattern, we define UI elements and functions which work with these elements and have been called at specs at the following path `cypress/support/elements/<name_of_product>/<name_of_the_page>.ts`.

A simple example of the page object and its usage in the spec.

#### Spec

`cypress/integration/Product1/test.ts`

```typescript
import { Page1, Page2 } from '../../support/elements/Product1';

describe('First test spec description', () => {
  it('first test description', () => {
    cy.visit(Cypress.env('<base_url_from_cypress.env.json>'));
    Page1().sampleFunction();
  });
});
```

#### Page object

`cypress/support/elements/Product1/Page1.ts`.

```typescript
interface Page1Props {
  sampleFunction: () => void;
}

const Page1 = (): Page1Props => {
  const someUIElement = () => {
    return cy.get('#element_id');
  };

  const = sampleFunction () => {
    someUIElement().click();
  };

  return {sampleFunction };
};

export { Page1 };
```

`cypress/support/elements/Product1/index.ts`

```typescript
export { Page1 } from './Page1';
export { Page2 } from './Page2';
```

Finally, commands, that are used throughout all products, such as URL check or file upload are stored in the `cypress/support/commands.ts` file.

For more info on project setup and architecture contact authors:[Pavlo Kryshenyk](https://gitlab.bootiq.io/pavlokryshenyk)
and [František Kryzl](https://gitlab.bootiq.io/frantisekkryzl).

# Running cypress as downstream (multi-project pipeline)
To run E2E tests for your application of AlivePlatform, implement bridge job to trigger downstream:

```yaml
E2E Tests:
  stage: deploy
  variables:
    # Multiple APPLICATION_XY variable can be used or just one single, depends on use case.
    # If none APPLICATION_XY variable is used, all test will be triggered.
    APPLICATION_DM: "true"
    APPLICATION_OO2: "true"
    APPLICATION_NCDB: "true"
    # Define environment against which you want to run E2E tests. If omitted, biq-test will be used.
    REQUIRED_ENVIRONMENT: uat
  trigger:
    project: jira-gtsalive/cypress-test
    # Specify concrete branch of remote project or can be omitted if master branch should be used.
    branch: GTSALIVE-1299-multiproject-pipeline
    strategy: depend
```
For more information about Gitlab CI implementation contact [Jan Dominik](https://gitlab.bootiq.io/jandominik).
