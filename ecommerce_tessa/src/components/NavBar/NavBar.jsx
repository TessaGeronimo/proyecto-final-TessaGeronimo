import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div >
            <ul className='nav'>
                <a id='home' href="./">CoderViajes</a>
                <a href="./">Vuelos</a>
                <a href="./">Alojamientos</a>
                <a href="./">Actividades</a>
                <a id= 'cart' href="./"><CartWidget/></a>
            </ul>
        </div>
    );
}

export default NavBar;