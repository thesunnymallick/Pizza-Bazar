import React from 'react';
import { CDN_URL } from '../../utils/constant';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BannerList = ({ imageId }) => {
  return (
    <div className="mr-4">
      <LazyLoadImage className="w-full" src={CDN_URL + imageId} alt={imageId} effect="blur" />
    </div>
  );
};

export default BannerList;
