import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Routes, Route, Link} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBar = () => {
    return (
        <div >
            <ul className='nav'>
                <Link id='home' to= {'/'}>CoderViajes</Link>
                <Link id='link' to= {'/categoria/vuelos'}>Vuelos</Link>
                <Link id='link' to= {'/categoria/alojamientos'}>Alojamientos</Link>
                <Link id='link' to= {'/categoria/actividades'}>Actividades</Link>
                <li id= 'cart'><CartWidget/></li>
            </ul>

            <Routes>
                <Route path='/categoria/:categoria' element={<ItemListContainer></ItemListContainer>}/>
            </Routes>
            {/* <ul className='nav'>
                <a id='home' href="./">CoderViajes</a>
                <a href="./">Vuelos</a>
                <a href="./">Alojamientos</a>
                <a href="./">Actividades</a>
                <a id= 'cart' href="./"><CartWidget/></a>
            </ul> */}
            
        </div>
    );
}

export default NavBar;