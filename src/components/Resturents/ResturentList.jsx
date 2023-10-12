import React, { useState } from 'react';
import { Style } from '../../utils/style';
import SearchInput from './SearchInput';
import RestaurantCard from './RestaurantCard';
import useResturentList from '../../hooks/useResturentList';

const ResturentList = ({ resList }) => {
  const [search, setSearch] = useState('');
  const { filterResList, setFilterResList } = useResturentList();

  const searchHandel = () => {
    const newList = resList?.filter((res) =>
      res?.info?.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterResList(newList);
    setSearch('');
  };

  return (
    <div className="ResturentConainer py-3">
      <div className={`py-5  ${Style.itemCenter}`}>
        {filterResList && (
          <SearchInput search={search} setSearch={setSearch} searchHandel={searchHandel} />
        )}
      </div>
      <div className="w-full py-3">
        {filterResList?.length !== 0 ? (
          <h1 className="text-2xl font-semibold ">Restaurants near you</h1>
        ) : (
          ''
        )}
      </div>

      <div className="allRestaurants flex gap-3 sm:gap-4 flex-wrap">
        {filterResList?.length !== 0 ? (
          <>
            {filterResList?.map((item) => {
              return <RestaurantCard key={item.info.id} resInfo={item.info} />;
            })}
          </>
        ) : (
          <div className="w-full py-6 flex justify-center">
            <h1 className="text-2xl text-zinc-900 font-semibold">No Restaurent Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResturentList;
