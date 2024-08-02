import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Features/Counter/CounterSlice';

const AboutPage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default AboutPage;
