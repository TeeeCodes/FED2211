import './App.css';

function App() {

  return (
    <div className="App">
      <vehicleComponent 
        img="../../assets/icon-sedans.svg"
        name="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy. 
        Ideal for cruising in the city or on your next road trip."
      />
      <vehicleComponent 
        img="../../assets/icon-suvs.svg"
        name="SUVS"
        description="Take an SUV for its spacious interior, power, and versatility. 
        Perfect for your next family vacation and off-road adventures."
       />
      <vehicleComponent 
        img="../../assets/icon-luxury.svg"
        name="Luxury"
        description="Cruise in the best car brands without the bloated prices. 
        Enjoy the enhanced comfort of a luxury rental and arrive in style"
      />
    </div>
  );
}

export default App;
