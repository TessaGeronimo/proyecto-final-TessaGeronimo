import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
       <NavBar/>
     <div className = 'contenedor-elementos'>
        <ItemListContainer greetings="Bienvenido a CoderViajes"/> 
     </div>
     <div>
       <p>hola</p>
     </div>
     <div className = 'contenedor-elementos'>
        <div className = 'elementos'>
          <p>2</p>
        </div>
        <div className = 'elementos'>
          <p>3</p>
        </div>
        <div className = 'elementos'>
          <p>4</p>
        </div>
        <div className = 'elementos'>
          <p>2</p>
        </div>
        <div className = 'elementos'>
          <p>3</p>
        </div>
        <div className = 'elementos'>
          <p>4</p>
        </div>
        <div className = 'elementos'>
          <p>2</p>
        </div>
        <div className = 'elementos'>
          <p>3</p>
        </div>
        <div className = 'elementos'>
          <p>4</p>
        </div>
     </div>
    </div>
  );
}

export default App;
