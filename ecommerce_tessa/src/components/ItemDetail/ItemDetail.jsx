import React, {useContext, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useCartContext} from '../CartContext/CartContext';
import {Link} from 'react-router-dom';


const ItemDetail = ({vueloDetail}) => {
    const {addProduct,products} = useCartContext();

    const addHandler = (quantityToAdd) => {
        addProduct(vueloDetail,quantityToAdd);
    }
    
    return (
        <div className='item-detail'>
            <div className='left'>
                <div className='image'>
                    <img src= {vueloDetail.imageUrl} alt= {vueloDetail.destino} />
                </div>
            </div>
            <div className='right'>
                <div className='detail'>
                    <h1>{vueloDetail.categoria}</h1>                    
                    <h2>{vueloDetail.destino}</h2>
                    <p>{vueloDetail.descripcion}</p>
                    <p>${vueloDetail.precio}</p>
                    <ItemCount stock={vueloDetail.stock} inicial={0} onAdd={addHandler}></ItemCount>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;