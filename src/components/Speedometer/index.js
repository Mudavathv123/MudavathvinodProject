// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelarete = () => {
    this.setState(prevSpeed => {
      if (prevSpeed.speed < 200) return {speed: prevSpeed + 10}
      else return {speed: (prevSpeed = 0)}
    })
  }

  onApplyBreak = () => {
    this.setState(prevSpeed => {
      if (prevSpeed.speed > 0) {
        return {speed: prevSpeed - 10}
      } else {
        return {speed: (prevSpeed = 0)}
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="head">SPEEDOMETER</h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="Speedometer"
            />
          </div>
          <div className="container">
            <h1>speed is {speed}mph</h1>
            <p>Min Limit is Omph, Max Limit is 200mph</p>
            <div className="btn-container">
              <button className="btn1" onClick={this.onAccelarete}>
                Accelarate
              </button>
              <button className="btn2" onClick={this.onApplyBreak}>
                Apply Break
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
