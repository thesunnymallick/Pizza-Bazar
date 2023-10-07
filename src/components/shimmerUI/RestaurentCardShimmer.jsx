import React from 'react';
import Skeleton from 'react-loading-skeleton';

const RestaurentCardShimmer = () => {
  return (
    <div className="w-36 md:w-56 lg:w-64 h-52">
      <div className="w-full h-40">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="py-3">
        <div className="w-full">
          <Skeleton className="w-full h-4" />
        </div>
        <div className="w-3/4">
          <Skeleton className="w-3/4 h-3" />
        </div>
      </div>
    </div>
  );
};

export default RestaurentCardShimmer;
