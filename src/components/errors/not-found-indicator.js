import React from 'react'

import './not-found-indicator.css'
import icon from './movie-error.png'

const NotFoundIndicator = () => {
    return (
        <div className="jumbotron">
            <div className="not-found-indicator d-flex">
                <div>
                    <img src={icon} alt="error icon" width={64} height={64}/>
                </div>
                <div className="not-found-description">
                <span className="boom">Error 404</span>
                    <span>
                        Oops... We can't find this page :(
                    </span>
                    <span>
                        We are sorry, but the page you tried to go to doesn't exist.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NotFoundIndicator