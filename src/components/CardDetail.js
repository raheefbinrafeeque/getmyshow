import React from "react";

export const CardDetail = ({ movieDetails }) => {
    const {
        title,
        original_title,
        overview,
        poster_path,
        tagline,
        status,
        vote_average,
        vote_count,
        runtime,
        budget,
        revenue,
        release_date,
        imdb_id,
        genres
    } = movieDetails;

    const image = poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`;

    const rating = typeof vote_average === "number" ? vote_average.toFixed(1) : "N/A";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const formattedTime = `${hours}h ${minutes}min`;
    const duration = formattedTime;

    const budgetInDollars = (budget !== undefined && budget !== null && budget !== '') ? budget.toLocaleString() : 'N/A';
    const revenueInDollars = (revenue !== undefined && revenue !== null && revenue !== '') ? revenue.toLocaleString() : 'N/A';
    
    return (
        <div className="gms card card--details flex flex-col md:flex-row gap-10 md:px-0 sm:px-16">
            <figure
                className="aspect-box rounded-lg overflow-hidden md:w-[405px] w-full mx-auto"
                style={{ "--aspect-ratio": "573 / 405" }}
            >
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
            <div className="py-8 flex-1">
                <header className="flex items-center mb-2">
                    <h2 className="text-xl font-semibold dark:text-white">
                        {original_title}
                    </h2>
                    <span className="l-tag bg-slate-100 dark:bg-white dark:text-slate-900 ml-4">{status}</span>
                </header>
                <p className="text-md font-light dark:text-white mb-2"> - {tagline}</p>
                <p className="text-pretty dark:text-slate-200 font-light text-base">
                    {overview}
                </p>
                {genres && (
                    <ul className="flex flex-wrap gap-4 mt-4">
                        {genres && genres.map((genre) => (
                            <li key={genre.id} className="l-tag bg-slate-500 dark:bg-white/15 text-white dark:text-slate-50">{genre.name}</li>
                        ))}
                    </ul>
                )}
                <div className="flex items-center my-4">
                    <h3>
                        <span className="material-symbols-outlined has-fill text-yellow-600 text-lg">
                            grade
                        </span>
                    </h3>
                    <p className="ml-2 dark:text-white">{rating}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <p className="dark:text-white">{vote_count} Reviews</p>
                </div>
                <ul className="flex flex-col gap-2 md:w-96">
                    <li className="flex items-center">
                        <h3 className="dark:text-white flex-1">Duration :</h3>
                        <p className="dark:text-white flex-1">{duration}</p>
                    </li>
                    <li className="flex items-center">
                        <h3 className="dark:text-white flex-1">Budget :</h3>
                        <p className="dark:text-white flex-1">${budgetInDollars}</p>
                    </li>
                    <li className="flex items-center">
                        <h3 className="dark:text-white flex-1">Revenue :</h3>
                        <p className="dark:text-white flex-1">${revenueInDollars}</p>
                    </li>
                    <li className="flex items-center">
                        <h3 className="dark:text-white flex-1">Release Date :</h3>
                        <p className="dark:text-white flex-1">{release_date}</p>
                    </li>
                    <li className="flex items-center">
                        <h3 className="dark:text-white flex-1">IMDb Id :</h3>
                        <a
                            href={`https://www.imdb.com/title/${imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:text-white flex-1"
                        >
                            {imdb_id}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
