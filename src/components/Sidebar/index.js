import {IoMdHome} from 'react-icons/io'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  SidebarContainer,
  SidebarUnOderList,
  P,
  SidebarListItems,
  NavLink,
  ContactUsUnOrderList,
  ContactUsListItems,
  ContactUsImage,
  ContactUsHeading,
  ContactUsContainer,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const textColor = isDarkTheme ? ' #f9f9f9' : '#231f20'
      const activeBgColor = isDarkTheme ? ' #313131' : ' #cbd5e1'

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
        <SidebarContainer bgColor={bgColor}>
          <SidebarUnOderList>
            <NavLink to="/">
              <SidebarListItems
                bgColor={activeTab === 'Home' ? activeBgColor : 'none'}
                onClick={onClickHome}
              >
                <P icon color={activeTab === 'Home' ? '#ff0b37' : '#cccccc'}>
                  <IoMdHome size="24" aria-label="home" />
                </P>
                <P textColor={textColor}>Home</P>
              </SidebarListItems>
            </NavLink>
            <NavLink to="/trending">
              <SidebarListItems
                bgColor={activeTab === 'Trending' ? activeBgColor : 'none'}
                onClick={onClickTrending}
              >
                <P
                  icon
                  color={activeTab === 'Trending' ? '#ff0b37' : '#cccccc'}
                >
                  <FaFire size="24" aria-label="trending" />
                </P>
                <P textColor={textColor}>Trending</P>
              </SidebarListItems>
            </NavLink>
            <NavLink to="/gaming">
              <SidebarListItems
                bgColor={activeTab === 'Gaming' ? activeBgColor : 'none'}
                onClick={onClickGaming}
              >
                <P icon color={activeTab === 'Gaming' ? '#ff0b37' : '#cccccc'}>
                  <FaGamepad size="24" aria-label="gaming" />
                </P>
                <P textColor={textColor}>Gaming</P>
              </SidebarListItems>
            </NavLink>
            <NavLink to="/saved-videos">
              <SidebarListItems
                bgColor={activeTab === 'SavedVideos' ? activeBgColor : 'none'}
                onClick={onClickSavedVideos}
              >
                <P
                  icon
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#cccccc'}
                >
                  <MdPlaylistAdd size="24" aria-label="savedVideos" />
                </P>
                <P textColor={textColor}>Saved videos</P>
              </SidebarListItems>
            </NavLink>
          </SidebarUnOderList>
          <ContactUsContainer>
            <ContactUsHeading textColor={textColor}>
              CONTACT US
            </ContactUsHeading>
            <ContactUsUnOrderList>
              <ContactUsListItems>
                <ContactUsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </ContactUsListItems>
              <ContactUsListItems>
                <ContactUsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </ContactUsListItems>
              <ContactUsListItems>
                <ContactUsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactUsListItems>
            </ContactUsUnOrderList>
            <P textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </P>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
