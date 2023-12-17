import React from 'react';
import articles from "./articles.json";
import { useParams } from 'react-router-dom';

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
