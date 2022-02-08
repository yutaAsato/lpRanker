import React from "react";
import { Link } from "remix";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              LP RANKER
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Learn</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base  font-bold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
