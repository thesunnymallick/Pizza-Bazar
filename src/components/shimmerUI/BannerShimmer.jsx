import React from 'react';
import { Style } from '../../utils/style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const BannerShimmer = () => {
  return (
    <div className="banner">
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

      <div className={`${Style.flexCenter} gap-0 sm:gap-4`}>
        <div className="w-[350px] sm:w-[350px] h-48 sm:h-52  ">
          <Skeleton className="w-full h-full " />
        </div>
        <div className="hidden sm:block w-[350px] h-52">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="hidden lg:block w-[350px] h-52">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
