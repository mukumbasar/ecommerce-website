import React, { useEffect } from 'react';
import Slider from '../../components/homePage/slider/Slider';
import CardContainer from '../../components/shared/cardContainer/CardContainer';
import styles from './home-page.module.css';
import { useProductContext } from '../../context/ProductContext';

const HomePage = () => {
  const { setIsPopular } = useProductContext();

  useEffect(() => {
    setIsPopular(true);
  }, []);

  return (
    <div className={styles['home-page-container']}>
      <Slider />
      <CardContainer />
    </div>
  );
};

export default HomePage;
