// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import SimilarProductItem from '../SimilarProductItem'
import Header from '../Header'
import './index.css'

const constApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    productData: {},
    similarProductData: [],
    quantity: 1,
    apiStatus: constApiStatus.initial,
  }

  componentDidMount() {
    this.getProdutsDetails()
  }

  componentWillUnmount() {
    this.setState({
      productData: {},
      similarProductData: [],
      quantity: 1,
      apiStatus: constApiStatus.initial,
    })
  }

  getFormattedData = data => ({
    id: data.id,
    imageUrl: data.image_url,
    title: data.title,
    brand: data.brand,
    totalReviews: data.total_reviews,
    rating: data.rating,
    availability: data.availability,
    description: data.description,
    price: data.price,
    style: data.style,
  })

  getProdutsDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: constApiStatus.inprogress})
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const formattedData = this.getFormattedData(data)
      const similarProducts = data.similar_products.map(eachProduct =>
        this.getFormattedData(eachProduct),
      )
      console.log(formattedData)
      this.setState({
        productData: formattedData,
        similarProductData: similarProducts,
        apiStatus: constApiStatus.success,
      })
    } else {
      this.setState({apiStatus: constApiStatus.failure})
    }
  }

  onClickIncreseQuantity = () => {
    this.setState(prevstate => ({quantity: prevstate.quantity + 1}))
  }

  onClickDecreseQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevstate => ({quantity: prevstate.quantity - 1}))
    }
  }

  renderLodingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="error-view"
      />
      <h1 className="notfound-head">Product Not Found</h1>
      <Link to="/products">
        <button className="continue-shopping-btn" type="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

  render() {
    const {productData, similarProductData, quantity, apiStatus} = this.state
    const {
      imageUrl,
      title,
      price,
      brand,
      totalReviews,
      rating,
      description,
      availability,
    } = productData

    switch (apiStatus) {
      case constApiStatus.inprogress:
        return this.renderLodingView()
      case constApiStatus.success:
        return (
          <div className="product-item-details-container">
            <Header />
            <div className="specific-product">
              <img
                src={imageUrl}
                alt="product"
                className="specific-product-img"
              />
              <div className="specific-product-description-container">
                <h1>{title}</h1>
                <p className="price">Rs {price}/-</p>
                <div className="ratingcontainer">
                  <p className="rating">
                    {rating}
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                      alt="star"
                      className="star-img"
                    />
                  </p>
                  <p className="review">{totalReviews} Reviews</p>
                </div>
                <p className="description">{description}</p>
                <p className="availability">
                  <span className="span">Available: </span>
                  {availability}
                </p>
                <p className="brand">
                  <span className="span">Brand: </span>
                  {brand}
                </p>
                <hr />
                <div className="increse-decrese-btn-container">
                  <button
                    type="button"
                    onClick={this.onClickDecreseQuantity}
                    data-testid="minus"
                  >
                    <BsDashSquare aria-label="dash" />
                  </button>

                  <p className="quantity">{quantity}</p>
                  <button
                    type="button"
                    onClick={this.onClickIncreseQuantity}
                    data-testid="plus"
                  >
                    <BsPlusSquare aria-label="plus" />
                  </button>
                </div>
                <button className="add-cart-btn" type="button">
                  ADD TO CART
                </button>
              </div>
            </div>
            <h1 className="similar-product-item-heading">Similar Products</h1>
            <ul className="similar-product-item-container">
              {similarProductData.map(eachProduct => (
                <SimilarProductItem
                  similarProductData={eachProduct}
                  key={eachProduct.id}
                />
              ))}
            </ul>
          </div>
        )
      case constApiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default ProductItemDetails
