import './plan.css';
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import { useState } from 'react';

function PlanBoxes(props){

    const [arcadenumb, setArcade] = useState(9);
    const [advancednumb, setAdvncd] = useState(12);
    const [pronumb, setPro] = useState(15);

    const handleClick = () => {
        setArcade(90);
        setAdvncd(120);
        setPro(150);
    }
   
    return (


        <div className="planBox">
            <div className="arcadeBox">
                <img id='arcadeImg' src={arcadenumb} alt=""/>
                <h4 className="planH4">Arcade</h4>
                <p className="planP">${arcade}/mo</p>

                    <div className="advancedBox">
                        <img id='advancedImg' src={advanced} alt=""/>
                        <h4 className="planH4">Advanced</h4>
                        <p className="planP">${advancednumb}/mo</p> 

                            <div className="proBox">
                                <img id='proImg' src={pro} alt=""/>
                                <h4 className="planH4">Pro</h4>
                                <p className="planP">${pronumb}/mo</p> 
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default PlanBoxes;