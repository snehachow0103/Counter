import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../Features/Counter/CounterSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const countParam = params.get('count');
    if (countParam) {
      const newCount = parseInt(countParam, 10);
      if (newCount !== count) {
        if (newCount > count) {
          for (let i = count; i < newCount; i++) {
            dispatch(increment());
          }
        } else {
          for (let i = count; i > newCount; i--) {
            dispatch(decrement());
          }
        }
      }
    }
  }, [location.search, dispatch, count]);

  const handleIncrement = () => {
    const newCount = count + 1;
    dispatch(increment());
    navigate(`?count=${newCount}`);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    dispatch(decrement());
    navigate(`?count=${newCount}`);
  };

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="counter-box">
        <h2>Counter: {count}</h2>
        <div className="counter-buttons">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      <p>Hello, I am Counter ! </p>
    </div>
  );
}

export default HomePage;
