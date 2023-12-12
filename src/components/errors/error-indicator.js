import React from 'react'

import './error-indicator.css'
import icon from './movie-error.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" width={64} height={64}/>
            <span className="boom">At the end of the way...</span>
            <span>
                Something has gone wrong
            </span>
            <span>
                I DRIVE (We already fixing issue)
            </span>
        </div>
    )
}

export default ErrorIndicator
