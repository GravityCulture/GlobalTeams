describe('Navigation', () => {
  it(" navigate from sports => ball", () => {
      cy.visit('http://localhost:3000/sports');

      cy.get('a[href*="/ball"]').click();

      cy.url().should('include', '/ball');
  });

  it("navigate from ball => sports", () => {
      cy.visit('http://localhost:3000/ball');

      cy.get('a[href*="/sports"]').click();

      cy.url().should('include', '/sports');
  });
});

export {};
