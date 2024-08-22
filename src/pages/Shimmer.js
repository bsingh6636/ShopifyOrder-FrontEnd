import React from 'react';
import './Shimmer.css';

const LoadingShimmer = () => {
  return (
    <div className="loading-shimmer">
      <div className="circle-loader"></div>
      <div className="line-shimmer"></div>
    </div>
  );
};

export default LoadingShimmer;
