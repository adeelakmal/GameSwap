import React from "react";
import AnimatedText from "../components/AnimatedText";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-20 justify-items-center place-items-center">
        <div>
          <AnimatedText text="WELCOME BACK!" home={false} />
          <p className="font-mono font-bold text-white leading-6 w-2/3 mx-auto">
            Discover a world of endless gaming possibilities with GameSwap.
            Connect with fellow gamers, expand your gaming library, and embark
            on epic adventures without breaking the bank. Swap, lend, and share
            your favorite titles while forging friendships within our vibrant
            community. Join us today and level up your gaming experience!
          </p>
        </div>
        <div>
          <form
            action=""
            className="flex flex-col w-[25rem] p-20 bg-slate-800 rounded-md backdrop-filter backdrop-blur-md bg-opacity-50"
          >
            <h4 className="text-xl font-pixelify text-center font-bold text-white mb-3">
              LOGIN TO YOUR ACCOUNT
            </h4>

            <div className="login-input mb-3">
              <input
                type="email"
                name=""
                id="loginEmail"
                placeholder=" "
                className="p-2 px-3"
                required
              />
              <label className="font-mono font-semibold text-gray-400">
                Email
              </label>
            </div>

            <div className="login-input mb-3">
              <input
                type="password"
                name=""
                id="loginPass"
                placeholder=" "
                className="p-2 px-3"
                required
              />
              <label className="font-mono font-semibold text-gray-400">
                Password
              </label>
            </div>

            <a
              href="#"
              className="hover-underline-animation font-mono font-semibold text-sm text-gray-400 w-max hover:text-white mb-3 mx-auto"
            >
              Forgot your Password?
            </a>
            <button
              type="submit"
              className="rounded-full mx-auto mb-3 py-1 px-4 w-20 bg-blue-600 text-white font-mono font-semibold text-base hover:transition-all hover:bg-blue-500 ease-in-out duration-300"
            >
              Login
            </button>
            <span className="font-mono font-normal text-sm mb-2 mx-auto text-white">
              Have no account yet?{" "}
              <Link
                to="/signup"
                className="hover-underline-animation font-mono font-semibold text-sm text-gray-400 w-max hover:text-white "
              >
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
