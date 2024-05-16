import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginPage extends Component {
  state = {userId: '', pin: '', showError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const logiApi = 'https://apis.ccbp.in/ebank/login'
    const userCreaditails = {
      user_id: userId,
      pin,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userCreaditails),
    }
    console.log(userCreaditails)

    const response = await fetch(logiApi, options)
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok) {
      this.onSuccess(data.jwt_token)
      this.setState({showError: false})
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {showError, errorMsg, userId, pin} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page-container">
        <div className="login-page">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-page-image"
          />
          <form className="form" onSubmit={this.onSubmitForm}>
            <h1 className="form-head">Welcome Back</h1>
            <div className="input-container">
              <label htmlFor="userid">User ID</label>
              <input
                id="userid"
                type="text"
                placeholder="Enter User ID"
                className="input"
                onChange={this.onChangeUserId}
                value={userId}
              />
            </div>
            <div className="input-container">
              <label htmlFor="pin">PIN</label>
              <input
                type="password"
                id="pin"
                placeholder="Enter PIN"
                className="input"
                onChange={this.onChangePin}
                value={pin}
              />
            </div>
            <button className="login-btn" type="submit">
              Login
            </button>
            {showError && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
