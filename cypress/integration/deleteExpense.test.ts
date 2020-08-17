describe('delete expnese', () => {
  before(() => {
    cy.visit('/');
    cy.get('div.ui.top.fixed.menu > a.item').contains('Log in').click();
    cy.get('input').get('[placeholder="E-mail address"]').type(Cypress.env('email'));
    cy.get('input').get('[placeholder="Password"]').type(Cypress.env('password'));
    cy.get('button.ui.teal.circular.fluid.button').click();
  });

  after(() => {
    cy.get('div.ui.top.fixed.menu > a.item').contains('User Menu').click();
    cy.get('.ui.active.visible.item.dropdown').contains('Log out').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.title().should('eq', 'Home | VisiBO');
  });

  it('支出の削除', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.pause();
    cy.get('input').get('[placeholder="Expense"]').type(`${amount}`);
    cy.get('div.ui.dropdown.icon > i.calendar.alternate.outline.icon').click();
    cy.get('div.visible.menu.transition div.selected.item').click();
    cy.get('[data-test-id="add-expense"]').click();
    cy.pause();
    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains(`${amount}`);

    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains('Delete').click();
    cy.get('div.ui.modals.visible.active div.actions button.ui').contains('OK').click();
    cy.get('[data-test-id="expense-table"] > tbody > tr:first').should('not.contain', amount);
  });

  it('支出の削除をキャンセル', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.pause();
    cy.get('input').get('[placeholder="Expense"]').type(`${amount}`);
    cy.get('div.ui.dropdown.icon > i.calendar.alternate.outline.icon').click();
    cy.get('div.visible.menu.transition div.selected.item').click();
    cy.get('[data-test-id="add-expense"]').click();
    cy.pause();
    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains(`${amount}`);

    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains('Delete').click();
    cy.get('div.ui.modals.visible.active div.actions button.ui').contains('Cancel').click();
    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains(`${amount}`);
  });
});
