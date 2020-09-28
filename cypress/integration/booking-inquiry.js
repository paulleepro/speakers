import "cypress-iframe";
import utils from "../support/utils";

describe("Booking inquiry form", () => {
  beforeEach(() => {
    cy.fixture("shared-password-login").then((fixture) => {
      cy.visit("/");

      if (cy.get("input[type=password]")) {
        cy.get("input[type=password]").type(fixture.password_valid);
        cy.get("form").submit();
      }
    });
  });

  it("should be reachable from talent page", () => {
    cy.fixture("booking-inquiry").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        const devEnv = Cypress.env("DEV_ENV");
        cy.visit(fixture.talent_url, { failOnStatusCode: !devEnv });

        cy.get(".container > div > div > h1:first")
          .should("have.text", fixture.talent_full_name);

        cy.get("button").contains(fixture.booking_button_text).click({
          force: true
        });

        cy.location("pathname", {
          timeout: 10000,
          failOnStatusCode: !devEnv
        }).should("include", fixture.talent_booking_url);

        cy.get(".container > div > div > h1:first")
          .should("have.text", fixture.talent_full_name);

        cy.get("form").filter(':visible').within(() => {
          cy.get("input[name=talent_id]");
          cy.get("input[name='options.budget_currency']");
          cy.get('.event_type').filter(':visible');
          cy.get("input[class='date-picker']").filter(':visible');
          cy.get("input[name='options.budget_max_cents']").filter(':visible');
          cy.get("input[name='options.event_theme']").filter(':visible');
          cy.get("textarea[name='options.notes']").filter(':visible');
          cy.get("input[name='user_id']").filter(':visible');
          cy.get("button[type='submit']").filter(':visible');
        });
      });
    });
  });

  it("should submit form", () => {
    cy.fixture("booking-inquiry").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        const devEnv = Cypress.env("DEV_ENV");
        cy.visit(fixture.talent_booking_url, { failOnStatusCode: !devEnv });

        cy.location("pathname", {
          timeout: 10000,
          failOnStatusCode: !devEnv
        }).should("include", fixture.talent_booking_url);

        cy.get("form").filter(':visible').within(() => {
          const date = new Date();
          date.setDate(date.getDate() + 3);

          cy.get('.event_type').children().last().click();
          cy.get("input[class='date-picker']").filter(':visible').clear().type(`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`);
          cy.get("span").contains(fixture.booking_inquiry_interest).click({
            force: true
          });
          cy.get("input[name='options.budget_max_cents']").filter(':visible').type("5000");
          cy.get("input[name='options.event_theme']").filter(':visible').type("Fun NBA stories");
          cy.get("textarea[name='options.notes']").filter(':visible').type("Bring your basketball!");
          cy.get("input[name='user_id']").type(fixture.booking_inquiry_user_id);
        });

        cy.get("form").filter(':visible').submit();

        cy.location("pathname", {
          timeout: 30000,
          failOnStatusCode: !devEnv
        }).should("include", fixture.talent_booking_confirmation_url);

        // URL query format: ?user_id=user%40test.com&options%5Bevent_type_options%5D%5B0%5D=keynote&options%5Bnotes%5D=Bring%20your%20basketball%21&options%5Bevent_theme%5D=Fun%20NBA%20stories&options%5Bbudget_max_cents%5D=500000&options%5Bbudget_min_cents%5D=100000&options%5Bbudget_currency%5D=USD&options%5Bevent_date%5D=2020-06-04T22%3A00%3A00.000Z&options%5Bevent_type%5D=in_person&talent_id=88b89e96-97ec-4476-b8a7-0512cd0975c4
        cy.location("search").should("contain", `user_id=${encodeURIComponent(fixture.booking_inquiry_user_id)}`);

        cy.get(`img[src='${fixture.booking_inquiry_confirmation_visible_image}'`).should("be.visible", {
          timeout: 10000
        });
      });
    });
  });
});