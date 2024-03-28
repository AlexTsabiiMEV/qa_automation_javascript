// describe("Log in with wrong password", () => {
//   it("passes", () => {
//     cy.visit("https://ithillel.ua");
//     cy.get(".site-nav-item.-lms > :nth-child(1)").click();
//     cy.get(":nth-child(1) > .hi-input").type("testuser@gmail.com");
//     cy.get(":nth-child(2) > .hi-input").type("Qwerty123@");
//     cy.get(".page-login__form > .hi-button").click();
//     cy.get(".page-login__actions-validation")
//       .should("exist")
//       .and("contain.text", "Incorrect email or password");
//   });
// });
