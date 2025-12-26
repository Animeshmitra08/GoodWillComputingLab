import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineErrorOutline } from "react-icons/md";

const NotFound: React.FC = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden"
      style={{
        backgroundImage: `url(./assets/bg2.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-white/5 rounded-full border border-white/10 animate-pulse">
            <MdOutlineErrorOutline size={80} className="text-indigo-400" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          404
        </h1>
        
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research Path Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            The page you are looking for might have been moved, deleted, or does not exist in our database.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/home"
            className="flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            <HiArrowLeft className="mr-2" />
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Report an Issue
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Credit */}
      <div className="absolute bottom-8 text-gray-500 text-sm">
        KC Research Group • Advancing Computing
      </div>
    </div>
  );
};

export default NotFound;