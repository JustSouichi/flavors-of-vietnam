import React from "react";

function NoFound(){
    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        {/* Navigation */}
        <nav className="bg-white text-gray-800 py-4 shadow">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-semibold text-blue-600">Flavors of Vietnam</a>
            <div className="space-x-4">
              <a href="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a>
            </div>
          </div>
        </nav>
        <div className="text-center py-8">
          <p className="text-xl">
            Article not found
          </p>
        </div>;
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Flavors of Vietnam. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
}

export default NoFound;