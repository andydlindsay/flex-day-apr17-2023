import './App.css';
import Header from './components/Header';
// import HeaderObj from './components/Header';
// const Header = HeaderObj.Header
// const myVar = HeaderObj.myVar
import Counter from './components/Counter';

// import { Header, myVar } from './components/Header';

// JSX => JavaScript and XML (eXtensible)

const App = () => {
  return (
    <div className="App">
      {/* <p>Paragraph</p> */}

      {/* <Header heading="Cart/Checkout" anotherArg="more stuff"></Header>
      <Header heading="about us" /> */}

      <Counter />
    </div>
  );
}

export default App;
