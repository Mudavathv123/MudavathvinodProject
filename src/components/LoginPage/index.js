import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  Input,
  Label,
  Form,
  Logo,
  LoginButton,
  LoginPageContainer,
  InputContainer,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    showUsernameError: false,
    showPasswordError: false,
    showPasswordToggle: false,
    usernameInput: '',
    passwordInput: '',
    authenticationError: '',
    showAuthenticationError: false,
  }

  onSuccessResponse = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  getLoginInformation = async () => {
    const {usernameInput, passwordInput} = this.state
    const username = usernameInput
    const password = passwordInput
    const userCredientials = {username, password}

    const loginApi = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userCredientials),
    }

    const response = await fetch(loginApi, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok) {
      this.onSuccessResponse(data.jwt_token)
    } else {
      this.setState({
        authenticationError: data.error_msg,
        showAuthenticationError: true,
      })
    }
  }

  onBlurCheckUsername = event => {
    if (event.target.value === '') this.setState({showUsernameError: true})
    else this.setState({showUsernameError: false})
  }

  onBlurCheckPassword = event => {
    if (event.target.value === '') this.setState({showPasswordError: true})
    else this.setState({showPasswordError: false})
  }

  onClickSubmitForm = event => {
    event.preventDefault()

    this.getLoginInformation()
  }

  onChangeShowPassword = event => {
    this.setState({
      showPasswordToggle: event.target.checked,
    })
  }

  onChangeusernameInput = event => {
    this.setState({
      usernameInput: event.target.value,
      showAuthenticationError: false,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
      showPasswordToggle: false,
      showAuthenticationError: false,
    })
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginBgColor = isDarkTheme ? '#181818' : '#ebebeb'
          const formBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const labelColor = isDarkTheme ? '#ffffff' : '#000000'
          const inputBorderColor = isDarkTheme ? '#cbd5e1' : '#ebebeb'
          const formShadowColor = isDarkTheme ? '#212121' : '#f9f9f9'

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const {
            showUsernameError,
            showPasswordError,
            showPasswordToggle,
            authenticationError,
            showAuthenticationError,
            usernameInput,
            passwordInput,
          } = this.state

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          const showPassword = showPasswordToggle ? 'text' : 'password'
          return (
            <LoginPageContainer loginBgColor={loginBgColor}>
              <Form
                onSubmit={this.onClickSubmitForm}
                formBgColor={formBgColor}
                formShadowColor={formShadowColor}
              >
                <Logo
                  src={websiteLogo}
                  alt="website logo"
                  className="logo-image"
                />
                <InputContainer>
                  <Label htmlFor="username" labelColor={labelColor}>
                    USERNAME
                  </Label>
                  <br />
                  <Input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={usernameInput}
                    onBlur={this.onBlurCheckUsername}
                    onChange={this.onChangeusernameInput}
                    inputBorderColor={inputBorderColor}
                    labelColor={labelColor}
                  />
                  {showUsernameError && <ErrorMessage>*Required</ErrorMessage>}
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password" labelColor={labelColor}>
                    PASSWORD
                  </Label>
                  <br />
                  <Input
                    placeholder="password"
                    id="password"
                    value={passwordInput}
                    type={showPassword}
                    onBlur={this.onBlurCheckPassword}
                    onChange={this.onChangePasswordInput}
                    inputBorderColor={inputBorderColor}
                    labelColor={labelColor}
                  />
                  {showPasswordError && <ErrorMessage>*Required</ErrorMessage>}
                </InputContainer>
                <InputContainer checkboxContainer>
                  <Input
                    id="checkbox"
                    type="checkbox"
                    checkbox
                    checked={showPasswordToggle}
                    onChange={this.onChangeShowPassword}
                    inputBorderColor={inputBorderColor}
                    labelColor={labelColor}
                  />
                  <Label htmlFor="checkbox" checkbox labelColor={labelColor}>
                    Show Password
                  </Label>
                </InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showAuthenticationError && (
                  <ErrorMessage authenticationError>
                    {authenticationError}
                  </ErrorMessage>
                )}
              </Form>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
