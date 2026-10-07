import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./Moviedata.css";

const MovieData = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API_KEY = "720f6ef7";

    useEffect(() => {

        const getMovieDetails = async () => {

            try {

                setLoading(true);

                const response = await axios.get(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
                );

                console.log(response.data);

                if (response.data.Response === "True") {

                    setMovie(response.data);

                    setError("");

                } else {

                    setError(response.data.Error || "Movie not found");

                }

            } catch (error) {

                console.log(error);

                setError("Something went wrong");

            } finally {

                setLoading(false);

            }
        };

        getMovieDetails();

    }, [id]);


    if (loading) {

        return (
            <div className="details-message">
                <h2>Loading movie details...</h2>
            </div>
        );

    }


    if (error) {

        return (
            <div className="details-message">

                <h2>{error}</h2>

                <Link to="/movies">
                    Back to Movies
                </Link>

            </div>
        );

    }


    return (

        <div className="movie-details-page">

            <div className="movie-details-card">

                {/* POSTER */}

                <div className="movie-details-poster">

                    <img
                        src={
                            movie.Poster !== "N/A"
                                ? movie.Poster
                                : "https://via.placeholder.com/300x450"
                        }
                        alt={movie.Title}
                    />

                </div>


                {/* MOVIE INFORMATION */}

                <div className="movie-details-content">

                    <h1>
                        {movie.Title}
                    </h1>


                    <div className="movie-basic-info">

                        <span>{movie.Year}</span>

                        <span>•</span>

                        <span>{movie.Rated}</span>

                        <span>•</span>

                        <span>{movie.Runtime}</span>

                    </div>


                    {/* RATING */}

                    <div className="imdb-rating">

                        ⭐ {movie.imdbRating}

                        <span>
                            IMDb Rating
                        </span>

                    </div>


                    {/* PLOT */}

                    <p className="movie-plot">

                        {movie.Plot}

                    </p>


                    {/* DETAILS */}

                    <div className="details-list">

                        <div>
                            <strong>Genre</strong>
                            <span>{movie.Genre}</span>
                        </div>

                        <div>
                            <strong>Director</strong>
                            <span>{movie.Director}</span>
                        </div>

                        <div>
                            <strong>Actors</strong>
                            <span>{movie.Actors}</span>
                        </div>

                        <div>
                            <strong>Language</strong>
                            <span>{movie.Language}</span>
                        </div>

                        <div>
                            <strong>Country</strong>
                            <span>{movie.Country}</span>
                        </div>

                    </div>


                    {/* YOUTUBE TRAILER */}

                    <a
                        className="youtube-button"
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                            movie.Title + " official trailer"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶ Watch Trailer on YouTube
                    </a>


                    {/* BACK BUTTON */}

                    <Link
                        to="/movies"
                        className="back-button"
                    >
                        ← Back to Movies
                    </Link>

                </div>

            </div>

        </div>

    );
};

export default MovieData;