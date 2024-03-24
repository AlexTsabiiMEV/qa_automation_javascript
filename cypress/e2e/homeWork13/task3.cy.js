describe("Check latest added car", () => {
  it("Latest added cat is Porsche Panamera", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".header_right > .header-link").click();
    cy.get(".panel-page_heading > .btn").click();
    cy.get("#addCarBrand").select("1: 2");
    cy.get("#addCarMileage").clear("1");
    cy.get("#addCarMileage").type("180000");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".panel-page_heading > .btn").click();
    cy.get("#addCarBrand").select("2: 3");
    cy.get("#addCarModel").select("8: 14");
    cy.get("#addCarMileage").type("987654");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".panel-page_heading > .btn").click();
    cy.get("#addCarBrand").select("3: 4");
    cy.get("#addCarModel").select("7: 18");
    cy.get("#addCarMileage").type("100");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".car-list")
      .find(".car_name.h2")
      .first()
      .should("contain", "Porsche Panamera");
  });
});
