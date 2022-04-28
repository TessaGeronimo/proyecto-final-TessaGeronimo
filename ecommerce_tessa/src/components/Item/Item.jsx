import React from 'react';
import './Item.css';

const Item = (props) => {
    
    return (
        <div className="card">
            <h2>{props.nombre}</h2>
            
            <button id='add' >Agregar al carrito</button>
        </div>
    );
};

export default Item;