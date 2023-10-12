import { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_RESTAURANTS_URL } from '../utils/constant';
import { useSelector } from 'react-redux';

const useResturentList = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [popularRes, setPopularRes] = useState([]);
  const [banner, setBanner] = useState([]);
  const [food, setFood] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(null);
  const { address } = useSelector((state) => state.address);

  useEffect(() => {
    const fetchRestList = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post(GET_RESTAURANTS_URL, address);

        if (data?.data) {
          console.log(data?.data);
          setResList(
            data?.data?.cards.filter(
              (items) => items?.card?.card?.id === 'restaurant_grid_listing'
            )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );

          setFilterResList(
            data?.data?.cards.filter(
              (items) => items?.card?.card?.id === 'restaurant_grid_listing'
            )[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );

          setPopularRes(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

          // filter banner
          setBanner(
            data?.data.cards.filter((item) => {
              return item.card?.card?.id === 'topical_banner';
            })[0]
          );

          // filter food
          setFood(
            data?.data.cards.filter((item) => {
              return item.card?.card?.id === 'whats_on_your_mind';
            })[0]
          );
          setNotFound(
            data?.data.cards.filter((item) => {
              return item.card?.card?.id === 'swiggy_not_present';
            })[0]
          );
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchRestList();
  }, [address]);

  return {
    resList,
    banner,
    food,
    error,
    loading,
    filterResList,
    setFilterResList,
    popularRes,
    notFound,
  };
};

export default useResturentList;
