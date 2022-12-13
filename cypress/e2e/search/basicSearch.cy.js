describe('Tests for a basic google search', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    it(`performing a search on the main page`, () => {
        cy.googleSearch('How to add ssh key to github');
        cy.googleSearchResultsSelectNthResult(8);
    })
})