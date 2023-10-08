import React from 'react';
import { error } from '../utils/constant';
const Error = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="flex flex-col gap-1 p-4">
        <img className="w-56" src={error} alt="error" />
        <h1 className="text-lg text-zinc-800 font-bold">Oh Oh, technical isuue ☹️</h1>
        <p className="text-base text-zinc-500 font-normal ">
          Something went worng ! try again after some time
        </p>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="w-full mt-2 h-10 bg-orange-500 text-lg text-white  font-semibold hover:bg-orange-600 rounded-md">
          Reload
        </button>
      </div>
    </div>
  );
};

export default Error;
