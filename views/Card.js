import React, { Component } from "react";
//import ".././App.css";
//import "./Card.css";

//const signs = require("../../texts/signs.json");

class Card extends Component {
  constructor(props) {
    console.log("card props", props.currentSign);
    super(props);
    this.state = {
      title: "title",
      sign: props.currentSign,
      text: "Select a day",
      currentSign: "currentSign",
      yesterday: false,
      today: false,
      tomorrow: false,
      change: false,
      yesterday_horo: "",
      today_horo: "",
      tomorrow_horo: "",
    };
  }

  dict = {
    yesterday: "yesterday_horo",
    today: "today_horo",
    tomorrow: "tomorrow_horo",
  };

  loadHoroscopes() {
    fetch(
      `https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=yesterday`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((yes) => this.setState({ yesterday_horo: yes }));

    fetch(
      `https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=today`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((to) => this.setState({ today_horo: to }));

    fetch(
      `https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=tomorrow`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((tom) => this.setState({ tomorrow_horo: tom }));
  }

  componentWillMount() {
    this.loadHoroscopes();
  }

  toggle() {
    document.getElementById("yesterday").classList.remove("clicked");
    document.getElementById("today").classList.remove("clicked");
    document.getElementById("tomorrow").classList.remove("clicked");
    document.getElementById("change").classList.remove("clicked");
  }

  clicked(e) {
    let clicked = e.currentTarget;
    if (eval(`this.state.${clicked.id}`) === true) {
      document.getElementById("text").textContent = this.state.text;
      document.getElementById("date").textContent = "";
      eval(
        `this.setState({${clicked.id}:!this.state.${clicked.id}}, () => clicked.classList.toggle("clicked"))`
      );
    } else {
      this.setState(
        { yesterday: false, today: false, tomorrow: false, change: false },
        () => {
          this.toggle();
          document.getElementById("date").textContent = this.state[
            this.dict[clicked.id]
          ].current_date;
          document.getElementById("text").textContent = this.state[
            this.dict[clicked.id]
          ].description;
          eval(
            `this.setState({${clicked.id}:true}, () => clicked.classList.toggle("clicked"))`
          );
        }
      );
    }
  }
  render() {
    console.log("CARD",this.state.sign);
    return (
      <div className="card" id="card">
        <div
          className="change_sign"
          id="change"
          onClick={(e) => this.props.changeSign("change")}
        >
          Change sign
        </div>

        <div className="card-text">
          <h2 id="card_sign">{`${this.state.sign}`}</h2>
          <p id="date"></p>
          <p id="text">{`${this.state.text}`}</p>
        </div>

        <div className="card-   ">
          <div className="stat" id="yesterday" onClick={(e) => this.clicked(e)}>
            <div className="value">Yesterday</div>
          </div>
          <div
            className="stat border"
            id="today"
            onClick={(e) => this.clicked(e)}
          >
            <div className="value">Today</div>
          </div>
          <div className="stat" id="tomorrow" onClick={(e) => this.clicked(e)}>
            <div className="value">Tomorrow</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;