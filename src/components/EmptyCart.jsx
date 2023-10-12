import React from 'react';
import { emptyCart, BsArrowLeft } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <LazyLoadImage className="w-72" src={emptyCart} effect="blur" alt="emptyCart" />
        <h1 className="text-xl font-semibold text-zinc-900">Oh Oh! your cart is empty!</h1>
        <button
          onClick={() => navigate('/')}
          className="w-72 h-10 rounded-md bg-orange-500 text-base text-white hover:bg-orange-600 flex items-center justify-center gap-2">
          <span>
            <BsArrowLeft className="text-xl font-semibold" />
          </span>
          <span> Go to Restaurent</span>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
