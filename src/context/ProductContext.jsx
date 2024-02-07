import React, { createContext, useState, useContext } from 'react';
import { getProducts } from '../services/productService.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () =>{
        getProducts()
            .then(productsData => {
                console.log("Products:", productsData);
                setProducts(productsData);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }

    const fetchPopularProducts = () => {
        getProducts()
            .then(productsData => {
                console.log("Products:", productsData);
                const popularProducts = productsData.filter(product => product.rating >= 4.5);
                setProducts(popularProducts);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }

    return (
        <ProductContext.Provider value={{ fetchPopularProducts, fetchProducts, products }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => {
    return useContext(ProductContext);
};
