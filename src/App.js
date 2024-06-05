import {Component} from 'react'
import Clock from './components/Clock'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {date : new Date(),buttonType:false}
    console.log('constructor called')
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({date: new Date()})
    },1000) 
    console.log('component did mount called')
  }

  componentWillUnmount() {
    console.log('component unmount called')
    clearInterval(this.timerId)
    
  }

  onClickToggleBtn = () => {
    this.setState(prveState => ({buttonType:!prveState.buttonType}))
  }


  render() {

    const {date,buttonType} = this.state

    const buttonContent = buttonType ? 'Hide Clock': 'Show Clock'
  
    return (
      <div className="App">
        <div className = "app-container">
          <button className = "show-clock-btn" type = "button" onClick = {this.onClickToggleBtn}>{buttonContent}</button>
          {buttonType && <Clock timer = {date.toLocaleTimeString()}/> }
        </div>
      </div>
    )
  }
}
export default App
