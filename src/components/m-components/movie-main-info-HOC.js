import {myCompose, withData, withMapiServiceMethod} from "../hoc-helpers";
import MovieMainInfo from "../movie-main-info";
import {withRouter} from "react-router-dom";

const MovieMainInfoWithDataAndContext = myCompose(
    withData,
    withRouter,
    withMapiServiceMethod('getMovieData')
)(MovieMainInfo);

//export default MovieMainInfoWithDataAndContext;
