import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    console.log(response)
    console.log(data)
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

  getStoryItems = () => {
    const {storiesList} = this.state
    return storiesList.map(eachStory => (
      <div className="story-item" key={eachStory.userId}>
        <img src={eachStory.storyUrl} alt="user story" className="story-img" />
        <p className="user-name">{eachStory.userName}</p>
      </div>
    ))
  }

  getStoriesSuccessView = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
      <Slider {...settings} className="insta-stories-container">
        {this.getStoryItems()}
      </Slider>
    )
  }

  getFilterStoriesViews = () => {
    const {storyApiStatus} = this.state
    switch (storyApiStatus) {
      case constApiStoriesStatus.inprogress:
        return this.getLoaderView()
      case constApiStoriesStatus.success:
        return this.getStoriesSuccessView()
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

  getLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  getPostSuccessView = () => {
    const {postDetailsList} = this.state
    return (
      <ul className="posts-conatiner">
        {postDetailsList.map(eachPost => (
          <PostItem post={eachPost} key={eachPost.postId} />
        ))}
      </ul>
    )
  }

  getPostFailureView = () => (
    <div className="post-failure-container">
      <img
        src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1717263356/MyMiniProjectsImages/z4pyf3ixv23dmyuu03by.png"
        alt="home failure"
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
        return this.getLoaderView()
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
      <SearchCaptionContext.Consumer>
        {value => {
          const {searchCaptionValue, searchPostView} = value

          return (
            <>
              <Header />
              {searchPostView ? (
                <SearchPost searchCaptionValue={searchCaptionValue} />
              ) : (
                <div className="home-page-container">
                  {this.getFilterStoriesViews()}
                  <hr />
                  {this.getFilterPostView()}
                </div>
              )}
            </>
          )
        }}
      </SearchCaptionContext.Consumer>
    )
  }
}

export default HomePage
