import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (cartItem) => {
        const existingItem = cart.find(item => item.id === cartItem.id);
        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item.id === cartItem.id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...cartItem, count: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
};
