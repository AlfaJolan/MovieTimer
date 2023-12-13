import React from "react";

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieMainPoster = (poster_path) => {

    const poster = (poster_path) => {
        return <MainPosterView image = {poster_path}/>
    }

    return (
        {poster}
    )



}

MovieMainPoster.defaultProps = {
    poster_path : () => "/7cxRWzi4LsVm4Utfpr1hfARNurT.png"
}



const MainPosterView = ({poster_path}) => {


    return (
        <div id = "mainPoster" className= "order-1 col-lg-3 col-md-3 col-xl-3 col-4 mx-1">
            <img src={API_IMG+poster_path} className= "d-block w-100" alt="" />
            <div id = "media" className= "container ps-0 pe-0 mt-1 d-none d-lg-block d-md-block d-xl-block p-1">
                <div className="trailer embed-responsive">
                    <iframe className="" src="https://youtu.be/dQw4w9WgXcQ?si=eXd3eyy1oA6Tq-a4" title="YouTube video player Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default MovieMainPoster;