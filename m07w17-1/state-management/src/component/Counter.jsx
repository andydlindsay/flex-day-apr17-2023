import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(count + 3);

    setCount(prev => prev + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });
    // setCount((prev) => {
    //   return prev + 1;
    // });
  };


  return (
    <div>
      <h2>Counter component</h2>
      <h2>Current count: {count}</h2>
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};

export default Counter;
