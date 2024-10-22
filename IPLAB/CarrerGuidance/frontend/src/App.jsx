// app.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

const App = () => {
  const [articles, setArticles] = useState([]);

  // Fetch articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Career Guidance Blog</h1>

      {/* Display Articles */}
      <div className="articles">
        {articles.map(article => (
          <div key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default App;
