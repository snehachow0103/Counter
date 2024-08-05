import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setCount } from '../Features/Counter/CounterSlice';
import './AboutPage.css';
import { useLocation } from 'react-router-dom';

const AboutPage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialCount = parseInt(params.get('count'), 10);
    if (!isNaN(initialCount)) {
      dispatch(setCount(initialCount));
    }
  }, [location.search, dispatch]);

  return (
    <div className="Page">
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default AboutPage;
