import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Features/Counter/CounterSlice';
import './DetailsPage.css';

const DetailPage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="Page">
      <h1>Detail Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default DetailPage;
