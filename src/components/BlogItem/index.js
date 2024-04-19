// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blog} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blog
    return (
      <Link to={`blogs/${id}`} className="blog-link">
        <li className="blog-items">
          <img src={imageUrl} alt={title} className="blog-img" />
          <div className="blog-content-container">
            <p className="topic">{topic}</p>
            <h1 className="title-head">{title}</h1>
            <div className="avtar-container">
              <img src={avatarUrl} alt="avatar " className="avtar-img" />
              <p className="avtar-name">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
