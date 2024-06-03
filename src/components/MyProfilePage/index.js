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

class MyProfilePage extends Component {
  state = {
    myProfileInfo: {},
    postsList: [],
    storiesList: [],
    myProfileApiStatus: constApiStatus.initial,
  }

  componentDidMount() {
    this.getMyProfileInformation()
  }

  getMyProfileInformation = async () => {
    this.setState({myProfileApiStatus: constApiStatus.inprogess})
    const myProfileApiUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(myProfileApiUrl, option)
    const data = await response.json()
    if (response.ok) {
      const updatedMyProfiles = {
        id: data.profile.id,
        userId: data.profile.user_id,
        userName: data.profile.user_name,
        profilePic: data.profile.profile_pic,
        followersCount: data.profile.followers_count,
        followingCount: data.profile.following_count,
        userBio: data.profile.user_bio,
        postsCount: data.profile.posts_count,
        posts: data.profile.posts,
        stories: data.profile.stories,
      }

      const updatedPostsList = updatedMyProfiles.posts.map(eachPost => ({
        id: eachPost.id,
        image: eachPost.image,
      }))
      const updatedStoriesList = updatedMyProfiles.stories.map(eachStory => ({
        id: eachStory.id,
        image: eachStory.image,
      }))

      this.setState({
        myProfileInfo: updatedMyProfiles,
        postsList: updatedPostsList,
        storiesList: updatedStoriesList,
        myProfileApiStatus: constApiStatus.success,
      })
    } else {
      this.setState({myProfileApiStatus: constApiStatus.failure})
    }
  }

  getLoaderView = () => (
    <div className="user-profile-loader" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  getMyProfileSuccessView = () => {
    const {myProfileInfo, postsList, storiesList} = this.state
    return (
      <ProfileItems
        userDetails={myProfileInfo}
        postsList={postsList}
        storiesList={storiesList}
        myprofileAlt="myprofile"
      />
    )
  }

  onClickTryAgain = () => {
    this.getMyProfileInformation()
  }

  getMyProfileFailureView = () => (
    <div className="user-profile-post-failure-container">
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

  getFilterMyProfileView = () => {
    const {myProfileApiStatus} = this.state
    switch (myProfileApiStatus) {
      case constApiStatus.inprogess:
        return this.getLoaderView()
      case constApiStatus.success:
        return this.getMyProfileSuccessView()
      case constApiStatus.failure:
        return this.getMyProfileFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="user-profile-page-container">
          {this.getFilterMyProfileView()}
        </div>
      </>
    )
  }
}

export default MyProfilePage
