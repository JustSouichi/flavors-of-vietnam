import React from 'react';

const articles = [
  // Example data. Replace this with your actual data loading logic.
  { id: 1, title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...', image: '1.jpg' },
  { id: 2, title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...', image: '2.jpg' },
  // More articles...
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-bold text-xl">Flavors of Vietnam</a>
          <div>
            <a href="/about" className="px-4 hover:text-gray-300">About</a>
            <a href="/contact" className="px-4 hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">Explore Vietnamese Cuisine</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
              <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href={`/articles/${article.id}`} className="text-blue-500 hover:text-blue-600 transition duration-300">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Flavors of Vietnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
