import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DisplayVideosOnGamePage from '../DisplayVideosOnGamePage'
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
} from '../TrendingPage/styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const constGameApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamePage extends Component {
  state = {
    gameVideosList: [],
    gameApiStatus: constGameApiStatus.initial,
  }

  componentDidMount() {
    this.getApiGameVideosList()
  }

  getApiGameVideosList = async () => {
    this.setState({gameApiStatus: constGameApiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const gameVideosApiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gameVideosApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideosData = data.videos.map(eachVideoData => ({
        id: eachVideoData.id,
        title: eachVideoData.title,
        thumbnailUrl: eachVideoData.thumbnail_url,
        viewCount: eachVideoData.view_count,
      }))
      console.log(updatedVideosData)
      this.setState({
        gameVideosList: updatedVideosData,
        gameApiStatus: constGameApiStatus.success,
      })
    } else {
      this.setState({gameApiStatus: constGameApiStatus.failure})
    }
  }

  onClickRetry = () => {
    this.getApiGameVideosList()
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

  renderGameVideosList = () => {
    const {gameVideosList} = this.state
    return (
      <UnOrderVideosList>
        {gameVideosList.map(eachVideoData => (
          <DisplayVideosOnGamePage
            videosList={eachVideoData}
            key={eachVideoData.id}
          />
        ))}
      </UnOrderVideosList>
    )
  }

  renderFilterGameApiList = () => {
    const {gameApiStatus} = this.state
    switch (gameApiStatus) {
      case constGameApiStatus.inprogress:
        return this.renderLoaderView()
      case constGameApiStatus.success:
        return this.renderGameVideosList()
      case constGameApiStatus.failure:
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
              data-testid="gaming"
            >
              <Header />
              <HomePageContainer>
                <Sidebar />
                <VideoListContainer>
                  <TrendingLogoContainer
                    trendingLogoBgColor={trendingLogoBgColor}
                    trending
                  >
                    <TrendingHead>
                      <FaGamepad size="48" aria-label="game videos" />
                      <Heading trendingHeadColor={trendingHeadColor} trending>
                        Gaming
                      </Heading>
                    </TrendingHead>
                  </TrendingLogoContainer>
                  {this.renderFilterGameApiList()}
                </VideoListContainer>
              </HomePageContainer>
            </TrendingPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamePage
