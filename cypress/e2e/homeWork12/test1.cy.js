describe("Ask fot the course", () => {
  it("passes", () => {
    cy.visit("https://ithillel.ua");
    cy.get(".site-nav-list > :nth-child(2) > .site-nav-btn").click();
    cy.get(":nth-child(3) > .cats-list_btn").click();
    cy.get(
      "#block-9236438 > .courses-nav > .course-list > :nth-child(4) > .course-label > .course-label_info",
    ).click();
    cy.get("#buyCourseFormTrigger").click();
    cy.get("#input-name-consultation").type("Alex");
    cy.get("#input-email-consultation").type("alextest@gmail.com");
    cy.get("#input-tel-consultation").type("63 710 3389");
    cy.get("#input-comment-consultation").click();
    cy.get(
      "#form-consultation > .form_layout > .form_footer > .form_agreement > .checkbox > .checkbox_checkmark",
    ).click();
  });
});
