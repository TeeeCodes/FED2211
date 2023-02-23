import './nxtbutton.css'
import { useState } from 'react';


function NextButton(props){
  const [count, setComponent] = useState(0);

  const handleOnClick = () => {
    setComponent(count + 1)
  };

return (
    <div className="nextBtn">      
           <button type="button" onClick={handleOnClick}>
            Test
            </button>
    </div> 
    )
}

export default NextButton;