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

            <div id="info">
              <span>
                <b>About</b>
              </span>
                <div className="row">
                    <div className="order-1 col-4 d-none d-lg-block d-md-block d-xl-block">
                <span id="year" className="fill d-block">
                  Production Year
                </span>
                        <span id="country" className="fill d-block">
                  Country
                </span>
                        <span id="genre" className="fill d-block">
                  Genre
                </span>
                        <span id="director" className="fill d-block">
                  Director
                </span>
                        <span id="budget" className="fill d-block">
                  budget
                </span>
                        <span id="compositer" className="fill d-block">
                  Compositer
                </span>
                        <span id="producer" className="fill d-block">
                  Producer
                </span>
                        <span id="montage" className="fill d-block">
                  Montage
                </span>
                        <span id="tagline" className="fill d-block">
                  TagLine
                </span>
                        <span id="MPAArating" className="fill d-block">
                  MPAA Rating
                </span>
                        <span id="duration" className="fill d-block">
                  Duration
                </span>
                    </div>
                    <div className="order-2 col-6 d-none d-lg-block d-md-block d-xl-block">
                <span id="yearContent" className="fillContent d-block">
                  {extractYearFromDate(movie.release_date)}
                </span>
                        <span id="countryContent" className="fillContent d-block">
                  {getProductionCountriesString(movie.production_countries)}
                </span>
                        <span id="genreContent" className="fillContent d-block">
                    {getGenresString(movie.genres)}
                </span>
                        <span id="directorContent" className="fillContent d-block">
                  {directors}
                </span>
                        <span id="budgetContent" className="fillContent d-block">
                  {movie.budget}
                </span>
                        <span id="compositerContent" className="fillContent d-block">
                  {composer}
                </span>
                        <span id="producerContent" className="fillContent d-block">
                  {producer}
                </span>
                        <span id="montageContent" className="fillContent d-block">
                  {montage}
                </span>
                        <span id="tagLineContent" className="fillContent d-block">
                  {movie.tagline}
                </span>
                        <span id="MPAAratingContent" className="fillContent d-block">
                  PG-13
                </span>
                        <span id="durationContent" className="fillContent d-block">
                  {movie.runtime} min / {minToHours(movie.runtime)} hrs
                </span>
                    </div>
                </div>
            </div>

            <div id="movieReviews" className="container">
            </div>
        </div>)
    }
}

const MovieMainInfoWithData = withData(MovieMainInfo);

const MovieMainDataWithDataAndContext = withRouter(({ match }) => (
    <MapiServiceConsumer>
        {(mapiService) => (
            <MovieMainInfoWithData
                getData={() => mapiService.getMovieData(match.params.id)}
            />
        )}
    </MapiServiceConsumer>
));

export default MovieMainDataWithDataAndContext