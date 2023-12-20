import {compose, myCompose, withData, withMapiServiceMethod} from "../hoc-helpers";
import MovieMainInfo from "../movie-main-info";
import {useParams, withRouter} from "react-router-dom";
import {MapiServiceConsumer} from "../mapi-service-context";
import React from "react";

const MovieMainDataWithDataAndContext = compose(
    withData,
    withRouter,
    (Component) => (props) => {
        const { id } = useParams(); // useParams hook
        return (
            <MapiServiceConsumer>
                {(mapiService) => (
                    <Component
                        {...props}
                        getData={() => mapiService.getMovieData(id)}
                    />
                )}
            </MapiServiceConsumer>
        );
    }
)(MovieMainInfo);

export default MovieMainDataWithDataAndContext
