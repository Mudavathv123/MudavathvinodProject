import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import TrendingPage from './components/TrendingPage'
import SavedPage from './components/SavedPage'
import GamePage from './components/GamePage'
import PageNotfound from './components/PageNotfound'
import VideoItemDetailsPage from './components/VideoItemDetailsPage'
import NxtWatchContext from './Context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    activeTab: 'Home',
    isDarkTheme: true,
    savedList: [],
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  chaneTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideos = video => {
    const {savedList} = this.state
    const videoObj = savedList.find(eachVideo => eachVideo.id === video.id)
    if (videoObj) {
      this.setState(prveState => ({savedList: [...prveState.savedList]}))
    } else {
      this.setState({savedList: [...savedList, video]})
    }
    console.log(savedList)
  }

  removeSavedVideo = id => {
    const {savedList} = this.state
    const removeVideo = savedList.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedList: removeVideo})
  }

  render() {
    const {activeTab, isDarkTheme, savedList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedList,
          changeTab: this.changeTab,
          chaneTheme: this.chaneTheme,
          addToSavedVideos: this.addToSavedVideos,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute exact path="/saved-videos" component={SavedPage} />
          <ProtectedRoute exact path="/gaming" component={GamePage} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsPage}
          />
          <Route path="/not-found" component={PageNotfound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
