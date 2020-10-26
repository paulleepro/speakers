import "cypress-iframe";
import utils from "../support/utils";

describe("Registration", () => {
  it.skip("should reach the register page and load the registration template", () => {
    utils.screenSizes.forEach((screenSize) => {
      utils.setViewPortToScreenSize(screenSize);

      cy.visit("/signin");

      // we need to wait sometimes because page loading are very slow
      /*
      // TODO - update me in now we removed keycloak
      cy.fixture("signin").then((fixture) => {
        cy.frameLoaded("#keycloak-iframe");
        cy.iframe("#keycloak-iframe").find("div .register-box").find("input").should('have.value', 'REGISTER').click();

        cy.wait(5000);

        cy.iframe("#keycloak-iframe")
          .find("#kc-login")
          .should("have.value", "REGISTER");

        cy.compareSnapshot(`register-${screenSize}`);
      });
      */
    });
  });
});
