export var goToBaseUrl = (path?:string) => {
  var env = Cypress.env('user.env.baseUrlValue');
  cy.visit(path==undefined? env: env + path, {auth: {username: Cypress.env('user.env.username'), password: Cypress.env('user.env.password')}});
}

export let getEnv = ()  => {
  return Cypress.env("ENV");
}