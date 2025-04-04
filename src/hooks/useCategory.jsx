import { useEffect, useState } from "react";
import httpService from "../services/http.service";
import axios, { isAxiosError } from "axios";

export function useCategory(url, pageNumber = null, category) {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setItems(null);
  }, [category]);

  useEffect(() => {
    setIsLoading(true);

    let cancel;

    httpService
      .get(url, {
        params: {
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => {
          cancel = c;
        }),
      })
      .then(({ data }) => {
        if (data.results) {
          setHasMore(pageNumber < data.info.pages);
          setItems((prevState) =>
            prevState ? [...prevState, ...data.results] : [...data.results]
          );
        } else {
          setItems(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (axios.isCancel(error) || axios.isAxiosError(error)) {
          return;
        }
        setError(error);
      });

    return () => cancel();
  }, [url, pageNumber]);

  return {
    items,
    isLoading,
    error,
    hasMore,
  };
}
