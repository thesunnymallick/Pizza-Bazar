import React from 'react';
import useResturentList from '../hooks/useResturentList';
import Banner from '../components/Resturents/Banner';
import { BannerShimmer } from '../components/shimmerUI/BannerShimmer';
import Food from '../components/Resturents/Food';
import FoodShimmer from '../components/shimmerUI/FoodShimmer';
import ResturentList from '../components/Resturents/ResturentList';
import RestaurentShimmer from '../components/shimmerUI/RestaurentShimmer';
import PopularRes from '../components/Resturents/PopularRes';
import Error from '../components/Error';
import LocationNotFound from '../components/LocationNotFound';

const Home = () => {
  const { resList, popularRes, banner, food, error, loading, notFound } = useResturentList();
  console.log(notFound);
  return (
    <>
      {notFound?.card?.card?.id !== 'swiggy_not_present' ? (
        <>
          {error === true ? (
            <Error />
          ) : (
            <div className="all container-max">
              {loading !== true ? (
                banner?.length !== 0 ? (
                  <Banner banner={banner} />
                ) : (
                  ''
                )
              ) : (
                <BannerShimmer />
              )}
              {loading !== true ? food?.length !== 0 ? <Food food={food} /> : '' : <FoodShimmer />}
              {loading !== true ? <ResturentList resList={resList} /> : <RestaurentShimmer />}
              {loading !== true ? <PopularRes popularRes={popularRes} /> : <RestaurentShimmer />}
            </div>
          )}
        </>
      ) : (
        <LocationNotFound image={notFound?.card?.card?.imageLink} />
      )}
    </>
  );
};

export default Home;
