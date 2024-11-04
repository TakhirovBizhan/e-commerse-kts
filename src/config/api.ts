import { useEffect, useState } from 'react';
import axios from 'axios';
import { IData } from './DataInterfaces';

export const useFetchData = () => {
  const [data, setData] = useState<IData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loading) return;
        const result = await axios.get('https://api.escuelajs.co/api/v1/products');
        setData(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  return { data, loading };
};
