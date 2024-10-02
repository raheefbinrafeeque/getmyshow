import { useDocTitle, useFetch } from "../hooks";
import { Card } from "../components";

export const Movies = ({dataUrl, title}) => {
  const { data:movies } = useFetch(dataUrl)

  useDocTitle(title);

  return (
    <div className="gms movies bg-white dark:bg-slate-800 min-h-[calc(100dvh-68px)]">
      <div className="container">
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
