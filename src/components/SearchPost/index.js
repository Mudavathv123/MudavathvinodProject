import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import PostItem from '../PostItem'
import './index.css'
import SearchCaptionContext from '../../context/SearchCaptionContext'

const constApiStatus = {
  initial: 'INITIAL',
  inprogess: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SearchPost extends Component {
  state = {serachPostList: [], searchApiStatus: constApiStatus.initial}

  componentDidMount() {
    this.getSearchPostApiInformation()
  }

  getSearchPostApiInformation = async () => {
    this.setState({searchApiStatus: constApiStatus.inprogess})
    const {searchCaptionValue} = this.props
    console.log(searchCaptionValue)
    const searchPostsApiUrl = `https://apis.ccbp.in/insta-share/posts?search=${searchCaptionValue}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(searchPostsApiUrl, option)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatesPostsList = data.posts.map(eachPost => ({
        postId: eachPost.post_id,
        userId: eachPost.user_id,
        userName: eachPost.user_name,
        profilePic: eachPost.profile_pic,
        postDetails: {
          imageUrl: eachPost.post_details.image_url,
          caption: eachPost.post_details.caption,
        },
        likesCount: eachPost.likes_count,
        comments: eachPost.comments.map(eachComment => ({
          userName: eachComment.user_name,
          userId: eachComment.user_id,
          comment: eachComment.comment,
        })),
        createdAt: eachPost.created_at,
      }))

      this.setState({
        serachPostList: updatesPostsList,
        searchApiStatus: constApiStatus.success,
      })
    } else {
      this.setState({searchApiStatus: constApiStatus.failure})
    }
  }

  changeLikeToUnlike = async postId => {
    console.log('AaA2')
    const postlikeApiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const post = {like_status: true}
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(post),
    }

    await fetch(postlikeApiUrl, option)
    this.setState(prevState => ({
      serachPostList: prevState.serachPostList.map(eachPost => {
        if (eachPost.postId === postId) {
          return {
            ...eachPost,
            likesCount: eachPost.likesCount - 1,
            likeStatus: !eachPost.likeStatus,
          }
        }
        return eachPost
      }),
    }))
  }

  changeUnlikeToLike = async postId => {
    console.log('AaA1')
    const postlikeApiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const post = {like_status: false}
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(post),
    }

    await fetch(postlikeApiUrl, option)
    this.setState(prevState => ({
      serachPostList: prevState.serachPostList.map(eachPost => {
        if (eachPost.postId === postId) {
          return {
            ...eachPost,
            likesCount: eachPost.likesCount + 1,
            likeStatus: !eachPost.likeStatus,
          }
        }
        return eachPost
      }),
    }))
  }

  getLoaderView = () => (
    <div className="user-profile-loader" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  getSearchSuccessView = () => {
    const {serachPostList} = this.state

    return serachPostList.length > 0 ? (
      <>
        <SearchCaptionContext.Provider
          value={{
            changeLikeToUnlike: this.changeLikeToUnlike,
            changeUnlikeToLike: this.changeUnlikeToLike,
          }}
        >
          <h1 className="search-head-text">Search Results</h1>
          <div className="search-container">
            <ul className="search-list-container">
              {serachPostList.map(eachPost => (
                <PostItem post={eachPost} key={eachPost.postId} />
              ))}
            </ul>
          </div>
        </SearchCaptionContext.Provider>
      </>
    ) : (
      <div className="search-notfound-container">
        <img
          src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717389765/MyMiniProjectsImages/a2e26whjk1z9x68pckrj.png"
          alt="search not found"
          className="search-notfound-img"
        />
        <h1 className="search-notfound-head">Search Not Found</h1>
        <p className="search-notfound-description">
          Try different keyword or search again
        </p>
      </div>
    )
  }

  onClickTryAgain = () => {
    this.getSearchPostApiInformation()
  }

  getSerachFailureView = () => (
    <div className="search-post-failure-container">
      <img
        src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717389029/MyMiniProjectsImages/s3uduigvk6w8uwlvgvbc.png"
        alt="failure view"
        className="search-failure-img"
      />
      <p className="failure-msg">Something went wrong. Please try again</p>
      <button
        type="button"
        className="try-again-btn"
        onClick={this.onClickTryAgain}
      >
        Try again
      </button>
    </div>
  )

  getFilterSearchView = () => {
    const {searchApiStatus} = this.state
    switch (searchApiStatus) {
      case constApiStatus.inprogess:
        return this.getLoaderView()
      case constApiStatus.success:
        return this.getSearchSuccessView()
      case constApiStatus.failure:
        return this.getSerachFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="search-post-container">{this.getFilterSearchView()}</div>
    )
  }
}

export default SearchPost
