describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'McDonalds';

    cy.visit('http://localhost:1234');

    cy.get('[data-test="restaurantList"').contains('(none)');

    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.get('[data-test="restaurantList"').contains(restaurantName);
  });
});
