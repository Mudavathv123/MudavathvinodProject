import {Link} from 'react-router-dom'
import './index.css'

const PageNotFound = () => (
  <div className="page-not-container">
    <img
      src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717335218/z5oo2bovdzx40opdu3tv.png"
      alt="page not found"
      className="page-not-found-image"
    />
    <h1 className="not-found-head">Page Not Found</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found.Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button className="home-page-btn" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default PageNotFound
