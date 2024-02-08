import React, { useEffect } from 'react';
import Slider from '../../components/homePage/slider/Slider';
import CardContainer from '../../components/shared/cardContainer/CardContainer';
import CartOverlay from '../../components/shared/cartOverlay/CartOverlay';
import styles from './home-page.module.css';
import { useProductContext } from '../../context/ProductContext';
import { useCartContext } from '../../context/CartContext';
import CartCard from '../../components/shared/cartCard/CartCard';

const HomePage = () => {
  const { setIsPopular } = useProductContext();
  const { cart } = useCartContext();

  useEffect(() => {
    setIsPopular(true);
  }, []);

  return (
    <div>
      <div className={styles['home-page-container']}>
        <Slider />
        <CardContainer />
      </div>
      <CartOverlay>
        {cart && cart.map(product => (
          <CartCard key={product.id} product={product} />
        ))}
      </CartOverlay>
    </div>
  );
};

export default HomePage;
