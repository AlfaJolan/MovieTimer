// MainTest.js
import React, { Component } from "react";
import MapiService from "../../services/mapi-service";
import { ErrorIndicator } from "../errors";
import Spinner from "../spinner";
import MoviesView from "../movies-view";
import SearchForm from "../search"; // Импортируем SearchForm

export default class SearchPage extends Component {
    mapiService = new MapiService();

    state = {
        movies: {},
        loading: true,
        error: false,
        query: "Star Wars",
    };

    componentDidMount() {
        this.updateMovies();
    }

    componentWillUnmount() {}

    onMoviesLoaded = (movies) => {
        this.setState({
            movies,
            loading: false,
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true,
        });
    };

    updateMovies = () => {
        this.mapiService
            .searchMovies(this.state.query)
            .then(this.onMoviesLoaded)
            .catch((err) => this.onError());
    };

    changeHandler = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    searchMovie = (event) => {
        event.preventDefault();
        this.updateMovies();
    };

    render() {
        const { movies, loading, error, query } = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <MoviesView movies={movies} /> : null;
        return (
            <div className={"container"}>
                {/* Используем SearchForm */}
                <SearchForm
                    query={query}
                    changeHandler={this.changeHandler}
                    searchMovie={this.searchMovie}/>
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
