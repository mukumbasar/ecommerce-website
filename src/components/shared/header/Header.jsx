import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles["header"]}>
        <nav className={styles["nav-bar"]}>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/About">Products</Link></li> 
        </ul>
      </nav>
      <div className={styles["cart"]}>
        <a href="">Cart</a>
      </div>
      
    </header>
  )
}

export default Header