import React from 'react';
import styles from './cartCard.module.css';
import { useCartContext } from '../../../context/CartContext';
import { addToCart, removeFromCart } from '../../../services/cartServices';

const CartCard = ({ product }) => {
    const { cart, setCart } = useCartContext();

    const handleAddToCart = (event) => {
        event.preventDefault();
        addToCart(cart, setCart, {
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
        });
        console.log(cart);
    };

    const handleRemovingFromCart = (event) => {
        event.preventDefault();
        removeFromCart(cart, setCart, {
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
        });
    }

    return (
        <div className={`${styles['card']} ${styles['cardContainer']}`}>
            <img src={product.image} alt={product.title} />
            
            <div className={styles['cardContent']}>
                <h5>{product.title}</h5>
                <div className={styles['price']}>
                    <p>${product.price}</p>
                </div>
                <div className={styles['buttons']}>
                    <a href="#" onClick={handleAddToCart}>↑</a>
                    <p>Quantity: {product.count}</p>
                    <a href="#" onClick={handleRemovingFromCart}>↓</a>
                </div>
            </div> 
        </div>
    );
};

export default CartCard;
