# PvH Test Assesment

## Design decisions

I have implemented the standard webdriverIO framework for testing with Cucumber and Page Object Model.
All page objects are located in ./features/pageObjects
All step definitions are located in ./features/step-definitions/steps.ts
All feature files are located in ./features/

## Limitations

I was not able to make the framework work when more than one call to the backend was made in the login process.
This is either due to limitations of the framework used, some unknown local limitation on my side, or a security feature in the application that prevents logging in with test automation multiple times in one session.
Because of this, I have split up the tests in multiple feature files and tests can only be executed one feature file at a time.
I've tried to add the reloadSession method to be executed after each scenario, but doing this broke the test execution of the framework that I could not solve in time. 

## How to run

First uncomment the feature file you want to run in ./test/wdio.conf.ts (lines 29 - 32) as it only works when one feature file is enabled on my side.
Then open the CMD in the project folder and run the following command:
npm run wdio

