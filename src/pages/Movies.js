import { useDocTitle } from "../hooks";
import { Card } from "../components";
import { useEffect, useState } from "react";

export const Movies = ({dataUrl, title}) => {
  // const { data:movies } = useFetch(dataUrl)
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const url = `https://api.themoviedb.org/3/${dataUrl}?api_key=${process.env.REACT_APP_MOVIES_API}`
  const controller = new AbortController()
  async function fetchMovies() {
    try {
      setLoading(true);
      setMovies([]);
      const response = await fetch(url, { signal: controller.signal });
      setError(""); 

      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch movies");
      }

      const json = await response.json();
      setMovies(json.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.name !== "AbortError") { // Ensure it isn't from the abort
        setError(error.message);
      }
    } 
  }
  useEffect(() => {
    fetchMovies();
  }, [url]);

  useDocTitle(title);

  return (
    <div className="gms movies bg-white dark:bg-slate-800 min-h-[calc(100dvh-68px)]">
      <div className="container">
        {loading && <p className="lg:py-20 py-12 dark:text-white">Loading Movies ...</p>}
        {error && <p className="lg:py-20 py-12 dark:text-white">{error}</p>}
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:py-20 py-12 gap-5">
          {movies && movies.map((movie) => (
            <li className="flex" key={movie.id}>
                <Card movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
