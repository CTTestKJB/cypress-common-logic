import  * as select from './selectors';
import { goToBaseUrl } from './environment-settings';
import { first, values } from 'cypress/types/lodash';

export let visitPage = () => {
  cy.visitPage();
}

export let clickOnHref = (href: string) => {
  let selector = ''
  switch(href) {
    case 'about-us':
      selector = select.aboutUsLink;
      cy.get(selector).first().click();
      cy.contains("About Us")
      cy.url().should('include', 'about');
    break;
    case 'help':
      selector = select.help;
      cy.get(selector).first().click();
      cy.contains("What would you like to know?");
      cy.url().should('include', 'faqs');
    break;
    case 'news':
      selector = select.news;
      cy.get(selector).first().click();
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
        cy.get(select.filterButton).click().get(select.newsFilterWebinar).click({force:true});

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

// export let navigatesToPage(page)