import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addProduct = (item, quantity) => {
        console.log(item, quantity);
        //if (isInCart(item.id)) {
        //   return setCartList(
        //     cartList.map((product) =>
        //       product.id === item.id
        //         ? { ...product, quantity: product.quantity + quantity }
        //         : product
        //     )
        //   );
        //}
        setCartList([...cartList, { ...item, quantity }]);
        console.log('cartList', cartList)
    };

    // const removeProduct = (id) => {
    //     const indexToRemove = productList.findIndex(item => item.id === id);
    //     if (productList[indexToRemove].quantity === 1) {
    //         setProductList(productList.filter(i => i.id !== id))
    //     } else {
    //         setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
    //     }
    // }

    // const clear = () => {
    //     setProductList([]);
    // }

    // const isInCart = (id) => {
    //     return productList.map(p => p.id).indexOf(id) !== -1;
    // }

    // const getCartQuantity = () => {
    //     return productList.reduce((total, value) => {
    //         return total + value.quantity
    //     }, 0)
    // }
  
    return (
        <CartContext.Provider value={{
            products: cartList,
            addProduct,
            // removeProduct,
            // clear,
            // isInCart,
            // getCartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;