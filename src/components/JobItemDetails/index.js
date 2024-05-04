import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoLocationSharp} from 'react-icons/io5'
import {IoMdStar, IoMdMail} from 'react-icons/io'
import {HiOutlineExternalLink} from 'react-icons/hi'
import SimilarJobs from '../SimilarJobs'
import Header from '../Header'
import './index.css'

const constJobItemApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobDetailsList: {},
    similarJobsList: [],
    skillList: [],
    lifeAtCompanyObj: {},
    apiStatus: constJobItemApiStatus.initial,
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: constJobItemApiStatus.inprogress})
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedJobDetails = {
        title: data.job_details.title,
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills,
        lifeAtCompany: data.job_details.life_at_company,
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
      }
      const similarJobDetails = data.similar_jobs.map(eachSimilarData => ({
        id: eachSimilarData.id,
        companyLogoUrl: eachSimilarData.company_logo_url,
        employmentType: eachSimilarData.employment_type,
        jobDescription: eachSimilarData.job_description,
        location: eachSimilarData.location,
        rating: eachSimilarData.rating,
        title: eachSimilarData.title,
      }))

      console.log(updatedJobDetails)
      console.log(similarJobDetails)
      const {skills, lifeAtCompany} = updatedJobDetails
      const updtedSkills = skills.map(eachSkill => ({
        skillImageUrl: eachSkill.image_url,
        name: eachSkill.name,
      }))
      const updateLifeAtCompany = {
        imageUrl: lifeAtCompany.image_url,
        description: lifeAtCompany.description,
      }
      this.setState({
        jobDetailsList: updatedJobDetails,
        similarJobsList: similarJobDetails,
        skillList: updtedSkills,
        lifeAtCompanyObj: updateLifeAtCompany,
        apiStatus: constJobItemApiStatus.success,
      })
    } else {
      this.setState({apiStatus: constJobItemApiStatus.failure})
    }
  }

  onClickRetry = () => {
    this.getJobItemDetails()
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-head">Oops! Something Went Wrong</h1>
      <p className="failure-view-descriptiom">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="rentry-btn" type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSucessView = () => {
    const {jobDetailsList, similarJobsList, skillList, lifeAtCompanyObj} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobDetailsList

    return (
      <>
        <div className="job-item">
          <div className="logo-conatiner">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="logo-img"
            />
            <div className="title-container">
              <h1 className="title">{title}</h1>
              <p className="rating">
                <IoMdStar size="16" className="star" />
                {rating}
              </p>
            </div>
          </div>
          <ul className="location-container">
            <li className="location-items">
              <p className="location">
                <IoLocationSharp size="16" className="location-icon" />
                {location}
              </p>
              <p className="type">
                <IoMdMail size="16" className="type-icon" />
                {employmentType}
              </p>
            </li>
            <li>
              <p className="salary">{packagePerAnnum}</p>
            </li>
          </ul>
          <hr />
          <div className="link-container">
            <h1 className="description-head">Description</h1>
            <p className="vist-link">
              <a
                href={companyWebsiteUrl}
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
              <HiOutlineExternalLink className="visit-icon" size="20" />
            </p>
          </div>
          <p className="description">{jobDescription}</p>
          <h1 className="skill-head">Skills</h1>
          <ul className="skill-list-container">
            {skillList.map(eachSkill => (
              <li className="skill-item" key={eachSkill.name}>
                <img
                  src={eachSkill.skillImageUrl}
                  alt={eachSkill.name}
                  className="skill-img"
                />
                <p className="skill-name">{eachSkill.name}</p>
              </li>
            ))}
          </ul>
          <div className="lifeAtCompany-container">
            <h1 className="lifeAtCompany-head">Life at Company</h1>
            <p className="lifeAtCompany-description">
              {lifeAtCompanyObj.description}
            </p>
            <img
              src={lifeAtCompanyObj.imageUrl}
              className="lifeAtCompany-img"
              alt="life At Company"
            />
          </div>
        </div>
        <h1 className="similar-jobs-head">Similar Jobs</h1>
        <ul className="similar-item-container">
          {similarJobsList.map(eachSimilarData => (
            <SimilarJobs
              similarJobsDetails={eachSimilarData}
              key={eachSimilarData.id}
            />
          ))}
        </ul>
      </>
    )
  }

  renderFilterJobdetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constJobItemApiStatus.inprogress:
        return this.renderLoaderView()
      case constJobItemApiStatus.success:
        return this.renderSucessView()
      case constJobItemApiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="job-items-container">
          {this.renderFilterJobdetailsView()}
        </div>
      </>
    )
  }
}

export default JobItemDetails
