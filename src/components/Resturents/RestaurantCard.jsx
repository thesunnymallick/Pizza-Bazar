import React from 'react';
import { CDN_URL, startIcon, NotFoundImg } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
const RestaurantCard = ({ resInfo }) => {
  const navigate = useNavigate();
  const { name, cuisines, avgRating, id, cloudinaryImageId, aggregatedDiscountInfoV3, locality } =
    resInfo;

  return (
    <div
      onClick={() => navigate(`/restaurent/${id}`)}
      className="flex flex-col overlay-container w-40 h-60 md:w-52 md:h-64 lg:w-64 lg:h-80 rounded-md overflow-hidden bg-slate-50 cursor-pointer transition-all hover:scale-95 relative ">
      <img
        className="w-full h-28 lg:h-40 object-cover "
        src={CDN_URL + cloudinaryImageId || NotFoundImg}
        alt={name}
      />

      <div className="w-full flex justify-center gap-1  items-center absolute lg:top-[7.5rem] top-20 overlay h-[14%] sm:h-[15%] lg:h-[13%]">
        <span className="text-xs md:text-base lg:text-xl text-white font-extrabold">
          {aggregatedDiscountInfoV3?.header}
        </span>
        <span className="text-xs md:text-base lg:text-xl text-white font-semibold">
          {aggregatedDiscountInfoV3?.subHeader}
        </span>
      </div>

      <div className="flex-2 flex flex-col gap-1 lg:gap-2 py-3 px-2">
        <h2 className="text-zinc-800 text-base sm:text-lg font-medium truncate">{name}</h2>
        <div className="flex items-center gap-1">
          <img className="w-4" src={startIcon} alt="startIcon" />
          <span className="text-zinc-800 font-medium text-base">{avgRating}</span>
        </div>
        <span className="text-zinc-600 text-sm sm:text-base truncate ">{cuisines.join(',')}</span>
        <span className="text-zinc-600 text-sm sm:text-base truncate ">{locality}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
