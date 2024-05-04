import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AllJobs from '../AllJobs'
import Header from '../Header'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const constApiJobsStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class JobsPage extends Component {
  state = {
    jobsProfileList: {},
    jobsList: [],
    employmentTypeInput: [],
    salaryRangeInput: '',
    searchInput: '',
    apiJobsStatus: constApiJobsStatus.initial,
    apiProfileStatus: constApiJobsStatus.initial,
  }

  componentDidMount() {
    this.getProfileInfromation()
    this.getJobsInformations()
  }

  getProfileInfromation = async () => {
    this.setState({apiProfileStatus: constApiJobsStatus.inprogress})
    const apiUrl = `https://apis.ccbp.in/profile`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedDetails = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        jobsProfileList: updatedDetails,
        apiProfileStatus: constApiJobsStatus.success,
      })
    } else {
      this.setState({apiProfileStatus: constApiJobsStatus.failure})
    }
  }

  getJobsInformations = async () => {
    this.setState({apiJobsStatus: constApiJobsStatus.inprogress})
    const {employmentTypeInput, salaryRangeInput, searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/jobs??employment_type=${employmentTypeInput}&minimum_package=${salaryRangeInput}&search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedJobsList = data.jobs.map(eachJob => ({
        id: eachJob.id,
        rating: eachJob.rating,
        title: eachJob.title,
        location: eachJob.location,
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        jobDescription: eachJob.job_description,
        packagePerAnnum: eachJob.package_per_annum,
      }))

      console.log(updatedJobsList)
      this.setState({
        jobsList: updatedJobsList,
        apiJobsStatus: constApiJobsStatus.success,
      })
    } else {
      this.setState({apiJobsStatus: constApiJobsStatus.failure})
    }
  }

  onChangeEmploymentTypeInput = event => {
    const {employmentTypeInput} = this.state
    const notEmploymentType = employmentTypeInput.filter(
      eachEmploymetTypeInput => eachEmploymetTypeInput === event.target.id,
    )
    if (notEmploymentType.length === 0) {
      this.setState(
        prevState => ({
          employmentTypeInput: [
            ...prevState.employmentTypeInput,
            event.target.id,
          ],
        }),
        this.getJobsInformations,
      )
    } else {
      const filterData = employmentTypeInput.filter(
        eachEmploymetTypeInput => eachEmploymetTypeInput !== event.target.id,
      )

      this.setState({employmentTypeInput: filterData}, this.getJobsInformations)
    }
  }

  onChangeSalaryRangeInput = event => {
    this.setState(
      {salaryRangeInput: event.target.value},
      this.getJobsInformations,
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSeacrhInputValue = () => {
    this.getJobsInformations()
  }

  onEnterSearchInputValue = event => {
    if (event.key === 'Enter') {
      this.getJobsInformations()
    }
  }

  onclickRetryJobDetails = () => {
    this.getJobsInformations()
  }

  renderNoJobsFoundView = () => (
    <div className="no-job-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-img"
      />
      <h1 className="no-job-head">No Jobs Found</h1>
      <p className="no-job-description">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt=" failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-head">Oops! Something Went Wrong</h1>
      <p className="failure-view-descriptiom">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="rentry-btn"
        type="button"
        onClick={this.onclickRetryJobDetails}
      >
        Retry
      </button>
    </div>
  )

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderfilterJobsView = () => {
    const {jobsList, apiJobsStatus} = this.state
    const noJobs = jobsList.length === 0
    switch (apiJobsStatus) {
      case constApiJobsStatus.inprogress:
        return (
          <div className="loader-profile-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
      case constApiJobsStatus.success:
        return (
          <>
            {noJobs ? (
              this.renderNoJobsFoundView()
            ) : (
              <ul className="job-list-container">
                {jobsList.map(eachJob => (
                  <AllJobs jobDetails={eachJob} key={eachJob.id} />
                ))}
              </ul>
            )}
          </>
        )
      case constApiJobsStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  retryProfileView = () => this.getProfileInfromation()

  renderprofileFilterView = () => {
    const {apiProfileStatus, jobsProfileList} = this.state

    const {name, profileImageUrl, shortBio} = jobsProfileList
    switch (apiProfileStatus) {
      case constApiJobsStatus.inprogress:
        return this.renderLoaderView()
      case constApiJobsStatus.success:
        return (
          <div className="profile-container">
            <img
              src={profileImageUrl}
              alt={`profile ${name}`}
              className="profile-img"
            />
            <h1 className="name">{name}</h1>
            <p className="short-bio">{shortBio}</p>
          </div>
        )
      case constApiJobsStatus.failure:
        return (
          <button
            className="rentry-btn"
            type="button"
            onClick={this.retryProfileView}
          >
            Retry
          </button>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />

        <div className="jobs-page-container">
          <div className="profile">
            <div className="input-container">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onEnterSearchInputValue}
              />
              <button
                type="button"
                data-testid="searchButton"
                className="search-btn"
                onClick={this.onClickSeacrhInputValue}
              >
                <BsSearch className="search-icon" size="20" />
              </button>
            </div>
            {this.renderprofileFilterView()}
            <hr />
            <h1 className="employement-type-head">Type of Employement</h1>
            <ul className="employement-type-container">
              {employmentTypesList.map(eachEmploymetType => (
                <li
                  className="input-conatiner"
                  key={eachEmploymetType.employmentTypeId}
                >
                  <input
                    type="checkbox"
                    id={eachEmploymetType.employmentTypeId}
                    value={eachEmploymetType.employmentTypeId}
                    onChange={this.onChangeEmploymentTypeInput}
                  />
                  <label htmlFor={eachEmploymetType.employmentTypeId}>
                    {eachEmploymetType.label}
                  </label>
                  <br />
                </li>
              ))}
            </ul>
            <hr />
            <h1 className="salry-range-head">Salary Range</h1>
            <ul className="salary-range-container">
              {salaryRangesList.map(eachSalary => (
                <li className="input-conatiner" key={eachSalary.salaryRangeId}>
                  <input
                    type="radio"
                    id={eachSalary.salaryRangeId}
                    name="radio-input"
                    value={eachSalary.salaryRangeId}
                    onChange={this.onChangeSalaryRangeInput}
                  />
                  <label htmlFor={eachSalary.salaryRangeId}>
                    {eachSalary.label}
                  </label>
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <div className="all-jobs-container">
            {this.renderfilterJobsView()}
          </div>
        </div>
      </>
    )
  }
}

export default JobsPage
