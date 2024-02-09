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
          <div className={styles['slide']}><img src="https://img.freepik.com/free-vector/red-flat-style-black-friday-sale-banner-template_1017-27735.jpg?w=1380&t=st=1707479676~exp=1707480276~hmac=c5bb8358d5b591b1192c7b089318a1c512f98e4496618cba9f83fcb95cfa6673" alt="" /></div>
          <div className={styles['slide']}><img src="https://img.freepik.com/free-vector/black-friday-crazy-sale-offer-banner-shop-now-best-deal-vector_1017-47143.jpg?w=1380&t=st=1707481345~exp=1707481945~hmac=768ba748d5590bda35bf55f685a386b2ad76874d91106f54a47082d9e94e742b" alt="" /></div>
          <div className={styles['slide']}><img src="https://img.freepik.com/free-vector/red-flat-style-black-friday-sale-banner-template_1017-27735.jpg?w=1380&t=st=1707479676~exp=1707480276~hmac=c5bb8358d5b591b1192c7b089318a1c512f98e4496618cba9f83fcb95cfa6673" alt="" /></div>
          <div className={styles['slide']}><img src="https://img.freepik.com/free-vector/black-friday-crazy-sale-offer-banner-shop-now-best-deal-vector_1017-47143.jpg?w=1380&t=st=1707481345~exp=1707481945~hmac=768ba748d5590bda35bf55f685a386b2ad76874d91106f54a47082d9e94e742b" alt="" /></div>
          <div className={styles['slide']}><img src="https://img.freepik.com/free-vector/summer-season-sale-fifty-percent-off-lettering_1262-12130.jpg?w=1380&t=st=1707479786~exp=1707480386~hmac=3a50e05bcf3cf522e4de3e7ea12e305108cb4d81240f3107631739c49e945c15" alt="" /></div>
        </div>
        <div className={styles['progress-bar']}>
          <div className={styles['progress']} style={{ width: `${(transitionSpeed - timeLeft) / transitionSpeed * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
