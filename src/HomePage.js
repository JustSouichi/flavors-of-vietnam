import React from 'react';

const articles = [
  // Example data. Replace this with your actual data.
  { id: 1, title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...', image: '1.jpg' },
  { id: 2, title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...', image: '2.jpg' },
  // More articles...
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-3">Explore Vietnamese Cuisine</h1>
        <p className="mb-6">Delve into the flavors and culture of Vietnam's culinary delights.</p>
        <a href="#articles" className="bg-white text-blue-600 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">Discover More</a>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12" id="articles">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
              <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p className="text-gray-600">{article.excerpt}</p>
                <a href={`/articles/${article.id}`} className="text-blue-500 hover:text-blue-600 transition duration-300 mt-4 inline-block">Read More</a>
              </div>
            </div>
          ))}
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

export default HomePage;
