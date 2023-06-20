/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("tasks", () => {
  it("deve cadastrar uma nova tarefa", () => {
    cy.request({
      url: "http://localhost:3333/helper/tasks",
      method: "DELETE",
      body: { name: "Ler um livro de JS" },
    }).then((res) => {
      expect(res.status).to.eq(204);
    });

    cy.visit("http://127.0.0.1:8080/");

    cy.get("#newTask").type("Ler um livro de JS");

    // button[contains(text(), "Create")]
    cy.contains("button", "Create").click();

    cy.contains("main div p", "Ler um livro de JS").should("be.visible");
  });
});
