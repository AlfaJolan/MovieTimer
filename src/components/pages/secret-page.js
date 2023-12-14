import React from "react"
import {Redirect} from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    if(isLoggedIn){
        return (
            <div className={"container mt-5 pt-5"}>
                <h1>Secret Page with Button</h1>
                <button>Нужно написать кнопку которая клон, и меняет цвет на рандом</button>
            </div>
        )
    }
    return <Redirect to ="/" />
}
export default SecretPage