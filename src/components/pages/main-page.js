import React, {Component} from "react";
import MapiService from "../../services/mapi-service";
import {ErrorIndicator} from "../errors";
import Spinner from "../spinner";
import TicketPurchaseTimer from "../purchase-ticket" // Замените путь на актуальный

import {MainContent} from "../m-components";
import "../m-components/carousel/carousel-script"


export default class MainPage extends Component{

    mapiService = new MapiService()

    state = {
        movies: {},
        loading: true,
        error: false,
        showTicketPurchaseMessage: false,
    }

    componentDidMount(){
        this.updateMovies()
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }

    onMoviesLoaded = (movies) => {
        this.setState({
            movies,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateMovies = () => {
        this.mapiService
            .getUpcomingMovies()
            .then(this.onMoviesLoaded)
            .catch((err) => this.onError());


        this.timerId = setTimeout(() => {
            this.setState({ showTicketPurchaseMessage: true });

            // Выводим alert после 2 минут
            alert("Bonus Time Is End");
            this.forceUpdate();
        }, 15000);
    }


    render() {
        const {movies, loading, error, showTicketPurchaseMessage} = this.state
        const hasData = !(loading || error)
        console.log(movies)
        const errorMessage = error ? <ErrorIndicator />: null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <MainContent movies={movies}/> : null
        /*
            Carousel, must be,
         */
        return(
            <div className={"container"}>
                {errorMessage}
                {spinner}
                {content}
                {showTicketPurchaseMessage && <TicketPurchaseTimer />}
            </div>
        );
    }
}

