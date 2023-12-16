import React, {Component} from "react";
import MapiService from "../../services/mapi-service";
import {ErrorIndicator} from "../errors";
import Spinner from "../spinner";

import {MainContent} from "../m-components";
import "../m-components/carousel/carousel-script"


export default class MainPage extends Component{

    mapiService = new MapiService()

    state = {
        movies: {},
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updateMovies()
    }

    componentWillUnmount() {

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
            .catch((err) => this.onError())
    }


    render() {
        const {movies, loading, error} = this.state
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
            </div>
        );
    }
}

