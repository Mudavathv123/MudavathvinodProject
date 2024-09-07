import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DisplayVideosOnTrendingPage from '../DisplayVideosOnTrendingPage'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  UnOrderVideosList,
  HomePageContainer,
  VideoListContainer,
  Heading,
  LoaderContainer,
  NoVideosContainer,
  NoVideoImage,
  P,
  RetryButton,
} from '../HomePage/styledComponents'

import {
  TrendingHead,
  TrendingLogoContainer,
  TrendingPageContainer,
} from './styledComponents'

const constTrendingApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingPage extends Component {
  state = {
    trendingVideosList: [],
    trendingApiStatus: constTrendingApiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingApiVideosList()
  }

  getTrendingApiVideosList = async () => {
    this.setState({trendingApiStatus: constTrendingApiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosData = data.videos.map(eachVideoData => ({
        id: eachVideoData.id,
        title: eachVideoData.title,
        thumbnailUrl: eachVideoData.thumbnail_url,
        channel: {
          name: eachVideoData.channel.name,
          profileImageUrl: eachVideoData.channel.profile_image_url,
        },
        viewCount: eachVideoData.view_count,
        publishedAt: eachVideoData.published_at,
      }))
      console.log(updatedVideosData)
      this.setState({
        trendingVideosList: updatedVideosData,
        trendingApiStatus: constTrendingApiStatus.success,
      })
    } else {
      this.setState({trendingApiStatus: constTrendingApiStatus.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingApiVideosList()
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

  renderTrendingVideosList = () => {
    const {trendingVideosList} = this.state
    return (
      <UnOrderVideosList trending>
        {trendingVideosList.map(eachVideoData => (
          <DisplayVideosOnTrendingPage
            videosList={eachVideoData}
            key={eachVideoData.id}
          />
        ))}
      </UnOrderVideosList>
    )
  }

  renderFilterTrendingApiList = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case constTrendingApiStatus.inprogress:
        return this.renderLoaderView()
      case constTrendingApiStatus.success:
        return this.renderTrendingVideosList()
      case constTrendingApiStatus.failure:
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
          const trendingBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const trendingLogoBgColor = isDarkTheme ? '#0f0f0f' : '#cccccc'
          const trendingHeadColor = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <TrendingPageContainer
              trendingBgColor={trendingBgColor}
              data-testid="trending"
            >
              <Header />
              <HomePageContainer>
                <Sidebar />
                <VideoListContainer>
                  <TrendingLogoContainer
                    trendingLogoBgColor={trendingLogoBgColor}
                  >
                    <TrendingHead>
                      <FaFire size="48" aria-label="trending" />
                      <Heading trendingHeadColor={trendingHeadColor} trending>
                        Trending
                      </Heading>
                    </TrendingHead>
                  </TrendingLogoContainer>
                  {this.renderFilterTrendingApiList()}
                </VideoListContainer>
              </HomePageContainer>
            </TrendingPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingPage
