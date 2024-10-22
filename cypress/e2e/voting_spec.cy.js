describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})
// As a user, when I upvote a movie, I see the movie’s votes increase by one.
describe('Voting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    // cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
    //   statusCode: 200
    //   // fixtures: 'movie_posters'
    // })
    // https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/372058', {
      statusCode: 200,
      // fixture: 'movie_posters'
      body: {
        "id": 372058,
        "poster_path": "https://image.tmdb.org/t/p/original//vfJFJPepRKapMd5G2ro7klIRysq.jpg",
        "title": "Your Name.",
        "vote_count": 11242
      }
    }).as('posterVote')
  })

  it('increases the vote count when clicking the upvote button', () => {
    cy.get('.upvote-button').should('exist')

    cy.get(':nth-child(55) > .vote-bar > .vote-count').should('have.text', '11242')

    cy.get(':nth-child(55) > .vote-bar > .upvote-button').click()
    cy.wait('@posterVote')
    cy.get('@posterVote').its('response.statusCode').should('eq', 200)

    cy.get(':nth-child(55) > .vote-bar > .vote-count').invoke('text').then(text => {
      const newVoteCount = parseInt(text) + 1
      cy.get(':nth-child(55) > .vote-bar > .vote-count').should('have.text', newVoteCount.toString())
    })

    // cy.get('@posterVote').its('response.body.vote_count').should('have.text', '11243')
    // cy.get(':nth-child(55) > .vote-bar > .vote-count')
  })
})
