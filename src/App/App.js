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
    setPosters(moviePosters);
  }, [] );

  function changeVoteCountData(id, vote) {
    setPosters((prevMoviePosters) => {
      return prevMoviePosters.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            vote_count: vote === "up" ? movie.vote_count + 1 : movie.vote_count - 1
          };
        }
        return movie;
      });
    });
  }

  // function showMovieDetails(movie) {
  //   setSelectedMovie(movie);
  // };

  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer posters={ posters} changeVoteCountData={ changeVoteCountData } changeView={ showMovieDetails }/>
      {/* conditionally show movie details */}
      {/* { !setSelectedMovie && <MovieDetails movie={ selectedMovie }/> } */}
    </main>
  );
}

export default App;
