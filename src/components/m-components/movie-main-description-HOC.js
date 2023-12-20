import {compose, myCompose, withData, withMapiServiceMethod} from '../hoc-helpers';
import Description from '../movie-main-description';
import {MapiServiceConsumer} from "../mapi-service-context";
import {useParams, withRouter} from "react-router-dom";
import React from "react";


const DescriptionWithDataAndContext = compose(
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
)(Description);

export default DescriptionWithDataAndContext;
