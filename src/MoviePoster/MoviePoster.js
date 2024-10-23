import './MoviePoster.css';
import tomato from "../icons/tomato.png";
import splat from "../icons/splat.png";
import { useParams, Link } from 'react-router-dom';

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
          {/* <img src={upvote} alt="upvote"/>  */}
          <img src={tomato} alt="Upvote Tomato"></img>
        </button>
        <div className="vote-count">{vote_count}</div>
        <button className="downvote-button"
        onClick={()=> changeVoteCountData(id, "down")}>
          <img src={splat} alt="Downvote Splat"></img>
        </button>
      </div>
    </section>
  );
}

export default MoviePoster;