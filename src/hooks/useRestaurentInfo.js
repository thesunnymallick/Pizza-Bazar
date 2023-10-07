import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_RESTAURANTS_URL } from '../utils/constant';

const useRestaurentInfo = (id) => {
  const [resInfo, setResInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRestaurentInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${GET_RESTAURANTS_URL}/${id}`);
        setResInfo(data?.data?.cards);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchRestaurentInfo();
  }, [id]);

  return { resInfo, error, loading };
};

export default useRestaurentInfo;
