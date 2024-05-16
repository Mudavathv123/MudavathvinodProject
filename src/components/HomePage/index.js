import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class HomePage extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }

    return (
      <div className="Home-page-conatiner">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="home-page-log"
          />
          <button
            className="logout-btn"
            type="btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="home-page">
          <h1 className="home-page-head">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="home-page-img"
          />
        </div>
      </div>
    )
  }
}

export default HomePage
