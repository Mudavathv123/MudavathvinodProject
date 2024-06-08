import React from 'react'

const SearchCaptionContext = React.createContext({
  isLikeActive: false,
  activeTab: 'Home',
  changeActiveTab: () => {},
  changeLikeToUnlike: () => {},
  changeUnlikeToLike: () => {},
  getSearchInfromation: () => {},
  changeSeacrhCaptionValue: () => {},
  searchInput: '',
  searchPostView: false,
  searchCaption: () => {},
  renderToHome: () => {},
})

export default SearchCaptionContext
