import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieDetails from '../MovieDetails/MovieDetails';

function Movies(props) {

  const {posters, changeVoteCountData, selectedMovie, onPosterSelect, onBackButton} = props

  const showPosters = posters.map(poster => {
    return (
      <MoviePoster
        key={poster.id}
        id={poster.id}
        poster_path={poster.poster_path}
        vote_count={poster.vote_count}
        changeVoteCountData={ changeVoteCountData }
        onPosterSelect={ () => onPosterSelect(poster) } 
      />
    )
  })

  const showDetails = (
    <MovieDetails
      movie={selectedMovie}
      onBackButton={onBackButton}
    />
  )

  return (
      <section className='movies-container'>
        { selectedMovie ? showDetails : showPosters }
        {/* ^ here we are checking to see if the selectedMovie value is null or truthy
          if the value is null = poster view will display
          if the value is a movie = the movie details view will display */}
      </section>
  );
}
  
export default Movies;