import React, { useEffect } from 'react'
import { useProductContext } from '../../context/ProductContext';
import CardContainer from '../../components/shared/cardContainer/CardContainer';
import styles from './products-page.module.css';
const ProductsPage = () => {
  const { setIsPopular, isPopular } = useProductContext();

  useEffect(() => {
    setIsPopular(false);
    console.log(isPopular);
  }, []);

  return (
    <div className={styles['product-page-container']}>
      <CardContainer />
    </div>
  )
}

export default ProductsPage