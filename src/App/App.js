import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [posters, setPosters] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect( () => {
    // setPosters(moviePosters);
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(moviesList => setPosters(moviesList));
  }, [] );

  function changeVoteCountData(id, vote) {
    // setPosters((prevMoviePosters) => {
    //   return prevMoviePosters.map((movie) => {
    //     if (movie.id === id) {
    //       return {
    //         ...movie,
    //         vote_count: vote === "up" ? movie.vote_count + 1 : movie.vote_count - 1
    //       };
    //     }
    //     return movie;
    //   });
    // });
    console.log(vote, "<-> vote")
    // let voteDirection = vote
    // console.log(voteDirection, "<-> voteDirection")

    setPosters((prevMoviePosters) => {
      return prevMoviePosters.map((movie) => {
        if (movie.id === id) {
          console.log(movie.vote_count)
          fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              id: `${id}`,
              vote_direction: `${vote}`
              // vote_direction: `${voteDirection}`
            })
          })
          .then(response => response.json())
          .then(specificMovie => {
            console.log(specificMovie, '<-> specificMovie')
            setPosters( (prevMoviePosters) => {

              console.log(prevMoviePosters, '<-> prevMoviePosters')
             return prevMoviePosters.map( (movie) => {
              if (movie.id === specificMovie.id) {
                return specificMovie
              } else {
               return movie
              }
             })

            })
          })
          .catch(error => alert(error));
        }
        // console.log(movie.id, '<-> movie.id')
        return movie;
      })
    })
  }
uijj
  function showMovieDetails(movie) {
    console.log("showMovieDetails CLICK!")
    // setSelectedMovie(movie);
    setSelectedMovie(movie);
    // ^ hardcoding Spirited Away movie details
  };

  function showMoviePosters() {
    console.log("showMoviePosters CLICK!")
    setSelectedMovie(null);
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer
        posters={ posters}
        changeVoteCountData={ changeVoteCountData }
        selectedMovie={ selectedMovie }
        onPosterSelect={ showMovieDetails }
        onBackButton={ showMoviePosters }
      />
    </main>
  );
}

export default App;
