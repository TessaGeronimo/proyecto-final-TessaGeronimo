import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = (props) => {

    return (
        <div className='card'>          
            <img src= {props.vuelo.imageUrl} alt={props.vuelo.destino} ></img>
            <div className='detalles'>
                <h2>{props.vuelo.categoria}</h2>
                <h4>{props.vuelo.destino}</h4>    
                <p>Desde ${props.vuelo.precio}</p>
                <div className='link-container'>
                    <Link className= 'link' to= {'/detalle/'+props.vuelo.id}>Detalle</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Item;


{/* <div className='card'>
            <h2>{props.vuelo.destino}</h2>
            <p>{props.vuelo.precio}</p>
            <div className='img-container'>
                <img src= {props.vuelo.imageUrl} alt={props.vuelo.destino} ></img>
            </div>
            <Link id='detalle' to= {'/detalle/'+props.vuelo.id}>Detalle</Link>
        </div> */}