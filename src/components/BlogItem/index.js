// Write your JS code here
import './index.css'

const BlogList = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li className="blog-items">
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="date-published">{publishedDate}</p>
    </li>
  )
}

export default BlogList
