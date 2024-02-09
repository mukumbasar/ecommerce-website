import React, { useState, useEffect, useRef } from 'react';
import styles from './slider.module.css';

const Slider = ({ transitionSpeed }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(transitionSpeed);
  const [isPaused, setIsPaused] = useState(false);
  const transitionRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setTimeLeft((prevTimeLeft) => {
          const nextTimeLeft = prevTimeLeft - 1000;
          if (nextTimeLeft <= 0) {
            setCurrentPage((prevPage) => (prevPage + 1) % 5);
            return transitionSpeed;
          }
          return nextTimeLeft;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, transitionSpeed]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(transitionRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className={styles['slider-container']}>
      <div 
        className={styles['slider']} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles['slides']} style={{ transform: `translateX(-${currentPage * 100}%)` }}>
          <div className={styles['slide']}><img src="/images/black-friday-crazy-sale-offer-banner-shop-now-best-deal-vector_1017-47143.jpg" alt="" /></div>
          <div className={styles['slide']}><img src="/images/black-friday-sale-banner-with-offer-details_1017-34730.jpg" alt="" /></div>
          <div className={styles['slide']}><img src="/images/black-friday-crazy-sale-offer-banner-shop-now-best-deal-vector_1017-47143.jpg" alt="" /></div>
          <div className={styles['slide']}><img src="/images/black-friday-sale-banner-with-offer-details_1017-34730.jpg" alt="" /></div>
          <div className={styles['slide']}><img src="/images/red-flat-style-black-friday-sale-banner-template_1017-27735.jpg" alt="" /></div>
        </div>
        <div className={styles['progress-bar']}>
          <div className={styles['progress']} style={{ width: `${(transitionSpeed - timeLeft) / transitionSpeed * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
