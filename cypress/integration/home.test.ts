describe('the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfuly loads', () => {
    cy.get('div.ui.top.fixed.menu > a.item').contains('Home').should('have.class', 'active');
    cy.title().should('eq', 'Home | VisiBO');
  });

  it('Contactに移動', () => {
    cy.get('div.ui.top.fixed.menu > a.item').contains('Contact').click();
    cy.get('a.item').contains('Contact').should('have.class', 'active');
    cy.title().should('eq', 'Contact | VisiBO');
    cy.url().should('include', '/contact');
  });

  it('ログイン', () => {
    cy.get('div.ui.top.fixed.menu > a.item').contains('Log in').click();
    cy.get('input').get('[placeholder="E-mail address"]').type(Cypress.env('email'));
    cy.get('input').get('[placeholder="Password"]').type(Cypress.env('password'));
    cy.get('button.ui.teal.circular.fluid.button').click();

    cy.get('g.recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis');
    cy.get('input').get('[placeholder="Expense"]');
    cy.get('table.ui.very.basic.table');

    cy.get('div.ui.top.fixed.menu > a.item').contains('Log out').click();
  });
});
