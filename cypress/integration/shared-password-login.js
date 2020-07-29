import "cypress-iframe";
import utils from "../support/utils";

describe("Shared password form", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("should be loaded in the main page", () => {
    cy.fixture("shared-password-login").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("img")
          .should("have.attr", "alt")
          .should("equal", fixture.img_logo_alt);

        cy.get("form").within(() => {
          cy.get("span").should("have.text", fixture.form_header_text);
          cy.get("input[type=password]")
            .should("have.attr", "name")
            .should("equal", "password");
          cy.get("button[type=submit]")
            .should("have.attr", "type")
            .should("equal", "submit");
        });
      });
    });
  });

  it("should display error message if wrong password is provided", () => {
    cy.fixture("shared-password-login").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("input[type=password]").type(fixture.password_invalid);
        cy.get("form").submit();
        cy.get("form > div > p").should(
          "have.text",
          fixture.password_invalid_message
        );
      });
    });
  });

  it("should login and display the landing page", () => {
    cy.fixture("shared-password-login").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("input[type=password]").clear().type(fixture.password_valid);
        cy.get("form").submit();

        cy.get("span").contains(fixture.landing_page_browse_talent_text);
      });
    });
  });
});