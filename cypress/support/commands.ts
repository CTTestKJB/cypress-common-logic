import {goToBaseUrl}  from "./environment-settings";
/// <reference path="./commands.d.ts" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

declare global {
  namespace Cypress {
    interface Chainable<Subject = any>{

      visitPage: (path?:string) => void;
    }
  }
}

// declare global {
//   namespace cy {
//     interface Chainable<Subject = any>{

//     }
//   }
// }

Cypress.Commands.add('visitPage', (path?:string) => {
  goToBaseUrl(path);
});
