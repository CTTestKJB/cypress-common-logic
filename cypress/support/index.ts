// ***********************************************************
// This example support/ is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import {getBaseUrl} from './environment-settings'

// before(async () => {
//   const configEnv = await cy.readFile(`cypress/config/cypress.${Cypress.env('ENVIRONMENT')}.json`);
//   const env = configEnv['env'];
//   const baseUrl = env['baseUrlValue'];
//   cy.log(baseUrl);
//   Cypress.env('user.env.baseUrlValue', baseUrl);
//   Cypress.env('user.env.username', Cypress.env('USERNAME'));
//   Cypress.env('user.env.password', Cypress.env('PASSWORD'));
// });

export { visitPage, clickOnHref } from "./helper";