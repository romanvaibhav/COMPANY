import cubelogo from "../../assets/Three_Interlocking_Cubes.png";
import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-0 py-0 flex items-center justify-evenly">
          <div className="flex -ml-96 flex-row justify-center text-xl font-bold">
            <img src={cubelogo} className="h-20 w-20"></img>
            <h1 className="mt-7 -ml-4">Web Blocks</h1>
          </div>
          <div className="hidden md:flex space-x-6 font-bold">
            <Link to="/" className="text-gray-800  hover:text-blue-600">
              Home
            </Link>
            <Link className="text-gray-800  hover:text-blue-600">
              Our Service
            </Link>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Works
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Our Story
            </a>
          </div>
          <button className="-mr-96 border bg-blue-600 text-white px-4 py-1 rounded-2xl hover:bg-blue-700 transition">
            Contact Us
          </button>

          <button className="md:hidden text-gray-700 focus:outline-none">
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
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Our Service
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Works
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Our Story
            </a>
          </div>
        )}
        <Outlet />
      </nav>
    </div>
  );
}
export default Navbar;
