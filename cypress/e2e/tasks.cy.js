/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("tasks", () => {
  it("deve cadastrar uma nova tarefa", () => {
    cy.visit("http://127.0.0.1:8080/");

    cy.get("#newTask").type(faker.lorem.words(5));

    // button[contains(text(), "Create")]
    cy.contains("button", "Create").click();
  });
});
