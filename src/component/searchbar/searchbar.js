import { useState } from "react";

import "./searchbar.css";

const SearchBar = ({ setSearch }) => {

    const [input, setInput] = useState("");

    const handleSearch = () => {

        if (input.trim() === "") {
            return;
        }

        console.log("Searching:", input);

        setSearch(input);

    };

    return (
        <div className="search-container">

            <input
                type="text"
                placeholder="Search movie..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

        </div>
    );
};

export default SearchBar;