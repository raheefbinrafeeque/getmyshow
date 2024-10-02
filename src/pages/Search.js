import { useSearchParams } from "react-router-dom";
import { useDocTitle, useFetch } from "../hooks";
import { Card } from "../components";

export const Search = ({ dataUrl }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(dataUrl, queryTerm);

  useDocTitle(`Results for "${queryTerm}"`);

  return (
    <div className="gms movies bg-white dark:bg-slate-800 min-h-[calc(100dvh-68px)]">
      <div className="container">
        <p className="lg:pt-20 pt-12 dark:text-white text-pretty">
          {movies.length === 0 ? `No results found for "${queryTerm}"` : `Results for "${queryTerm}"`}
        </p>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:py-20 py-12 gap-5">
          {movies &&
            movies.map((movie) => (
              <li className="flex" key={movie.id}>
                <Card movie={movie} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
