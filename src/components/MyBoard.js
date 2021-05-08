import React from "react";
import Square from "./Square";
const MyBoard = ({ squares, onClick }) => {
  return (
    <div className="myboard">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};
export default MyBoard;
