// describe("Check list of instructions", () => {
//   it("All instruction on the page is for the Audi TT", () => {
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
//     cy.get('[routerlink="instructions"]').click();
//     cy.get(".instructions_list")
//       .find("li")
//       .eq(5)
//       .filter("li:contains('Audi TT')");
//   });
// });
