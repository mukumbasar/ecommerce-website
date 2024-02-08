import React, { createContext, useState, useContext } from 'react';
import { getProducts } from '../services/productService.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isPopular, setIsPopular] = useState(true);

    return (
        <ProductContext.Provider value={{ products, setProducts, isPopular, setIsPopular }}>
        {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => {
    return useContext(ProductContext);
};
