import * as select from './selectors';
import * as emailSettings from './password-settings'

export let visitPage = () => {
  cy.visitPage();
}

export let clickOnHref = (href: string, type:string) => {
  let selector = ''
  switch(href) {
    case 'about-us':
      selector = select.aboutUsLink;
      cy.wait(2000);
      if(type != 'macbook-13'){
        cy.get(select.slideButton).click({force: true});
        cy.get(selector).eq(1).click();
      }else{
        cy.get(selector).first().click();
      }
      if(type != 'macbook-13'){
        cy.get(select.slideButtonClose).click({force: true});
      }
      cy.contains("About Us")
      cy.url().should('include', 'about');
    break;
    case 'help':
      selector = select.help;
      cy.wait(2000);
      if(type != 'macbook-13'){
        cy.get(select.slideButton).click({force: true});
        cy.get(selector).eq(1).click();
      }else{
        cy.get(selector).first().click();
      }
      if(type != 'macbook-13'){
        cy.get(select.slideButtonClose).click({force: true});
      }
      cy.contains("What would you like to know?");
      cy.url().should('include', 'faqs');
    break;
    case 'news':
      selector = select.news;
      cy.wait(2000);
      if(type != 'macbook-13'){
        cy.get(select.slideButton).click({force: true});
        cy.get(selector).eq(1).click();
      }else{
        cy.get(selector).first().click();
      }
      if(type != 'macbook-13'){
        cy.get(select.slideButtonClose).click({force: true});
      }
      cy.contains("Featured Content");
      cy.url().should('include', 'news');
      //check that there are more than 1 news items in featured content
      cy.get(select.newsFeatured).first().within( ()=> {
        cy.contains(select.featuredContent).parent('div').parent('div').within (() => {
          cy.get(select.classContainer).first().within(() => {
              cy.get(select.gridMargin).first().children().its('length').should('be.gte', 1)
            });
          });
        });
        cy.get(select.filterButton).click().get(select.newsFilterWebinar).first().click({force:true});

        cy.get(select.newsFeatured).first().within( ()=> {
          cy.contains(select.allContent).parent('div').parent('div').within (() => {
            cy.get(select.classContainer).eq(1).within(() => {
              cy.get(select.gridMargin).first().children().its('length').should('be.gte', 1)
                cy.get(select.gridMargin).first().children().each( $item => {
                  expect($item).attr('href').to.include('webinar');
                });
              });
            });
          });
    break;

  }
}

export const goToSignupForm = (size: string) => {
  cy.wait(2000);
  if(size != 'macbook-13'){
    cy.get(select.slideButton).click({force: true});
    cy.get(select.signupPage).eq(1).click();
  }else{
    cy.get(select.signupPage).first().click();
  }
}

export const validateEmailAndPassword = () => {
  cy.get(select.email).type(emailSettings.invalidEmail2);
  cy.get(select.password).type(emailSettings.invalidPassword1);
  cy.get(select.repeatPassword).type(emailSettings.invalidPassword1);
  cy.get(select.signupSubmit).click();
  cy.contains(emailSettings.invalidPasswordError);
  cy.contains(emailSettings.invalidEmailError);
  cy.reload();

  cy.get(select.email).type(emailSettings.invlidEmail1);
  cy.get(select.password).type(emailSettings.validPassword);
  cy.get(select.repeatPassword).type(emailSettings.validPassword);
  cy.get(select.signupSubmit).click();
  cy.contains(emailSettings.invalidEmailError);
  cy.reload();

  cy.get(select.email).type(emailSettings.generateValidEmail());
  cy.get(select.password).type(emailSettings.invalidPassword1);
  cy.get(select.repeatPassword).type(emailSettings.invalidPassword1);
  cy.get(select.signupSubmit).click();
  cy.contains(emailSettings.invalidPasswordError);
}

export const fullySignUp = () => {
  cy.get(select.email).type(emailSettings.generateValidEmail());
  cy.get(select.password).type(emailSettings.validPassword);
  cy.get(select.repeatPassword).type(emailSettings.validPassword);
  cy.get(select.signupSubmit).click();
  cy.get(select.firstName).type("Keyvan");
  cy.get(select.lastName).type("Bolorani");
}