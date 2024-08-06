import React from 'react';
import './TicTacToe.css';

const TicTacToe = ({ board, onMove }) => {
  const handleClick = (index) => {
    onMove(index);
  };

  return (
    <div className="tic-tac-toe">
      {board.map((cell, index) => (
        <div
          key={index}
          className={`tic-tac-toe-cell ${cell ? 'filled' : ''}`}
          onClick={() => handleClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
