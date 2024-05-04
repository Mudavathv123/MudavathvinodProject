import {IoMdHome, IoIosMailUnread} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="small-device-navbar">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo-img"
            />
          </Link>
          <ul className="nav-list-items">
            <li>
              <IoMdHome size="24" className="home-icon" />
            </li>
            <li>
              <IoIosMailUnread size="24" className="mail-icon" />
            </li>
            <li>
              <FiLogOut size="24" className="logout-icon" />
            </li>
          </ul>
        </div>
        <div className="large-device-navbar">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo-img"
            />
          </Link>
          <ul className="nav-list-items">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button className="logout-btn" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)
