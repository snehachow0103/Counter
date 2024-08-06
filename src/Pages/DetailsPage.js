import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Features/Counter/CounterSlice';
import TicTacToe from '../Components/TicTacToe';
import { playMove, resetBoard } from '../Features/Tictactoe/tictactoeSlice';
import './DetailsPage.css';

function DetailsPage() {
  const count = useSelector((state) => state.counter.value);
  const board = useSelector((state) => state.tictactoe.board);
  const dispatch = useDispatch();

  const handleCounterIncrement = () => {
    dispatch(increment());
  };

  const handleCounterDecrement = () => {
    dispatch(decrement());
  };

  const handleMove = (index) => {
    dispatch(playMove({ index }));
  };

  const handleResetBoard = () => {
    dispatch(resetBoard());
  };

  return (
    <div className="DetailsPage">
      <div className="counter-box">
        <p className="count">{count}</p>
        <div className="counter-controls">
          <button className="counter-btn" onClick={handleCounterIncrement}>+</button>
          <button className="counter-btn" onClick={handleCounterDecrement}>-</button>
        </div>
      </div>
      <div className="tic-tac-toe-container">
        <TicTacToe board={board} onMove={handleMove} />
        <button className="reset-btn" onClick={handleResetBoard}>Reset</button>
      </div>
    </div>
  );
}

export default DetailsPage;
