import React, { Component } from 'react';

export default class TrialBanner extends Component {
    constructor(props) {
        super(props);
        this.handleUpgrade = this.handleUpgrade.bind(this);
    }

    handleUpgrade(e) {
        this.props.history.push('/subscriptions');
    }

    render() {
        const { subscription } = this.props;
        console.log(subscription);
        let trialEnd;
        if (subscription) {
            const millisecondsLeft = new Date(subscription.trial_end * 1000) - Date.now();
            trialEnd = Math.ceil(millisecondsLeft / 1000 / 3600 / 24);
        }
        return (
            <div className="trial-banner">
                <p>You have { trialEnd } days left in your subscription trial.</p>
                <button
                    onClick={ this.handleUpgrade }
                    className="upgrade-button">
                    <p className="upgrade-text">Upgrade Now</p>
                </button>
            </div>
        );
    }
}