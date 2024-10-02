import { Routes, Route, ScrollRestoration } from "react-router-dom";
import { Movies, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Movies dataUrl="movie/now_playing" title="Home" />} />

        <Route path="movies/" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<Movies dataUrl="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<Movies dataUrl="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<Movies dataUrl="movie/upcoming" title="Upcoming" />} />

        <Route path="search" element={<Search dataUrl="search/movie" />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};