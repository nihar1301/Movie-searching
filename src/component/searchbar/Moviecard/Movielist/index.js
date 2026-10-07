import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../Moviecard";

import "./Movielist.css";

const MovieList = ({ search }) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = "720f6ef7";

    useEffect(() => {

        const getMovies = async () => {

            setLoading(true);
            setError("");

            try {

                const movieName = search.trim() || "Avengers";

                console.log("API Search:", movieName);

                const response = await axios.get(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
                );

                console.log("API Response:", response.data);

                if (response.data.Response === "True") {

                    setMovies(response.data.Search);

                } else {

                    setMovies([]);
                    setError(response.data.Error || "Movie not found");

                }

            } catch (error) {

                console.log("API Error:", error);

                setMovies([]);
                setError("Something went wrong");

            } finally {

                setLoading(false);

            }
        };

        getMovies();

    }, [search]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="movies-container">

            {movies.map((movie) => (

                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                />

            ))}

        </div>
    );
};

export default MovieList;