import React from "react";
import { MapiServiceConsumer } from "../mapi-service-context";
import { withData } from "../hoc-helpers";
import { withRouter } from "react-router-dom";

const Sinopsis =({overview}) => {
    if(!overview) return (
        <p>No Sinopsis</p>
    )
    return (<p>{overview}</p>)
}

class Description extends React.Component {
    render() {
        const { data } = this.props;

        if (!data) {
            return null; // Можно также добавить заглушку, спиннер или другой компонент загрузки
        }
        return (
            <div id="decription" className="px-3 mt-5 w-65">
                <h3>Sinopsis</h3>
                <p>
                    <Sinopsis overview = {data.overview}></Sinopsis>
                </p>
            </div>
        );
    }
}

// Wrap MovieMainPoster with withData HOC
const DescriptionWithData = withData(Description);

// Wrap MovieMainPosterWithData with MapiServiceConsumer to access context data
// Используем withRouter для доступа к объекту match и извлечения id из URL
const DescriptionWithDataAndContext = withRouter(({match}) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <DescriptionWithData
                getData={() => mapiService.getMovie(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default DescriptionWithDataAndContext



