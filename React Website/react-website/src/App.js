import './App.css';
import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'

import NavBar from './Components/NavBar/nav';
import NextButton from './Components/Button/nxtbutton';
import PlanBoxes from './Components/Plan_Components/plan';
import PersonalInfo from './Components/Personal_Info/Info';
import { Toggle } from './Components/Monthly/togglebtn';
import AddOns from './Components/AddOn_Components/addOn';

function App() {
  const navigate = useNavigate();

    return (
        
      <div>

      <Routes>
        <Route path='/' element={<div><NavBar/><PersonalInfo/><NextButton/></div>}/>
        <Route path='/Planning' element={<div><NavBar/><PlanBoxes/></div>}/>
        <Route path='/Add-Ons' element={<div><NavBar/><AddOns/><Toggle/></div>}/>
      </Routes>

      <button onClick={()=>navigate(1)}>Go Forward</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      </div>

      

    )
    
}

export default App;
