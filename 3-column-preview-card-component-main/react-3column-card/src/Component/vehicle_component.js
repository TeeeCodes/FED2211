import './vehicle_component.css';

function vehicleComponent(){

    const sedanDesc = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'

    const suvsDesc = 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
  
    const luxuryDesc = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
 

    return(
        <div>
            <div className="sedanRectangle">
                {sedanDesc}
                <button className="sedanBtn"></button>
            </div>

            <div className="suvRectangle">
                {suvsDesc}
                <button className="suvBtn"></button>
            </div>

            <div className="luxuryRectangle">
                {luxuryDesc}
                <button className="luxuryBtn"></button>
            </div>

        </div>
    );
}

export default vehicleComponent