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
    .then(moviesList => setPosters(moviesList));
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
    .catch(error => alert(error));
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
    // console.log(vote, "<-> vote")
    // let voteDirection = vote
    // console.log(voteDirection, "<-> voteDirection")

      // return moviePosters.map((movie) => {
      //   if (movie.id === id) {
      //     console.log(movie.vote_count)
      //     fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
      //       method: "PATCH",
      //       headers: {"Content-Type": "application/json"},
      //       body: JSON.stringify({
      //         id: `${id}`,
      //         vote_direction: `${vote}`
      //       })
      //     })
      //     .then(response => response.json())
      //     .then(specificMovie => {
      //       setPosters( (prevMoviePosters) => {
      //        return prevMoviePosters.map( (movie) => {
      //         if (movie.id === specificMovie.id) {
      //           console.log(moviePosters, "<-- updated posters")
      //           return specificMovie
      //         } else {
      //          return movie
      //         }
      //        })
      //       })
      //     })
      //     .catch(error => alert(error));
      //   }
      //   return movie;
      // })
    }

  function showMovieDetails(movie) {
    console.log(movie)
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${movie.id}`)
    .then(response => response.json())
    .then(specificMovieDetails => setSelectedMovie(specificMovieDetails));
    console.log("showMovieDetails CLICK!")
    // setSelectedMovie(movie);
    // setSelectedMovie(movieDetails);
    // ^ hardcoding Spirited Away movie details
    .catch(error => alert(error));
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
