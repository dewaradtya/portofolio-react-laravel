import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="">We are a team of passionate developers creating amazing web applications.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-gray-500">Home</a></li>
              <li className="mb-2"><a href="/project" className="hover:text-gray-500">Project</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gray-500">Contact</a></li>
              <li className="mb-2"><a href="/login" className="hover:text-gray-500">Login</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="">123 Developer Lane, Code City, CS 12345</p>
            <p className="">Email: info@example.com</p>
            <p className="">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center  mt-8">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;