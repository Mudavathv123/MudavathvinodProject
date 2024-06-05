import React from 'react'

const SearchCaptionContext = React.createContext({
  isLikeActive: false,
  activeTab: 'Home',
  changeActiveTab: () => {},
  changeLikeToUnlike: () => {},
  changeUnlikeToLike: () => {},
  renderToHome: () => {},
  getSearchInfromation: () => {},
})

export default SearchCaptionContext
