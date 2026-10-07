import { Link } from "react-router-dom";
import "./Moviecard.css"

const MovieCard = ({ movie }) => {

    return (
        <Link to={`/movie/${movie.imdbID}`}>

            <div className="movie-card">

                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/300x450"
                    }
                    alt={movie.Title}
                />

                <h2>{movie.Title}</h2>

                <p>Year: {movie.Year}</p>

            </div>

        </Link>
    );
};

export default MovieCard;