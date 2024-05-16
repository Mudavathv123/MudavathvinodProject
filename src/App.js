import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from './Header'
import ProjectItem from './ProjectItem'
import './App.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const constApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {
    projectsList: [],
    selectedValue: categoriesList[0].id,
    apiStatus: constApiStatus.initial,
  }

  componentDidMount() {
    this.getProjectDetails()
  }

  getProjectDetails = async () => {
    this.setState({apiStatus: constApiStatus.inprogress})
    const {selectedValue} = this.state
    const projectApiUrl = `https://apis.ccbp.in/ps/projects?category=${selectedValue}`
    const response = await fetch(projectApiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedProjects = data.projects.map(eachProject => ({
        imageUrl: eachProject.image_url,
        id: eachProject.id,
        name: eachProject.name,
      }))

      console.log(updatedProjects)
      this.setState({
        projectsList: updatedProjects,
        apiStatus: constApiStatus.success,
      })
    } else {
      this.setState({
        apiStatus: constApiStatus.failure,
      })
    }
  }

  onChangeSelectedValue = event => {
    this.setState({selectedValue: event.target.value}, this.getProjectDetails)
  }

  onClickRetry = () => this.getProjectDetails()

  renderLoaderView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-head">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="failure-btn" type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ul className="project-list-container">
        {projectsList.map(eachProject => (
          <ProjectItem project={eachProject} key={eachProject.id} />
        ))}
      </ul>
    )
  }

  renderFilterAfterApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constApiStatus.inprogress:
        return this.renderLoaderView()
      case constApiStatus.failure:
        return this.renderFailureView()
      case constApiStatus.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {selectedValue} = this.state
    return (
      <>
        <Header />
        <div className="app-conatiner">
          <select
            className="select"
            onChange={this.onChangeSelectedValue}
            value={selectedValue}
          >
            {categoriesList.map(eachCategory => (
              <option value={eachCategory.id} key={eachCategory.id}>
                {eachCategory.displayText}
              </option>
            ))}
          </select>
          {this.renderFilterAfterApiStatus()}
        </div>
      </>
    )
  }
}

export default App
