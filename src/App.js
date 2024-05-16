import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <Route exact path="/" component={HomePage} />
    <Route path="/not-found" component={NotFoundPage} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
