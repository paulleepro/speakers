# Speakers Frontend

- [Speakers Frontend](#speakers-frontend)
  - [Token Login](#token-login)
  - [Test token generation](#test-token-generation)
  - [Generate Component](#generate-component)
  - [Functional and Visual Testing](#functional-and-visual-testing)
    - [Run the tests in headless mode](#run-the-tests-in-headless-mode)
    - [Generate a tests report](#generate-a-tests-report)
    - [Run the test using the UI](#run-the-test-using-the-ui)
  - [TODO](#todo)

## Token Login

Use the URL parameters `?invite=jwt&token=<TOKEN>` as below:

```sh
http://localhost:3000/?invite=jwt&token=eyJpZFRva...<REST OF THE BASE64 TOKEN>...WTVXNFJJRk1qbVREYyJ9
```

## Test token generation

```sh
curl --silent --location --request POST 'http://localhost:3080/api/auth/v1/auth/tokens/grant' \
--header 'Content-Type: application/json' \
--data-raw '{
"username": "manager@test.com",
"password": "password"
}' | base64
```

## Generate Component

```
  yarn gc SomeComponent
```

## Functional and Visual Testing

NOTE: the screenshot are better generated and tested via headless mode. Looks like changing the Cypress browser size in between tests messes up things. Keep in mind that if we have dynamic content, the tests will fail.

To change the tested screen sizes, just edit the `screenSizes` array in `./cypress/support/utils.js`.

First, start the frontend server with:

```sh
yarn start
```

When the server is started, we can start using Cypress. We assume the server is listening at http://localhost:3000 (the default). If that is not the case, we need to edit the `package.json` `cy:base` and `cy:test` scripts.

When something in the layout changes, generate the base snapshots (saved in `./cypress/snapshot/base` folder):

```sh
CYPRESS_BASE_URL="http://localhost:3000" yarn run cy:base
```

### Run the tests in headless mode

```sh
CYPRESS_BASE_URL="http://localhost:3000" yarn run --reporter json cy:test
```

Results will be saved in the following folders:

- `./cypress/reports/tests` for the `mochawesome` JSON results for each single test
- `./cypress/snapshot/actual` for the current screenshot result
- `./cypress/snapshot/diff` for the difference with the base images
- `./cypress/snapshot/videos` for videos of the test run

### Generate a tests report

```sh
yarn run cy:report
```

Will generate an unified `mochawesome` JSON result file in `cypress/reports/report.json` and an HTML one in the `cypress/reports/html` folder.

All the above folders are ignored by git.

### Run the test using the UI

```sh
CYPRESS_BASE_URL=http://localhost:3000 yarn run cypress open
```

## TODO

- remove Auth.ts, CrossfadeImage
