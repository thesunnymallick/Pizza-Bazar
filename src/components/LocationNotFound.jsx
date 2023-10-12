import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LocationNotFound = ({ image }) => {
  return (
    <div className=" w-full h-[50vh] justify-center items-center flex flex-col  gap-1 py-7 px-4 ">
      <LazyLoadImage className="w-56" src={image} effect="blur" alt="error" />
      <h1 className="text-lg text-zinc-800 font-bold">Oh Oh, Location Unserviceable☹️</h1>
      <p className="text-base text-zinc-500 font-normal ">
        We don’t have any services here till now. Try changing location.
      </p>
    </div>
  );
};

export default LocationNotFound;
