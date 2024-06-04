import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
import Popup from 'reactjs-popup'
import './index.css'

const ProfileItems = props => {
  const {userDetails, postsList, storiesList, myprofileAlt} = props
  const {
    userId,
    userName,
    profilePic,
    followersCount,
    followingCount,
    userBio,
    postsCount,
  } = userDetails

  const profileAlt =
    myprofileAlt === 'myprofile' ? 'user profile' : 'my profile'
  const mystoryAlt = myprofileAlt === 'myprofile' ? 'user story' : 'my story'
  const userpostAlt = myprofileAlt === 'myprofile' ? 'user post' : 'my post'

  return (
    <div className="profile-items-container">
      <div className="user-profile-top-section">
        <div className="max-device-profile-container">
          <div className="user-profile-container">
            <div className="user-profile-image-container">
              <h1 className="user-id">{userId}</h1>
              <img
                src={profilePic}
                alt={profileAlt}
                className="profile-image"
              />
              <h1 className="username">{userName}</h1>
            </div>
            <ul className="followers-list-container">
              <li className="followers-item-container">
                <p className="post-count">{postsCount}</p>
                <p className="posts">posts</p>
              </li>
              <li className="followers-item-container">
                <p className="post-count">{followersCount}</p>
                <p className="posts">followers</p>
              </li>
              <li className="followers-item-container">
                <p className="post-count">{followingCount}</p>
                <p className="posts">following</p>
              </li>
            </ul>
          </div>

          <p className="user-bio">{userBio}</p>
        </div>
        <div className="min-device-profile-container">
          <img src={profilePic} alt={mystoryAlt} className="profile-image" />
          <div className="profile-description">
            <h1 className="min-username">{userName}</h1>
            <ul className="followers-list-container">
              <li className="followers-item-container">
                <p className="post-count">{postsCount}</p>
                <p className="posts">posts</p>
              </li>
              <li className="followers-item-container">
                <p className="post-count">{followersCount}</p>
                <p className="posts">followers</p>
              </li>
              <li className="followers-item-container">
                <p className="post-count">{followingCount}</p>
                <p className="posts">following</p>
              </li>
            </ul>
            <h1 className="min-user-id">{userId}</h1>
            <p className="user-bio">{userBio}</p>
          </div>
        </div>
        <ul className="stories-list-container">
          {storiesList.map(eachStory => (
            <li className="stories-item-container" key={eachStory.id}>
              <img
                src={eachStory.image}
                alt="stories"
                className="stories-img"
              />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <p className="post-grid">
        <BsGrid3X3 size="20" />
        Posts
      </p>
      {postsList.length > 0 ? (
        <ul className="user-post-list-container">
          {postsList.map(eachPost => (
            <li className="user-post-item" key={eachPost.id}>
              <Popup
                modal
                trigger={
                  <img
                    src={eachPost.image}
                    alt={userpostAlt}
                    className="user-post-image"
                  />
                }
              >
                <div className="show-post-container">
                  <img
                    src={eachPost.image}
                    alt={userpostAlt}
                    className="popup-post-image"
                  />
                </div>
              </Popup>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-post-yet-container">
          <div className="no-post-yet">
            <BiCamera size="26" className="bi-camera" />
          </div>
          <p className="no-post-yet-text">No Posts Yet</p>
        </div>
      )}
    </div>
  )
}

export default ProfileItems
