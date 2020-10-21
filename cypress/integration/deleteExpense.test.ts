describe('delete expnese', () => {
  before(() => {
    cy.visit('/');
    cy.findByTestId('login-logout-menu').click();
    cy.findByPlaceholderText('E-mail address').type(Cypress.env('email'));
    cy.findByPlaceholderText('Password').type(Cypress.env('password'));
    cy.findByRole('button', { name: 'Log in' }).click();
  });

  after(() => {
    cy.findByTestId('logined-user-menu').click();
    cy.findByRole('option', { name: 'Log out' }).click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.title().should('eq', 'Home | VisiBO');
  });

  it('支出の削除', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.wait(3000);
    cy.findByPlaceholderText('Expense').type(`${amount}`);
    cy.findByRole('button', { name: 'Submit' }).click();
    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().contains(`${amount}`);
    cy.findAllByTestId('table-unit')
      .first()
      .then((element) => {
        console.log(element);

        console.log(element[0].childNodes[1].textContent);
      });

    cy.findAllByTestId('table-unit').first().contains('Delete').click();
    cy.findByRole('button', { name: 'OK' }).click();
    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().should('not.contain', amount);
  });

  it('支出の削除をキャンセル', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.wait(3000);
    cy.findByPlaceholderText('Expense').type(`${amount}`);
    cy.findByRole('button', { name: 'Submit' }).click();
    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().contains(`${amount}`);

    cy.findAllByTestId('table-unit').first().contains('Delete').click();
    cy.findByRole('button', { name: 'Cancel' }).click();
    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().contains(`${amount}`);
  });
});
