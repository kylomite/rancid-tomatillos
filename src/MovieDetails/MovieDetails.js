import './MovieDetails.css';
import homeIcon from '../icons/home.png';

function MovieDetails({ movie, onBackButton }) {
  console.log(movie, "<-> movie")

  const movieGenres = movie.genre_ids.map(genre => {
    console.log(genre)
    return (
        <p className='genre-tag'>{genre}</p>
    )
  })
  // ^ here I am trying to dynamically render the movie genres
  // in case movies have differing amounts of genres

  return (
    <section className='movie-details-view'>
      <p>Movie Details go here!</p>
      <img
        className='home-button'
        src={homeIcon}
        alt={'return to home button'}
        onClick={onBackButton}
      />
      <section className={'movie-details'}>
        <img
          className='movie-backdrop'
          src={movie.backdrop_path}
          alt={'movie image'}
        />
        <section className='details-bar'>
          <h2 className='title'>{movie.title}</h2>
          <div className='genres'>
            {movieGenres}
          </div>
        </section>
        <p className='description'>{movie.overview}</p>
      </section>
    </section>
  );
}

export default MovieDetails;