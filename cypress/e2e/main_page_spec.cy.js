describe('main page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 200,
      fixture: 'movie_posters'
    })
  });

  it('shows the main page', () => {
    cy.url().should('include', '/')
    cy.get('h1').should('contain', 'rancid tomatillos')
    .get('.search-icon').should('exist')
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
  });

  it('has live search functionality', () => {
    cy.get('#site-search').type('t')
    .get('.poster').should('have.length', 4)
    .get('#site-search').type('h')
    .get('.poster').should('have.length', 2)
    .get('#site-search').type('{backspace}')
    .get('.poster').should('have.length', 4)
  });

  it('can hold state with the enter key', () => {
    cy.get('#site-search').type('tHe', '{enter}')
    cy.wait
    cy.get('.poster').should('have.length', 2)
  })
});

describe('sad path', () => {
  it('handles a server side error', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies', {
      statusCode: 500
    })
    cy.on('window:alert', (text) => {expect(text).to.eq('Oops something went wrong... Try again later')})
  });
});