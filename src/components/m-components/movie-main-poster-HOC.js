
import {myCompose,compose, withData, withMapiServiceMethod} from "../hoc-helpers";
import MovieMainPoster from "../movie-main-poster";

const MovieMainPosterWithDataAndContext = myCompose(
    withData,
    withMapiServiceMethod('getMovie')
)(MovieMainPoster);

//export default MovieMainPosterWithDataAndContext;
