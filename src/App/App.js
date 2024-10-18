import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [posters, setPosters] = useState([]);

  useEffect( () => {
    setPosters(moviePosters);
  }, [] );

  function changeVoteCountData(movieid) {
    //if buttons class === upvote-button
    //  moviePosters[movieid].vote_count += 1
    //else
    //  moviePosters[movieid].vote_count -= 1
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer posters={ posters} changeVoteCountData={ changeVoteCountData }/>
    </main>
  );
}

export default App;
