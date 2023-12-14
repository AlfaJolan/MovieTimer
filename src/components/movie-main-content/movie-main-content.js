import React from 'react'

import {withMapiService} from "../hoc-helpers";
import MovieMainPoster from "../movie-main-poster";
import MovieMainPosterComponent from "../m-components/movie-main-poster";
import MovieMainInfo from "../movie-main-info/movie-main-info";

const MovieMainContent = (props) => {
    const {id, poster_path} = props

    return (
    /*
    <main class = "container">
        <div class = "d-flex flex-row">
            <div id = "Ad" class ="order-1 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-lg-block d-xl-block">

                <p>AD image</p>

            </div>


            <section id = "content" class = "order-2 col-lg-10 col-md-10 col-xl-10 col-12 order-sm-1 mx-2">

                <section id="movie" class = "border border-1 rounded-2 shadow-sm">

                    <MovieMainPosterComponent poster_path = {poster_path}/>

                    <MovieMainInfo />

                    </section>
            </section>

            <div id = "Ad" class ="order-3 col-lg-1 col-md-1 col-xl-1 col-none d-none d-md-block d-xl-block">

                <p>AD image</p>

            </div>
        </div>
    </main>
     */
        <div></div>
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