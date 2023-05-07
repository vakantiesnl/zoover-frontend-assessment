describe('Review header', () => {
  beforeEach(() => {
    cy.intercept('/reviews/average').as('getAverage');
    cy.visit('http://localhost:3000');
  });

  it('should have a star rating value to have exactly one decimal', () => {
    // cy.wait('@getAverage');
    cy.get('[data-cy="page-header"]')
      .find('[data-cy="rating"]')
      .should('exist')
      .then((element) => {
        const decimalPlaces = element.text().split('.').length;

        expect(decimalPlaces).to.equal(2);
      });
  });
});
