import './index.css'

const TextItem = props => {
  const {text} = props
  const {searchInput} = text
  return (
    <li>
      <p className="text">
        {searchInput}:{searchInput.length}
      </p>
    </li>
  )
}

export default TextItem
