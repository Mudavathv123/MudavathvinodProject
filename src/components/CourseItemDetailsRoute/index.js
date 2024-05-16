import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const constCourseDetailsApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseItemDetailsRoute extends Component {
  state = {cousreDetailsList: [], apiStaus: constCourseDetailsApiStatus.initial}

  componentDidMount() {
    this.getCourseItemDetails()
  }

  getCourseItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStaus: constCourseDetailsApiStatus.inprogress})

    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(courseDetailsApiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = {
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
        id: data.course_details.id,
        name: data.course_details.name,
      }
      this.setState({
        cousreDetailsList: updatedData,
        apiStaus: constCourseDetailsApiStatus.success,
      })
    } else {
      this.setState({apiStaus: constCourseDetailsApiStatus.failure})
    }
  }

  onClickRetry = () => this.getCourseItemDetails()

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
    const {cousreDetailsList} = this.state
    const {imageUrl, description, name} = cousreDetailsList

    return (
      <div className="course-items">
        <img src={imageUrl} alt={name} className="cousre-img" />
        <div className="head-container">
          <h1 className="head">{name}</h1>
          <p className="course-details-description">{description}</p>
        </div>
      </div>
    )
  }

  renderFilterCoursesDetailsList = () => {
    const {apiStaus} = this.state

    switch (apiStaus) {
      case constCourseDetailsApiStatus.inprogress:
        return this.renderLoaderView()
      case constCourseDetailsApiStatus.failure:
        return this.renderFailureView()
      case constCourseDetailsApiStatus.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="course-details-container">
          {this.renderFilterCoursesDetailsList()}
        </div>
      </>
    )
  }
}

export default CourseItemDetailsRoute
