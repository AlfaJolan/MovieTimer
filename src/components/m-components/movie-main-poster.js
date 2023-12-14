import React from "react"

import {withData, withMapiService, withChildFunction, compose} from "../hoc-helpers";

import MovieMainPoster from "../movie-main-poster"

const mapPosterMethodsToProps = (mapiService) => {
    return {
       getData: mapiService.getMovie
    }
}
/*
const MovieMainPosterComponent = compose(withMapiService(mapPosterMethodsToProps()),withData)(MovieMainPoster)
*/
const MovieMainPosterComponent = MovieMainPoster;
export default MovieMainPosterComponent;

