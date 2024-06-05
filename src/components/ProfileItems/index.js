import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
import './index.css'

const ProfileItems = props => {
  const {userDetails, postsList, storiesList, myprofileAlt} = props
  console.log(userDetails)
  console.log(postsList)
  console.log(storiesList)
  console.log(myprofileAlt)
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
    myprofileAlt === 'myprofile' ? 'my profile' : 'user profile'
  const mystoryAlt = myprofileAlt === 'myprofile' ? 'my story' : 'user story'
  const userpostAlt = myprofileAlt === 'myprofile' ? 'my post' : 'user post'

  return (
    <div className="profile-items-container">
      <div className="user-profile-top-section">
        <div className="max-device-profile-container">
          <div className="user-profile-container">
            <div className="user-profile-image-container">
              <p className="user-id">{userId}</p>
              <img
                src={profilePic}
                alt={profileAlt}
                className="profile-image"
              />
              <h1 className="username">{userName}</h1>
            </div>
            <ul className="followers-list-container">
              <li className="followers-item-container">
                {postsCount}
                <span className="posts">posts</span>
              </li>
              <li className="followers-item-container">
                {followersCount}
                <span className="posts">followers</span>
              </li>
              <li className="followers-item-container">
                {followingCount}
                <span className="posts">following</span>
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
                {postsCount}
                <span className="posts">posts</span>
              </li>
              <li className="followers-item-container">
                {followersCount}
                <span className="posts">followers</span>
              </li>
              <li className="followers-item-container">
                {followingCount}
                <span className="posts">following</span>
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
      <h1 className="post-grid">
        <BsGrid3X3 size="20" />
        Posts
      </h1>

      <ul className="user-post-list-container">
        {postsList.length > 0 ? (
          postsList.map(eachPost => (
            <li className="user-post-item" key={eachPost.id}>
              <img src={eachPost.image} alt={userpostAlt} />
            </li>
          ))
        ) : (
          <div className="no-post-yet-container">
            <div className="no-post-yet">
              <BiCamera size="26" className="bi-camera" />
            </div>
            <h1 className="no-post-yet-text">No Posts</h1>
          </div>
        )}
      </ul>
    </div>
  )
}

export default ProfileItems
