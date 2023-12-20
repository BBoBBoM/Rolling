import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const LIMIT = 10;
const RECIPIENT_API = `https://rolling-api.vercel.app/2-5/recipients/?limit=${LIMIT}&offset=0`;

export const useRollingPaperList = (sort = '') => {
  const [rollingPaperList, setRollingPaperList] = useState([]);
  const [url, setUrl] = useState(`${RECIPIENT_API}&sort=${sort}`);
  const [error, setError] = useState();

  const getRollingPaperList = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const { next, results } = await response.data;
      if (next) setUrl(next);
      setRollingPaperList((prev) => [...prev, ...results]);
    } catch (error) {
      alert(error);
      setError(error);
    }
  }, [url]);

  useEffect(() => {
    getRollingPaperList();
  }, [getRollingPaperList]);

  return [rollingPaperList, error];
};
