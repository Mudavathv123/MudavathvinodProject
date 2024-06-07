import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { useNavigate,Navigate } from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg : false,
    errorMsg:''
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSucess = jwtToken => {
    console.log(jwtToken)
    const {navigate} = this.props 
    navigate("/",{replace:true})
    Cookies.set("jwt_token",jwtToken,{expires:30})
  }

  onFailure  = errorMsg => {
        console.log(errorMsg)
        this.setState({showErrorMsg:true,errorMsg})
  }

  getAuthentication = async () => {
    const {username,password} = this.state
    const userCredientials = {username,password}
    const loginApiUrl = "https://apis.ccbp.in/login"
    const option = {
        method:'POST',
        body:JSON.stringify(userCredientials)
    }

    const response = await fetch(loginApiUrl,option)
    const data = await response.json()
    if(response.ok) {
        this.onSucess(data.jwt_token)
    }else {
        this.onFailure(data.error_msg)
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.getAuthentication()
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showErrorMsg,errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken !== undefined) {
        return <Navigate to = "/" />
    }

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          {showErrorMsg && <p className = "error-message">*{errorMsg}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

function withRouter(Component) {
    return (props) => {
        const navigate = useNavigate()
        return <Component {...props} navigate = {navigate} />
    }
}

export default withRouter(LoginForm)
