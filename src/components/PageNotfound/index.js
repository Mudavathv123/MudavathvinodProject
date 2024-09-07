import NxtWatchContext from '../../Context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  PageNotFoundConatiner,
  NotFoundContainer,
  NotFoundImageContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const PageNotfound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundBgColor = isDarkTheme ? '#181818' : '#ebebeb'
      const notfoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const textColor = isDarkTheme ? ' #f9f9f9' : ' #181818'

      return (
        <PageNotFoundConatiner notfoundBgColor={notfoundBgColor}>
          <Header />
          <NotFoundContainer>
            <Sidebar />
            <NotFoundImageContainer>
              <NotFoundImage src={notfoundImage} alt="not found" />
              <NotFoundHeading textColor={textColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundImageContainer>
          </NotFoundContainer>
        </PageNotFoundConatiner>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default PageNotfound
