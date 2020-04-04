# oneclick
A bare bones web app for testing out CircleCI pipelines.

The web app itself is simply a single web page (served via [nodejs](https://nodejs.org/en/)) with some text reading `Initial Text` and a button. When the button is clicked the `Initial Text` is changed to `Updated Text`. Subsequent button clicks have no effect.

This project also includes support for testing the web page using [cypress](https://www.cypress.io/). Included is a single test that validates a click of the button does in fact update the text on the web page.

## Running

Once the project is pulled down to your local system:

- `npm install` will install the dependencies for this project.
- `npm start` will start serving the web page on `http://localhost:8080`
- `npm test` will initiate the cypress based test(s) to validate the button click within the web page.
