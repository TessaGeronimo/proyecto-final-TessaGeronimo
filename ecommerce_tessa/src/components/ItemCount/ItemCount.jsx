import React from 'react';
import './ItemCount.css'

const ItemCount = (props) => {
    return (
        <div classname = "ic">
            <p> Viaje 1 </p>
            <button>-</button>
            

            <input placeholder={props.stock}></input>
            
            
            <button>+</button>
            <button>Agregar</button>
        </div>
    );
};

export default ItemCount;