import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProfileItems from '../ProfileItems'
import './index.css'

const constApiStatus = {
  initial: 'INITIAL',
  inprogess: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserProfilePage extends Component {
  state = {
    userProfileInfo: {},
    postsList: [],
    storiesList: [],
    userProfileApiStatus: constApiStatus.initial,
  }

  componentDidMount() {
    this.getUserProfileInformation()
  }

  getUserProfileInformation = async () => {
    this.setState({userProfileApiStatus: constApiStatus.inprogess})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const userProfileApiUrl = `https://apis.ccbp.in/insta-share/users/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(userProfileApiUrl, option)
    const data = await response.json()
    if (response.ok) {
      const updatedUserProfiles = {
        id: data.user_details.id,
        userId: data.user_details.user_id,
        userName: data.user_details.user_name,
        profilePic: data.user_details.profile_pic,
        followersCount: data.user_details.followers_count,
        followingCount: data.user_details.following_count,
        userBio: data.user_details.user_bio,
        postsCount: data.user_details.posts_count,
        posts: data.user_details.posts,
        stories: data.user_details.stories,
      }

      const updatedPostsList = updatedUserProfiles.posts.map(eachPost => ({
        id: eachPost.id,
        image: eachPost.image,
      }))
      const updatedStoriesList = updatedUserProfiles.stories.map(eachStory => ({
        id: eachStory.id,
        image: eachStory.image,
      }))

      this.setState({
        userProfileInfo: updatedUserProfiles,
        postsList: updatedPostsList,
        storiesList: updatedStoriesList,
        userProfileApiStatus: constApiStatus.success,
      })
    } else {
      this.setState({userProfileApiStatus: constApiStatus.failure})
    }
  }

  getLoaderView = () => (
    <div className="user-profile-loader" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  getUserProfileSuccessView = () => {
    const {userProfileInfo, postsList, storiesList} = this.state
    return (
      <ProfileItems
        userDetails={userProfileInfo}
        postsList={postsList}
        storiesList={storiesList}
        myprofileAlt="userProfile"
      />
    )
  }

  onClickTryAgain = () => {
    this.getUserProfileInformation()
  }

  getUserProfileFailureView = () => (
    <div className="user-profile-post-failure-container">
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

  getFilterUserProfileView = () => {
    const {userProfileApiStatus} = this.state
    switch (userProfileApiStatus) {
      case constApiStatus.inprogess:
        return this.getLoaderView()
      case constApiStatus.success:
        return this.getUserProfileSuccessView()
      case constApiStatus.failure:
        return this.getUserProfileFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="user-profile-page-container">
          {this.getFilterUserProfileView()}
        </div>
      </>
    )
  }
}

export default UserProfilePage
