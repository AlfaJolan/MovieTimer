
import {myCompose,compose, withData, withMapiServiceMethod} from "../hoc-helpers";
import MovieMainPoster from "../movie-main-poster";
import {useParams, withRouter} from "react-router-dom";
import {MapiServiceConsumer} from "../mapi-service-context";
import React from "react";

const MovieMainPosterWithDataAndContext = compose(
    withData,
    withRouter,
    (Component) => (props) => {
        const { id } = useParams(); // useParams hook
        return (
            <MapiServiceConsumer>
                {(mapiService) => (
                    <Component
                        {...props}
                        getData={() => mapiService.getMovie(id)}
                    />
                )}
            </MapiServiceConsumer>
        );
    }
)(MovieMainPoster);

export default MovieMainPosterWithDataAndContext
