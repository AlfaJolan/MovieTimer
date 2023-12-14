import React from 'react'

import {withMapiService} from "../hoc-helpers";
import MovieMainPoster from "../movie-main-poster";
import MovieMainPosterComponent from "../m-components/movie-main-poster";
import MovieMainInfo from "../movie-main-info/movie-main-info";
import MovieMainPosterWithDataAndContext from "../movie-main-poster";
import "./movie-main-content.css"
const MovieMainContent = (props) => {
    const {id} = props

    return (

    <main class = "container">
        <div class = "d-flex flex-row">
            <div id = "Ad" class ="order-1 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-lg-block d-xl-block">

                <p>AD image</p>

            </div>


            <section id = "content" className= "order-2 col-lg-10 col-md-10 col-xl-10 col-12 order-sm-1 mx-2">

                <section id="movie" className="border border-1 rounded-2 shadow-sm">
                    <div id="posterMainInfoRating" className="d-flex flex-row px-3">

                        <MovieMainPosterWithDataAndContext/>
                        <div id="mainInfo" className="order-2 col-lg-8 col-md-8 col-xl-8 col-8 ps-5">
            <span id="name">
            <h3 className="fw-bold">Barbie (2023)</h3>
            <h5 className="text-muted fw-light">Barbie</h5>
            </span>

                            <div id="smallMedia" className="d-block d-lg-none d-md-none d-xl-none">
              <span id="ratingSmMedia">
                <h5 className="mb-0">6.7</h5>
              </span>
                                <br/>
                                <span id="countVotesSmMedia" className="text-muted">
                130.496
              </span>
                                <span>
              <button id="btnRate" className="btn btn-primary rateSmMedia mt-0">
                Rate
              </button>
              </span>
                            </div>

                            <div id="info">
              <span>
                <b>About</b>
              </span>
                                <div className="row">
                                    <div className="order-1 col-4 d-none d-lg-block d-md-block d-xl-block">
                <span id="year" className="fill d-block">
                  Production Year
                </span>
                                        <span id="country" className="fill d-block">
                  Country
                </span>
                                        <span id="genre" className="fill d-block">
                  Genre
                </span>
                                        <span id="director" className="fill d-block">
                  Director
                </span>
                                        <span id="writer" className="fill d-block">
                  Writer
                </span>
                                        <span id="compositer" className="fill d-block">
                  Compositer
                </span>
                                        <span id="art" className="fill d-block">
                  Art
                </span>
                                        <span id="montage" className="fill d-block">
                  Montage
                </span>
                                        <span id="age" className="fill d-block">
                  Age
                </span>
                                        <span id="MPAArating" className="fill d-block">
                  MPAA Rating
                </span>
                                        <span id="duration" className="fill d-block">
                  Duration
                </span>
                                    </div>
                                    <div className="order-2 col-6 d-none d-lg-block d-md-block d-xl-block">
                <span id="yearContent" className="fillContent d-block">
                  2023
                </span>
                                        <span id="countryContent" className="fillContent d-block">
                  USA
                </span>
                                        <span id="genreContent" className="fillContent d-block">
                  Comedy
                </span>
                                        <span id="directorContent" className="fillContent d-block">
                  Greta Gerwig
                </span>
                                        <span id="writerContent" className="fillContent d-block">
                  Greta Gerwig, Noah Baumbach
                </span>
                                        <span id="compositerContent" className="fillContent d-block">
                  Mark Ronson
                </span>
                                        <span id="artContent" className="fillContent d-block">
                  Din Klegg
                </span>
                                        <span id="montageContent" className="fillContent d-block">
                  Nick Hugh
                </span>
                                        <span id="ageContent" className="fillContent d-block">
                  13+
                </span>
                                        <span id="MPAAratingContent" className="fillContent d-block">
                  PG-13
                </span>
                                        <span id="durationContent" className="fillContent d-block">
                  114 min/1:54
                </span>
                                    </div>
                                </div>
                            </div>

                            <div id="movieReviews" className="container">

                            </div>
                        </div>
                        {/*<MovieMainInfo/>*/}
                    </div>
                    <div id="decription" className="px-3 mt-5 w-65">
                        <h3>Sinopsis</h3>
                        <p>
                            To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a
                            full-on existential crisis. Or you're a Ken.
                        </p>
                    </div>
                </section>
            </section>

            <div id="Ad" class="order-3 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-xl-block">

                <p>AD image</p>

            </div>
        </div>
    </main>


    )
}
/*
const mapMethodsToProps = (mapiService) => {
    return {
        getDetails: mapiService.getDetails
    }
}

export default withMapiService(mapMethodsToProps)(MovieMainContent)

 */
export default MovieMainContent