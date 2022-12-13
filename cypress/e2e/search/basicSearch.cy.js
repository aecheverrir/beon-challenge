describe('Tests for a basic google search', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    it(`performing a search on the main page`, () => {
        cy.googleSearch('ABCDEFG');
        cy.get('#rso').children().eq(5).find('[data-header-feature="0"]').find('a').first().as('third_result');
        cy.get('@third_result').invoke('attr', 'href').as('href_value');
        cy.get('@third_result').click();
        cy.get('@href_value').then(href => {
        });
    })
})