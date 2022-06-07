import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <img src= {props.vuelo.imageUrl} alt={props.vuelo.destino} ></img>
            </div>
            <h2>{props.vuelo.destino}</h2>
            <p>{props.vuelo.precio}</p>
            
            <Link id='detalle' to= {'/detalle/'+props.vuelo.id}>Detalle</Link>
        </div>
    );
};

export default Item;