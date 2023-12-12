import React from "react";
import MovieBox from "../movie-box";
import './movies-view.css'
const MoviesView = ({movies}) => {
    return(
        <React.Fragment>
            {movies.length > 0 ?(
                <div className="container-view">
                    <div className="grid">
                        {movies.map((movieReq)=>
                            <MovieBox key={movieReq.id} {...movieReq}/>)}
                    </div>
                </div>
            ):(
                <h2>Sorry !! No Movies Found</h2>
            )}
        </React.Fragment>
    )
}

export default MoviesView;