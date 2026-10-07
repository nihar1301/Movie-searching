import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./component/Login";
import Navbar from "./component/Navbar";
import SearchBar from "./component/searchbar/searchbar";
import MovieList from "./component/searchbar/Moviecard/Movielist";
import Footer from "./component/Footer";
import MovieData from "./component/Moviedata";

import "./App.css";

const App = () => {

    const [search, setSearch] = useState("");

    return (
        <BrowserRouter>

            <Routes>

                {/* LOGIN */}

                <Route
                    path="/"
                    element={<Login />}
                />


                {/* MOVIES */}

                <Route
                    path="/movies"
                    element={
                        <>
                            <Navbar />

                            <div className="app">

                                <h1>
                                    🎬 Movie Searching App
                                </h1>

                                <SearchBar
                                    setSearch={setSearch}
                                />

                                <MovieList
                                    search={search}
                                />

                            </div>

                            <Footer />
                        </>
                    }
                />


                {/* MOVIE DETAILS */}

                <Route
                    path="/movie/:id"
                    element={
                        <>
                            <Navbar />

                            <MovieData />

                            <Footer />
                        </>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
};

export default App;