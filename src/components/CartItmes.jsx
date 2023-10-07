import React from 'react';
import { CDN_URL, NotFoundImg } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addToCart, decreseQuantity, removeCart } from '../store/reducers/cartSlice';
const CartItmes = ({ item }) => {
  const dispatch = useDispatch();
  const textSize = (text, size) => {
    if (text?.length > size) {
      const newText = text.substring(0, size).concat('...');
      return newText;
    }
    return text;
  };

  const increseQuantityHandel = (item) => {
    dispatch(addToCart(item));
  };
  const decreseQuantityHandel = (item) => {
    dispatch(decreseQuantity(item));
  };

  const removeCartHandel = (item) => {
    dispatch(removeCart(item));
  };

  return (
    <div className="itemCard flex flex-col sm:flex-row gap-4 px-2 py-3 ">
      <div className="">
        <img
          className="w-40 h-36 rounded-md"
          src={CDN_URL + item?.imageId || NotFoundImg}
          alt={item?.name}
        />
      </div>
      <div className="flex-1 flex gap-1 flex-col">
        <h2 className="text-lg text-zinc-800 font-semibold">{item?.name}</h2>
        <span className="text-sm text-zinc-600">
          {textSize(item?.description?.split('|')[1] || item?.description, 100)}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-zinc-800">{`₹${
            (item?.price / 100) * item?.cartQuantity ||
            (item?.defaultPrice / 100) * item?.cartQuantity
          }`}</span>
          <span className="text-base text-zinc-700 font-normal">
            ({`${item?.price / 100 || item?.defaultPrice / 100} X ${item.cartQuantity}`})
          </span>
        </div>
        <div className="w-full flex items-center justify-between py-1">
          <div className="flex">
            <button
              disabled={item.cartQuantity === 1 ? true : false}
              onClick={() => decreseQuantityHandel(item)}
              className={`${item.cartQuantity === 1 ? 'opacity-70' : ''} w-9 h-7 rounded-md
              bg-orange-500 text-white text-xl flex items-center justify-center transition-all hover:bg-orange-600`}>
              -
            </button>
            <span className="w-7 h-7 flex justify-center text-lg text-zinc-800">
              {item.cartQuantity}
            </span>
            <button
              onClick={() => increseQuantityHandel(item)}
              className="w-9 h-7 rounded-md
                 bg-orange-500 text-white text-xl flex items-center justify-center transition-all hover:bg-orange-600">
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removeCartHandel(item)}
              className="w-20 h-8 bg-orange-500 text-white text-base rounded-md hover:bg-orange-600 transition-all">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItmes;
