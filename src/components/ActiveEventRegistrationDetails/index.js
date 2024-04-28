// Write your code here
import {Component} from 'react'
import './index.css'

const constRegistrationStatus = {
  initial: 'INITIAL',
  notyetregistred: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registeredclosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistrationsClosedView = () => (
    <div className="registrations-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  render() {
    const {registrationStatus} = this.props
    switch (registrationStatus) {
      case constRegistrationStatus.initial:
        return this.renderNoActiveEventView()
      case constRegistrationStatus.notyetregistred:
        return this.renderYetToRegister()
      case constRegistrationStatus.registered:
        return this.renderRegisteredView()
      case constRegistrationStatus.registeredclosed:
        return this.renderRegistrationsClosedView()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
