import React from 'react';
import { withRouter } from 'react-router-dom';
import { MapiServiceConsumer } from '../path/to/MapiServiceContext'; // Замените на путь к вашему контексту
import withData from '../path/to/withData'; // Замените на путь к вашему HOC withData
const API_IMG="https://image.tmdb.org/t/p/w500/";

const Poster = ({ data }) => (
    <img
        src={API_IMG + data.poster_path}
        alt={data.title}
        className="d-block w-100"
    />
);

const PosterWithData = withData(Poster);

// Wrap MovieMainPosterWithData with MapiServiceConsumer to access context data
// Используем withRouter для доступа к объекту match и извлечения id из URL
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
