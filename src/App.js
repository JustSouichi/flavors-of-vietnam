import React from 'react';

const articles = [
  // Example data. Replace this with your actual data.
  { id: 1, title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...', image: '1.jpg' },
  { id: 2, title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...', image: '2.jpg' },
  // More articles...
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white text-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="/" className="text-xl font-semibold">Flavors of Vietnam</a>
          <div className="space-x-4">
            <a href="/about" className="hover:text-gray-500 transition duration-300">About</a>
            <a href="/contact" className="hover:text-gray-500 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Explore Vietnamese Cuisine</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
              <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 text-sm">{article.excerpt}</p>
                <a href={`/articles/${article.id}`} className="text-blue-500 hover:text-blue-600 transition duration-300 text-sm mt-2 inline-block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Flavors of Vietnam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
