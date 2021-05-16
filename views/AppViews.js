/* eslint-disable */
import React, { Fragment } from "react";
//import POKEBALL from "../src/pokeball.png";

const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
        const goHome = () => {
            window.location = "/";
        };
        const { content } = this.props;
        return (
            <div className="App">
                <header className="App-header" id="root">
                    <div className="container">
                        <div className="row j-center align-items-center">
                            <a onClick={goHome}>
                                <h1 className="header-main">Algorand Horoscope</h1>
                            </a>
                        </div>
                    </div>
                    {content}
                </header>
            </div>
        );
    }
};

exports.ConnectAccount = class extends React.Component {
    render() {
        return (
            <div>
                Connecting to your account please wait...
            </div>
        );
    }
};

exports.FundAccount = class extends React.Component {
    state = {
        isOpen: true,
    };

    handleClick = (amt) => {
        this.setState({ isOpen: !this.state.isOpen });
        parent.fundAccount(amt);
    };

    render() {
        const { bal, standardUnit, defaultFundAmt, parent } = this.props;
        const amt = (this.state || {}).amt || defaultFundAmt;
        return (
            <div>
                <h2>Fund your account</h2>
                <br />
                Balance: {bal} {standardUnit}
                <hr />
                Do you want to add some more {standardUnit} to your account?
                <br />
                (Working for some devnets)
                <br />
                <br />
                <div className="container mt-5">
                    <div className="row j-center">
                        <div className="mr-12 text-center">
                            <input
                                type="number"
                                placeholder={defaultFundAmt}
                                onChange={(e) => this.setState({ amt: e.currentTarget.value })}
                                step="0.0000001"
                                className="cost-input"
                                style={{ marginRight: "10px" }}
                            />{" "}
                            {standardUnit}
                            <div style={{ marginTop: "20px" }}>
                                {this.state.isOpen ? (
                                    <button
                                        className="fund-button"
                                        onClick={() => {
                                            this.setState({ isOpen: !this.state.isOpen });
                                            parent.fundAccount(amt);
                                        }}
                                    >
                                        Fund Account
                                    </button>
                                ) : (
                                    <button className="fund-button-passive">Fund Account</button>
                                )}
                                <button
                                    className="fund-button"
                                    onClick={() => parent.skipFundAccount()}
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


exports.DeployerOrAttacher = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <Fragment>
                <div className="container mt-12">
                    <div className="row j-center">
                        <h1 className="selectRole">Select a role</h1>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row j-center">
                        <div className="mr-12 text-center">
                            <button
                                className="selectButton"
                                onClick={() => parent.selectDeployer()}
                            >
                                Fortune Teller
                            </button>

                            <p className="select-subtext">
                                Set wager, deploy contract
                            </p>
                        </div>
                        <div className="ml-12 text-center">
                            <button
                                className="selectButton"
                                onClick={() => parent.selectAttacher()}
                            >
                                User
                            </button>

                            <p className="select-subtext">
                                Attach contract, select a zodiac sign
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default exports;
