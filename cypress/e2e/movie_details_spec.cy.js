describe('main page spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })
    cy.visit('http://localhost:3000/')
  })

  it('displays movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: 'movie_details'
    })
    cy.get('.poster').first().click()
    // ROOM FOR ROUTING TEST
    cy.get('h1').should('contain', 'rancid tomatillos')
    .get('.home-button').should('exist')
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
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: 'movie_details'
    })

    cy.get('.poster').first().click()
    cy.get('.home-button').click({force: true})
    // ROOM FOR ROUTING TEST
    cy.get('h1').should('contain', 'rancid tomatillos')
    .get('.movies-container').should('exist')
    .get('.poster').should('have.length', 5)
    .get('.poster').first().find('img').should('exist')
    .get('.poster').first().find('div [class="vote-count"]').should('exist')
    .get('.poster').first().find('div [class="upvote-button"]').should('exist')
    .get('.poster').first().find('div [class="downvote-button"]').should('exist')
    .get('.poster').last().find('img').should('exist')
    .get('.poster').last().find('div [class="vote-count"]').should('exist')
    .get('.poster').last().find('div [class="upvote-button"]').should('exist')
    .get('.poster').last().find('div [class="downvote-button"]').should('exist')
  })

  it('shows error message when network request is unsuccessful', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155', {
      statusCode: 404
    })
    cy.get('.poster').first().click()
    cy.on('window:alert', (text) => {expect(text).to.eq('Oops something went wrong... Try again later')})
  })
})