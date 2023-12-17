import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const articles = [
  // Same articles array as before
  { id: 1, title: 'Vietnamese Pho', excerpt: 'Discover the richness of Pho...', image: '1.jpg' },
  { id: 2, title: 'Banh Mi', excerpt: 'The classic Vietnamese sandwich...', image: '2.jpg' },
];

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <img src={`${process.env.PUBLIC_URL}/img/${article.image}`} alt={article.title} className="w-full h-auto mt-4" />
      <p className="mt-4">{article.excerpt}</p>
      {/* Add more article details as needed */}
    </div>
  );
};

export default ArticlePage;
