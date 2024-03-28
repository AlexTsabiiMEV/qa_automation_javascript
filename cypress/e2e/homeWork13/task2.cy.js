// describe("Add and remove car", () => {
//   it("Car can be added and removed", () => {
//     cy.visit("https://qauto.forstudy.space/panel/garage", {
//       failOnStatusCode: false,
//       auth: {
//         username: "guest",
//         password: "welcome2qauto",
//       },
//     });
//     cy.get(".header_right > .btn").click();
//     cy.get("#signinEmail").type("alexander.tsabii@mev.com");
//     cy.get("#signinPassword").type("Qwerty123@@@");
//     cy.get(".modal-footer > .btn-primary").click();
//     cy.get(".panel-page_heading > .btn").click();
//     cy.get("#addCarBrand").select("1: 2");
//     cy.get("#addCarModel").select("7: 8");
//     cy.get("#addCarMileage").clear("1");
//     cy.get("#addCarMileage").type("180000");
//     cy.get(".modal-footer > .btn-primary").click();
//     cy.get(
//       ":nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_edit > .icon",
//     ).click();
//     cy.get(".btn-outline-danger").click();
//     cy.get(".btn-danger").click();
//     cy.get(".car").eq(0);
//   });
// });
