// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getFetchedBlogData()
  }

  getFetchedBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({
      blogData: formattedData,
      isLoader: false,
    })
  }

  render() {
    const {blogData, isLoader} = this.state
    return (
      <>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list-container">
            {blogData.map(eachData => (
              <BlogItem blog={eachData} key={eachData.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}
export default BlogList
