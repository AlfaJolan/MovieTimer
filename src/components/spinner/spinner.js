import React from "react";

import './spinner.css'
const Spinner = () => {
    return (
        <div className="lds-css">
            <div className={"loader-parent"}>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Spinner;