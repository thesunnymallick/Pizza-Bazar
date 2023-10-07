import React from 'react';
import { CDN_URL, startIcon } from '../../utils/constant';
function ResInfo({ info }) {
  return (
    <div className="resCard px-2 py-3 bg-gray-50">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-zinc-900 font-bold text-lg">{info?.name}</h1>
          <span className="text-zinc-600 text-base">{info?.cuisines.join(',')}</span>
          <span className="text-zinc-600 text-base">
            {info?.areaName}, {info?.sla?.lastMileTravelString}
          </span>
        </div>
        <div className="flex flex-col  justify-center items-center px-1 py-5 border border-zinc-100 gap-2 rounded-lg">
          <span className="flex items-center gap-[5px] py-1 border-b-[1px] border-zinc-300">
            <img className="w-4" src={startIcon} alt="start" />
            <p className="text-base text-yellow-400 font-bold">{info?.avgRatingString}</p>
          </span>
          <span className="text-xs text-gray-400 font-bold"> {info?.totalRatingsString} </span>
        </div>
      </div>
      <div className="flex items-center gap-1 py-3 border-dashed border-b-[1px]">
        <img className="w-5 h-5" src={CDN_URL + info?.feeDetails?.icon} alt="icon" />
        <p className="text-xs sm:text-sm text-zinc-500 truncate">{info?.feeDetails.message}</p>
      </div>
    </div>
  );
}

export default ResInfo;
