import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import {
  HomePageContainer,
  Heading,
  Description,
  HomePageImage,
  CustomeButton,
  HomeAfterRegister,
} from './styledComponents'
import Header from '../Header'

const HomePage = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {input, selectedTopic, isRegister} = value
        return (
          <div>
            <Header />
            {isRegister ? (
              <HomeAfterRegister>
                <Heading register>Hello {input}</Heading>
                <Description regiter>Welcome to {selectedTopic}</Description>
                <HomePageImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeAfterRegister>
            ) : (
              <HomePageContainer>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the topic</Description>
                <Link to="/register">
                  <CustomeButton type="button" onClick={onClickRegister}>
                    Register
                  </CustomeButton>
                </Link>
                <HomePageImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomePageContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default HomePage
