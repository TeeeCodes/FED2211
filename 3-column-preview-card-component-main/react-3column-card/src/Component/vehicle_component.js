import './vehicle_component.css';
import sedan from "../assets/icon-sedans.svg"
import suvs from "../assets/icon-suvs.svg"
import luxury from "../assets/icon-luxury.svg"

function VehicleComponent(props){

    return(
        <div className="mainContainer">
            <div className="sedanRectangle">
                <img  className="sedanLogo" src={sedan} alt=""/>
                <h1 className='sedanH1'>{props.sedan}</h1>
                <p className='sedanP'>{props.sedanDesc}</p>
                <button className="sedanBtn">Learn More</button>
            </div>

            <div className="suvRectangle">
                <img  className="suvLogo" src={suvs} alt=""/>
                <h1 className='suvH1'>{props.suv}</h1>
                <p className='suvP'>{props.suvDesc}</p>
                <button className="suvBtn">Learn More</button>
            </div>

            <div className="luxuryRectangle">
                <img  className="luxuryLogo" src={luxury} alt=""/>
                <h1 className='luxuryH1'>{props.luxury}</h1>
                <p className='luxuryP'>{props.luxuryDesc}</p>
                <button className="luxuryBtn">Learn More</button>
            </div>

        </div>
    );
}

export default VehicleComponent