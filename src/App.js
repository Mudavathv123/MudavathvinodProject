import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './components/HomePage'
import JobsPage from './components/JobsPage'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={HomePage} />
    <ProtectedRoute exact path="/jobs" component={JobsPage} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
