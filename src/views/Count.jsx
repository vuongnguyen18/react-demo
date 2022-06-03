import React, { useState } from "react";
import "../Count.css";

export default function App() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
      if (count > 0) {
        count = count - 1;
        setCount(count);
      } else {
          setCount(0)
      }
  }
  return (
    <div className="App">
      <div>
      <button className="plus" onClick={incrementCount}>+</button>
      {count}
      <button className="minus " onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}
