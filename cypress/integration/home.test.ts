describe('the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Homeのロード成功', () => {
    cy.findByTestId('home-menu').should('have.class', 'active');
    cy.title().should('eq', 'Home | VisiBO');
  });

  it('Contactに移動', () => {
    cy.findByTestId('contact-menu').click();
    cy.findByTestId('contact-menu').should('have.class', 'active');
    cy.title().should('eq', 'Contact | VisiBO');
    cy.url().should('include', '/contact');
  });

  it('ログインとログアウト', () => {
    cy.findByTestId('login-logout-menu').click();
    cy.findByPlaceholderText('E-mail address').type(Cypress.env('email'));
    cy.findByPlaceholderText('Password').type(Cypress.env('password'));
    cy.findByRole('button', { name: 'Log in' }).click();

    cy.findAllByTestId('expense-bar-chart').should('exist');
    cy.findByTestId('expense-pie-chart').should('exist');
    cy.findByTestId('detail-table').should('exist');
    cy.findByPlaceholderText('Expense').should('exist');
    cy.findByTestId('detail-table').should('exist');

    cy.wait(3000);
    cy.findByTestId('logined-user-menu').click();
    cy.findByRole('option', { name: 'Log out' }).click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.title().should('eq', 'Home | VisiBO');
  });
});
