// Подключаем файл один раз в начале - это синхронная операция, самая надежная
const selectors = require('../fixtures/selectors.json');

describe('Cinema tests', () => {

  it("Should open the main page", () => {
    cy.visit('/');
    cy.contains('кино').should("be.visible");
  });

  it("Should open the main page2", () => {
    // Убрали async/await, используем переменную selectors, объявленную выше
    cy.visit('/');
    cy.get(selectors.title).should('be.visible').and('contain', 'кино');
  });

  it("Positive login admin", () => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.get(selectors.email).type("qamid@qamid.ru");
    cy.get(selectors.password).type("qamid");
    cy.get(selectors.button).click();
    cy.contains("Администраторская").should('be.visible');
  });

  it("Booking a ticket", () => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.get(selectors.email).type("qamid@qamid.ru");
    cy.get(selectors.password).type("qamid");
    cy.get(selectors.button).click();
    
    // Вместо await используем .then() для работы с текстом элемента
    cy.get(selectors.selectedMovie).then(($el) => {
        expect($el.text()).to.contain('Ведьмак');
    });

    cy.get(selectors.selectedMovie).invoke('text').then((text) => {
        cy.visit('/');
        cy.get(selectors.movie).should('have.text', text);
        cy.get(selectors.dataSeance).click();
        cy.get('.buying-scheme__wrapper > :nth-child(7) > :nth-child(5)').click();
        cy.get(selectors.acceptinButton).click();
        cy.contains("Вы выбрали билеты").should('be.visible');
    });
  });
});