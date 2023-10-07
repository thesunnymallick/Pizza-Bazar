import React from 'react';
import { CDN_URL } from '../../utils/constant';

const BannerList = ({ imageId }) => {
  return (
    <div className="mr-4">
      <img className="w-full" src={CDN_URL + imageId} alt="Banner" />
    </div>
  );
};

export default BannerList;
