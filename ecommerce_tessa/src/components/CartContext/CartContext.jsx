import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (item, quantity) => {
        console.log(isInCart(item.id));
        if(isInCart(item.id)){
            console.log("entro");
            return setCartList(cartList.map(cl => (cl.id===item.id? 
                ({...cl,quantity: cl.quantity+quantity}):cl)));
        }        
        setCartList([...cartList, { ...item, quantity }]);
    };

    const isInCart = (id) => {
        return cartList.some((cl)=>cl.id===id);
    }


  
    return (
        <CartContext.Provider value={{
            products: cartList,
            addProduct,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;