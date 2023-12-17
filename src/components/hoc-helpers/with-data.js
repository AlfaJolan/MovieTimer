/*
import React, {Component} from "react"

import Spinner from "../spinner"
import { ErrorIndicator } from "../errors"

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        componentDidMount() {
            this.update()
        }

        update() {
            this.setState({
                loading: true,
                error: false
            })

            this.props.getData()
                .then((data) => { this.setState({ data, loading: false })})
                .catch(() => this.setState({ error: true, loading: false }))
        }

        render() {
            const { data, error, loading } = this.state

            if (loading) return <Spinner />

            if (error) return <ErrorIndicator />

            return <View { ...this.props } data={ data } />
        }
    }
}

export default withData
*/
import React, { Component } from "react";
import Spinner from "../spinner";
import { ErrorIndicator } from "../errors";

const withData = (WrappedComponent) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false,
            });

            const { getData } = this.props;

            console.log('getData type:', typeof getData); // Добавьте эту строку для отслеживания типа


            if (typeof getData === 'function') {
                getData()
                    .then((data) => {
                        this.setState({ data, loading: false });
                    })
                    .catch(() => this.setState({ error: true, loading: false }));
            } else {
                console.error('getData is not a function');
            }
        }

        render() {
            const { data, error, loading } = this.state;

            if (loading) return <Spinner />;

            if (error) return <ErrorIndicator />;

            return <WrappedComponent {...this.props} data={data} />;
        }
    };
};

export default withData;

