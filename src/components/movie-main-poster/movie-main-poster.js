import React from "react";
import { MapiServiceConsumer } from "../mapi-service-context";
import { withData } from "../hoc-helpers";
import { withRouter } from "react-router-dom";
import PosterWithDataAndContext from "./poster";
import "./movie-main-poster.css"; // Замените на фактический путь

class MovieMainPoster extends React.Component {
    render() {
        const { data } = this.props;

        if (!data) {
            return null; // Можно также добавить заглушку, спиннер или другой компонент загрузки
        }

        return (
            <div id ="main-poster" className= "order-1 col-lg-3 col-md-3 col-xl-3 col-4 mx-1">
                <PosterWithDataAndContext></PosterWithDataAndContext>
                <div id="media" className={"container ps-0 pe-0 mt-1 d-none d-lg-block d-md-block d-xl-block p-1"}>
                    {/* Дополнительные детали или компоненты по необходимости */}
                    <div className="trailer embed-responsive">
                        <iframe className="" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=T9g386V8_UvaFRKS"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>

                    </div>
                </div>
            </div>
        );
    }
}

const MovieMainPosterWithData = withData(MovieMainPoster);


const MovieMainPosterWithDataAndContext = withRouter(({ match }) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <MovieMainPosterWithData
                getData={() => mapiService.getMovie(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default MovieMainPosterWithDataAndContext;


