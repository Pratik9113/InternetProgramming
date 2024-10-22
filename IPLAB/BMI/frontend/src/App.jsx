// App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [healthCategory, setHealthCategory] = useState('');

  const calculateBMI = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
        weight: parseFloat(weight),
        height: parseFloat(height),
      });
      setBmiResult(response.data.bmi);
      setHealthCategory(response.data.category);
    } catch (error) {
      console.error('Error calculating BMI:', error);
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Height (m):</label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {bmiResult && (
        <div>
          <h2>Your BMI: {bmiResult.toFixed(2)}</h2>
          <h3>Health Category: {healthCategory}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
