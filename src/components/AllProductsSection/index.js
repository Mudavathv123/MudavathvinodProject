import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const constApiStataus = {
  initial: 'INITIAL',
  sucess: 'SUCCUSS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    searchTitle: '',
    activeCategoryId: '',
    activeRatingId: '',
    apiStatus: constApiStataus.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {activeOptionId, searchTitle, activeCategoryId, activeRatingId} =
      this.state
    console.log('Enter', searchTitle)
    this.setState({apiStatus: constApiStataus.inprogress})
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchTitle}&rating=${activeRatingId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
        apiStatus: constApiStataus.sucess,
      })
    } else {
      this.setState({apiStatus: constApiStataus.failure})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    // TODO: Add No Products View

    const showProductsListLength = productsList.length > 0

    return (
      <>
        {showProductsListLength ? (
          <div className="all-products-container">
            <ProductsHeader
              activeOptionId={activeOptionId}
              sortbyOptions={sortbyOptions}
              changeSortby={this.changeSortby}
            />
            <ul className="products-list">
              {productsList.map(product => (
                <ProductCard productData={product} key={product.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="no-product-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              alt="no products"
              className="no-products-view-img"
            />
            <h1>No Product Found</h1>
            <p>We could not find any products. Try other filters.</p>
          </div>
        )}
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="failure-view-mg"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request. Please try again
      </p>
    </div>
  )

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  enterSeacrhInput = () => {
    this.getProducts()
  }

  changeSearchInput = searchTitle => {
    this.setState({searchTitle})
  }

  changRating = activeRatingId => {
    this.setState({activeRatingId}, this.getProducts)
  }

  changeCategory = activeCategoryId => {
    this.setState({activeCategoryId}, this.getProducts)
  }

  clearFilters = () => {
    this.setState(
      {
        searchTitle: '',
        activeCategoryId: '',
        activeRatingId: '',
      },
      this.getProducts,
    )
  }

  // TODO: Add failure view

  render() {
    const {isLoading, searchTitle, apiStatus} = this.state
    console.log(searchTitle)
    switch (apiStatus) {
      case constApiStataus.inprogress:
        return this.renderLoader()
      case constApiStataus.sucess:
        return (
          <>
            <div className="all-products-section">
              {/* TODO: Update the below element */}

              <FiltersGroup
                category={categoryOptions}
                ratings={ratingsList}
                searchTitle={searchTitle}
                enterSeacrhInput={this.enterSeacrhInput}
                changeSearchInput={this.changeSearchInput}
                changRating={this.changRating}
                changeCategory={this.changeCategory}
                clearFilters={this.clearFilters}
              />
              {isLoading ? this.renderLoader() : this.renderProductsList()}
            </div>
          </>
        )
      case constApiStataus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default AllProductsSection
