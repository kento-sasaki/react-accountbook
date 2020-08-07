describe('edit expense', () => {
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

  it('edit expense', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.pause();
    cy.get('table.ui.very.basic.table > tbody > tr:first').contains('Edit').click();
    cy.get('table.ui.very.basic.table > tbody > tr:first > td:nth-child(2) > .ui > input')
      .clear()
      .type(`${amount}`);
    cy.get('table.ui.very.basic.table > tbody > tr:first > td:nth-child(4)')
      .contains('Save')
      .click();
    cy.pause();
    cy.get('table.ui.very.basic.table > tbody > tr:first').contains(`${amount}`);
  });
});
