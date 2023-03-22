import './addOn.css'
import {useState} from 'react'

function AddOns(props) {
    const [year, setYear] = useState();

    const checkedText = '/yr';
    const uncheckedText = '/mo';
    const togglePreference = props.togglePreference;
    const test = props.test;

    const handleChange = () => {

        setYear(!year);
        togglePreference(test);

    };

    return (
        <div>

            <input type="checkbox" id="OnlineService" onClick={handleChange}></input>
            <label for='OnlineService'>Online Service</label>
            {
                year
                    ? checkedText
                    : uncheckedText
            }

            <input type="checkbox" id="LargeStorage" onClick={handleChange}></input>
            <label for='LargeStorage'>Larger Storage</label>
            {
                year
                    ? checkedText
                    : uncheckedText
            }

            <input type="checkbox" id="CustomProfile" onClick={handleChange}></input>
            <label for='CustomProfile'>Customizable profile</label>
            {
                year
                    ? checkedText
                    : uncheckedText
            }

        </div>
    )
}

export default AddOns