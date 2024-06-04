import React from 'react'

const SearchCaptionContext = React.createContext({
  searchCaptionValue: '',
  searchPostView: false,
  isLikeActive: false,
  activeTab: 'Home',
  changeActiveTab: () => {},
  changeLikeToUnlike: () => {},
  changeUnlikeToLike: () => {},
  renderToHome: () => {},
  changeSeacrhCaptionValue: () => {},
  searchCaption: () => {},
  getSearchInfromation: () => {},
})

export default SearchCaptionContext
