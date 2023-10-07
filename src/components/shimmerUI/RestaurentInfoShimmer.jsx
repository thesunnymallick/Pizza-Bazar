import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RestaurentInfoShimmer = () => {
  return (
    <div className="RestaurentInfo w-full">
      <div className="w-52">
        <Skeleton count={5} className="w-full h-4" />
      </div>
      <div className="w-[80%]">
        <Skeleton className="w-full h-2" />
      </div>
    </div>
  );
};
export const RestaurentInfoCardShimmer = () => {
  return (
    <div className="w-full">
      <div className="allInfo">
        {Array.from({ length: 10 }, (_, index) => index).map((item, index) => {
          return (
            <div key={index} className=" flex justify-between w-full py-3 px-2">
              <div className="basis-2/3">
                <div className="w-[75%]">
                  <Skeleton className="w-full h-3" />
                </div>
                <div className="w-[55%]">
                  <Skeleton count={3} className="w-full h-2" />
                </div>
              </div>
              <div className="basis-1/3 h-40 rounded-md">
                <Skeleton className="w-full h-36" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentInfoShimmer;
