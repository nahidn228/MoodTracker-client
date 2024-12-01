import { FaHome, FaInfoCircle, FaPenFancy, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-base-content"
          }
        >
          <FaHome className="inline mr-1" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/log-mood"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-base-content"
          }
        >
          <FaPenFancy className="inline mr-1" />
          Log Mood
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-base-content"
          }
        >
          <FaInfoCircle className="inline mr-1" />
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-base-content"
          }
        >
          <FaUser className="inline mr-1" />
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-md">
      {/* Brand Name */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MoodTracker</a>
      </div>

      {/* Navbar Links */}
      <div className="flex-none">
        {/* Dropdown Menu for Mobile */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Horizontal Menu for Desktop */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navLinks}</ul>
      </div>
    </div>
  );
};

export default NavBar;
