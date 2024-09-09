// Write your code here

import './index.css'

const SimilarProductItem = props => {
  const {similarProductData} = props
  const {title, imageUrl, brand, price, rating} = similarProductData
  return (
    <li className="similar-product-items">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-img"
      />

      <p className="title">{title}</p>
      <p className="brand">{brand}</p>
      <div className="price-container">
        <p className="price">Rs {price}/-</p>
        <p className="rating">
          {rating}
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-img"
          />
        </p>
      </div>
    </li>
  )
}
export default SimilarProductItem
