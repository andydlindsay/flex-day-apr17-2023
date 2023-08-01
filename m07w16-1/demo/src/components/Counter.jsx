import React from 'react';

// let count = 0;

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [username, setUsername] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);

  // const arr = React.useState(0);
  // const count = arr[0];
  // const setCount = arr[1]; // setCount(42)

  const increment = () => {
    // count += 1;
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Counter Component</h2>

      <h2>Count: {count}</h2>
      <button onClick={increment}>click me!</button>
    </div>
  );
};

export default Counter;
