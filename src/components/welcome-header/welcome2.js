// WelcomeHeader.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./welcome-header.css";
import intro from "./welcome-header.jpeg"
const WelcomeHeader = () => {
    return (
        <header className="welcome-header">
            <div className="container">
                <h1 className="welcome-title">Welcome to MovieTimer!</h1>
                <p className="welcome-description">
                    Here you can find descriptions of films, their titles, year of release and much more.
                </p>
                <Link to="/main" className="btn btn-primary">
                    To main
                </Link>
                <div className="minor">
                    <img src = {intro} alt = "intro" />
                </div>
                <p className="copyright">© 2023 by Nurkhan Kuangaliyev</p>
            </div>
        </header>
    );
};

export default WelcomeHeader;
