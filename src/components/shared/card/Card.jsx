import React from 'react';
import styles from './card.module.css';
import { useCartContext } from '../../../context/CartContext';
import { useProductContext } from '../../../context/ProductContext';
import { addToCart, removeFromCart } from '../../../services/cartServices';

const Card = ({ product }) => {
  const { cart, setCart } = useCartContext();
  const { products, setProducts } = useProductContext();

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart(products, setProducts, cart, setCart, {
      id: product.id,
      image: product.images[0],
      title: product.title,
      description: product.description,
      price: product.price,
    });
    
    const updatedProducts = products.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, count: prod.count + 1 };
      }
      return prod;
    });
    setProducts(updatedProducts);
  };

  const handleRemovingFromCart = (event) => {
    event.preventDefault();
    removeFromCart(products, setProducts ,cart, setCart, {
      id: product.id,
      image: product.images[0],
      title: product.title,
      description: product.description,
      price: product.price,
    });

    const updatedProducts = products.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, count: Math.max((prod.count || 0) - 1, 0) }; // Ensure count doesn't go below 0
      }
      return prod;
    });
    setProducts(updatedProducts);
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
      <a href="#" onClick={handleAddToCart}>↑</a>
        <p>Quantity: {product.count}</p>
      {product.count > 0 && <a href="#" onClick={handleRemovingFromCart}>↓</a>}
      </div>
    </div>
  );
};

export default Card;
