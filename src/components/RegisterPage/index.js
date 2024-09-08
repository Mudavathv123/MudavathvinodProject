import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'
import {
  RegisterPageContainer,
  RegisterContainer,
  RegisterLogo,
  Form,
  Heading,
  Label,
  Input,
  Select,
  CustomeButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterPage extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            input,
            selectedTopic,
            showError,
            changeName,
            changeSelectValue,
            displayError,
            register,
          } = value

          const onChangeName = event => {
            changeName(event.target.value)
          }

          const onChangeSelectValue = event => {
            topicsList.forEach(ele => {
              if (event.target.value === ele.id) {
                changeSelectValue(ele.displayText)
              }
            })
          }

          const onSubmitForm = event => {
            event.preventDefault()
            const {history} = this.props
            if (input === '') {
              displayError()
            } else {
              history.replace('/')
              register()
            }
          }

          return (
            <>
              <Header />
              <RegisterPageContainer>
                <RegisterContainer>
                  <RegisterLogo
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <Form onSubmit={onSubmitForm}>
                    <Heading>Let us join</Heading>
                    <Label htmlFor="name">NAME</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={input}
                      onChange={onChangeName}
                    />
                    <Label htmlFor="topics">TOPICS</Label>
                    <Select
                      as="select"
                      value={selectedTopic}
                      id="topics"
                      onChange={onChangeSelectValue}
                    >
                      {topicsList.map(eachTopic => (
                        <option key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </option>
                      ))}
                    </Select>
                    <CustomeButton type="submit">Register Now</CustomeButton>
                    {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
                  </Form>
                </RegisterContainer>
              </RegisterPageContainer>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default RegisterPage
