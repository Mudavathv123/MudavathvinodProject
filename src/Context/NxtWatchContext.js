import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  activeTab: 'Home',
  savedList: [],
  isLike: false,
  isDislike: false,
  isSavedVideo: false,
  changeTab: () => {},
  chaneTheme: () => {},
  addToSavedVideos: () => {},
  removeSavedVideo: () => {},
  changeLike: () => {},
  changeDislike: () => {},
  changeSave: () => {},
})

export default NxtWatchContext
