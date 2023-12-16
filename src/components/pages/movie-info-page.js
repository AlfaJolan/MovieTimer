import React, {useEffect} from "react"
import MovieMainContent from "../movie-main-content/movie-main-content";

const MovieInfo = ({history, match}) => {
    const {id} = match.params
    useEffect(() => {
        const hash = window.location.hash.substr(1);
        if (hash === 'movie') {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (

        MovieMainContent(id)

    )
}

export default MovieInfo;