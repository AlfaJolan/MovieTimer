import React from "react"
import Spinner from "../spinner";
import {ErrorIndicator, NotFoundIndicator} from "../errors";
import WelcomeHeader from "../welcome-header/welcome";
import MapiService from "../../services/mapi-service";
const WelcomePage = () => {
    const mapiService = new MapiService();
    console.log(mapiService.getMovie(550));

    return (
        <div className={"container"}>
           <WelcomeHeader />
        </div>
    )
}
export default WelcomePage