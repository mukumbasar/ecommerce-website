import React, { useEffect } from 'react';
import Card from '../card/Card.jsx';
import styles from './cardContainer.module.css';
import { useProductContext } from '../../../context/ProductContext';
import { getPopularProducts, getProducts } from '../../../services/productService.js';

const CardContainer = () => {
  const { products, isPopular, setProducts, setPopularProducts, popularProducts } = useProductContext();

  useEffect(() => {
    if (products.length === 0) {
      getProducts(setProducts);
    }
    
    getPopularProducts(products, setPopularProducts);
    
  }, [products]);
  
  return (
    <div className={styles['card-container']}>
      {(isPopular ? popularProducts : products).map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardContainer;
