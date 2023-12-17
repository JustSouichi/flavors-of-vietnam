import React from "react";

export default function Navbar(){
    return(
      <nav className="bg-white text-gray-800 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold text-blue-600">Flavors of Vietnam</a>
        <div className="space-x-4">
          <a href="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
    );
}