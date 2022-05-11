import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (props) => {
    console.log(props.vueloDetail);
    return (
        <div className='item-detail'>
            <div className='left'>
                <div className='image'>
                    <img src= {props.vueloDetail.imageUrl} alt= {props.vueloDetail.destino} />
                </div>
            </div>
            <div className='right'>
                <div className='detail'>
                    <h2>{ props.vueloDetail.destino }</h2>
                    <p>{ props.vueloDetail.descripcion }</p>
                    <p>{ props.vueloDetail.precio }</p>
                    <ItemCount stock={props.vueloDetail.stock} inicial={0} onAdd={0}></ItemCount>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;