// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="small-device-navbar">
        <div className="home-page-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="home-logo"
          />
          <button type="button" className="logout-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="logout-btn-img"
            />
          </button>
        </div>
        <ul className="list-container">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="home-img"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="home-img"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="home-img"
            />
          </li>
        </ul>
      </div>
      <div className="large-divice-nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="home-logo"
        />
        <ul className="nav-list-container">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>
            <button type="button" className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
