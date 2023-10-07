import React from 'react';

import { Style } from '../../utils/style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const FoodShimmer = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className={`${Style.flexBetween} py-4`}>
        <div className="w-[250px] sm:w-1/4">
          <Skeleton className="h-5" />
        </div>
        <div className=" flex items-center gap-1">
          <div className="w-[25px] h-[25px]">
            <Skeleton circle className="w-full h-full" />
          </div>
          <div className="w-[25px] h-[25px]">
            <Skeleton circle className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className={`${Style.flexCenter} gap-3 sm:gap-4 lg:gap-10`}>
        {Array.from({ length: 10 }, (_, index) => index).map((item, index) => (
          <div key={index} className="w-[40px] sm:w-[70px] h-[100px]">
            <div className={`w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] `}>
              <Skeleton circle className="w-full h-full" />
            </div>
            <div className="w-[30px] sm:w-[60px] mx-auto my-2">
              <Skeleton className="w-full h-3 sm:h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodShimmer;
