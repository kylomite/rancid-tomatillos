// As a user, when I upvote a movie, I see the movie’s votes increase by one.
describe('Voting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    });
  });

  it('increases the vote count when clicking the upvote button', () => {
    cy.fixture('movie_posters').then(movies => {
      const lastMovie = movies[movies.length - 1]
      const upvotedMovie = {...lastMovie, vote_count: '11243'}

      cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/372058', {
        statusCode: 200,
        body: upvotedMovie
      }).as('posterVote');
    })
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
    cy.get(':nth-child(5) > .vote-bar > .upvote-button').click()
    cy.wait('@posterVote')
    cy.get('@posterVote').its('response.statusCode').should('eq', 200)
    cy.get(':nth-child(5) > .vote-bar > .vote-count').invoke('text').then(text => {
      const newVoteCount = (parseInt(text) + 1).toString()
      cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11243')
    });
  });

  it('decreases the vote count when clicking the downvote button', () => {
    cy.fixture('movie_posters').then(movies => {
      const lastMovie = movies[movies.length - 1]
      const upvotedMovie = {...lastMovie, vote_count: '11241'}

      cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/372058', {
        statusCode: 200,
        body: upvotedMovie
      }).as('posterVote');
    })
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
    cy.get(':nth-child(5) > .vote-bar > .downvote-button').click()
    cy.wait('@posterVote')
    cy.get('@posterVote').its('response.statusCode').should('eq', 200)
    cy.get(':nth-child(5) > .vote-bar > .vote-count').invoke('text').then(text => {
      const newVoteCount = (parseInt(text) - 1).toString()
      cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11241')
    })
  });
});


describe('Voting Sad Paths', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    });
    cy.intercept('PATCH', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/372058', {
      statusCode: 400,
      body: {
        "message": "Oops something went wrong... Try again later"
      }
    }).as('failedVote')
  });

  it('shows and alert when an error occures on the upvote', () => {
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
    cy.get(':nth-child(5) > .vote-bar > .upvote-button').click()
    cy.wait('@failedVote')
    cy.get('@failedVote').its('response.statusCode').should('eq', 400)
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Oops something went wrong... Try again later')
    })
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
  });

  it('shows and alert when an error occures on the downvote', () => {
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
    cy.get(':nth-child(5) > .vote-bar > .downvote-button').click()
    cy.wait('@failedVote')
    cy.get('@failedVote').its('response.statusCode').should('eq', 400)
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Oops something went wrong... Try again later')
    })
    cy.get(':nth-child(5) > .vote-bar > .vote-count').should('have.text', '11242')
  });
})
