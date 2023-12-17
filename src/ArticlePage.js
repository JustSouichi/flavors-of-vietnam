import React, { useState, useEffect } from 'react';
import articles from "./articles.json";
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === slug);

  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (article) {
      setPageTitle(article.title); // Set the page title
      document.title = article.title; // Change document title
    }
  }, [article]);

  if (!article) {
    return(
      <>
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
      </>
    );
      
  }

  return (
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

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">{article.title}</h1>
        <div className="flex justify-center">
          <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="rounded-lg shadow-xl max-h-80 w-auto" />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-semibold text-center mb-6">About This Recipe</h2>
          <p className="text-lg text-center text-gray-700 mb-4">{article.excerpt}</p>
          <p className="text-center mb-4 text-blue-500 font-semibold">Difficulty: {article.difficulty}</p>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Ingredients</h3>
          <ul className="grid grid-cols-2 gap-4 text-md">
            {article.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <span className="inline-block w-6 h-6 bg-blue-200 rounded-full mr-3"></span> {/* Placeholder for ingredient icon */}
                {ingredient}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Preparation Steps</h3>
          <ol className="list-decimal list-inside space-y-4">
            {article.steps.map((step, index) => (
              <li key={index} className="text-md">{step}</li>
            ))}
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Flavors of Vietnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
