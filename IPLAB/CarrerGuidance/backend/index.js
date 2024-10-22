import express from 'express';
import cors from 'cors'; // Import cors

const app = express();
app.use(express.json());
app.use(cors()); // Apply CORS to allow requests from any origin

const articles = [
  { id: 1, title: "Career Paths in Tech", description: "Explore different roles in the tech industry...", content: "Full article content here..." },
  { id: 2, title: "How to Write a Resume", description: "Key tips for crafting a standout resume...", content: "Full article content here..." },
  { id: 3, title: "Ace Your Interview", description: "Learn how to prepare for job interviews...", content: "Full article content here..." },
];

// Get articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Post contact form data
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  // You can add functionality to save or email the message here.
  res.status(200).json({ success: "Inquiry received!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
