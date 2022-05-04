import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
       {/* <ItemListContainer greetings="Bienvenido a CoderViajes"/> */}
        <ItemDetailContainer></ItemDetailContainer>
      </header>
      
    </div>
  );
}

export default App;
