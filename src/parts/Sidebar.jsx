import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// import Cookies from "js-cookie";
import users from "constants/api/users";

export default function Sidebar() {
  const navigate = useNavigate();
  const match = useLocation();

  console.log(match);

  const [toggleMenu, setToggleMenu] = useState(false);

  function getNavLinkClass(path) {
    return match.pathname === path
      ? "active text-white bg-secondary"
      : "text-indigo-500  ";
  }

  function signOut () {
    users.logout().then(() => {
      localStorage.removeItem("BTSBIMBEL:token");
      navigate("/login");
    })
  };

  const sidebarStyle = {
    width: 280,
    left: window.innerWidth < 640 && !toggleMenu ? "-280px" : 0,
  };

  return (
    <>
    <div className="flex sm:hidden">
      <button
        onClick={() => setToggleMenu((prev) => !prev)}
        className={["toggle z-50", toggleMenu ? "active" : ""].join(" ")}
      ></button>
    </div>
    <aside
      className="fixed z-50 h-screen max-h-screen min-h-full overflow-y-auto transition-all duration-300 bg-primary sm:relative"
      style={sidebarStyle}
    >
      {toggleMenu && (
        <div
          className="overlay"
          onClick={() => setToggleMenu((prev) => !prev)}
        ></div>
      )}
      <div
        className="fixed z-50 flex flex-col content-between h-screen max-h-screen bg-primary"
        style={{ width: 280 }}
      >

        <ul className="mt-12 main-menu">
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:bg-secondary active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/"),
              ].join(" ")}
              to="/"
            >
              Dashboard
            </Link>
          </li>
          <li>
          <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/courses"),
              ].join(" ")}
              to="/courses"
            >
             All Courses
            </Link>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/transactions"),
              ].join(" ")}
              to="/transactions"
            >
             All Transactions
            </Link>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/settings"),
              ].join(" ")}
              to="/"
            >
              Settings
            </Link>
          </li>
        </ul>

        <div className="my-auto"></div>

        <ul className="mt-12 main-menu">
          <li>
            <button
              className={[
                "nav-link relative text-indigo-500 flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
              ].join(" ")}
              onClick={signOut}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  </>
  )
}
