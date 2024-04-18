import './index.css'

const TabItem = props => {
  const {tabImg, imageChange} = props
  const {thumbnailUrl, id} = tabImg

  const onClickCheckImg = () => {
    imageChange(id)
  }

  return (
    <li className="tab-images">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickCheckImg}
      >
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default TabItem
