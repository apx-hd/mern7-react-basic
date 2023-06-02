import "./counterlayout.css";
import { useState } from 'react';

function CounterLayout() {
    // let count = 0;
    const [count, setCount] = useState(0);

    const handleDecrease = () => { 
        // setCount(count - 1)
        setCount(prev => prev - 1)
        console.log(count)
    }

    const handleIncrease = () => {
        // setCount(count + 1)
        setCount(prev => prev + 1)
        console.log(count)
     }
    

  return (
    <div className="container">
      <h1 className="header">Counter</h1>
      <div className="counter-wrapper">
        <button className="counter-btn" onClick={handleDecrease}>-</button>
              <span className="count">{count}</span>
        <button className="counter-btn" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}

export default CounterLayout;
