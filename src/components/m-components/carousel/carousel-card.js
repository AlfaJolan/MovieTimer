import React from "react";
import './carousel2.css'
import {Link} from "react-router-dom";
const API_IMG="https://image.tmdb.org/t/p/w500/";

const Card = ({id, title, poster_path, vote_average, release_date, overview}) => {
    const roundedVote = Math.round(vote_average * 10);
    return (
        <div className="carousel-item">
            <div className="card">
                <div className="img-wrapper">
                    <img src={API_IMG+poster_path} className="d-block w-100" alt={`Poster of ${title}`} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        Rating
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-award"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                        <b>{`${roundedVote}%`}</b>
                    </p>
                    <Link to ={`/movie/${id}#movie`} className="btn btn-primary">
                        Read Full
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;