import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState();
  const [hasError, setHasError] = useState(false);
  // En caso de haber error cambiar a false
  const [isLoading, setIsLoading] = useState(true)

  const getApi = () => {
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setInfoApi(res.data);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return [infoApi, getApi, hasError, setInfoApi, isLoading];
};

export default useFetch;
