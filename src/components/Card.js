import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, title, original_title, overview, poster_path } = movie;
  const image =
    poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="gms card shadow-md rounded-xl dark:bg-gray-900 overflow-hidden w-full">
      <Link to={`/movies/${id}`} title={title}>
        <figure className="aspect-box" style={{ "--aspect-ratio": "573 / 405" }}>
          {poster_path ? (
            <img src={image} alt={title} />
          ) : (
            <figcaption className="absolute inset-0 flex items-center bg-gray-50 dark:bg-gray-950 p-4">
              <span className="mx-auto dark:text-white text-pretty break-all">
                {title}
              </span>
            </figcaption>
          )}
        </figure>
      </Link>
      <div className="md:py-8 py-6 md:px-6 px-4">
        <Link to={`/movies/${id}`} title={title}>
          <h2 className="text-xl font-semibold mb-2 dark:text-white line-clamp-1 text-ellipsis">
            {original_title}
          </h2>
        </Link>
        <p className="text-pretty dark:text-slate-200 font-light text-base line-clamp-4 text-ellipsis">{overview}</p>
      </div>
    </div>
  );
};
