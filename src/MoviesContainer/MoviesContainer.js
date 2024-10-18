import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function Movies({posters, changeVoteCountData}) {
  const showPosters = posters.map(poster => {
    return (
      <MoviePoster
        key={poster.id}
        id={poster.id}
        poster_path={poster.poster_path}
        vote_count={poster.vote_count}
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