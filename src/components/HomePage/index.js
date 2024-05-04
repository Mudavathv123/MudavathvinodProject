import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-page-content">
          <h1 className="home-page-head">Find The Job That Fits Your Life</h1>
          <p className="home-page-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link to="/jobs" className="find-jobs-link">
            <button className="find-job-btn" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage
