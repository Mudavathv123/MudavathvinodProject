import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import NotFoundPage from './components/NotFoundPage'
import RegisterContext from './context/RegisterContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    input: '',
    selectedTopic: 'Arts and Culture',
    showError: false,
    isRegister: false,
  }

  changeName = name => {
    this.setState({input: name})
  }

  changeSelectValue = topic => {
    console.log(topic)
    this.setState({selectedTopic: topic})
  }

  displayError = () => {
    this.setState({showError: true})
  }

  register = () => {
    this.setState({isRegister: true, showError: false})
  }

  render() {
    const {input, selectedTopic, showError, isRegister} = this.state
    return (
      <RegisterContext.Provider
        value={{
          input,
          selectedTopic,
          showError,
          isRegister,
          changeName: this.changeName,
          changeSelectValue: this.changeSelectValue,
          displayError: this.displayError,
          register: this.register,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App
