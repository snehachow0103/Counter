import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const countParam = params.get('count');
    if (countParam) {
      setCount(parseInt(countParam, 10));
    }
  }, [location.search]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    navigate(`?count=${newCount}`);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    navigate(`?count=${newCount}`);
  };

  return (
    <div className="Page">
      <h1>About Page</h1>
      <div className="counter-box">
        <h2>Counter: {count}</h2>
        <div className="counter-buttons">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
