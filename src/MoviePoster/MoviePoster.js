import './MoviePoster.css';
import upvote from "../icons/upvote.png";
import downvote from "../icons/downvote.png";

const MoviePoster = ({ id, poster_path, vote_count }) => {
  return (
    <section className='poster' key={id}>
      <img className="poster-image" src={poster_path} alt={'movie poster'}/>
         <div className="vote-bar">
           <button className="upvote-button"> <img src={upvote} alt="upvote"/> </button>
           <div className="vote-count">{vote_count}</div>
           <button className="downvote-button"> <img src={downvote} alt="downvote"/> </button>
         </div>
    </section>
  );
}

export default MoviePoster;