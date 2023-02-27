import React from "react"
import './App.css'
import VehicleComponent from './Component/vehicle_component'

function App() {

 
  return (
   
    <div className="App">
      <VehicleComponent 
        img="\assets\icon-sedans.svg"
        sedan="Sedans"
        sedanDesc="Choose a sedan for its affordability and excellent fuel economy. 
        Ideal for cruising in the city or on your next road trip."

        suv="SUVS"
        suvDesc="Take an SUV for its spacious interior, power, and versatility. 
        Perfect for your next family vacation and off-road adventures."

        luxury="Luxury"
        luxuryDesc="Cruise in the best car brands without the bloated prices. 
        Enjoy the enhanced comfort of a luxury rental and arrive in style"
      />
     
    </div>
  );
}

export default App;
