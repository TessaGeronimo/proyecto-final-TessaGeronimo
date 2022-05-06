import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <header className="App-header">
            <ItemListContainer greetings="Bienvenido a CoderViajes"/>  
          </header>}
        />
         <Route path='/detalle/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
        {/* <Route path='/catalogo/*' element={<Catalogo></Catalogo>}/>
        <Route path='/detalle' element={<Detalle></Detalle>}/>
        <Route path='/detalle/:id' element={<DetalleItem></DetalleItem>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
