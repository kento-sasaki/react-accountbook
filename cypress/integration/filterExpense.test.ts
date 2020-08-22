describe('filter expense', () => {
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

  it('タグで絞り込み', () => {
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
    const tag = tags[Math.floor(Math.random() * 1000) % 8];

    cy.pause();
    cy.get(`[data-test-id="detail-table"]  i.${tag.icon}.icon`).click();
    cy.get('[data-test-id="expense-table"] > tbody > tr:first').contains(`${tag.text}`);
  });
});
