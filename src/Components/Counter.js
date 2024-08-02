import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Features/Counter/CounterSlice';
import './Counter.css';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
