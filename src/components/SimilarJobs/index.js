import {IoLocationSharp} from 'react-icons/io5'
import {IoMdStar, IoMdMail} from 'react-icons/io'
import './index.css'

const SimilarJobs = props => {
  const {similarJobsDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobsDetails

  return (
    <li className="jobs-container">
      <div className="logo-conatiner">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
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
      </ul>
      <hr />
      <h1 className="description-head">Description</h1>
      <p className="description">{jobDescription}</p>
    </li>
  )
}
export default SimilarJobs
