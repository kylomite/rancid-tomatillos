import './MoviesContainer.css';
import upvote from "../icons/upvote.png";
import downvote from "../icons/downvote.png";

function Movies({posters}) {

  const showPosters = posters.map(poster => {
    return (
      <section class="poster" key={poster.id}>
        <img className="poster-image" src={poster.poster_path} alt={'movie poster'}/>
        <div className="vote-bar">
          <button className="upvote-button"> <img src={upvote} alt="upvote"/> </button>
          <div className="vote-count">{poster.vote_count}</div>
          <button className="downvote-button"> <img src={downvote} alt="downvote"/> </button>
        </div>
      </section>
    )
  })

  return (
      <section className='movies-container'>
        {showPosters}
      </section>
  );
}
  
export default Movies;