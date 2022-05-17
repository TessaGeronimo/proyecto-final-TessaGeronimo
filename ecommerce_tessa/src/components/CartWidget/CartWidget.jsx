import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import cartWidget from './cart.svg';
import './CartWidget.css'

const CartWidget = () => {
    const {quantityOfItems} = useCartContext();

    return (
        <>
            <img src={cartWidget} alt="Carrito"/> 
            <div className='cwnumber'><p>{quantityOfItems()}</p></div> 
            
        </>
    );
};

export default CartWidget;