import {Link, withRouter} from 'react-router-dom'
import {IoMenu, IoSunnyOutline} from 'react-icons/io5'
import {FaFire, FaGamepad, FaMoon} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoIosLogOut, IoMdHome} from 'react-icons/io'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  CustomButton,
  ButtonImg,
  LogoutButton,
  UnOderListForButtons,
  Nav,
  HeadeIconButton,
  LogoutAlert,
  LogoutAlertButtons,
  LogotContainer,
  LogoutPopupButton,
  HeaderSideber,
} from './styledComponents'

import {
  SidebarUnOderList,
  NavLink,
  SidebarListItems,
  P,
} from '../Sidebar/styledComponents'

import {Logo} from '../LoginPage/styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {chaneTheme, isDarkTheme, activeTab, changeTab} = value

      const headerSidebarColor = isDarkTheme ? '#212121' : ' #f9f9f9'
      const textColor = isDarkTheme ? ' #f9f9f9' : '#231f20'
      const activeBgColor = isDarkTheme ? ' #313131' : ' #cbd5e1'

      const onClickChangeTheme = () => {
        chaneTheme()
      }
      const themeIcon = isDarkTheme ? (
        <IoSunnyOutline size="24" aria-label="sunny" />
      ) : (
        <FaMoon size="22" aria-label="dark" />
      )

      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const logoutButtonColor = isDarkTheme ? '#ffffff' : '#4f46e5'
      const headerIconColor = isDarkTheme ? '#ffffff' : '#000000'
      const popupBgcolor = isDarkTheme ? '#212121' : '#ffffff'

      const onClickLogout = () => {}

      const onClickConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }
      const onClickGaming = () => {
        changeTab('Gaming')
      }
      const onClickSavedVideos = () => {
        changeTab('SavedVideos')
      }

      return (
        <Nav bgColor={bgColor}>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>
          <UnOderListForButtons className="list-items">
            <li>
              <CustomButton
                type="button"
                headerIconColor={headerIconColor}
                onClick={onClickChangeTheme}
                data-testid="theme"
              >
                {themeIcon}
              </CustomButton>
            </li>
            <li>
              <CustomButton type="button">
                <ButtonImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  trigger={
                    <HeadeIconButton type="button">
                      <IoMenu size="24" aria-label="menuIcon" />
                    </HeadeIconButton>
                  }
                  position="bottom right"
                  className="popup-content"
                >
                  <HeaderSideber headerSidebarColor={headerSidebarColor}>
                    <SidebarUnOderList>
                      <NavLink to="/">
                        <SidebarListItems
                          bgColor={
                            activeTab === 'Home' ? activeBgColor : 'none'
                          }
                          onClick={onClickHome}
                        >
                          <P
                            icon
                            color={activeTab === 'Home' ? '#ff0b37' : '#cccccc'}
                          >
                            <IoMdHome size="24" aria-label="home" />
                          </P>
                          <P textColor={textColor}>Home</P>
                        </SidebarListItems>
                      </NavLink>
                      <NavLink to="/trending">
                        <SidebarListItems
                          bgColor={
                            activeTab === 'Trending' ? activeBgColor : 'none'
                          }
                          onClick={onClickTrending}
                        >
                          <P
                            icon
                            color={
                              activeTab === 'Trending' ? '#ff0b37' : '#cccccc'
                            }
                          >
                            <FaFire size="24" aria-label="trending" />
                          </P>
                          <P textColor={textColor}>Trending</P>
                        </SidebarListItems>
                      </NavLink>
                      <NavLink to="/gaming">
                        <SidebarListItems
                          bgColor={
                            activeTab === 'Gaming' ? activeBgColor : 'none'
                          }
                          onClick={onClickGaming}
                        >
                          <P
                            icon
                            color={
                              activeTab === 'Gaming' ? '#ff0b37' : '#cccccc'
                            }
                          >
                            <FaGamepad size="24" aria-label="gaming" />
                          </P>
                          <P textColor={textColor}>Gaming</P>
                        </SidebarListItems>
                      </NavLink>
                      <NavLink to="/saved-videos">
                        <SidebarListItems
                          bgColor={
                            activeTab === 'SavedVideos' ? activeBgColor : 'none'
                          }
                          onClick={onClickSavedVideos}
                        >
                          <P
                            icon
                            color={
                              activeTab === 'SavedVideos'
                                ? '#ff0b37'
                                : '#cccccc'
                            }
                          >
                            <MdPlaylistAdd size="24" aria-label="savedVideos" />
                          </P>
                          <P textColor={textColor}>Saved videos</P>
                        </SidebarListItems>
                      </NavLink>
                    </SidebarUnOderList>
                  </HeaderSideber>
                </Popup>
              </CustomButton>
            </li>
            <li>
              <Popup
                modal
                trigger={
                  <div>
                    <LogoutButton
                      type="button"
                      logoutButtonColor={logoutButtonColor}
                      onClick={onClickLogout}
                    >
                      Logout
                    </LogoutButton>
                    <HeadeIconButton type="button">
                      <IoIosLogOut
                        size="24"
                        aria-label="logoutIcon"
                        onClick={onClickLogout}
                      />
                    </HeadeIconButton>
                  </div>
                }
                className="popup-content"
              >
                {close => (
                  <LogotContainer popupBgcolor={popupBgcolor}>
                    <LogoutAlert headerIconColor={headerIconColor}>
                      Are you sure, you want to logout
                    </LogoutAlert>
                    <LogoutAlertButtons>
                      <LogoutPopupButton onClick={() => close()}>
                        Cancel
                      </LogoutPopupButton>
                      <LogoutPopupButton onClick={onClickConfirm} confirm>
                        Confirm
                      </LogoutPopupButton>
                    </LogoutAlertButtons>
                  </LogotContainer>
                )}
              </Popup>
            </li>
          </UnOderListForButtons>
        </Nav>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default withRouter(Header)
