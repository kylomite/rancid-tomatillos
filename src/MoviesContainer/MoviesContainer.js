import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function Movies({posters, changeVoteCountData, changeView}) {
  const showPosters = posters.map(poster => {
    return (
      <MoviePoster
        key={poster.id}
        id={poster.id}
        poster_path={poster.poster_path}
        vote_count={poster.vote_count}
        changeVoteCountData={ changeVoteCountData }
        onClick={ () => changeView(poster) } 
      />
    )
  })

  return (
      <section className='movies-container'>
        {showPosters}
      </section>
  );
}
  
export default Movies;