import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();

        if (username.trim() === "" || password.trim() === "") {

            setError("Please enter username and password");

            return;
        }

        // Demo login
        if (username === "admin" && password === "1234") {

            setError("");

            // Login success
            navigate("/movies");

        } else {

            setError("Invalid username or password");

        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-icon">
                    🎬
                </div>

                <h1>Movie Search</h1>

                <p className="login-subtitle">
                    Login to explore movies
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                        />

                    </div>


                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                    </div>


                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}


                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>
                    <p>
                      Don't have an account?
                     <Link to="/register"> Register</Link>
                    </p>

                </form>

                <p className="demo-login">
                    Demo: admin / 1234
                </p>

            </div>

        </div>
    );
};

export default Login;