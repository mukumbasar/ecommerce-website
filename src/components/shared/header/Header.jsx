import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['nav-bar']}>
        <ul className={styles['nav-list']}>
          <li><Link to="/" className={styles['nav-item']}>Home</Link></li> 
          <li><Link to="/products" className={styles['nav-item']}>Products</Link></li> 
        </ul>
      </nav>
      <div className={styles.cart}>
        <a href="" className={styles['cart-link']}>Cart</a>
      </div>
    </header>
  );
};

export default Header;
