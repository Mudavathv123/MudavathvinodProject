// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: '', errorCode: false}

  componentWillUnmount() {
    this.setState({username: '', password: '', error: ''})
  }

  onSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = data => {
    this.setState({error: data.error_msg, errorCode: true})
  }

  onSubmitVerifyCreditils = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCreditials = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userCreditials),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      this.onSubmitFailure(data)
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }
  render() {
    const {username, password, error, errorCode} = this.state

    const errorMsg = errorCode ? <p className="error">{error}</p> : null
    return (
      <div className="login-form-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="loginpage-image"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <form className="form" onSubmit={this.onSubmitVerifyCreditils}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-logo"
          />
          <div className="username-container">
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              className="username-text"
              type="text"
              placeholder="UserName"
              id="username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              className="username-text"
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <button className="submit-btn" type="submit">
            Login
          </button>
          {errorMsg}
        </form>
      </div>
    )
  }
}

export default LoginForm
