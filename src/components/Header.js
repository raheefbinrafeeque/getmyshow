import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { Nav } from "./";

export const Header = () => {
  const getInitialDarkMode = () => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode !== null ? JSON.parse(savedMode) : false;
    } catch (error) {
      console.warn("Could not access localStorage:", error);
      return false; // Default to false if localStorage access fails
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (error) {
      console.warn("Could not store darkMode in localStorage:", error);
    }

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    setIsActive(false);
    return navigate(`/search?q=${queryTerm}`);
  };

  const handleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className="gms header shadow shadow-slate-200 bg-slate-50 dark:bg-slate-900 py-4">
      <div className="container-lg">
        <div className="flex justify-between items-center flex-wrap">
          <div className="logo order-1">
            <Link to="/">
              <h1 className="sm:text-xl text-lg font-semibold tracking-wider dark:text-white">
                GET<span className="text-gray-400">MY</span>SHOW
              </h1>
            </Link>
          </div>

          <nav
            className={`lg:order-2 order-3 lg:w-auto w-full lg:block ${
              isActive ? "is-active" : "hidden"
            }`}
          >
            <ul className="flex items-center gap-8 flex-col lg:flex-row lg:m-0 mt-8 mb-4">
              <div className="md:hidden flex items-center relative">
                <span className="absolute material-symbols-outlined text-xl left-2.5 dark:text-white">
                  search
                </span>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="search"
                    id="search-navbar"
                    className="l-search"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </form>
              </div>
              <Nav setIsActive={setIsActive} />
            </ul>
          </nav>

          <div className="flex items-center gap-4 lg:order-3 order-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center border rounded-lg sm:h-9 h-8 sm:w-9 w-8 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <span
                className={`material-symbols-outlined sm:text-xl text-lg ${
                  darkMode && "text-white"
                }`}
              >
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button
              onClick={handleMenu}
              className="flex items-center justify-center border rounded-lg sm:h-9 h-8 sm:w-9 w-8 hover:bg-slate-100 dark:hover:bg-slate-700 md:hidden"
            >
              <span className="material-symbols-outlined sm:text-xl text-lg left-2.5 dark:text-white">
                search
              </span>
            </button>
            <div className="md:flex hidden items-center relative">
              <span className="absolute material-symbols-outlined text-xl left-2.5 dark:text-white">
                search
              </span>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="l-search"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <button
              onClick={handleMenu}
              className={`flex flex-col gap-[3px] items-center justify-center border rounded-lg sm:h-9 h-8 sm:w-9 w-8 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden ${
                isActive ? "is-active" : ""
              }`}
            >
              <span className="w-4 h-[2px] bg-black dark:bg-white rounded-full"></span>
              <span className="w-4 h-[2px] bg-black dark:bg-white rounded-full"></span>
              <span className="w-4 h-[2px] bg-black dark:bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
