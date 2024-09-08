import {IoIosSearch} from 'react-icons/io'
import './index.css'

const FiltersGroup = props => {
  const {searchTitle} = props

  const renderRatingFilterList = () => {
    const {ratings} = props

    return ratings.map(eachRating => {
      const {changRating, activeRatingId} = props
      const onClickRatingItem = () => changRating(eachRating.ratingId)

      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className="rating-para">& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-head">Ratings</h1>
      <ul className="rating-list">{renderRatingFilterList()}</ul>
    </div>
  )

  const renderCategoryFilterList = () => {
    const {category} = props
    return category.map(eachCategory => {
      const {changeCategory, activeChangeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(eachCategory.categoryId)
      const isActive = activeChangeCategoryId === eachCategory.categoryId

      const categoryClassName = isActive
        ? 'active-category-name'
        : 'category-name'

      return (
        <p
          className={categoryClassName}
          key={eachCategory.categoryId}
          onClick={onClickCategoryItem}
        >
          {eachCategory.name}
        </p>
      )
    })
  }

  const renderProductsCategory = () => (
    <>
      <h1 className="category">Category</h1>
      <div className="categories-list">{renderCategoryFilterList()}</div>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSeacrhInput} = props
    if (event.key === 'Enter') {
      enterSeacrhInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    console.log(event.target.value)
    changeSearchInput(event.target.value)
  }

  const onClickClearFilters = () => {
    const {clearFilters} = props
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="seacrh-input">
        <input
          type="search"
          placeholder="search"
          value={searchTitle}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <IoIosSearch className="search-icon" />
      </div>
      {/* Replace this element with your code */}
      {renderProductsCategory()}
      {renderRatingFilters()}
      <button
        className="clear-filter-btn"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
