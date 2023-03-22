import './plan.css';
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import { useState } from 'react';

function PlanBoxes(props){

    const [arcadenumb, setArcade] = useState(9);
    const [advancednumb, setAdvncd] = useState(12);
    const [pronumb, setPro] = useState(15);

    return (

        <div className="planBox">
           
            <button onClick={()=>{
                setArcade(arcadenumb === 9 ? 90 : 9)
                setAdvncd(advancednumb === 12 ? 120 : 12)
                setPro(pronumb === 15 ? 150 : 15)
            }}>Test</button>
            
            <div className="arcadeBox">
                <img id='arcadeImg' src={arcade} alt=""/>
                <h4 className="planH4">Arcade</h4>
                <p className="planP">${arcadenumb}/mo</p>

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