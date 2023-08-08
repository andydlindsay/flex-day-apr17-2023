import {useReducer} from 'react';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1
    };
  }

  if (action.type === 'add-some') {
    const amountToAdd = action.payload;
    return {
      ...state,
      count: state.count + amountToAdd
    };
  }

  throw new Error('reducer called with invalid action type');
};

const initialState = {
  count: 0
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const addSome = (amountToAdd) => {
    dispatch({ type: 'add-some', payload: amountToAdd });
  };

  return (
    <div>
      <h2>ReducerCounter component</h2>
      <h2>Count: {state.count}</h2>
      <button onClick={() => addSome(10)}>add 10</button>
      <button onClick={() => addSome(5)}>add 5</button>
      <button onClick={() => addSome(2)}>add 2</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default ReducerCounter;
