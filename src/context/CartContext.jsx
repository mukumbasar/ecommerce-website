import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    return (
        <CartContext.Provider value={{ cart, setCart, cartIsOpen,setCartIsOpen }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
};
