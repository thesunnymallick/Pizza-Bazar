import React from 'react';
import RestaurantCard from './RestaurantCard';

const PopularRes = ({ popularRes }) => {
  return (
    <div className="py-3">
      <div className="w-full py-3">
        {popularRes?.length !== 0 ? (
          <h1 className="text-2xl font-semibold ">Popular restaurants near you</h1>
        ) : (
          ''
        )}
      </div>
      <div className="allRestaurants flex gap-3 sm:gap-4 flex-wrap">
        {popularRes?.length !== 0 ? (
          <>
            {popularRes?.map((item) => {
              return <RestaurantCard key={item.info.id} resInfo={item.info} />;
            })}
          </>
        ) : (
          <div className="w-full py-6 flex justify-center">
            <h1 className="text-2xl text-zinc-900 font-semibold">No Popular Restaurent Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularRes;
