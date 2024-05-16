import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const constHomeApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {coursesList: [], apiStaus: constHomeApiStatus.initial}

  componentDidMount() {
    this.getListOfCourses()
  }

  getListOfCourses = async () => {
    this.setState({apiStaus: constHomeApiStatus.inprogress})
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses '
    const response = await fetch(coursesApiUrl)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const updatedData = data.courses.map(eachCourse => ({
        logoUrl: eachCourse.logo_url,
        id: eachCourse.id,
        name: eachCourse.name,
      }))
      this.setState({
        coursesList: updatedData,
        apiStaus: constHomeApiStatus.success,
      })
    } else {
      this.setState({apiStaus: constHomeApiStatus.failure})
    }
  }

  onClickRetry = () => this.getListOfCourses()

  renderLoaderView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failuer-img"
      />
      <h1 className="failuer-head">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-btn" type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {coursesList} = this.state

    return (
      <ul className="courses-list-container">
        {coursesList.map(eachCourse => (
          <li key={eachCourse.id} className="courses-items-container">
            <Link to={`/courses/${eachCourse.id}`} className="course-link">
              <img
                src={eachCourse.logoUrl}
                alt={eachCourse.name}
                className="eachCourse-logo"
              />

              <p className="course-name">{eachCourse.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  renderFilterCoursesList = () => {
    const {apiStaus} = this.state

    switch (apiStaus) {
      case constHomeApiStatus.inprogress:
        return this.renderLoaderView()
      case constHomeApiStatus.failure:
        return this.renderFailureView()
      case constHomeApiStatus.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="HomeRoute">
          <h1 className="home-head">Courses</h1>
          {this.renderFilterCoursesList()}
        </div>
      </>
    )
  }
}

export default HomeRoute
