import './App.css';

// import Counter from './component/Counter';
import ReducerCounter from './component/ReducerCounter';

const App = () => {
  return (
    <div className="App">
      <h2>State Management</h2>
      {/* <Counter /> */}
      <ReducerCounter />
    </div>
  );
};

export default App;
