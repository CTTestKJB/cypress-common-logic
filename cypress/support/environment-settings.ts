export var goToBaseUrl = () => {
  var env = Cypress.env('user.env.baseUrlValue');
  cy.visit(env, {auth: {username: Cypress.env('user.env.username'), password: Cypress.env('user.env.password')}});
}

export let getEnv = ()  => {
  return Cypress.env("ENV");
}