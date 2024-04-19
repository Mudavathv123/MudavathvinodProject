// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const b = {
  id: 2,
  title: 'React v16.7: No, This Is Not the One With Hooks',
  imageUrl: 'https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png',
  avatarUrl: 'https://avatars.githubusercontent.com/u/3624098?v=4',
  author: 'Andrew Clark',
  content:
    'React follows semantic versioning. Typically, this means that we use patch versions for bugfixes, and minors for new (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features. The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type of release because they sometimes contain critical bugfixes.',
  topic: 'React.js',
}

class BlogItemDetails extends Component {
  state = {
    blogDetails: [],
    isLoader: true,
  }
  componentDidMount() {
    this.getFetehedDetails()
  }

  getFetehedDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const details = await response.json()
    const updatedDetails = {
      title: details.title,
      imageUrl: details.image_url,
      avatarUrl: details.avatar_url,
      author: details.author,
      content: details.content,
    }
    this.setState({blogDetails: updatedDetails, isLoader: false})
  }

  render() {
    const {blogDetails, isLoader} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails
    return (
      <div className="blog-details-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt="avatar" className="avatar-img" />
              <p className="avatar-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-img" />
            <p className="content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
