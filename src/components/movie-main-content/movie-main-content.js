import React, {useEffect} from 'react'

import {withMapiService} from "../hoc-helpers";
import MovieMainPoster from "../movie-main-poster";
import MovieMainPosterComponent from "../m-components/movie-main-poster";
import MovieMainInfo from "../movie-main-info/movie-main-info";
import MovieMainPosterWithDataAndContext from "../movie-main-poster";
import "./movie-main-content.css"
import MovieMainDataWithDataAndContext from "../movie-main-info/movie-main-info";

const MovieMainContent = (props) => {
    const {id} = props


    return (

        <main class="container">
            <div class="d-flex flex-row">
                <div id="Ad"
                     class="order-1 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-lg-block d-xl-block">

                    <p>AD image</p>

                </div>


                <section id="content" className="order-2 col-lg-10 col-md-10 col-xl-10 col-12 order-sm-1 mx-2">

                    <section id="movie" className="border border-1 rounded-2 shadow-sm">
                        <div id="posterMainInfoRating" className="d-flex flex-row px-3">

                            <MovieMainPosterWithDataAndContext/>

                            <MovieMainDataWithDataAndContext />

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