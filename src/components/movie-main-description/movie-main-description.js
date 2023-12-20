import React from "react";

const Sinopsis =({overview}) => {
    if(!overview) return (
        <p>No Sinopsis</p>
    )
    return (<p>{overview}</p>)
}

class Description extends React.Component {
    componentDidMount() {
        const { getData } = this.props;

        if (getData) {
            getData(this.props.match);
        }
    }
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


export default Description;
/*
const DescriptionWithData = withData(Description);


const DescriptionWithDataAndContext = withRouter(({match}) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <DescriptionWithData
                getData={() => mapiService.getMovie(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default DescriptionWithDataAndContext;
 */