import React, {Component} from 'react'

import Header from '../header'
import Footer from "../footer";
import {AboutUs, WelcomePage, Donations} from "../pages"

import './app.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export default class App extends Component{

    state = {
        selectedItem: null,
        hasError: false,
        isLoggedIn: false
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



        return (

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

        )
    }
}
