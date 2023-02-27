import './vehicle_component.css';


function vehicleComponent(props){

    // const descriptions = [
    //     { name: 'SEDANS',
    //       sedanDesc: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
          
    //       button: <button></button>
    //     },
  
    //     { name: 'SUVS',
    //       suvsDesc: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
          
    //       button: <button></button>
    //     },
  
    //     { name: 'LUXURY',
    //       luxuryDesc: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
          
    //       button: <button></button>
    //     }
    // ];

    return(
        <div>
            <div className="sedanRectangle">
                <img src={props.img} alt=""/>
                <h1>{props.name}</h1>
                <button className="sedanBtn">Learn More</button>
            </div>

            <div className="suvRectangle">
                <img src="react-3column-card\src\assets\icon-suvs.svg" alt=""/>
                <h1>{props.name}</h1>
                <button className="suvBtn">Learn More</button>
            </div>

            <div className="luxuryRectangle">
                <img src="react-3column-card\src\assets\icon-luxury.svg" alt=""/>
                <h1>{props.name}</h1>
                <button className="luxuryBtn">Learn More</button>
            </div>

        </div>
    );
}

export default vehicleComponent