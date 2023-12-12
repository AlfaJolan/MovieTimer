import React from "react"
import Spinner from "../spinner";
import {ErrorIndicator, NotFoundIndicator} from "../errors";

const WelcomePage = () => {
    return (
        <div className={"container"}>
            {/*Is this experimental page for error indicator*/}
            Welcome to the MovieTimer online movie DB website.

            Here you can find some new movies, and watch

            Go To Main Page!
            <Spinner />
            <ErrorIndicator />
            <NotFoundIndicator />

        </div>
    )
}
export default WelcomePage