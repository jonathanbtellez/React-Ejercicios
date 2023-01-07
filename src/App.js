//import logo from './logo.svg';
import './App.css';
import ContactosComponent from './components/container/contactosComponent';
import MetodosCaptura from './components/pure/metodosCaptura';
//import LifeCycleComponent from './components/pure/lifeCycleComponent';

//import LifeCycleClass from './components/pure/lifeCycleClass'
//import LifeCycleComponent from './components/pure/lifeCycleComponent';
function App() {
  return (
    <div className="App">
      {/* Ejercicio 1, 2, 3 */}
      {/* <ContactosComponent></ContactosComponent> */}

      {/* Aplicando ciclo de vida atraves de hooks */}
      {/* <LifeCycleClass></LifeCycleClass> */}

      {/* <LifeCycleComponent></LifeCycleComponent> */}

      <MetodosCaptura></MetodosCaptura>
    </div>
  );
}

export default App;
