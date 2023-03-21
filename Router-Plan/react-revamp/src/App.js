import './App.css';
import {useNavigate} from 'react-router-dom'

import NavBar from './components/NavBar/nav';

function App() {
  const navigate = useNavigate

  return (

    <div>
      <NavBar/>
      <button onClick={()=>navigate(1)}>Go Forward</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default App;
