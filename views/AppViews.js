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
                Hesabınızı bağlarken lütfen bekleyin...
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
                <h2>Hesaba Para Ekle</h2>
                <br />
                Bakiye: {bal} {standardUnit}
                <hr />
                Hesabınıza daha fazla {standardUnit} yüklemek ister misiniz?
                <br />
                (Sadece bazı devnetler üzerinde çalışır)
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
                                        Hesaba Para Aktar
                                    </button>
                                ) : (
                                    <button className="fund-button-passive">Hesaba Para Aktar</button>
                                )}
                                <button
                                    className="fund-button"
                                    onClick={() => parent.skipFundAccount()}
                                >
                                    Geç
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
                        <h1 className="selectRole">Lütfen bir rol seçin</h1>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row j-center">
                        <div className="mr-12 text-center">
                            <button
                                className="selectButton"
                                onClick={() => parent.selectDeployer()}
                            >
                                Admin
                            </button>

                            <p className="select-subtext">
                                Ücreti belirle, kontratı yükle
                            </p>
                        </div>
                        <div className="ml-12 text-center">
                            <button
                                className="selectButton"
                                onClick={() => parent.selectAttacher()}
                            >
                                Oyuncu
                            </button>

                            <p className="select-subtext">
                                Adminin kontratına bağlan, oyunu oyna
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default exports;
