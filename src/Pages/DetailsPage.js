// src/pages/DetailsPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { increment, decrement, setCount } from '../Features/Counter/CounterSlice';
import './DetailsPage.css';

const DetailsPage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const initialCount = parseInt(query.get('count'), 10);
    if (!isNaN(initialCount)) {
      dispatch(setCount(initialCount));
    }
  }, [location, dispatch]);

  return (
    <div className="details-container">
      <header className="header">
        <h1>Details Page</h1>
        <p>Count: {count}</p>
      </header>
      <div className="controls">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default DetailsPage;
