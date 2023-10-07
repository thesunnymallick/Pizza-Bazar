import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerList from './BannerList';
import { BsArrowLeft, BsArrowRight } from '../../utils/constant';
import { Style } from '../../utils/style';

const bannerBtn = 'absolute -top-11 w-8 h-8 rounded-full bg-slate-200 cursor-pointer  shadow-md ';
const PrevArrow = (props) => {
  const { currentSlide, onClick } = props;
  return (
    <button
      className={`${Style.itemCenter} ${bannerBtn} right-10 ${
        currentSlide === 0 ? 'bg-gray-100' : ''
      }`}
      disabled={currentSlide === 0 ? true : false}
      onClick={onClick}>
      <BsArrowLeft className={`${currentSlide === 0 ? 'text-slate-400' : 'text-slate-950'}`} />
    </button>
  );
};
const NextArrow = (props) => {
  return (
    <button className={`${Style.itemCenter} ${bannerBtn} right-0`} onClick={props.onClick}>
      <BsArrowRight className="text-slate-900" />
    </button>
  );
};

const Banner = ({ banner }) => {
  if (banner?.card?.card?.gridElements?.infoWithStyle.info.length <= 3) {
    const newItem = banner?.card?.card?.gridElements?.infoWithStyle.info.find((item) => {
      return item.entityType === 'BANNER';
    });

    banner?.card?.card?.gridElements?.infoWithStyle.info.push(newItem);
  }
  const settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner">
      <div className="flex justify-between py-5 relative">
        <h1 className="text-2xl font-semibold">Best offers for you</h1>
      </div>
      <Slider {...settings}>
        {banner?.card?.card?.gridElements?.infoWithStyle.info.map((item) => {
          return <BannerList key={item.id} imageId={item.imageId} />;
        })}
      </Slider>
    </div>
  );
};

export default Banner;
