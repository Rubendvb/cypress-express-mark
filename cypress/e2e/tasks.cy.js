/// <reference types="cypress" />

describe("tasks", () => {
  context("cadastro", () => {
    it("deve cadastrar uma nova tarefa", () => {
      const taskName = "Ler um livro de JS";

      cy.removeTaskByName(taskName);

      cy.createTask(taskName);

      cy.contains("main div p", taskName).should("be.visible");
    });

    it("não deve permitir tarefa duplicada", () => {
      const task = {
        name: "Ler um livro de Node.js",
        is_done: false,
      };

      cy.removeTaskByName(task.name);

      cy.postTask(task);
      cy.createTask(task.name);

      cy.get(".swal2-html-container")
        .should("be.visible")
        .should("have.text", "Task already exists!");
    });

    it("campo obrigatório", () => {
      cy.createTask();

      cy.isRequired("This is a required field");
    });
  });

  // context("atualização", () => {
  //   it("deve concluir uma tarefa", () => {
  //     const taskName = "Ler um livro de Node.js";

  //     cy.visit("http://127.0.0.1:8080/");

  //     cy.contains("p", taskName)
  //       .parent()
  //       .find("._listItemToggle_1kgm5_16")
  //       .click();
  //   });
  // });
});
