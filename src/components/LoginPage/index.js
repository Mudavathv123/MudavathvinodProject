import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginPage extends Component {
  state = {showErrorMsg: false, errorMsg: '', username: '', password: ''}

  onSuccess = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({showErrorMsg: false})
  }

  getAuthentication = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({showErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.getAuthentication()
  }

  render() {
    const {showErrorMsg, errorMsg, username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <img
          src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717236276/MyMiniProjectsImages/rp0fzhbkzegsgjmj8as8.png"
          alt="website login"
          className="login-page-landing-image"
        />
        <div className="login-page">
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717234247/MyMiniProjectsImages/vzpewib6xu0gzldqpy75.png"
              alt="website logo"
              className="website-log"
            />
            <h1 className="app-name">Insta Share</h1>
          </div>
          <form className="form" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">USERNAME</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
