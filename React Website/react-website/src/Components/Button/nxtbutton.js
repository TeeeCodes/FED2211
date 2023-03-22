import './nxtbutton.css'
import {useNavigate} from 'react-router-dom';

function NextButton(props) {
    const navigate = useNavigate();

    return (
        <div className="nextBtn">
            <button
                type="button"
                onClick={() => {
                    navigate('/Planning')
                }}>
                Test
            </button>
        </div>
    )
}

export default NextButton;