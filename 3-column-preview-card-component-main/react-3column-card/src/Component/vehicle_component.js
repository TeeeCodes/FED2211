import './vehicle_component.css';

function VehicleComponent(props){

    return(
        <div className="mainContainer">
            <div className="sedanRectangle">
                <img  className="Logo" src={props.img} alt=""/>
                <h1 className='sedanH1'>{props.sedan}</h1>
                <p className='sedanP'>{props.sedanDesc}</p>
                <button className="sedanBtn">Learn More</button>
            </div>

            <div className="suvRectangle">
                <img src="react-3column-card\src\assets\icon-suvs.svg" alt=""/>
                <h1 className='suvH1'>{props.suv}</h1>
                <p className='suvP'>{props.suvDesc}</p>
                <button className="suvBtn">Learn More</button>
            </div>

            <div className="luxuryRectangle">
                <img src="react-3column-card\src\assets\icon-luxury.svg" alt=""/>
                <h1 className='luxuryH1'>{props.luxury}</h1>
                <p className='luxuryP'>{props.luxuryDesc}</p>
                <button className="luxuryBtn">Learn More</button>
            </div>

        </div>
    );
}

export default VehicleComponent