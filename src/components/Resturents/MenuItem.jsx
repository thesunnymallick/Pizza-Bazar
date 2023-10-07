import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from '../../utils/constant';
import MenuItemList from './MenuItemList';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenuItem = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-gray-50 my-2  overflow-hidden">
        <div
          onClick={toggleMenuItem}
          className="bg-white  py-4 border-[1px] border-b-slate-300 px-2 shadow-sm flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="text-zinc-700 text-sm sm:text-lg font-bold">
              {item?.card?.card?.title}
            </span>
            <span className="text-zinc-700 text-sm sm:text-lg">
              ({item.card?.card?.itemCards.length})
            </span>
          </div>
          <div className="text-lg text-zinc-900 mr-2 ">
            <span>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
          </div>
        </div>
        {isOpen && (
          <div className="menuItems  bg-white">
            {item.card?.card?.itemCards.map((item) => {
              return <MenuItemList key={item?.card?.info?.id} info={item.card.info} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItem;
