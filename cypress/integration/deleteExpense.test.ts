describe('delete expnese', () => {
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

  it('支出の削除', () => {
    cy.wait(3000);

    return cy
      .findAllByTestId('table-unit')
      .first()
      .then((element) => {
        const amount = element[0].childNodes[1].textContent;

        cy.findAllByTestId('table-unit').first().contains('Delete').click();
        cy.findByRole('button', { name: 'OK' }).click();
        cy.wait(3000);
        cy.findAllByTestId('table-unit').first().should('not.contain', amount);
      });
  });

  it('支出の削除をキャンセル', () => {
    cy.wait(3000);

    return cy
      .findAllByTestId('table-unit')
      .first()
      .then((element) => {
        const amount = element[0].childNodes[1].textContent;

        cy.findAllByTestId('table-unit').first().contains('Delete').click();
        cy.findByRole('button', { name: 'Cancel' }).click();
        cy.wait(3000);
        cy.findAllByTestId('table-unit').first().contains(`${amount}`).should('exist');
      });
  });
});
