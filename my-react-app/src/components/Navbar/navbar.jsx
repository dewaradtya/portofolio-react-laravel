import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarClasses = visible ? "bg-gray-800 p-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 z-10 shadow-lg rounded-full mt-2 transition duration-300" : "bg-gray-800 p-4 fixed -top-full left-1/2 transform -translate-x-1/2 w-1/2 z-10 shadow-lg rounded-full mt-2 transition duration-300";
  const mobileNavbarClasses = "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 md:w-2/3 lg:w-1/2 bg-gray-800 p-4 z-10 shadow-lg rounded-full";

  return (
    <>
      <nav className={`${navbarClasses} hidden sm:block bg-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-1xl font-bold ml-4">
            Portofolio
          </Link>
          <div className="text-sm">
            <Link to="/home" className="font-semibold hover:text-gray-500 px-3">
              Home
            </Link>
            <Link to="/project" className="font-semibold hover:text-gray-500 px-3">
              Project
            </Link>
            <Link to="/contact" className="font-semibold hover:text-gray-500 px-3">
              Contact
            </Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <nav className={`${mobileNavbarClasses} block sm:hidden my-2`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-1xl font-bold ml-4">
            Portofolio
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-3/4 md:w-2/3 lg:w-1/2 bg-gray-800 text-white shadow-lg rounded-3xl mb-2">
            <div className="container mx-auto flex flex-col items-start p-4">
              <Link to="/" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/project" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>
                Project
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;