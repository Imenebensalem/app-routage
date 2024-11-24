import React from "react";

import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Article num 1" },
  { id: 2, title: "Article num 2" },
  { id: 3, title: "Article num 3" },
  // Ajoute d'autres articles ici
];

export default function Articles() {
  return (
    <div>
      <h1>Liste des Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/Articles/${article.id}`}>{article.title}</Link>
        </div>
      ))}
      {/* façon 1 <Link to="/Articles/20">Article</Link>*/} <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}
//Article avec id : {numero}
