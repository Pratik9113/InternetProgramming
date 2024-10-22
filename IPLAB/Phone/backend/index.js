import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Simple in-memory array to store contacts
let contacts = [
  { name: "John Doe", phone: "123-456-7890" },
  { name: "Jane Smith", phone: "098-765-4321" },
];

// GET request to fetch contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// POST request to add a new contact
app.post('/api/contacts', (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone number are required." });
  }
  const newContact = { name, phone };
  contacts.push(newContact);
  res.json(newContact); // Respond with the newly added contact
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
