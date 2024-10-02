import { useEffect, useState } from "react";

export const useFetch = (dataUrl, queryTerm="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${dataUrl}?api_key=${process.env.REACT_APP_MOVIES_API}&query=${queryTerm}`
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return {data};
};
