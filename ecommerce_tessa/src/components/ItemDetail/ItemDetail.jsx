import React, {useContext, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../CartContext/CartContext';


const ItemDetail = (props) => {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...props.vueloDetail});
        console.log(cartCtx.products);
    }
    
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
                    <ItemCount stock={props.vueloDetail.stock} inicial={0} onAdd={addHandler}></ItemCount>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;