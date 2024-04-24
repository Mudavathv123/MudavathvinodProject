// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstName: false,
    showLastName: false,
    showSubmited: false,
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()
    this.setState({showFirstName: !isValidFirstName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurSecondName = () => {
    const isValidLastName = this.validSecondName()
    this.setState({showLastName: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitedAnotherResponse = () => {
    this.setState({showSubmited: false, firstName: '', lastName: ''})
  }

  onFormSubmited = event => {
    event.preventDefault()

    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validSecondName()

    if (isValidFirstName && isValidLastName) this.setState({showSubmited: true})
    else
      this.setState({
        showFirstName: !isValidFirstName,
        showLastName: !isValidLastName,
        showSubmited: false,
      })
  }

  validFirstName() {
    const {firstName} = this.state
    return firstName !== ''
  }
  validSecondName() {
    const {lastName} = this.state
    return lastName !== ''
  }

  render() {
    const {firstName, lastName, showFirstName, showLastName, showSubmited} =
      this.state
    const firstNameClassName = showFirstName
      ? 'fistname-input-text-error'
      : 'fistname-input-text'
    const secondNameClassName = showLastName
      ? 'fistname-input-text-error'
      : 'fistname-input-text'

    return (
      <div className="registration-form-container">
        <h1 className="registration-form-head">Registration</h1>
        {!showSubmited && (
          <form className="form" onSubmit={this.onFormSubmited}>
            <div className="input-container">
              <label htmlFor="firstname">FIRST NAME</label>
              <br />
              <input
                type="text"
                placeholder="First name"
                id="firstname"
                className={firstNameClassName}
                value={firstName}
                onBlur={this.onBlurFirstName}
                onChange={this.onChangeFirstName}
              />
              {showFirstName && <p className="error">*Required</p>}
            </div>
            <div className="input-container">
              <label htmlFor="lastname">LAST NAME</label>
              <br />
              <input
                type="text"
                placeholder="Last name"
                id="lastname"
                className={secondNameClassName}
                value={lastName}
                onBlur={this.onBlurSecondName}
                onChange={this.onChangeLastName}
              />
              {showLastName && <p className="error">*Required</p>}
            </div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        )}
        {showSubmited && (
          <div className="sucessful-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="tick-img"
            />
            <p className="successful-text">Submitted Successfully</p>
            <button
              className="sucessful-btn"
              type="button"
              onClick={this.submitedAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
