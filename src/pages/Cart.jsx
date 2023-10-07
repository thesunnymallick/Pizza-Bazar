import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItmes from '../components/CartItmes';
import OrderSummary from '../components/OrderSummary';
import EmptyCart from '../components/EmptyCart';
import { clearCart } from '../store/reducers/cartSlice';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const emptyCartHandel = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container-max py-4">
      {items.length !== 0 ? (
        <div className="w-full flex flex-col gap-3 lg:flex-row">
          <div className="basis-[70%]">
            <div className="flex items-center py-2 gap-1">
              <h1 className="text-xl text-zinc-800 font-semibold">Cart Itmes</h1>
              <span className="text-lg text-zinc-700 font-medium ">({items?.length})</span>
            </div>
            {items.map((item) => {
              return <CartItmes key={item?.id} item={item} />;
            })}
            <div>
              <button
                onClick={emptyCartHandel}
                className="w-24 h-8 bg-orange-500 text-white text-base rounded-md hover:bg-orange-600">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="basis-[30%]">
            <OrderSummary items={items} />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
