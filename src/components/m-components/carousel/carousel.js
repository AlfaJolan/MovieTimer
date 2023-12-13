import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Card from '../carousel-card'
import './carousel2.css';
// Ваш файл сценария
import $ from 'jquery';

// Теперь у вас должна быть полная версия jQuery, включающая метод animate


const API_IMG="https://image.tmdb.org/t/p/w500/";

/*
const Card = ({title, poster_path, vote_average, release_date, overview}) => {
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
                    <a href={"/main"} className="btn btn-primary">
                        Read Full
                    </a>
                </div>
            </div>
        </div>
    );
};
*/
const Carousel = ({movies}) => {
    /*
    useEffect(() => {
        // Этот код будет выполнен после монтирования компонента в DOM
        var multipleCardCarousel = document.querySelector("#carouselExampleControls");

        if (window.matchMedia("(min-width: 768px)").matches) {
            var carousel = new window.bootstrap.Carousel(multipleCardCarousel, {
                interval: false,
            });
            var carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
            var cardWidth = document.querySelector(".carousel-item").offsetWidth;
            var scrollPosition = 0;

            document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    scrollPosition += cardWidth;
                    document.querySelector("#carouselExampleControls .carousel-inner").scrollLeft = scrollPosition;
                }
            });

            document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    document.querySelector("#carouselExampleControls .carousel-inner").scrollLeft = scrollPosition;
                }
            });
        } else {
            multipleCardCarousel.classList.add("slide");
        }
    }, []);

     */

    useEffect(() => {
        var multipleCardCarousel = document.querySelector(
            "#carouselExampleControls"
        );

        if(multipleCardCarousel) console.log("NO")

        if (window.matchMedia("(min-width: 768px)").matches) {
            var carousel = new window.bootstrap.Carousel(multipleCardCarousel, {
                interval: false,
            });
            var carouselWidth = $(".carousel-inner")[0].scrollWidth;
            var cardWidth = $(".carousel-item").width();
            var scrollPosition = 0;
            $("#carouselExampleControls .carousel-control-next").on("click", function () {
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    scrollPosition += cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate(
                        { scrollLeft: scrollPosition },
                        600
                    );
                }
            });
            $("#carouselExampleControls .carousel-control-prev").on("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate(
                        { scrollLeft: scrollPosition },
                        600
                    );
                }
            });
        }
        else {
            console.log("HELLO")
            if (multipleCardCarousel) {
                console.log("IM INSIDE")
                $(multipleCardCarousel).addClass("slide");
            }
        }
    }, []);

    return (
        <div className="carousel">
            <div className="container">
                <div id="carouselExampleControls" className="carousel">
                    {movies && movies.length > 0 ? (
                        <div className="carousel-inner">
                            {movies.map((movieReq) => (
                                <Card key={movieReq.id} {...movieReq} />
                            ))}
                        </div>
                    ) : (
                        <h2>Sorry !! No Movies Found</h2>
                    )}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Carousel);
