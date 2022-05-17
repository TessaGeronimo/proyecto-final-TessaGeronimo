import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import cartWidget from './cart.svg';
import './CartWidget.css'

const CartWidget = () => {
    const {quantityOfItems} = useCartContext();

    return (
        <div className='carrito'>
            <img src={cartWidget} alt="Carrito"/> 
            {quantityOfItems()!==0 &&
                <div className='cwnumber'><p>{quantityOfItems()}</p></div> 
            }  
        </div>
    );
};

export default CartWidget;