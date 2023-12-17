import React from 'react';

const articles = [
  // Example data. Replace this with actual data.
  { id: 1, title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...', image: '1.jpg' },
  { id: 2, title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...', image: '2.jpg' },
  // More articles...
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-bold text-2xl hover:text-gray-300 transition duration-300">Flavors of Vietnam</a>
          <div className="space-x-4">
            <a href="/about" className="hover:text-gray-300 transition duration-300">About</a>
            <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">Explore the Essence of Vietnamese Cuisine</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
              <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-5">{article.excerpt}</p>
                <a href={`/articles/${article.id}`} className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Flavors of Vietnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
