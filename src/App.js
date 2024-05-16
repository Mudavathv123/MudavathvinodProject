import {Switch, Route, Redirect} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import PageNotFoundRoute from './components/PageNotFoundRoute'
import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <Route path="/not-found" component={PageNotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
