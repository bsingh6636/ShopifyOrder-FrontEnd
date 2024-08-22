import React from "react";
import { Link } from "react-router-dom";



export const Header = () => {


  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex flex-wrap justify-between items-center py-2 h-24 md:h-32 px-4 md:px-10 shadow-lg border-b border-gray-300 mb-1">
      <img className="h-12 w-auto md:h-24 rounded-xl" id="logo" src="https://res.cloudinary.com/bsingh6636/image/upload/v1724301824/projects/others/dataVisualization.png" alt="Logo" />

      <ul className="flex items-center space-x-2 md:space-x-4">
        <li>
          <Link to="/" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">My GitHub Profile</Link>
        </li>
        {/* <li>
          <Link to="/contact" className="text-sm md:text-lg font-semibold text-white hover:text-indigo-200 transition duration-200">Contact Us</Link>
        </li> */}
        
      </ul>
    </div>
  );
};

export default Header ;