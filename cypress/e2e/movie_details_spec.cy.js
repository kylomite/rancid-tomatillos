describe('main page spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: 'movie_details'
    })
    cy.visit('http://localhost:3000/')
    cy.get('.poster').first().click()
  })

  it('displays movie details', () => {
    // ROOM FOR ROUTING TEST
    cy.get('.home-button').should('exist')
    .get('.movie-backdrop').should('exist')
    .get('.title').should('contain', 'The Dark Knight')
    .get('.genre-tag').last().should('contain', 'Thriller')
    .get('.description').should
      (
        'contain',
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.'
      )
  })

  it('returns to main view when clicking homebutton', () => {

  })
})