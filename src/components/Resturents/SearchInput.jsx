import React from 'react';

const SearchInput = ({ search, setSearch, searchHandel }) => {
  return (
    <div className={`flex justify-center items-center gap-1 w-full`}>
      <input
        className="w-10/12 md:w-2/4 px-3 py-2 border-[1px] border-slate-500 bg-white
        text-slate-900 outline-1 outline-orange-400 text-base sm:text-lg rounded-md "
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search resturent....."
      />
      <button
        onClick={searchHandel}
        className="w-24 sm:w-28 h-10 sm:h-11 p-2 bg-orange-400 text-white 
         text-base sm:text-lg rounded-md hover:bg-orange-500 transition-all">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
