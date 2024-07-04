import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white p-12 rounded-lg shadow-lg max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-gray-900">Hello, I'm Dewa Raditya Rochman</h1>
            <p className="text-xl text-gray-700 mt-4">A passionate developer and designer</p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/project"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
