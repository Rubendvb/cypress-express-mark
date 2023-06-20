/// <reference types="cypress" />

describe("tasks", () => {
  it("deve cadastrar uma nova tarefa", () => {
    cy.visit("http://127.0.0.1:8080/");

    cy.get("#newTask").type("Ler um livro de node.js");

    // button[contains(text(), "Create")]
    cy.contains("button", "Create").click();
  });
});
