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
      <div className={styles['cardContent']}>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
      <div className={styles['buttons']}>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
