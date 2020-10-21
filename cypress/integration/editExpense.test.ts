describe('edit expense', () => {
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

  it('金額を編集', () => {
    const newAmount = Math.floor(Math.random() * 1000);

    cy.wait(3000);

    return cy
      .findAllByTestId('table-unit')
      .first()
      .then((element) => {
        const currentAmount = element[0].childNodes[1].textContent;

        cy.findAllByTestId('table-unit').first().contains('Edit').click();
        cy.findAllByTestId('table-unit')
          .first()
          .findByDisplayValue(`${currentAmount}`)
          .clear()
          .type(`${newAmount}`);
        cy.findAllByTestId('table-unit').first().contains('Save').click();
        cy.wait(3000);
        cy.findAllByTestId('table-unit').first().contains(`${newAmount}`).should('exist');
      });
  });

  it('支出の修正失敗', () => {
    const newAmount = '千五百';

    cy.wait(3000);

    return cy
      .findAllByTestId('table-unit')
      .first()
      .then((element) => {
        const currentAmount = element[0].childNodes[1].textContent;

        cy.findAllByTestId('table-unit').first().contains('Edit').click();
        cy.findAllByTestId('table-unit')
          .first()
          .findByDisplayValue(`${currentAmount}`)
          .clear()
          .type(`${newAmount}`);
        cy.findAllByTestId('table-unit').first().contains('Save').should('be.disabled');
        cy.findAllByTestId('table-unit').first().contains('Cancel').click();
        cy.wait(3000);
        cy.findAllByTestId('table-unit').first().contains(`${currentAmount}`).should('exist');

        cy.findAllByTestId('table-unit').first().contains('Edit').click();
        cy.findAllByTestId('table-unit')
          .first()
          .findByDisplayValue(`${newAmount}`)
          .clear()
          .type('1500');
        cy.findAllByTestId('table-unit').first().contains('Save').click();
        cy.wait(3000);
        cy.findAllByTestId('table-unit').first().contains('1500').should('exist');
      });
  });

  it('タグを編集', () => {
    const tags = ['その他', '食費', '家賃', '電気代', '水道代', 'ガス代', '電話', '交通費'];
    const newTag = tags[Math.floor(Math.random() * 1000) % 8];

    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().contains('Edit').click();
    cy.findAllByTestId('table-unit').first().findByTestId('tag-text').click();
    cy.findAllByTestId('table-unit')
      .first()
      .findByRole('option', { name: `${newTag}` })
      .click();
    cy.findAllByTestId('table-unit').first().contains('Save').click();
    cy.wait(3000);
    cy.findAllByTestId('table-unit').first().contains(`${newTag}`).should('exist');
  });
});
