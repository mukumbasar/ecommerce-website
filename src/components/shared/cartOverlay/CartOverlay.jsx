import React from 'react';
import styles from './cartOverlay.module.css';
import { useCartContext } from '../../../context/CartContext.jsx';

const CartOverlay = ({ children }) => {
    const { cartIsOpen, setCartIsOpen, cart } = useCartContext();
    
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      
      cart.forEach(item => {
          const price = parseFloat(item.price);
          const quantity = parseFloat(item.count);

          totalPrice += price * quantity;
         });
      return totalPrice.toFixed(2);
  };

    return (
        <div className={`${styles['cart-overlay']} ${cartIsOpen ? styles['open'] : ''}`}>
            <div className={styles['cart-overlay-header']}>
                <p>Shopping Cart</p>
                <button className={styles['close-button']} onClick={() => setCartIsOpen(!cartIsOpen)}>Close</button>
            </div>
            <div className={styles['cart-overlay-content']}>
                {children}
                <div className={styles['cart-overlay-total-price']}>
                    <div className={styles['card']}>
                        <h3>Total Price</h3>
                        <p>${calculateTotalPrice()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartOverlay;
