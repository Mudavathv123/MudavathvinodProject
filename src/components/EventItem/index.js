// Write your code here
import './index.css'

const EventItem = props => {
  const {events, activeEventDetails} = props
  const {imageUrl, name, location, registrationStatus} = events

  const onClickActive = () => {
    activeEventDetails(registrationStatus)
  }

  return (
    <li className="event-items">
      <button className="event-btn" type="button" onClick={onClickActive}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
