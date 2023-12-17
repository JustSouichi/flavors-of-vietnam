import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

function NoFound(){
    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        {/* Navigation */}
        <Navbar />
          <div className="text-center py-8">
            <p className="text-xl">
              Article not found
            </p>
          </div>;
        <Footer />
      </div>
    );
}

export default NoFound;