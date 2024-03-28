const randomDigits = Math.floor(100000 + Math.random() * 900000);

describe("Registration", () => {
  it("Check that user can not register with empty required filds", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".hero-descriptor_btn").click();
    cy.get("#signupName").click();
    cy.get("#signupLastName").click();
    cy.get("form.ng-pristine > :nth-child(3)").click();
    cy.get("form.ng-pristine > :nth-child(4)").click();
    cy.get("form.ng-pristine > :nth-child(5)").click();
    cy.get(".modal-footer").click();
    cy.get(":nth-child(1) > .invalid-feedback > p").should(
      "contain",
      "Name required",
    );
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-pristine > :nth-child(2)").should(
      "contain",
      "Last name required",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-pristine > :nth-child(3)").should(
      "contain",
      "Email required",
    );
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-pristine > :nth-child(4)").should(
      "contain",
      "Password required",
    );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-pristine > :nth-child(5)").should(
      "contain",
      "Re-enter password required",
    );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get(".modal-footer > .btn").should("be.disabled");
  });

  it("Check that user can not register with invalid data", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".hero-descriptor_btn").click();
    cy.get("#signupName").type("123");
    cy.get("#signupLastName").type("123");
    cy.get("#signupEmail").type("123");
    cy.get("#signupPassword").type("1");
    cy.get("#signupRepeatPassword").type("1");
    cy.get("app-signup-modal").click();
    cy.get("form.ng-invalid > :nth-child(1)").should(
      "contain",
      "Name is invalid",
    );
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(2)").should(
      "contain",
      "Last name is invalid",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(3)").should(
      "contain",
      "Email is incorrect",
    );
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(4)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(5)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get(".modal-footer > .btn").should("be.disabled");
  });

  it("Check that user can not register with wrong lenght data", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".hero-descriptor_btn").click();
    cy.get("#signupName").type("o");
    cy.get("#signupLastName").type("o");
    cy.get("#signupEmail").type("alexander.tsabii+new@mev.com");
    cy.get("#signupPassword").type("123");
    cy.get("#signupRepeatPassword").type("123");
    cy.get("app-signup-modal").click();
    cy.get("form.ng-invalid > :nth-child(1)").should(
      "contain",
      "Name has to be from 2 to 20 characters long",
    );
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(2)").should(
      "contain",
      "Last name has to be from 2 to 20 characters long",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("#signupEmail").should(
      "not.have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(4)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(5)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get(".modal-footer > .btn").should("be.disabled");
    cy.get("#signupName").type("12345678901234567890123");
    cy.get("#signupLastName").type("12345678901234567890123");
    cy.get("#signupPassword").type("12345678901234567890123");
    cy.get("#signupRepeatPassword").type("12345678901234567890123");
    cy.get("app-signup-modal").click();
    cy.get("form.ng-invalid > :nth-child(1)").should(
      "contain",
      "Name has to be from 2 to 20 characters long",
    );
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(2)").should(
      "contain",
      "Last name has to be from 2 to 20 characters long",
    );
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(4)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get("form.ng-invalid > :nth-child(5)").should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get(".modal-footer > .btn").should("be.disabled");
  });

  it("Check that user can not register with not matched passwords", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".hero-descriptor_btn").click();
    cy.get("#signupName").type("Alex");
    cy.get("#signupLastName").type("Tsabii");
    cy.get("#signupEmail").type("alexander.tsabii+new@mev.com");
    cy.get("#signupPassword").type("Qwerty123@@@");
    cy.get("#signupRepeatPassword").type("Qwerty123$$$");
    cy.get("app-signup-modal").click();
    cy.get("form.ng-invalid > :nth-child(5)").should(
      "contain",
      "Passwords do not match",
    );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
    cy.get(".modal-footer > .btn").should("be.disabled");
  });

  it("Check that user is able to register with valid data", () => {
    cy.visit("https://qauto.forstudy.space/panel/garage", {
      failOnStatusCode: false,
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get(".hero-descriptor_btn").click();
    cy.get("#signupName").type("Alex");
    cy.get("#signupLastName").type("Tsabii");
    cy.get("#signupEmail").type(`alexander.tsabii+${randomDigits}@mev.com`);
    cy.get("#signupPassword").type("Qwerty123@@@");
    cy.get("#signupRepeatPassword").type("Qwerty123@@@");
    cy.get("app-signup-modal").click();
    cy.get(".modal-footer > .btn").click();
    // ніяк не можу добитись get алерта, зможете показати на занятті?
  });
});
