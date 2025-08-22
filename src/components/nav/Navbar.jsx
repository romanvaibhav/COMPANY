import cubelogo from "../../assets/Three_Interlocking_Cubes copy.png";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-x-2 text-xl font-bold">
            <img src={cubelogo} className="h-16 w-16" alt="Company Logo" />
            <h1 className="text-lg sm:text-xl">Web Blocks</h1>
          </div>

          <div className="hidden md:flex space-x-6 font-bold">
            <Link to="/" className="text-gray-800  hover:text-blue-600">
              Home
            </Link>
            <Link to="/service" className="text-gray-800  hover:text-blue-600">
              Service
            </Link>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Works
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Our Story
            </a>
          </div>
          <button className=" border hidden md:flex bg-blue-600 text-white px-4 py-1 rounded-2xl hover:bg-blue-700 transition">
            Contact Us
          </button>
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>
          {/* <button className="md:hidden text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button> */}
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="fixed top-0 right-0 h-full w-38 bg-white shadow-lg p-6 space-y-4 md:hidden z-50">
            <button
              className="self-end text-2xl text-gray-700"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Service
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Works
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Our Story
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Navbar;
