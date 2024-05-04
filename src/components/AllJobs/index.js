import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoLocationSharp} from 'react-icons/io5'
import {IoMdStar, IoMdMail} from 'react-icons/io'
import './index.css'

class AllJobs extends Component {
  render() {
    const {jobDetails} = this.props
    const {
      id,
      rating,
      title,
      location,
      companyLogoUrl,
      employmentType,
      jobDescription,
      packagePerAnnum,
    } = jobDetails

    return (
      <Link to={`/jobs/${id}`} className="job-link">
        <li className="jobs-container">
          <div className="logo-conatiner">
            <img src={companyLogoUrl} alt="company logo" className="logo-img" />
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
          <h1 className="description-head">Description</h1>
          <p className="description">{jobDescription}</p>
        </li>
      </Link>
    )
  }
}

export default AllJobs
