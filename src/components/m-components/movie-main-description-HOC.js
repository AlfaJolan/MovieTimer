import {compose, myCompose, withData, withMapiServiceMethod} from '../hoc-helpers';
import Description from '../movie-main-description';
import {MapiServiceConsumer} from "../mapi-service-context";
import {withRouter} from "react-router-dom";


const DescriptionWithDataAndContext = myCompose(
    withData,
    withMapiServiceMethod('getMovieData')
)(Description);

export default DescriptionWithDataAndContext;
