import "cypress-iframe";
import utils from "../support/utils";

describe("Header", () => {
  it.skip("should be loaded in the main page", () => {
    utils.screenSizes.forEach((screenSize) => {
      utils.setViewPortToScreenSize(screenSize);

      cy.visit("/");

      if (screenSize === "iphone-6") {
        cy.get('[href="/"] > img')
          .parent()
          .parent()
          .compareSnapshot(`header-${screenSize}`);
      } else {
        cy.get('[href="/"] > img')
          .parent()
          .parent()
          .parent()
          .compareSnapshot(`header-${screenSize}`);
      }
    });
  });
});