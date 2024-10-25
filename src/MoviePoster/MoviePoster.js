import './MoviePoster.css';
import upvote from "../icons/upvote.png";
import downvote from "../icons/downvote.png";
import { Link } from 'react-router-dom';

const MoviePoster = ({ 
  id, 
  poster_path, 
  vote_count, 
  changeVoteCountData, 
  onPosterSelect 
  }) => {
    
  return (
    <section className='poster' key={id}>
      <Link to={`/movie/${id}`}>
        <img
          className="poster-image"
          src={poster_path}
          alt={'movie poster'}
          onClick={() => onPosterSelect(id)}
        />
      </Link>
      <div className="vote-bar">
        <button className="upvote-button"
        onClick={()=> changeVoteCountData(id, "up")}> 
          <img src={upvote} alt="upvote"/> 
        </button>
        <div className="vote-count">{vote_count}</div>
        <button className="downvote-button"
        onClick={()=> changeVoteCountData(id, "down")}>
          <img src={downvote} alt="downvote"/> 
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;