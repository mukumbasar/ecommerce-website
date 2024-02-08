import React, { useEffect } from 'react'
import { useProductContext } from '../../context/ProductContext';
import CardContainer from '../../components/shared/cardContainer/CardContainer';
import styles from './products-page.module.css';
import { useCartContext } from '../../context/CartContext';
import CartCard from '../../components/shared/cartCard/CartCard';
import CartOverlay from '../../components/shared/cartOverlay/CartOverlay';
const ProductsPage = () => {
  const { setIsPopular } = useProductContext();
  const { cart } = useCartContext();

  useEffect(() => {
    setIsPopular(false);
  }, []);

  return (
    <div className={styles['product-page-container']}>
      <CardContainer />
      <CartOverlay>
        {cart && cart.map(product => (
          <CartCard key={product.id} product={product} />
        ))}
      </CartOverlay>
    </div>
  )
}

export default ProductsPage