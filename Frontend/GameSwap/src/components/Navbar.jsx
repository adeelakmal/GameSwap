import "../index.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <nav className="container mx-auto mb-10 mt-3 px-10 flex justify-between items-center">
        <img src="" alt="logo" />
        <div className="flex flex-row items-center w-1/3">
          <input
            type="search"
            name="searching"
            id="searchbar"
            className="inputbar mx-5 p-1 px-2"
          />
          <label htmlFor="searchbar">
            <IconContext.Provider
              value={{
                color: "white",
                className: "cursor-pointer",
                size: "1.5em",
              }}
            >
              <IoMdSearch />
            </IconContext.Provider>
          </label>
        </div>
        <div className="menu">
          <ul className="flex flex-row gap-x-3 font-mono text-white font-semibold">
            <li>
              <a className="hover-underline-animation" href="#">
                Listings
              </a>
            </li>
            <li>
              <a className="hover-underline-animation" href="#">
                Comunity
              </a>
            </li>
            <li className="flex items-center">
              <Link to="/login">
                <IconContext.Provider
                  value={{
                    color: "white",
                    className: "cursor-pointer",
                    size: "1.25em",
                  }}
                >
                  {!hover ? (
                    <FaRegUser
                      onMouseEnter={() => {
                        setHover(true);
                      }}
                    />
                  ) : (
                    <FaUser
                      onMouseLeave={() => {
                        setHover(false);
                      }}
                    />
                  )}
                </IconContext.Provider>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
