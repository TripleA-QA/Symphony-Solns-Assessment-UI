///<reference types="cypress" />

describe("Test to verify items are sorted by Name", () => {
  let standardUser;
  let lockedoutUser;

  beforeEach(() => {
    // Load both valid and invalid credentials from the fixture file
    cy.fixture("credentials.json").then((credentials) => {
      standardUser = credentials.standardUser;
      lockedoutUser = credentials.lockedoutUser;

      Cypress.env("standardUser", standardUser);
      Cypress.env("lockedoutUser", lockedoutUser);
    });
  });

  it("Locked Out User", () => {
    // Access the locked user from Cypress environment
    const lockedoutUser = Cypress.env("lockedoutUser");

    if (!lockedoutUser) {
      throw new Error("Invalid credentials not loaded");
    }

    const { username, password } = lockedoutUser;

    cy.visit("/");
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();

    cy.get('[data-test="error"]').contains(
      "Epic sadface: Sorry, this user has been locked out."
    );

    cy.screenshot("page-lockedout"); // Take screenshots
  });

  it("Verifies items are sorted by name (A TO Z)", () => {
    // Access the valid credentials from Cypress environment
    const standardUser = Cypress.env("standardUser");

    if (!standardUser) {
      throw new Error("Valid credentials not loaded");
    }

    const { username, password } = standardUser;

    cy.visit("/");
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();

    // Add assertions here based on the successful login
    cy.url().should("include", "/inventory.html");
    //cy.contains(`Welcome, ${username}`).should('be.visible');

    //const items = []; // Array to store item objects
    cy.get(".inventory_item").then(($items) => {
      // Convert the list of items into an array of text
      const itemNames = $items.map((index, el) => Cypress.$(el).text()).get();

      // Create a sorted copy of the array for comparison
      const sortedNames = [...itemNames].sort((a, b) => a.localeCompare(b));

      // Compare the original array with the sorted array
      expect(itemNames).to.deep.equal(sortedNames);

      cy.screenshot("page-az"); // Take screenshots
    });
  });

  it("Verifies items are sorted by name (Z TO A)", () => {
    const standardUser = Cypress.env("standardUser");

    if (!standardUser) {
      throw new Error("Valid credentials not loaded");
    }

    const { username, password } = standardUser;

    cy.visit("/");
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();

    cy.get(".product_sort_container").select("za");

    //const items = []; // Array to store item objects

    cy.get(".inventory_item").then(($items) => {
      // Convert the list of items into an array of text
      const itemNames = $items.map((index, el) => Cypress.$(el).text()).get();

      // Create a sorted copy of the array for comparison
      const sortedNames = [...itemNames].sort((a, b) => b.localeCompare(a));

      // Compare the original array with the sorted array
      expect(itemNames).to.deep.equal(sortedNames);

      cy.screenshot("page-za"); // Take screenshots
    });
  });
});
