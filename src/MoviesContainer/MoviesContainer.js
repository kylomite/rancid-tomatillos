import './MoviesContainer.css';

function Movies({posters}) {
  // const { posters } = props;

  const showPosters = posters.map(poster => {
    return (
      <section class="poster">
        <img key={poster.id} src={poster.poster_path} alt={'movie poster'}/>
        <div>{poster.vote_count}</div>
      </section>
    )
  })

  return (
      <section className='movies-container'>
        {/* <p>We'll make some movie posters show up here!</p> */}
        {showPosters}
      </section>
  );
}
  
export default Movies;