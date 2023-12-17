import React from 'react';



const articles = [
  // Questi dati sono solo per l'esempio. Dovresti caricarli da un file JSON.
  { id: 1, path: '1.jpg', title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...' },
  { id: 2, path: './2.jpg', title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...' },
  // Aggiungi altri articoli qui...
];




const HomePage = () => {

  return (
    <div className="container mx-auto px-4">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">Flavors of Vietnam</h1>
        <p className="text-gray-600">Explore the rich and diverse cuisine of Vietnam</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={`${process.env.PUBLIC_URL}/img/${article.id}.jpg`} alt={article.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="font-bold text-2xl mb-2 text-gray-800">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
              {/* Aggiungi qui un link o un bottone per leggere l'articolo completo */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
