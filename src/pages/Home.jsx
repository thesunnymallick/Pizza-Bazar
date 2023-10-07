import React from 'react';
import useResturentList from '../hooks/useResturentList';
import Banner from '../components/Resturents/Banner';
import { BannerShimmer } from '../components/shimmerUI/BannerShimmer';
import Food from '../components/Resturents/Food';
import FoodShimmer from '../components/shimmerUI/FoodShimmer';
import ResturentList from '../components/Resturents/ResturentList';
import RestaurentShimmer from '../components/shimmerUI/RestaurentShimmer';
import PopularRes from '../components/Resturents/PopularRes';

const Home = () => {
  const { resList, popularRes, banner, food, error, loading } = useResturentList();
  if (error) {
    return (
      <div>
        <h1>Oppsss!</h1>
        <p>
          Something went worng !<br />
          try again after some time
        </p>
      </div>
    );
  }

  return (
    <div className="all container-max">
      {loading !== true ? <Banner banner={banner} /> : <BannerShimmer />}
      {loading !== true ? <Food food={food} /> : <FoodShimmer />}
      {loading !== true ? <ResturentList resList={resList} /> : <RestaurentShimmer />}
      {loading !== true ? <PopularRes popularRes={popularRes} /> : <RestaurentShimmer />}
    </div>
  );
};

export default Home;
