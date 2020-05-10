describe("counter", () => {
  const baseUrl = Cypress.env("baseUrl");

  it("counter", () => {
    cy.visit(baseUrl);

    cy.get("[data-testid=loginAnonymously]").click();
    cy.get("[data-testid=result]").should("have.text", "Count: 0");

    cy.get("[data-testid=increment]").click();
    cy.get("[data-testid=result]").should("have.text", "Count: 1");

    cy.get("[data-testid=decrement]").click();
    cy.get("[data-testid=decrement]").click();
    cy.get("[data-testid=result]").should("have.text", "Count: -1");

    cy.get("[data-testid=reset]").click();
    cy.get("[data-testid=result]").should("have.text", "Count: 0");
  });
});
