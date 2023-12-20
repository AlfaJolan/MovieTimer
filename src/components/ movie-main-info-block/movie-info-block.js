
import minToHours from "../../functions/minToHours";
import React from "react";
const MovieInfoBlock = ({
                            year,
                            country,
                            genre,
                            directors,
                            budget,
                            composer,
                            producer,
                            montage,
                            duration,
                            tagline,
                        }) => {
    return (
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
                    <span id="duration" className="fill d-block">
                  Duration
                </span>
                    <span id="tagline" className="fill d-block">
                  TagLine
                </span>
                </div>
                <div className="order-2 col-6 d-none d-lg-block d-md-block d-xl-block">
                <span id="yearContent" className="fillContent d-block">
                    {year}
                </span>
                    <span id="countryContent" className="fillContent d-block">
                  {country}
                </span>
                    <span id="genreContent" className="fillContent d-block">
                    {genre}
                </span>
                    <span id="directorContent" className="fillContent d-block">
                  {directors}
                </span>
                    <span id="budgetContent" className="fillContent d-block">
                  {budget}
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
                    <span id="durationContent" className="fillContent d-block">
                  {duration}
                </span>
                    <span id="tagLineContent" className="fillContent d-block">
                  {tagline}
                </span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBlock;