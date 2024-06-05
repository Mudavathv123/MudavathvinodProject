import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import UserProfilePage from './components/UserProfilePage'
import MyProfilePage from './components/MyProfilePage'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SearchCaptionContext from './context/SearchCaptionContext'

class App extends Component {
  state = {activeTab: 'Home'}

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab} = this.state
    return (
      <SearchCaptionContext.Provider
        value={{
          activeTab,
          renderToHome: this.renderToHome,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/users/:id" component={UserProfilePage} />
          <ProtectedRoute exact path="/my-profile" component={MyProfilePage} />
          <Route path="/not-found" component={PageNotFound} />
          <Redirect to="/not-found" component={PageNotFound} />
        </Switch>
      </SearchCaptionContext.Provider>
    )
  }
}

export default App
