// src/pages/AboutPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Features/Counter/CounterSlice';
import './AboutPage.css';

const AboutPage = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="about-container">
      <header className="header">
        <h1>About Us</h1>
        <p>Learn more about what we do</p>
      </header>
      <section className="content">
        <p>Current Count: {count}</p>
        <div className="controls">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
