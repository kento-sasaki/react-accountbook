describe('delete expnese', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('div.ui.top.fixed.menu > a.item').contains('Log in').click();
    cy.get('input').get('[placeholder="E-mail address"]').type(Cypress.env('email'));
    cy.get('input').get('[placeholder="Password"]').type(Cypress.env('password'));
    cy.get('button.ui.teal.circular.fluid.button').click();
  });

  afterEach(() => {
    cy.get('div.ui.top.fixed.menu > a.item').contains('Log out').click();
  });

  it('expense delete', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.get('input').get('[placeholder="Expense"]').type(`${amount}`);
    cy.get('i.dropdown.icon').click();
    cy.get('div.selected.item').click();
    cy.get('div.ui.action.input > button.ui.teal.button').contains('Submit').click();
    cy.pause();
    cy.get('table.ui.very.basic.table > tbody > tr:first').contains(`${amount}`);

    cy.get('table.ui.very.basic.table > tbody > tr:first');
    cy.get('table.ui.very.basic.table > tbody > tr:first').contains('Delete').click();
    cy.get('div.ui.modals.visible.active div.actions button.ui').contains('OK').click();
    cy.get('table.ui.very.basic.table > tbody > tr:first').should('not.contain', amount);
  });
});