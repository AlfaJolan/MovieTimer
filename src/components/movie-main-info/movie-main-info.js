import React from "react";
import {withData} from "../hoc-helpers";
import {withRouter} from "react-router-dom";
import {MapiServiceConsumer} from "../mapi-service-context";
import extractYearFromDate from "../../functions/extractYearFromDate";
import minToHours from "../../functions/minToHours";
import getProductionCountriesString from "../../functions/getProductionCountriesString";
import getGenresString from "../../functions/getGenresString";
import filterAndExtractNames from "../../functions/filterAndExtractNames";
import concatenateStrings from "../../functions/concatenateStrings";
import MovieInfoBlock from "../ movie-main-info-block";

/*
Cast:
job : Director
job : Producer
      "job": "Original Music Composer"
 */
class MovieMainInfo extends React.Component {
    render() {
        const {data} = this.props;
        const movie = data.movie;
        const credits = data.credits
        const roundedVote = Math.round(movie.vote_average * 10);
        const command = filterAndExtractNames(credits.crew);
        const directors = concatenateStrings(command.directors)
        const composer = concatenateStrings(command.composers)
        const producer = concatenateStrings(command.producers)
        const montage = concatenateStrings(command.montage)
        const year = extractYearFromDate(movie.release_date);
        const country = getProductionCountriesString(movie.production_countries);
        const genre = getGenresString(movie.genres);
        const budget = movie.budget;
        const duration = `${movie.runtime} min / ${minToHours(movie.runtime)} hrs`;
        const tagLine = movie.tagline;

        if (!movie || !credits) {
            return null; 
        }
        return (<div id="mainInfo" className="order-2 col-lg-8 col-md-8 col-xl-8 col-8 ps-5">
            <span id="name">
                <h3 className="fw-bold">{movie.title} ({extractYearFromDate(movie.release_date)})</h3>
            <h5 className="text-muted fw-light">{movie.original_title}</h5>
            </span>

            <div id="smallMedia" className="d-block d-lg-none d-md-none d-xl-none">
              <span id="ratingSmMedia">
                <h5 className="mb-0">{roundedVote}%</h5>
              </span>
                <br/>
                <span id="countVotesSmMedia" className="text-muted">
                {movie.vote_count}
              </span>
                <span>
              <button id="btnRate" className="btn btn-primary rateSmMedia mt-0">
                Rate
              </button>
              </span>
            </div>
            <MovieInfoBlock
                year={year}
                country={country}
                genre={genre}
                directors={directors}
                budget={budget}
                composer={composer}
                producer={producer}
                montage={montage}
                duration={duration}
                tagline={tagLine}
            />
            <div id="movieReviews" className="container">
            </div>
        </div>)
    }
}
export default MovieMainInfo;

