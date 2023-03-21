import './addOn.css'

function AddOns(){
    
    return(
        <div>
            <input type="checkbox" id="OnlineService" onClick="addOns()"></input>
            <label for='OnlineService'>Online Service</label>

            <input type="checkbox" id="LargeStorage" onClick="addOns()"></input>
            <label for='LargeStorage'>Larger Storage</label>

            <input type="checkbox" id="CustomProfile" onClick="addOns()"></input>
            <label for='CustomProfile'>Customizable profile</label>

            <button>Test</button>
            
        </div>
    )
}

export default AddOns