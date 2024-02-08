import React from 'react';
import styles from './card.module.css';
import { useCartContext } from '../../../context/CartContext';
import { addToCart } from '../../../services/cartServices';

const Card = ({ product }) => {
  const { cart, setCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(cart, setCart, {
      id: product.id,
      image: product.images[0],
      title: product.title,
      description: product.description,
      price: product.price,
    });
    console.log(cart);
  };

  return (
    <div className={styles['card']}>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <div className={styles['cardContent']}>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className={styles['buttons']}>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;