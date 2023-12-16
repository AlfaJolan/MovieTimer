import React from 'react';
import { withRouter } from 'react-router-dom';
import { MapiServiceConsumer } from "../mapi-service-context";
import { withData } from "../hoc-helpers";
const API_IMG="https://image.tmdb.org/t/p/w500/";

const Poster = ({ data }) => (
    <img
        src={API_IMG + data.poster_path}
        alt={data.title}
        className="d-block w-100"
    />
);

const PosterWithData = withData(Poster);


const PosterWithDataAndContext = withRouter(({ match }) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <PosterWithData
                getData={() => mapiService.getMovie(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default PosterWithDataAndContext;
