import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurentInfo from '../hooks/useRestaurentInfo';
import ResInfo from '../components/Resturents/ResInfo';
import RestaurentItemMenu from '../components/Resturents/RestaurentItemMenu';
import RestaurentInfoShimmer, {
  RestaurentInfoCardShimmer,
} from '../components/shimmerUI/RestaurentInfoShimmer';

const RestaurentInfo = () => {
  const { id } = useParams();
  const { resInfo, error, loading } = useRestaurentInfo(id);

  if (error) {
    return <h1>Something Worng!</h1>;
  }

  return (
    <div className="w-full">
      <div className="container-md py-3">
        {loading !== true ? (
          <ResInfo info={resInfo[0]?.card?.card?.info} />
        ) : (
          <RestaurentInfoShimmer />
        )}
        {loading !== true ? (
          <RestaurentItemMenu itemCard={resInfo[2]?.groupedCard.cardGroupMap.REGULAR} />
        ) : (
          <RestaurentInfoCardShimmer />
        )}
      </div>
    </div>
  );
};

export default RestaurentInfo;
