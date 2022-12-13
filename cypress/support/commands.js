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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('googleSearch', (criteria) => { 
    cy.get('.gLFyf').click().type(criteria +'{enter}');
    cy.url().should('include', 'search?q=');
    cy.get('#result-stats').should('be.visible');
})

Cypress.Commands.add('googleSearchResultsSelectNthResult', (n) => { 
    cy.get('#rso').children().eq(n-1).find('[data-header-feature="0"]').find('a').first()
    .as('result')
    .invoke('attr', 'href')
    .then(href => {
        cy.get('@result').click();
        cy.origin(
            href,
            { args: href },
            (href) => {
            cy.url().should('include', href)
        })
    });
})
