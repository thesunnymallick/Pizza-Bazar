import React from 'react';
import { CDN_URL } from '../../utils/constant';
import { NotFoundImg } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MenuItemList = ({ info }) => {
  const dispatch = useDispatch();

  const addToCartHandel = (item) => {
    dispatch(addToCart(item));
  };

  const Textlength = (text, size) => {
    if (text?.length > size) {
      const newText = text.substring(0, size).concat('...');
      return newText;
    }
    return text;
  };

  return (
    <div className="card py-3 pb-7 px-2 flex justify-between border-b-[1px] border-b-zinc-300">
      <div className="basis-8/12 sm:basis-3/4 flex flex-col gap-1 ">
        <h1 className="text-zinc-800 font-semibold text-lg">{Textlength(info?.name, 30)} </h1>
        <span className="text-zinc-800 font-bold text-base">
          {' '}
          ₹{info?.price / 100 || info?.defaultPrice / 100}
        </span>
        <span className="text-zinc-500 text-xs lg:text-sm py-1 pr-3">
          {info?.description?.split('|')[1] || Textlength(info?.description, 130)}
        </span>
      </div>
      <div className="basis-4/12 sm:basis-1/4 relative flex items-center ">
        <LazyLoadImage
          className="w-full h-40 aspect-video sm:h-40 object-cover rounded-md"
          src={info?.imageId ? CDN_URL + info.imageId : NotFoundImg}
          alt={info.name}
          effect="blur"
        />
        <button
          onClick={() => addToCartHandel(info)}
          className="w-20 h-10 bg-white absolute left-[50%] -bottom-5 -translate-x-[50%]
          shadow-lg rounded-md text-base font-bold text-zinc-800 hover:bg-green-500 hover:text-white transition-all">
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItemList;
