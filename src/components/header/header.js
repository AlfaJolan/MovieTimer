import React from 'react'

import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
            <div className="container">
                <Link to = "/main" className={"navbar-brand"}>
                <span className="text-primary fw-bold">
                    <h1>MovieTimer</h1>
                </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                        aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to = "/about-us" className={"nav-link"}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#articles">Articles</a>
                        </li>
                        <li className="nav-item">
                            <Link to = "/donations" className={"nav-link"}>Donations</Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link to = "/login" className = {"nav-link"}>Sign In</Link>
                        </li>
                        <li className="nav-item ms-2 d-none d-md-inline">
                            <Link to = "/login" className = {"btn btn-secondary"}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default Header