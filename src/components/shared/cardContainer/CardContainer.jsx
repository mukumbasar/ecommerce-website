import React, { useEffect } from 'react';
import Card from '../card/Card.jsx';
import styles from './cardContainer.module.css';
import { useProductContext } from '../../../context/ProductContext';
import { fetchPopularProducts, fetchProducts } from '../../../services/productService.js';

const CardContainer = () => {
  const { products, isPopular, setProducts } = useProductContext();

  useEffect(() => {
    if (isPopular) {
      fetchPopularProducts(setProducts);
    } else {
      fetchProducts(setProducts);
    }
  }, [isPopular]);
  
  return (
      <div className={styles['card-container']}>
        {Array.isArray(products) && products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
  );
}

export default CardContainer;
