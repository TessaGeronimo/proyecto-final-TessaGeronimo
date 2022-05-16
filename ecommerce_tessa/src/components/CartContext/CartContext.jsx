import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            return setCartList(cartList.map(cl => (cl.id===item.id? 
                ({...cl,quantity: cl.quantity+quantity}):cl)));
        }        
        setCartList([...cartList, { ...item, quantity }]);
    };

    const isInCart = (id) => {
        return cartList.some((cl)=>cl.id===id);
    }

    const clear = () => {
        setCartList([]);
    }
  
    const removeItem = (id) =>{        
        setCartList(cartList.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{
            products: cartList,
            addProduct,
            clear,
            removeItem,
            isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;