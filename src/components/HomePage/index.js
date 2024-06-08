import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import PostItem from '../PostItem'
import SearchPost from '../SearchPost'
import Header from '../Header'
import SearchCaptionContext from '../../context/SearchCaptionContext'
import './index.css'

const constApiStoriesStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePage extends Component {
  state = {
    storiesList: [],
    storyApiStatus: constApiStoriesStatus.initial,
    postDetailsList: [],
    postsApiStatus: constApiStoriesStatus.initial,
  }

  componentDidMount() {
    this.getUserApiStories()
    this.getPostApiInformations()
  }

  getUserApiStories = async () => {
    this.setState({storyApiStatus: constApiStoriesStatus.inprogress})
    const userApiStoriesUrl = 'https://apis.ccbp.in/insta-share/stories'
    const jwtToekn = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToekn}`,
      },
    }

    const response = await fetch(userApiStoriesUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedSotriesList = data.users_stories.map(eachStory => ({
        userName: eachStory.user_name,
        userId: eachStory.user_id,
        storyUrl: eachStory.story_url,
      }))
      this.setState({
        storiesList: updatedSotriesList,
        storyApiStatus: constApiStoriesStatus.success,
      })
    } else {
      this.setState({storyApiStatus: constApiStoriesStatus.failure})
    }
  }

  toggleLike = async (postId, likeStatus) => {
    const postlikeApiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`

    const post = {like_status: likeStatus}
    console.log(`changeLikeToUnlike ${post.like_status}`)
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(post),
    }

    await fetch(postlikeApiUrl, option)
    if (post.like_status) {
      this.setState(prevState => ({
        postDetailsList: prevState.postDetailsList.map(eachPost => {
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
    } else {
      this.setState(prevState => ({
        postDetailsList: prevState.postDetailsList.map(eachPost => {
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
  }

  changeLikeToUnlike = postId => this.toggleLike(postId, false)

  changeUnlikeToLike = postId => this.toggleLike(postId, true)

  getStoryItems = () => {
    const {storiesList} = this.state
    return storiesList.map(eachStory => (
      <li className="story-item" key={eachStory.userId}>
        <img src={eachStory.storyUrl} alt="user story" className="story-img" />
        <p className="user-name">{eachStory.userName}</p>
      </li>
    ))
  }

  getStoriesSuccessView = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <ul>
        <Slider {...settings} className="insta-stories-container">
          {this.getStoryItems()}
        </Slider>
      </ul>
    )
  }

  getFilterStoriesViews = () => {
    const {storyApiStatus} = this.state
    switch (storyApiStatus) {
      case constApiStoriesStatus.inprogress:
        return this.getStoriesLoaderView()
      case constApiStoriesStatus.success:
        return this.getStoriesSuccessView()
      case constApiStoriesStatus.failure:
        return this.getStoriesFailureView()
      default:
        return null
    }
  }

  getPostApiInformations = async () => {
    this.setState({postsApiStatus: constApiStoriesStatus.inprogress})
    const postsApiUrl = 'https://apis.ccbp.in/insta-share/posts'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(postsApiUrl, options)
    const data = await response.json()
    console.log(response)
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
        postDetailsList: updatesPostsList,
        postsApiStatus: constApiStoriesStatus.success,
      })

      console.log(updatesPostsList)
    } else {
      this.setState({postsApiStatus: constApiStoriesStatus.failure})
    }
  }

  onClickTryAgain = () => {
    this.getPostApiInformations()
  }

  onClickStoriesTryAgain = () => {
    this.getUserApiStories()
  }

  getStoriesLoaderView = () => (
    <div className="stories-loader-container" data-testid="loader">
      <Loader
        type="TailSpin"
        color="#4094EF"
        height={50}
        width={50}
        className="loader"
      />
    </div>
  )

  getPostLoaderView = () => (
    <div className="post-loader-container" data-testid="loader">
      <Loader
        type="TailSpin"
        color="#4094EF"
        height={50}
        width={50}
        className="loader"
      />
    </div>
  )

  getPostSuccessView = () => {
    const {postDetailsList} = this.state
    return (
      <SearchCaptionContext.Provider
        value={{
          changeLikeToUnlike: this.changeLikeToUnlike,
          changeUnlikeToLike: this.changeUnlikeToLike,
        }}
      >
        <ul className="posts-conatiner">
          {postDetailsList.map(eachPost => (
            <PostItem post={eachPost} key={eachPost.postId} />
          ))}
        </ul>
      </SearchCaptionContext.Provider>
    )
  }

  getStoriesFailureView = () => (
    <div className="post-failure-container">
      <img
        src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717263356/MyMiniProjectsImages/z4pyf3ixv23dmyuu03by.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-msg">Something went wrong. Please try again</p>
      <button
        type="button"
        className="try-again-btn"
        onClick={this.onClickStoriesTryAgain}
      >
        Try again
      </button>
    </div>
  )

  getPostFailureView = () => (
    <div className="post-failure-container">
      <img
        src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717263356/MyMiniProjectsImages/z4pyf3ixv23dmyuu03by.png"
        alt="failure view"
        className="failure-img"
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

  getFilterPostView = () => {
    const {postsApiStatus} = this.state
    switch (postsApiStatus) {
      case constApiStoriesStatus.inprogress:
        return this.getPostLoaderView()
      case constApiStoriesStatus.success:
        return this.getPostSuccessView()
      case constApiStoriesStatus.failure:
        return this.getPostFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SearchCaptionContext.Consumer>
          {value => {
            const {searchInput, searchPostView} = value

            return searchPostView ? (
              <SearchPost searchCaptionValue={searchInput} />
            ) : (
              <div className="home-page-container">
                {this.getFilterStoriesViews()}
                <hr />
                {this.getFilterPostView()}
              </div>
            )
          }}
        </SearchCaptionContext.Consumer>
      </>
    )
  }
}

export default HomePage
