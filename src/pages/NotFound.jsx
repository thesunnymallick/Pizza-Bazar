import React from 'react';
import { notfound, BsArrowLeft } from '../utils/constant';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <img className="w-56" src={notfound} alt="NotFound" />
        <h1 className="text-xl capitalize font-semibold text-zinc-800 py-1">
          Oh Oh! Sorry page not found!
        </h1>
        <Link
          to="/"
          className="flex justify-center items-center gap-2 w-[100%] h-10 bg-orange-500 text-white font-semibold rounded-md text-lg">
          <span>
            <BsArrowLeft className="text-xl font-medium" />
          </span>
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
