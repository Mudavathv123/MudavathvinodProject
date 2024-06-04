import {Link} from 'react-router-dom'
import {BsHeart} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import SearchCaptionContext from '../../context/SearchCaptionContext'
import './index.css'

const PostItem = props => {
  const {post, showSearchPostItemStyle} = props
  const {
    userId,
    postId,
    userName,
    profilePic,
    postDetails,
    likesCount,
    comments,
    createdAt,
    likeStatus,
  } = post

  const {imageUrl, caption} = postDetails

  const postItemClassName =
    showSearchPostItemStyle === 'searchPost'
      ? 'search-post-item-container'
      : 'post-item-container'

  const postImgClassName =
    showSearchPostItemStyle === 'searchPost' ? 'search-post-img' : 'post-img'

  return (
    <SearchCaptionContext.Consumer>
      {value => {
        const {changeLikeToUnlike, changeUnlikeToLike} = value

        const clickToUnLike = () => {
          changeLikeToUnlike(postId)
        }

        const clickToLike = () => {
          changeUnlikeToLike(postId)
        }

        return (
          <li className={postItemClassName}>
            <div className="profile-logo-container">
              <Link to={`/users/${userId}`}>
                <img
                  src={profilePic}
                  alt="post author profile"
                  className="profile_image"
                />
              </Link>
              <p className="profile_name">{userName}</p>
            </div>
            <img src={imageUrl} alt="post" className={postImgClassName} />
            <div className="post-description">
              <div className="likes-container">
                {likeStatus ? (
                  <button
                    className="likes-btn"
                    type="button"
                    aria-label="heartBtn"
                    data-testid="unLikeIcon"
                    onClick={clickToUnLike}
                  >
                    <FcLike size="20" />
                  </button>
                ) : (
                  <button
                    className="likes-btn"
                    type="button"
                    aria-label="heartBtn"
                    data-testid="likeIcon"
                    onClick={clickToLike}
                  >
                    <BsHeart size="18" />
                  </button>
                )}

                <button
                  className="likes-btn"
                  type="button"
                  aria-label="commentBtn"
                >
                  <FaRegComment size="18" />
                </button>
                <button
                  className="likes-btn"
                  type="button"
                  aria-label="shareBtn"
                >
                  <BiShareAlt size="18" />
                </button>
              </div>
              <p className="bold-text">{likesCount}</p>
              <p className="caption">{caption}</p>
              {comments.map(eachComment => (
                <p className="comment" key={eachComment.userId}>
                  <span className="bold-text">{eachComment.userName}</span>
                  {eachComment.comment}
                </p>
              ))}
              <p className="posted-time">{createdAt}</p>
            </div>
          </li>
        )
      }}
    </SearchCaptionContext.Consumer>
  )
}

export default PostItem
