import './MoviesContainer.css';

function Movies({posters}) {
  // const { posters } = props;

  const showPosters = posters.map(poster => {
    return (
      <section class="poster" key={poster.id}>
        <img className="poster-image" src={poster.poster_path} alt={'movie poster'}/>
        <div className="vote-bar">
          <div className="vote-count">{poster.vote_count}</div>
        </div>
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