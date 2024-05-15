import './index.css'

const CountriesItem = props => {
  const {country, visitCountry} = props
  const {id, name, isVisited} = country

  const onClickVisit = () => {
    visitCountry(id)
  }

  return (
    <li className="contries-items">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesItem
