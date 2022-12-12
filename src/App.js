import logo from './logo.svg';
import './App.css';
import ContactosComponent from './components/container/contactosComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactosComponent></ContactosComponent>
      </header>
    </div>
  );
}

export default App;
