describe("Check blog", () => {
  it("passes", () => {
    cy.visit("https://ithillel.ua");
    cy.get(":nth-child(5) > .site-nav-btn").click();
    cy.get(".site-nav-list > :nth-child(2) > .site-nav-btn").click();
    cy.get(".site-nav-publications_list > :nth-child(10) > .btn-theme").click();
    cy.get(
      ".post-filter-desktop_subthemes > .-active > :nth-child(2) > .button",
    ).click();
  });
});
