import React from "react";
import './welcome-header.css'
import {Link} from "react-router-dom";
import introImage from './welcome-header.jpeg';

const WelcomeHeader = () => {
    return (
        <div className="row mb-2 w-header">
            <div className="col-md-6">
                <div className="description">
                    <h1 className="display-4">Welcome to MovieTimer!</h1>
                    <p className="lead">
                        Here you can find descriptions of films, their titles, year of release and much more.
                    </p>
                    <p className="lead">
                        Explore the world of cinema with MovieTimer.
                    </p>
                    <hr className="my-4" />
                    <p className="minor">
                        © 2023 by Nurkhan Kuangaliyev.
                    </p>
                    <Link to="/main" className="btn btn-primary">
                        To Main
                    </Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="intro-img">
                    <img src={introImage} alt="intro" />
                </div>
            </div>
        </div>
    );
};
export default WelcomeHeader;
