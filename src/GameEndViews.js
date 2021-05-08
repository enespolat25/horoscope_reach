
/* eslint-disable */
import React, { Fragment } from "react";
import "../src/index.css";

const exports = {};

exports.GameEnded = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamle: 0,
            hamleListesi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            index: 0,
            
        };
    }
        render() {
               return ( 
                 <>
                 <h1>Game Ended {props.gameVal}</h1>
                 <button>Click This</button>
                 </>
               )
        }
    }

export default exports;
