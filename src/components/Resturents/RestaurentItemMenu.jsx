import React from 'react';
import MenuItem from './MenuItem';

function RestaurentItemMenu({ itemCard }) {
  const allItem = itemCard?.cards?.filter(
    (item) =>
      item.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  return (
    <div className="allMenu bg-gray-50 py-3">
      {allItem?.map((item) => {
        return <MenuItem key={item?.card?.card?.title} item={item} />;
      })}
    </div>
  );
}

export default RestaurentItemMenu;
