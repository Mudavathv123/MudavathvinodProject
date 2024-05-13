import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  activeTab: 'Home',
  savedList: [],
  changeTab: () => {},
  chaneTheme: () => {},
  addToSavedVideos: () => {},
  removeSavedVideo: () => {},
})

export default NxtWatchContext
