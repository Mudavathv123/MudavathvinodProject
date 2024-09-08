import {
  NotFoundPageContainer,
  NotFoundImage,
  Heading,
  Description,
} from './styledComponents'

const NotFoundPage = () => (
  <NotFoundPageContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </NotFoundPageContainer>
)

export default NotFoundPage
