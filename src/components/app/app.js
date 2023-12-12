import React, {Component} from 'react'

import Header from '../header'
import Footer from "../footer";
import {AboutUs, WelcomePage, Donations, LoginPage, MainTest} from "../pages"

import './app.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MapiService from "../../services/mapi-service";
import {MapiServiceProvider} from "../mapi-service-context/mapi-service-context";
import {ErrorIndicator} from "../errors";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class App extends Component{

    state = {
        selectedItem: null,
        hasError: false,
        isLoggedIn: false,
        mapiService: new MapiService()
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { isLoggedIn, mapiService } = this.state

        return (
            <ErrorBoundary>
                <MapiServiceProvider value={mapiService}>
                    <Router>
                        <div>
                            <Switch>
                                <Route
                                    path="/login"
                                    render={() => (
                                        // Header и Footer не отображаются на странице login
                                        <Switch>
                                            <Route path="/login" render={() => <LoginPage />} exact />
                                        </Switch>
                                    )}
                                />
                                {/* Все остальные роуты */}
                                <Route>
                                    <Header />
                                    <Switch>
                                        <Route path="/" component={WelcomePage} exact />
                                        <Route path="/about-us" component={AboutUs} exact />
                                        <Route path="/donations" component={Donations} exact />
                                        <Route path = "/main_test" component = {MainTest} exact />
                                    </Switch>
                                    <Footer />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </MapiServiceProvider>
            </ErrorBoundary>
        )
    }
    /*
     <ErrorBoundary>
            <MapiServiceProvider value = {mapiService}>
                <Router>
                    <div>
                    <Header />
                    <Switch>
                        <Route path = "/" component = {WelcomePage} exact />
                        <Route path = "/about-us" component = {AboutUs} exact />
                        <Route path = "/donations" component={Donations} exact />
                    </Switch>
                    <Footer />
                    </div>
                </Router>
            </MapiServiceProvider>
        </ErrorBoundary>

    * */
}
