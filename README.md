# Automation Framework

This project uses **TypeScript**, **Playwright**, and **Cucumber** for automating tests, following the **Page Object Model (POM)** design pattern.

## Prerequisites

Make sure you have **Node.js** installed. If not, you can download it from [here](https://nodejs.org/).

You will also need **npm** to install the required dependencies.

## Setup

1. Clone the repository:
   ```bash
   git clone (https://github.com/NicolasKoriakos/Auomation-Challenge.git)
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can run the tests using the following commands.

### Run All Tests
To run all the tests, use the following command:
```bash
npx cucumber-js --tags "@products"
```

### Run Specific Tests
To run individual tests, use the respective tags for each one:
- Test 09:
   ```bash
   npx cucumber-js --tags "@Test09"
   ```
- Test 12:
   ```bash
   npx cucumber-js --tags "@Test12"
   ```
- Test 13:
   ```bash
   npx cucumber-js --tags "@Test13"
   ```

### Running with Playwright

Make sure you have **Playwright** installed. If it's not already set up, run:
```bash
npx playwright install
```

## Structure of the Project

This project follows the **Page Object Model (POM)** design pattern. The main components are:

- **Features**: The Gherkin scenarios written for Cucumber.
- **Step Definitions**: The code that implements the steps defined in the feature files.
- **Page Objects**: Classes that represent the different pages in your application and encapsulate the interactions with them.
