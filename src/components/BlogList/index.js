// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem blog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
