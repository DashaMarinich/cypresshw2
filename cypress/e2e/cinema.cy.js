it("Should open the main page", () => {
 cy.visit('/');
 cy.contains('кино').should("be.visible");
});

const selector = require('../fixtures/selectors.json');

it("Should open the main page2", () => {
 cy.visit('/');
 cy.get('.page-header__title').contains("кино");
 });



it("Positive login admin", () => {
 cy.visit('http://qamid.tmweb.ru/admin');
 cy.get('[name="email"]').type("qamid@qamid.ru");
 cy.get('[name="password"]').type("qamid");
 cy.get('.login__button').click();
 cy.contains("Администраторррская").should('be.visible');

});

it("Booking a ticket", () => {
 cy.visit('http://qamid.tmweb.ru/admin');
 cy.get('[name="email"]').type("qamid@qamid.ru");
 cy.get('[name="password"]').type("qamid");
 cy.get('.login__button').click();
 cy.get('[draggable="true"][data-film-id="131"] > .conf-step__movie-title').then(($el) => $el.textContent).should('have.text','Ведьмак');
 cy.get('[draggable="true"][data-film-id="131"] > .conf-step__movie-title').invoke('text').then((text) => {
    cy.visit('/');
    cy.get(':nth-child(3) > .movie__info > .movie__description > .movie__title').should('have.text', text);
    cy.get('[data-seance-id="225"]').click();
    cy.get('.buying-scheme__wrapper > :nth-child(7) > :nth-child(5)').click();
    cy.get('.acceptin-button').click();
    cy.contains("Вы выбрали билеты").should('be.visible');
 })


 });



