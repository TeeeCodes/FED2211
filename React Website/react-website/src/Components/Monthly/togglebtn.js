import React, { Component } from "react"
import './togglebtn.css'

class ToggleButton extends Component {
  render() {
    return (
      <div className='toggleSwitch'>
        <input
          type="checkbox"
          className="toggleBox"
          name={this.props.Name}
          id={this.props.Name}
        />
        <label className="toggleLabel" htmlFor={this.props.Name}>
          <span className="toggleInner"/>Test
          <span className="toggleOuter"/>
        </label>
        
      </div>
    )
  }
}

  export default ToggleButton