import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetail } from "../components";
import { useDocTitle } from "../hooks";

export const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_MOVIES_API}`
      );
      const json = await response.json();
      setMovieDetails(json);
    }
    fetchMovie();
  }, [params.id]);

  useDocTitle(movieDetails.title)
  return (
    <div className="gms movies-detail bg-white dark:bg-slate-800 min-h-[calc(100dvh-68px)] lg:py-20 py-12">
      <div className="container">
        <CardDetail movieDetails={movieDetails}/>
      </div>
    </div>
  );
};
