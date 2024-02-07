import React from 'react';
import Slider from '../../components/homePage/slider/Slider';
import CardContainer from '../../components/shared/cardContainer/CardContainer';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles['home-page-container']}>
      <Slider />
      <CardContainer />
    </div>
  );
};

export default HomePage;
