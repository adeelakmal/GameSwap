import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto px-20 flex flex-col items-center justify-center">
        <div class="h-px bg-gray-200 w-full mb-10"></div>
        <form action="" className="w-1/2">
          <div className="flex flex-row items-center">
            <input
              type="text"
              className="inputbar mx-5 p-1 px-2"
              placeholder="Subscribe to our Newsletter"
            />
            <button
              type="button"
              className="rounded-full mx-1 py-1 px-4 bg-blue-600 text-white font-mono font-semibold text-base hover:transition-all hover:bg-blue-500 ease-in-out duration-300"
            >
              Subsribe
            </button>
          </div>
        </form>
        <div className="flex w-full justify-between my-10">
          <ul className="flex flex-col gap-x-3 font-mono text-gray-400 font-semibold">
            <h4 className="text-xl font-pixelify text-center font-bold text-white mb-2">
              Quick Links
            </h4>
            <li>
              <a
                href="#"
                className="hover-underline-animation hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover-underline-animation hover:text-white"
              >
                Comunity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover-underline-animation hover:text-white"
              >
                Listings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover-underline-animation hover:text-white"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover-underline-animation hover:text-white"
              >
                Register
              </a>
            </li>
          </ul>
          <div>
            <img src="" alt="Logo here" />
            <p className="text-white font-mono font-semibold text-base">
              Copyright © GameSwap. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="socialIcons flex flex-row items-center">
          <a href="#" className="mx-2">
            <IconContext.Provider
              value={{ color: "white", className: "cursor-pointer" }}
            >
              <FaXTwitter />
            </IconContext.Provider>
          </a>
          <a href="#" className="mx-2">
            <IconContext.Provider
              value={{ color: "white", className: "cursor-pointer" }}
            >
              <FaInstagram />
            </IconContext.Provider>
          </a>
          <a href="#" className="mx-2">
            <IconContext.Provider
              value={{ color: "white", className: "cursor-pointer" }}
            >
              <FaFacebookF />
            </IconContext.Provider>
          </a>
        </div>
      </footer>
    </>
  );
}
