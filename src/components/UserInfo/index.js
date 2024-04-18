// Write your JS code here
import './index.css'

const UserInfo = () => {
  return (
    <div className="userinfo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="userinfo-img"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-description">Software developer at UK</p>
    </div>
  )
}
export default UserInfo
