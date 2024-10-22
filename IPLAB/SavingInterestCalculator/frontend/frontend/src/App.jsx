import { useState } from 'react';
import axios from "axios";
function App() {
  const [principal, setPrincipal] = useState('');
  const [age, setAge] = useState('');
  const [period, setPeriod] = useState('');
  const [interest, setInterest] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (principal === '' || age === '') {
      alert("Pls enter all the field ")
    }

    try {
      const response = await axios.post(`http://localhost:4000/post`, {
        principal: parseFloat(principal),
        age: parseInt(age),
        period: parseInt(period)
      }
      );
      setInterest(response.data.data);
    } catch (error) {
      console.log(`ERROR `, error);
    }
  }

  return (
    <>
      <div>
        <h1>Savings Interest Calculator </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Principal Amount :
            <input type='number' value={principal} onChange={(e) => setPrincipal(e.target.value)}
              required />
          </label>

          <br />

          <label>
            Age :
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
              required />
          </label>

          <br />

          <label>
            Investment Period (years):
            <input type="number" value={period} onChange={(e) => setPeriod(e.target.value)} required />
          </label>

          <br />

          <button type="submit">Calculate Interest </button>

        </form>

        {interest !== null && (
          <div>
            <h2>Interest Earned :  ${interest}</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default App
