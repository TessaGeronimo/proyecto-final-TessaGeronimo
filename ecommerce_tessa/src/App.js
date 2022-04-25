import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer greetings="Bienvenido a CoderViajes"/>

            <ItemCount stock={0}></ItemCount>

        
    
      </header>
    </div>
  );
}

export default App;
