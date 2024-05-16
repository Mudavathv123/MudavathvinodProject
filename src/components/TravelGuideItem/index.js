import './index.css'

const TravelGuideItem = props => {
  const {travelGuide} = props
  const {name, imageUrl, description} = travelGuide
  return (
    <li className="travel-items">
      <img src={imageUrl} alt={name} className="place-image" />
      <h1 className="place-name">{name}</h1>
      <p className="travel-description">{description}</p>
    </li>
  )
}

export default TravelGuideItem
