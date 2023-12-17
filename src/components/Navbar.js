import React from "react";
import fav_ico from "./img/favicon.ico";

export default function Navbar(){
    return(
        <nav className="bg-white text-gray-800 py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/favicon.ico" alt="Favicon" className="h-8 w-8 mr-2" /> {/* Favicon next to the title */}
            <a href="/" className="text-2xl font-semibold text-blue-600">Flavors of Vietnam</a>
          </div>
          <div className="space-x-4">
            <a href="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>
      
    );
}