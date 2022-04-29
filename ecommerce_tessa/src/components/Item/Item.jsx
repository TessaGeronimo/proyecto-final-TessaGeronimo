import React from 'react';
import './Item.css';

const Item = (props) => {
    console.log(props)
    return (
        <div className="card">
            <h2>{props.vuelo.destino}</h2>
            <p>{props.vuelo.precio}</p>
            <div className='img-container'>
                <img src= {props.vuelo.imageUrl} alt={props.vuelo.destino} ></img>
            </div>
            <button id='add' >Detalle</button>
        </div>
    );
};

export default Item;