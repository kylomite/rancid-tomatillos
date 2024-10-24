import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [posters, setPosters] = useState([]);
  const [allPosters, setAllPosters] = useState([]);
  // ^ Used to keep hold of the original fetched state
  // for reloading the all posters when search bar is cleared
  const [selectedMovie, setSelectedMovie] = useState(null);

  // live search
  const [movieSearch, setMovieSearch] = useState("");

  useEffect( () => {
    fetch("https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(moviesList => {
      setPosters(moviesList);
      setAllPosters(moviesList);
    })
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
  };

  function showMoviePosters() {
    console.log("showMoviePosters CLICK!")
    setSelectedMovie(null);
  };

  // searching function
  function searchMovieList(event) {
    const search = event.target.value
    setMovieSearch(search);
    // ^ here we are updating the search state
    if (search === "") {
      setPosters(allPosters)
    } else {
      const filteredMovies = allPosters.filter(poster => {
        return poster.title.toLowerCase().includes(search.toLowerCase())
      })
      setPosters(filteredMovies)
    }   
  };



  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        <form>
          <img className='search-icon' src={searchIcon} alt='search icon'/>
          <input
            type="search"
            id="site-search"
            placeholder='  Start typing here...'
            value={movieSearch}
            onChange={searchMovieList}
          />
        </form>
      </header>
        <Routes>
          <Route path='/' element={
            <MoviesContainer
              posters={ posters }
              changeVoteCountData={ changeVoteCountData }
              selectedMovie={ selectedMovie }
              onPosterSelect={ showMovieDetails }
              onBackButton={ showMoviePosters }
            />}>
            <Route path='/movie/:id'/>
          </Route>
        </Routes>
    </main>
  );
}

export default App;
