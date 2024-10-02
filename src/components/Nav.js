import { NavLink } from "react-router-dom"

export const Nav = ({setIsActive}) => {
    return (
        <>
            <li className="text-center">
                <NavLink
                    to="/"
                    className="text-gray-500 hover:text-black dark:hover:text-white" onClick={() => setIsActive(false)}>
                    Home
                </NavLink>
            </li>
            <li className="text-center">
                <NavLink
                    to="/movies/popular"
                    className="text-gray-500 hover:text-black dark:hover:text-white" onClick={() => setIsActive(false)}>
                    Popular
                </NavLink>
            </li>
            <li className="text-center">
                <NavLink
                    to="/movies/top"
                    className="text-gray-500 hover:text-black dark:hover:text-white" onClick={() => setIsActive(false)}>
                    Top Rated
                </NavLink>
            </li>
            <li className="text-center">
                <NavLink
                    to="/movies/upcoming"
                    className="text-gray-500 hover:text-black dark:hover:text-white" onClick={() => setIsActive(false)}>
                    Upcoming
                </NavLink>
            </li>
        </>
    )
}
