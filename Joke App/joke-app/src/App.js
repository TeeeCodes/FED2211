import './App.css';
import RandomJoke from './Components/joke_component/Joke';
import SearchBar from './Components/SearchBar/Search';
import JokeImg from './Components/joke_Img/Joke_Img';

function App() {

  return (

    <div className="App">
      <RandomJoke/>
      <SearchBar/>
      <JokeImg/>
    </div>
  );
}

export default App;
