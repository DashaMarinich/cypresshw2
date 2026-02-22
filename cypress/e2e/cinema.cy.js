


it("Should open the main page", () => {
 cy.visit('/');
 cy.contains('кино').should("be.visible");
});

const selectors = require('../fixtures/selectors.json');

it("Should open the main page2", async () => {
  const selectors = await cy.fixture('selectors');
  cy.visit('/');
  cy.get(selectors.title).should('be.visible').and('contain', 'кино');
});


it("Positive login admin", async () => {
const selectors = await cy.fixture('selectors');
 cy.visit('http://qamid.tmweb.ru/admin');
 cy.get(selectors.email).type("qamid@qamid.ru");
 cy.get(selectors.password).type("qamid");
 cy.get(selectors.button).click();
 cy.contains("Администраторррская").should('be.visible');

});

it("Booking a ticket", async () => {
 const selectors = await cy.fixture('selectors');
 cy.visit('http://qamid.tmweb.ru/admin');
 cy.get(selectors.email).type("qamid@qamid.ru");
 cy.get(selectors.password).type("qamid");
 cy.get(selectors.button).click();
 cy.get(selectors.selectedMovie).then(($el) => $el.textContent).should('have.text','Ведьмак');
 cy.get(selectors.selectedMovie).invoke('text').then((text) => {
    cy.visit('/');
    cy.get(selectors.movie).should('have.text', text);
    cy.get(selectors.dataSeance).click();
    cy.get('.buying-scheme__wrapper > :nth-child(7) > :nth-child(5)').click();
    cy.get(selectors.acceptinButton).click();
    cy.contains("Вы выбрали билеты").should('be.visible');
 })

 });



