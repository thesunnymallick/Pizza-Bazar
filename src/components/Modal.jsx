import React, { useEffect, useState } from 'react';
import { IoLocationOutline } from '../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAddress, removeAddress } from '../store/reducers/addressSlice';

const Modal = ({ closeModal }) => {
  const [error, setError] = useState({ code: 0, message: null });
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const address = JSON.parse(localStorage.getItem('address'));


  const MY_API_KEY='dcb2cbf83431c8fafbc4d9fbcb6872b7'


  const getLocationHandel = async () => {
    try {
      setIsLoading(true);
      if ('geolocation' in navigator) {
        const reslove = (postion) => {
          setLocation({ latitude: postion.coords.latitude, longitude: postion.coords.longitude });
          setIsLoading(false);
        };
        const reject = (error) => {
          setError({ code: error.code, message: error.message });
          setIsLoading(false);
        };
        navigator.geolocation.getCurrentPosition(reslove, reject);
      } else {
        setError({ code: 0, message: 'Geolocation is not supported in your browser' });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const API_CITY = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${MY_API_KEY}
      `;
        if (location.latitude !== null && location.longitude !== null) {
          const { data } = await axios.get(API_CITY);
          dispatch(addAddress(data));
          setIsLoading(false);
          closeModal();
        }
      } catch (error) {
        setError({ code: 0, message: 'Geolocation is not supported in your browser' });
        setIsLoading(false);
      }
    };
    fetchLocation();
  }, [location.longitude, location.latitude, dispatch, closeModal]);

  const removeLocationHandel = () => {
    dispatch(removeAddress());
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        onClick={closeModal}
        className="fixed cursor-pointer inset-0 bg-gray-900 opacity-50"></div>
      <div className=" w-[90%] h-[25vh] sm:w-[50%] sm:h-[15vh] lg:h-[40vh] relative bg-white p-2 sm:p-4 rounded-lg z-50 flex flex-col items-center justify-center">
        <h1 className="text-xl lg:text-2xl capitalize gap-2 font-semibold text-zinc-800 py-1">
          Please provide your location
        </h1>
        <button
          onClick={getLocationHandel}
          className=" w-[90%] rounded-md sm:w-[60%] h-10 bg-zinc-800 text-white mt-1 sm:mt-2 uppercase  text-sm sm:text-base flex items-center gap-1 sm:gap-2 justify-center hover:bg-zinc-950 transition-all font-semibold">
          {isLoading !== true ? (
            <>
              <span>
                <IoLocationOutline className="text-base sm:text-xl" />
              </span>
              <span>Access my location</span>
            </>
          ) : (
            <>
              <span>please wait</span>
              <div className="w-2 h-2 mt-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 mt-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 mt-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 mt-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 mt-2 bg-white rounded-full animate-bounce"></div>
            </>
          )}
        </button>
        {error && (
          <span className="text-xs sm:text-sm py-2 font-semibold text-red-500">
            {error.message}
          </span>
        )}

        {address !== null ? (
          <button
            onClick={removeLocationHandel}
            className="self-end my-3 bg-orange-500 text-white text-sm py-2 px-4 rounded-md hover:bg-orange-600 transition-all">
            Remove location
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Modal;
