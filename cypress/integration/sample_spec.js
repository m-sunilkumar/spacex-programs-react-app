describe("My First Test", () => {
  it("website query do much!", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("hello@gmail.com")
      .should("have.value", "hello@gmail.com");
  });
});
