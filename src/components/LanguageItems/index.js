import './index.css'

const LanguageItems = props => {
  const {languages} = props
  const {imageUrl, imageAltText} = languages

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} className="language-image" />
    </li>
  )
}

export default LanguageItems
