import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {

    const content = (isLoggedIn) => {
        if(isLoggedIn){
            return (
                <React.Fragment>
                    <h1 align="center">You can see a secret page, with secret button</h1>
                    <Link to="/main" className="btn btn-dark">Go to Main Page</Link>
                    <Link to = "/secret" className = "btn btn-danger">SECRET</Link>
                </React.Fragment>
            )
        }
        return (
            <section>
                <div className="containe mt-5 pt-5">
                    <div className="col-12 col-sm-8 col-md-6 m-auto">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <svg className="mx-auto my-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                     fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <form action="">
                                    <input type="text" name="" id="" className="form-control my-4 py-2"
                                           placeholder="Username"/>
                                    <input type="password" name="" id="" className="form-control my-4 py-2"
                                           placeholder="Password"/>
                                    <div className="text-center mt-3">
                                        <button className="btn btn-primary" onClick={onLogin}>Login</button>
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <body className="text-center m-5">
            { content(isLoggedIn) }
        </body>
        )

}
export default LoginPage;