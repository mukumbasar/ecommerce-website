import React, { useEffect } from 'react';
import Card from '../card/Card.jsx';
import styles from './cardContainer.module.css';
import { useProductContext } from '../../../context/ProductContext';

const CardContainer = () => {
  const { products, isPopular, fetchProducts, fetchPopularProducts } = useProductContext();

  useEffect(() => {
    if (isPopular) {
      fetchPopularProducts();
    } else {
      fetchProducts();
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
