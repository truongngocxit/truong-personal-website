import axios from "axios";
import promisifiedTimeout from "../utils/promisifiedTimeout";
import { useState, useEffect } from "react";

const useFetchData = function (collection, dataCleansingFn) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios({
          method: "GET",
          url: `https://personal-738e0-default-rtdb.asia-southeast1.firebasedatabase.app/${collection}.json`,
        });
        await promisifiedTimeout(2);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    })();
  }, [collection]);

  return {
    isLoading,
    error,
    data: data ? dataCleansingFn(data) : null,
  };
};

export default useFetchData;
