import './index.css'

const VisitedCountries = props => {
  const {country, removeVisitedCountry} = props
  const {id, imageUrl, name, isVisited} = country

  const onClickRemoveVistedCountry = () => {
    removeVisitedCountry(id)
  }

  return isVisited ? (
    <li className="visited-itmes">
      <img src={imageUrl} alt="thumbnail" />
      <div className="text-container">
        <p className="name">{name}</p>
        <button
          className="remove-btn"
          type="button"
          onClick={onClickRemoveVistedCountry}
        >
          Remove
        </button>
      </div>
    </li>
  ) : null
}

export default VisitedCountries
