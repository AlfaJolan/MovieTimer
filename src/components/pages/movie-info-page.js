import React from "react"
import MovieMainContent from "../movie-main-content/movie-main-content";

const MovieInfo = ({history, match}) => {
    const {id} = match.params
    return (
        MovieMainContent(id)
    )
}

export default MovieInfo;