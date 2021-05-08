/*eslint-disable*/
import React, { Fragment } from "react";

const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Observer">
                <h2 style={{ marginLeft: '50px' }} className="header-main-sub">Admin</h2>
                {content}
            </div>
        );
    }
}

exports.UcretBelirle = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ucret: 0
        };
    }
    render() {
        const { parent, varsayilanUcret, standardUnit } = this.props;
        const ucret = (this.state || {}).ucret || varsayilanUcret;

        return (
            <Fragment>
                <div className="container">
                    <div className="row m-auto flex-column w-400">

                        <div style={{ textAlign: 'center' }}>
                            <input
                                step="0.000001"
                                className="observer-input"
                                type="number"
                                placeholder="Hamle Ücreti"
                                onChange={(e) =>
                                    this.setState({ ucret: e.target.value })
                                }
                                style={{ width: '100px', marginRight: '10px' }}
                            />{standardUnit}
                        </div>
                        <br />
                        <button
                            className="attach-button"
                            onClick={() =>
                                parent.ucretiUygula(ucret)}
                        >
                            Ücreti Belirle
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};

exports.Deploy = class extends React.Component {
    render() {
        const { parent, ucret, standardUnit } = this.props;

        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center flex-column w-400 m-auto mt-5">
                        <p className="subtext">Ücret (hamle başı ödenecek miktar): <strong>{ucret}</strong> {standardUnit}
                        </p>
                        <br />
                        <button className="attach-button"
                            onClick={() => parent.deploy()}
                        >
                            Yükle
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};

exports.Deploying = class extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row j-center">
                    <h3 className="game-finished">Yükleniyor... Lütfen bekleyin.</h3>
                </div>
            </div>
        );
    }
};


exports.WaitingForAttacher = class extends React.Component {
    async copyToClipboard(button) {
        const { ctcInfoStr } = this.props;
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Kopyalandı!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }

    render() {
        const { ctcInfoStr } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center">
                        <h3 className="game-finished">
                            Oyuncular bekleniyor...
                <br />Lütfen bu bilgileri oyunculara iletin
                <pre className="ContractInfo">{ctcInfoStr}</pre>
                            <button
                                className='attach-button'
                                onClick={(e) =>
                                    this.copyToClipboard(e.currentTarget)
                                        .then(() => console.log('Succesfully copied!'))
                                        .catch(() => console.log('Error while copying'))
                                }
                            >Bilgileri kopyala</button>
                        </h3>
                    </div>
                </div>
                <div></div>
            </Fragment>
        );
    }
};

exports.OyunuBitir = class extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            recvHamle: 0,
        }
    }
    
    render() {
        
        const { parent, alinanHamle, bakiye, standardUnit } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center">
                        <h3 className="game-finished">
                            Oyun devam ediyor.
                            <br />
                            <p>Bakiye: {bakiye} {standardUnit}</p>
                            <br />
                            <div style={{ textAlign: 'center', marginLeft: '-20px' }}>
                                <button
                                    className="yes-button mr-1"
                                    onClick={() => parent.oyunuBitirBelirle(true)}
                                >
                                    Oyunu Bitir
                            </button>
                            </div>
                        </h3>
                    </div>
                </div>
            </Fragment>
        );
    }
};

exports.GelenHamle = class extends React.Component{

    render()
    {
        const {parent,hamle} = this.props;
        return (
            <Fragment>
                <div> Gelen Hamle {hamle}</div>
                <button onClick={()=>parent.tekilHamleKontrolBelirle(true)}> TRUE </button>
            </Fragment>
        );

    }
}

export default exports;
