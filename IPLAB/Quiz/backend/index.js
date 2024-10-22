// server.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Quiz questions (for simplicity, hardcoded)
const quizQuestions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    text: 'What is the largest mammal?',
    options: ['Elephant', 'Whale', 'Shark', 'Giraffe'],
    correctAnswer: 'Whale',
  },
  {
    id: 4,
    text: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Dickens', 'Tolkien', 'Hemingway'],
    correctAnswer: 'Shakespeare',
  },
  {
    id: 5,
    text: 'What is the square root of 64?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
  },
];

// API to fetch quiz questions
app.get('/api/questions', (req, res) => {
  res.json(quizQuestions);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
