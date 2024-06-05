import Cookies from 'js-cookie'
import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import SearchCaptionContext from '../../context/SearchCaptionContext'
import './index.css'

class Header extends Component {
  state = {showMenu: false, showMaxSearch: false}

  clickToOpenMenu = () => {
    this.setState({showMenu: true})
  }

  clickToCloseMenu = () => {
    this.setState({showMenu: false})
  }

  onClickSearchButton = () => {
    const {searchCaption} = this.props
    searchCaption()
  }

  onChangeSearchCaption = event => {
    const {changeSeacrhCaptionValue} = this.props
    changeSeacrhCaptionValue(event.target.value)
  }

  render() {
    const {showMenu, showMaxSearch} = this.state
    const {searchInput} = this.props
    return (
      <SearchCaptionContext.Consumer>
        {value => {
          const {renderToHome, activeTab, changeActiveTab} = value

          const clickToLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
            changeActiveTab('Home')
          }

          const clickToRender = () => {
            renderToHome()
          }

          const onClickToHome = () => {
            changeActiveTab('Home')
          }

          const onClickToProfile = () => {
            changeActiveTab('Profile')
          }

          const onClickToSearch = () => {
            changeActiveTab('Search')
            this.setState({showMaxSearch: true, showMenu: false})
          }

          const activeTabHomeColor =
            activeTab === 'Home' ? 'active-tab-name' : 'link-name'

          const activeTabProfileColor =
            activeTab === 'Profile' ? 'active-tab-name' : 'link-name'

          const activeTabSearchColor =
            activeTab === 'Search' ? 'active-tab-name' : 'link-name'

          return (
            <>
              <div className="header-container">
                <div className="header-logo-container">
                  <Link to="/" onClick={clickToRender}>
                    <img
                      src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717234247/MyMiniProjectsImages/vzpewib6xu0gzldqpy75.png"
                      alt="website logo"
                      className="header-logo"
                    />
                  </Link>
                  <h1 className="header-app-name">Insta Share</h1>
                </div>
                <button
                  type="button"
                  className="menu-button"
                  onClick={this.clickToOpenMenu}
                >
                  <img
                    src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717240259/MyMiniProjectsImages/js8e70oxaogfedserswd.png"
                    alt="menu icon"
                    className="menu-icom-img"
                  />
                </button>

                <nav className="navbar">
                  <div className="search-input-container">
                    <input
                      type="search"
                      placeholder="Search Caption"
                      className="search-input"
                      onChange={this.onChangeSearchCaption}
                      value={searchInput}
                    />
                    <button
                      data-testid="searchIcon"
                      type="button"
                      className="search-btn"
                      aria-label="search"
                      onClick={this.onClickSearchButton}
                    >
                      <FaSearch size="10" />
                    </button>
                  </div>
                  <ul className="nav-links-container">
                    <Link to="/" className="link-style" onClick={clickToRender}>
                      <li
                        className={activeTabHomeColor}
                        onClick={onClickToHome}
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="/my-profile" className="link-style">
                      <li
                        className={activeTabProfileColor}
                        onClick={onClickToProfile}
                      >
                        Profile
                      </li>
                    </Link>
                  </ul>
                  <button
                    className="logout-btn"
                    type="button"
                    onClick={clickToLogout}
                  >
                    Logout
                  </button>
                </nav>
              </div>
              {showMenu && (
                <ul className="max-divice-navbar">
                  <Link to="/" className="link-style" onClick={clickToRender}>
                    <li className={activeTabHomeColor} onClick={onClickToHome}>
                      Home
                    </li>
                  </Link>
                  <li
                    className={activeTabSearchColor}
                    onClick={onClickToSearch}
                  >
                    Search
                  </li>
                  <Link to="/my-profile" className="link-style">
                    <li
                      className={activeTabProfileColor}
                      onClick={onClickToProfile}
                    >
                      Profile
                    </li>
                  </Link>
                  <button
                    className="logout-btn"
                    type="button"
                    onClick={clickToLogout}
                  >
                    Logout
                  </button>
                  <button
                    className="close-btn"
                    type="button"
                    onClick={this.clickToCloseMenu}
                  >
                    <img
                      src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717338043/MyMiniProjectsImages/cp9ltjgvdvphtq8l5xss.png"
                      alt="close img"
                      className="close-img"
                    />
                  </button>
                </ul>
              )}
              {showMaxSearch && (
                <div className="search-input-container">
                  <input
                    type="search"
                    placeholder="Search Caption"
                    className="search-input"
                    onChange={this.onChangeSearchCaption}
                    value={searchInput}
                  />
                  <button
                    type="button"
                    className="search-btn"
                    aria-label="search"
                    data-testid="searchIcon"
                    onClick={this.onClickSearchButton}
                  >
                    <FaSearch size="10" />
                  </button>
                </div>
              )}
            </>
          )
        }}
      </SearchCaptionContext.Consumer>
    )
  }
}

export default withRouter(Header)
