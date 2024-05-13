import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  Heading,
  LoaderContainer,
  NoVideosContainer,
  NoVideoImage,
  P,
  RetryButton,
} from '../HomePage/styledComponents'
import {
  Title,
  ViewsContainer,
  ViewCount,
  PublishedAt,
  ChannalContainer,
  TitleContainer,
  ChannalLogo,
  ChannalName,
} from '../DisplayVideosOnHomePage/styledComponents'

import {
  VideoItemContainer,
  VideoContentContainer,
  VideoDetailTitle,
  VideoItemDetailsReactPlayer,
  VideoContainer,
  VideoItemDetailsPageContainer,
  VideoPageContainer,
  LikeOrUnLikeUnOrderContainer,
  LikeOrUnLikeItems,
  LikeOrUnLikeButton,
  LikeViewsContainer,
} from './styledComponents'

const constVideoItemDetailsApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetailsPage extends Component {
  state = {
    videoItemDetailsObj: {},
    channelDetails: {},
    videoItemDetailsApiStatus: constVideoItemDetailsApiStatus.initial,
    isLike: false,
    isDislike: false,
    isSavedVideo: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({
      videoItemDetailsApiStatus: constVideoItemDetailsApiStatus.inprogress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoItemDetailsObj: updatedVideosData,
        channelDetails: updatedVideosData.channel,
        videoItemDetailsApiStatus: constVideoItemDetailsApiStatus.success,
      })
    } else {
      this.setState({
        videoItemDetailsApiStatus: constVideoItemDetailsApiStatus.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <NoVideosContainer>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <P>
        We are having some trouble to complete your request. Please try again.
      </P>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  renderSuccessView = () => {
    const {videoItemDetailsObj, channelDetails} = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
    } = videoItemDetailsObj

    const {name, profileImageUrl, subscriberCount} = channelDetails

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLike, isDislike, isSavedVideo} = this.state
          const {isDarkTheme, addToSavedVideos, removeSavedVideo} = value
          const titleTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const savedTitle = isSavedVideo ? 'Saved' : 'Save'

          const onClickLike = () => {
            this.setState(prveState => ({
              isLike: !prveState.isLike,
              isDislike: false,
            }))
          }

          const onClickDislike = () => {
            this.setState(prveState => ({
              isDislike: !prveState.isDislike,
              isLike: false,
            }))
          }

          const onClickAddToSavedVideos = () => {
            if (isSavedVideo) {
              removeSavedVideo(id)
            } else {
              addToSavedVideos({
                ...videoItemDetailsObj,
                ...channelDetails,
              })
            }
          }

          const onClickSaveVideo = () => {
            this.setState(
              prveState => ({
                isSavedVideo: !prveState.isSavedVideo,
              }),
              onClickAddToSavedVideos,
            )
          }

          return (
            <VideoItemContainer>
              <VideoItemDetailsReactPlayer url={videoUrl} controls />
              <VideoContentContainer>
                <VideoDetailTitle titleTextColor={titleTextColor}>
                  {title}
                </VideoDetailTitle>
                <LikeViewsContainer>
                  <ViewsContainer>
                    <ViewCount>{viewCount}</ViewCount>
                    <PublishedAt>{publishedAt}</PublishedAt>
                  </ViewsContainer>
                  <LikeOrUnLikeUnOrderContainer>
                    <LikeOrUnLikeItems>
                      <LikeOrUnLikeButton
                        type="button"
                        onClick={onClickLike}
                        likeColor={isLike ? '#2563eb' : '#64748b'}
                      >
                        <FaRegThumbsUp size="18" aria-label="Like" />
                        Like
                      </LikeOrUnLikeButton>
                    </LikeOrUnLikeItems>
                    <LikeOrUnLikeItems>
                      <LikeOrUnLikeButton
                        type="button"
                        onClick={onClickDislike}
                        likeColor={isDislike ? '#2563eb' : '#64748b'}
                      >
                        <FaRegThumbsDown size="18" aria-label="Like" />
                        Dislike
                      </LikeOrUnLikeButton>
                    </LikeOrUnLikeItems>
                    <LikeOrUnLikeItems>
                      <LikeOrUnLikeButton
                        type="button"
                        onClick={onClickSaveVideo}
                        likeColor={isSavedVideo ? '#2563eb' : '#64748b'}
                      >
                        <MdPlaylistAdd size="18" aria-label="Like" />
                        {savedTitle}
                      </LikeOrUnLikeButton>
                    </LikeOrUnLikeItems>
                  </LikeOrUnLikeUnOrderContainer>
                </LikeViewsContainer>
                <hr />
                <ChannalContainer>
                  <ChannalLogo src={profileImageUrl} alt="channel logo" />
                  <TitleContainer>
                    <ChannalName>{name}</ChannalName>
                    <ViewCount>{subscriberCount} subscribers</ViewCount>
                  </TitleContainer>
                </ChannalContainer>
                <Title titleTextColor={titleTextColor}>{description}</Title>
              </VideoContentContainer>
            </VideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFilterVideoItemDetails = () => {
    const {videoItemDetailsApiStatus} = this.state
    switch (videoItemDetailsApiStatus) {
      case constVideoItemDetailsApiStatus.inprogress:
        return this.renderLoaderView()
      case constVideoItemDetailsApiStatus.success:
        return this.renderSuccessView()
      case constVideoItemDetailsApiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <VideoContainer
              homeBgColor={homeBgColor}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoPageContainer>
                <Sidebar videoItem />
                <VideoItemDetailsPageContainer>
                  {this.renderFilterVideoItemDetails()}
                </VideoItemDetailsPageContainer>
              </VideoPageContainer>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsPage
