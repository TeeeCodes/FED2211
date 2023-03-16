
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'

import NavBar from './Components/NavBar/nav';
import NextButton from './Components/Button/nxtbutton';
import PlanBoxes from './Components/Plan_Components/plan';
import PersonalInfo from './Components/Personal_Info/Info';
import ToggleButton from './Components/Monthly/togglebtn';
import AddOns from './Components/AddOn_Components/addOn';


function App() {
  return(
    <Routes>
      <Route path='/' element={<PersonalInfo />}/>
      <Route path='/' element={<PlanBoxes />}/>
      <Route path='/' element={<AddOns />}/>
    </Routes>
  )
}



export default App;
