describe("Home Work 15", () => {
  it("Adding new cart and cheking fuel", () => {
    cy.visit("/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: Cypress.config().auth.baseAuthUsername,
        password: Cypress.config().auth.baseAuthpassword,
      },
    });
    cy.get(".header_right > .btn").click();
    cy.get("#signinEmail").type(Cypress.config().userAuth.userAuthEmail);
    cy.get("#signinPassword").type(Cypress.config().userAuth.userAuthPassword);
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".panel-page_heading > .btn").click();
    cy.get("#addCarMileage").type("20000");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get('[routerlink="expenses"]').click();
    cy.get(".btn-primary").click();
    cy.get("#addExpenseLiters").type("30");
    cy.get("#addExpenseTotalCost").type("480");
    cy.get("#addExpenseMileage").clear();
    cy.get("#addExpenseMileage").type("20300");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get("#carSelectDropdown").should("contain", "Audi TT");
    cy.get("tbody > tr").eq(0).should("exist");
  });
});
