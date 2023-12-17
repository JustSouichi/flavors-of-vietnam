import React from 'react';
import articles from "./articles.json";
import Navbar from './components/Navbar';
import NoFound from './NoFound';
import Footer from './Footer';

const HomePage = () => {

  const titleToSlug = (title) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

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
                <a href={`/articles/${titleToSlug(article.title)}`} className="text-blue-500 hover:text-blue-600 transition duration-300 mt-4 inline-block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
