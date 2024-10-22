// Homepage.jsx
import React from 'react';

const articles = [
    { id: 1, title: "Career Paths in Tech", description: "Explore different roles in the tech industry...", image: "career1.jpg" },
    { id: 2, title: "How to Write a Resume", description: "Key tips for crafting a standout resume...", image: "career2.jpg" },
    { id: 3, title: "Ace Your Interview", description: "Learn how to prepare for job interviews...", image: "career3.jpg" },
];

const Homepage = () => (
    <div>
        <h1>Career Guidance Blog</h1>
        <div className="articles">
            {articles.map(article => (
                <div key={article.id} className="article">
                    <img src={article.image} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    </div>
);

export default Homepage;
