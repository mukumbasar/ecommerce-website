import React from 'react';
import styles from './card.module.css';

const Card = ({ product }) => {

  const addToCart = () => 
  {

  }

  return (
    <div className={styles['card']}>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <div className={styles['cardContent']}>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className={styles['buttons']}>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;