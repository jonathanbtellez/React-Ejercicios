import logo from './logo.svg';
import './App.css';
//import ContactosComponent from './components/container/contactosComponent';
//import LifeCycleComponent from './components/pure/lifeCycleComponent';

//import LifeCycleClass from './components/pure/lifeCycleClass'
import LifeCycleComponent from './components/pure/lifeCycleComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Ejercicio 1, 2, 3 */}
        {/* <ContactosComponent></ContactosComponent> */}
        
        {/* Aplicando ciclo de vida atraves de hooks */}
        {/* <LifeCycleClass></LifeCycleClass> */}
      
        <LifeCycleComponent></LifeCycleComponent>
      </header>
    </div>
  );
}

export default App;
