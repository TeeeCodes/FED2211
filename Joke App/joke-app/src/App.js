import { useState, useEffect } from 'React'
import './App.css';

const URL = `https://icanhazdadjoke.com/api#authentication`

function App() {

  const [joke, setJoke] = useState

  useEffect(() => {
    const fetchJoke = async () => {
      const result = await fetch(URL)
    }
    fetchJoke();
  })

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
