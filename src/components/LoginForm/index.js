import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showErrorStatus: false,
    errorMsg: '',
    showUsernameError: false,
    showPasswordError: false,
  }

  onChnageUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onFailureView = errorMsg => {
    this.setState({errorMsg, showErrorStatus: true})
  }

  onSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onBlurPassword = event => {
    if (event.target.value === '') {
      this.setState({showPasswordError: true})
    } else {
      this.setState({showPasswordError: false})
    }
  }

  onBlurUsername = event => {
    if (event.target.value === '') {
      this.setState({showUsernameError: true})
    } else {
      this.setState({showUsernameError: false})
    }
  }

  onSubmitGetLoginInformation = async event => {
    const {usernameInput, passwordInput} = this.state
    event.preventDefault()
    const loginUrl = 'https://apis.ccbp.in/login'
    const userCredientials = {
      username: usernameInput,
      password: passwordInput,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userCredientials),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSuccessView(data.jwt_token)
    } else {
      this.onFailureView(data.error_msg)
    }
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showErrorStatus,
      errorMsg,
      showUsernameError,
      showPasswordError,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <form
          className="login-form"
          onSubmit={this.onSubmitGetLoginInformation}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-img"
          />
          <label className="label" htmlFor="usernameInput">
            USERNAME
          </label>
          <input
            type="text"
            className="username-text"
            id="usernameInput"
            placeholder="Username"
            value={usernameInput}
            onBlur={this.onBlurUsername}
            onChange={this.onChnageUsername}
          />
          {showUsernameError && <p className="error-msg">*Required</p>}
          <label className="label" htmlFor="passwordInput">
            PASSWORD
          </label>
          <input
            type="password"
            className="password-text"
            id="passwordInput"
            placeholder="Password"
            value={passwordInput}
            onBlur={this.onBlurPassword}
            onChange={this.onChangePassword}
          />
          {showPasswordError && <p className="error-msg">*Required</p>}
          <button className="sumbit-btn" type="submit">
            Login
          </button>
          {showErrorStatus && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
