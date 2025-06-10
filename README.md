git clone https://github.com/Albarokah9/BDD
# BDD Cucumber Cypress Testing
Automation testing menggunakan BDD Cucumber dan Cypress untuk website Zero WebApp Security dan Saucedemo.

## Tech Stack
- **Framework**: Cypress + Cucumber BDD
- **Framework**: Reporting: Cypress Mochawesome Reporter
- **Websites**: 
  - Zero WebApp Security
  - Saucedemo

## Test Cases
- Login to Website zero.webappsecurity.com
- Logging into the Saucedemo Website (Invalid)
- Login to Website Saucedemo (Valid)
- Search functionality on Zero WebAppSecurity

## Setup
```bash
npm install
```

## Run Tests
```bash
# Open Cypress Test Runner
npx cypress open

# Run all tests
npx cypress run

# Run specific feature
npx cypress run --spec "cypress/e2e/features/login.feature"
```

Portfolio project untuk demonstrasi BDD testing automation.
