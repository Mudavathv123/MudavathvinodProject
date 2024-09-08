import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackListItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li>
      <div className="track">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="track-name-container">
          <p className="track-name">{name}</p>
          <p className="tack-genre">{genre}</p>
        </div>
      </div>
      <div className="track-duration-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-btn"
          type="button"
          onClick={onClickDeleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete size="14" aria-label="delete-button" />
        </button>
      </div>
    </li>
  )
}

export default TrackListItem
