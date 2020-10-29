describe('add expense', () => {
  before(() => {
    cy.visit('/');
    cy.findByTestId('login-logout-menu').click();
    cy.findByPlaceholderText('E-mail address').type(Cypress.env('admin_email'));
    cy.findByPlaceholderText('Password').type(Cypress.env('admin_password'));
    cy.findByRole('button', { name: 'Log in' }).click();
  });

  after(() => {
    cy.findByTestId('logined-user-menu').click();
    cy.findByRole('option', { name: 'Log out' }).click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.title().should('eq', 'Home | VisiBO');
  });

  it('支出の登録成功', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.wait(2000);
    cy.findByPlaceholderText('Expense').type(`${amount}`);
    cy.findByRole('button', { name: 'Submit' }).click();
    cy.wait(2000);
    cy.findAllByTestId('table-unit').first().contains(`${amount}`).should('exist');
  });

  it('支出の登録失敗', () => {
    const amount = '千五百';
    cy.wait(2000);
    cy.findByPlaceholderText('Expense').type(`${amount}`);
    cy.findByRole('button', { name: 'Submit' }).should('be.disabled');
  });
});
