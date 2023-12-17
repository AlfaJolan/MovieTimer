import React, { Component } from "react";

class TicketPurchaseTimer extends Component {
    state = {
        timerId: null,
        timeRemaining: 120,
        showMessage: false,
    };

    componentDidMount() {
        const timerId = setTimeout(() => {
            this.setState({ showMessage: true });
        }, this.state.timeRemaining * 1000);

        this.setState({ timerId });
    }

    componentWillUnmount() {
        const { timerId } = this.state;
        if (timerId) {
            clearTimeout(timerId);
        }
    }

    render() {
        const { showMessage, timeRemaining } = this.state;

        return (
            <div>
                {showMessage ? (
                    <p>Time for ticket buying is end</p>
                ) : (
                    <p>Remaining: {timeRemaining} seconds</p>
                )}
            </div>
        );
    }
}

export default TicketPurchaseTimer;
