import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../../context/CartContext.jsx';

const Header = () => {
  const { setCartIsOpen, cartIsOpen } = useCartContext();
  return (
    <header className={styles.header}>
      <nav className={styles['nav-bar']}>
        <ul className={styles['nav-list']}>
          <li><Link to="/" className={styles['nav-item']}>Home</Link></li>
          <li><Link to="/products" className={styles['nav-item']}>Products</Link></li>
        </ul>
      </nav>
      <div className={styles.cart}>
        <Link to="#" className={styles['cart-button']} onClick={() => setCartIsOpen(!cartIsOpen)}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
