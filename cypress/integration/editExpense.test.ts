describe('edit expense', () => {
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

  it('金額を編集', () => {
    const amount = Math.floor(Math.random() * 1000);
    cy.pause();
    cy.get('[data-testid="expense-table"] > tbody > tr:first').contains('Edit').click();
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(2) > .ui > input')
      .clear()
      .type(`${amount}`);
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(4)')
      .contains('Save')
      .click();
    cy.pause();
    cy.get('[data-testid="expense-table"] > tbody > tr:first').contains(`${amount}`);
  });

  it('支出の修正失敗', () => {
    const amount = '千五百';
    cy.pause();
    cy.get('[data-testid="expense-table"] > tbody > tr:first').contains('Edit').click();
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(2) > .ui > input')
      .clear()
      .type(`${amount}`);
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(4)')
      .contains('Save')
      .should('be.disabled');
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(4)')
      .contains('Cancel')
      .click();
  });

  it('タグを編集', () => {
    const amount = Math.floor(Math.random() * 1000);
    const tags = [
      { text: 'その他', icon: 'tag' },
      { text: '食費', icon: 'food' },
      { text: '家賃', icon: 'home' },
      { text: '電気代', icon: 'power.cord' },
      { text: '水道代', icon: 'bath' },
      { text: 'ガス代', icon: 'fire' },
      { text: '電話', icon: 'phone' },
      { text: '交通費', icon: 'subway' },
    ];
    const tag = tags[amount % 8];

    cy.pause();
    cy.get('[data-testid="expense-table"] > tbody > tr:first').contains('Edit').click();
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(2) > .ui > input')
      .clear()
      .type(`${amount}`);
    cy.get(
      '[data-testid="expense-table"] > tbody > tr:first > td:nth-child(3) i.dropdown.icon',
    ).click();
    cy.get(
      `[data-testid="expense-table"] > tbody > tr:first > td:nth-child(3) .item > i.${tag.icon}.icon`,
    ).click();
    cy.get('[data-testid="expense-table"] > tbody > tr:first > td:nth-child(4)')
      .contains('Save')
      .click();
    cy.get('[data-testid="expense-table"] > tbody > tr:first').contains(`${tag.text}`);
  });
});
