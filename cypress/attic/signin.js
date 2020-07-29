import "cypress-iframe";
import utils from "../support/utils";

describe("Login", () => {
  it.skip("should load the keycloak iFrame with the login template", () => {
    utils.screenSizes.forEach((screenSize) => {
      utils.setViewPortToScreenSize(screenSize);

      cy.visit("/signin");

      // we need to wait sometimes because page loading are very slow
      cy.wait(5000);

      cy.fixture("signin").then((fixture) => {
        cy.frameLoaded("#keycloak-iframe");
        cy.iframe("#keycloak-iframe").find("#kc-login");
        cy.iframe("#keycloak-iframe")
          .find("label")
          .find("span")
          .should("have.text", fixture.news_label);

        cy.compareSnapshot(`signin-${screenSize}`);
      });
    });
  });
});