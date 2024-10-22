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
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(moviesList => setPosters(moviesList))
    .catch(() => alert("Oops something went wrong... Try again later"));
  }, [] );

  function changeVoteCountData(id, vote) {
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `${id}`,
        vote_direction: `${vote}`
      })
    })
    .then(response => response.json())
    .then(specificMovie => {
      setPosters((prevMoviePosters) => {
        return prevMoviePosters.map((movie) => {
          if (movie.id === specificMovie.id) {
            return specificMovie;
          }
          return movie;
        });
      });
    })
    .catch(error => alert("Oops something went wrong... Try again later"));
  };

  function showMovieDetails(movie) {
    console.log(movie)
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movie.id}`)
    .then(response => response.json())
    .then(specificMovieDetails => setSelectedMovie(specificMovieDetails))
    .catch(() => alert("Oops something went wrong... Try again later"));
    console.log("showMovieDetails CLICK!")
    // setSelectedMovie(movie);
    // setSelectedMovie(movieDetails);
    // ^ hardcoding Spirited Away movie details
  };

  function showMoviePosters() {
    console.log("showMoviePosters CLICK!")
    setSelectedMovie(null);
  };

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
