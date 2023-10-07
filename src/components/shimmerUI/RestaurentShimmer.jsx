import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import RestaurentCardShimmer from './RestaurentCardShimmer';
const RestaurentShimmer = () => {
  return (
    <div className="py-3 mt-5">
      <div className="w-1/2 sm:w-1/4">
        <Skeleton className="w-full h-4" />
      </div>
      <div className={`py-3 flex flex-wrap gap-3 lg:gap-4`}>
        {Array.from({ length: 20 }, (_, index) => index).map((item, index) => {
          return <RestaurentCardShimmer key={index} />;
        })}
      </div>
    </div>
  );
};

export default RestaurentShimmer;
