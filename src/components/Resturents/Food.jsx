import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerList from './BannerList';
import { BsArrowLeft, BsArrowRight } from '../../utils/constant';
import { Style } from '../../utils/style';

const bannerBtn = 'absolute -top-11 w-8 h-8 rounded-full bg-slate-300 cursor-pointer  shadow-md ';
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

const Food = ({ food }) => {
  const settings = {
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="food">
      <div className="flex justify-between py-5 relative">
        {food && <h1 className="text-2xl font-semibold">What's on your mind?</h1>}
      </div>
      <Slider {...settings}>
        {food?.card?.card?.gridElements?.infoWithStyle.info.map((item, index) => {
          return <BannerList key={index} imageId={item.imageId} />;
        })}
      </Slider>
    </div>
  );
};

export default Food;
