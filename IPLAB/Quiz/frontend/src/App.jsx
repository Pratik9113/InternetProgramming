// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Fetch questions from the backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  // Handle answer selection
  const handleAnswer = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption,
    });
  };

  // Calculate the score when the quiz is submitted
  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div>
      <h1>Quick Quiz Challenge</h1>

      {score === null ? (
        <div>
          {questions.map((question) => (
            <div key={question.id} className="question">
              <h3>{question.text}</h3>
              {question.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    onChange={() => handleAnswer(question.id, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={() => setScore(null)}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
