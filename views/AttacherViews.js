import React, { Fragment } from "react";
import "../src/index.css";
import Card from "./Card.js"


const exports = {};

exports.Wrapper = class extends React.Component {
    render() {
        const { content } = this.props;
        return (
            <div className="Player">
                <h2 className="header-main-sub">
                    User
          </h2>
                {content}
            </div>
        );
    }
};

exports.Attach = class extends React.Component {
    render() {
        const { parent } = this.props;
        const { ctcInfoStr } = this.state || {};
        return (
            <Fragment>
                <div className="container">
                    <div className="row j-center flex-column w-400 m-auto mt-5">
                        Please paste the contract info here:
                        <br />
                        <br />
                        <textarea
                            className="ContractInfo"
                            onChange={(e) =>
                                this.setState({ ctcInfoStr: e.currentTarget.value })
                            }
                            placeholder="{}"
                        />
                        <br />
                        <button
                            className="attach-button mt-2"
                            disabled={!ctcInfoStr}
                            onClick={() => parent.attach(ctcInfoStr)}
                        >
                            Attach
                         </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};


exports.Attaching = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div className="container">
                <div className="row j-center">
                    <h3 className="game-finished">Attaching..., please wait...</h3>
                </div>
            </div>
        );
    }
};
exports.HamleYapTekil = class extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentSign: "change",
      buttonValue: false,
      hamleListesi: [1, 2, 3, 0, 0, 0, 0, 0, 0, 0],
      hamleler : [
        "change",
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces"
    ],
    };
  }

  componentDidUpdate(prevProps, prevState){
    console.log("ComponentDidUpdateCalled",this.state.hamleler[this.props.oncekiHamle], prevState.currentSign);
    if ( prevState.currentSign !== this.state.hamleler[this.props.oncekiHamle])
    {
      this.setState({currentSign: this.state.hamleler[this.props.oncekiHamle]});

    }
  }
  changeSign = (sign) => {
    this.setState({ currentSign: sign });
  };
  render() {
                


    const { parent, oncekiHamle, standardUnit, bakiye } = this.props;
    console.log(oncekiHamle);
    const hamleleriListele = this.state.hamleler[oncekiHamle];
    console.log(hamleleriListele);


return ( 

<Fragment>
    <h4>Current Balance : {bakiye} {standardUnit}</h4>
    <div id="buttonGrid"> 
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(1);}}>aries</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(2);}}>taurus</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(3);}}>gemini</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(4);}}>cancer</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(5);}}>leo</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(6);}}>virgo</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(7);}}>libra</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(8);}}>scorpio</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(9);}}>sagittarius</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(10);}}>capricorn</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(11);}}>aquarius</button>
        <button disabled = {this.state.buttonValue} id="send-all-button" type="button" 
        onClick={() => {parent.hamleYapBelirleTekil(12);}}>pisces</button>
        </div>

        {this.state.currentSign  === "change" ? (
        <h1>
        <div class="select-sign"> Select a sign</div>{" "}
        </h1>
        ) : (
        <Card
            currentSign={this.state.currentSign }
            changeSign={this.changeSign}
        />
        )}
  </Fragment>
)
}
};


export default exports;
