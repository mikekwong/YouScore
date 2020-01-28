import { useState, useEffect } from "react";

const useFetch = (baseUrl, path) => {
  const [data, setData] = useState({ players: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await baseUrl.get(path);
        if (response.status === 200) {
          setData(response.data);
          setIsFetched(true);
        }
      } catch (error) {
        setIsError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [baseUrl, path]);

  return { data, isLoading, isError, isFetched };
};

export default useFetch;
