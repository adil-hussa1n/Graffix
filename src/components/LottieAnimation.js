// src/components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/img/ani.json';

const LottieAnimation = () => {
  return (
    <Lottie 
      animationData={animationData} 
      loop 
      style={{ width: '100%', height: 'auto' }} 
    />
  );
};

export default LottieAnimation;
