import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch, IoIosClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  UnOrderVideosList,
  HomePageContainer,
  VideoListContainer,
  SearchInputContainer,
  SearchInput,
  HomeContainer,
  NoVideosContainer,
  NoVideoImage,
  Heading,
  P,
  AddLogoImage,
  LoaderContainer,
  RetryButton,
  AddContainer,
  SearchButton,
  CloseButton,
} from './styledComponents'
import DisplayVideosOnHomePage from '../DisplayVideosOnHomePage'
import NxtWatchContext from '../../Context/NxtWatchContext'

const constHomeApiStatus = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePage extends Component {
  state = {
    homeVideosList: [],
    searchInput: '',
    homeApiStatus: constHomeApiStatus.initial,
    removeAddDisplay: false,
  }

  componentDidMount() {
    this.getHomeApiVideos()
  }

  getHomeApiVideos = async () => {
    const {searchInput} = this.state
    this.setState({homeApiStatus: constHomeApiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(homeVideosApiUrl, options)
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

      this.setState({
        homeVideosList: updatedVideosData,
        homeApiStatus: constHomeApiStatus.success,
      })
    } else {
      this.setState({homeApiStatus: constHomeApiStatus.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getHomeApiVideos)
  }

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getHomeApiVideos)
  }

  onClickRetry = () => {
    this.getHomeApiVideos()
  }

  onClickSearchRetry = () => {
    this.setState({searchInput: ''}, this.getHomeApiVideos)
  }

  renderHomeVideosList = () => {
    const {homeVideosList} = this.state
    return (
      <UnOrderVideosList>
        {homeVideosList.map(eachVideoData => (
          <DisplayVideosOnHomePage
            videosList={eachVideoData}
            key={eachVideoData.id}
          />
        ))}
      </UnOrderVideosList>
    )
  }

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const trendingHeadColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <NoVideosContainer>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading trendingHeadColor={trendingHeadColor}>
              No Search results found
            </Heading>
            <P>Try different key words or remove search filter</P>
            <RetryButton type="button" onClick={this.onClickSearchRetry}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const trendingHeadColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <NoVideosContainer>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure"
            />
            <Heading trendingHeadColor={trendingHeadColor}>
              Oops! Something Went Wrong
            </Heading>
            <P>
              We are having some trouble to complete your request. Please try
              again.
            </P>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    const isVidoes = homeVideosList.length > 0
    return isVidoes ? this.renderHomeVideosList() : this.renderNoVideosView()
  }

  renderFilterHomeApiList = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case constHomeApiStatus.inprogress:
        return this.renderLoaderView()
      case constHomeApiStatus.success:
        return this.renderSuccessView()
      case constHomeApiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {removeAddDisplay} = this.state
          const {isDarkTheme} = value
          const homeBgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const inputTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const searchButtonBgColor = isDarkTheme ? '#cbd5e1' : '#212121'
          const searchButtonTextColor = isDarkTheme ? '#231f20' : '#f9f9f9'

          const onClickRemoveAdd = () => {
            this.setState({removeAddDisplay: true})
          }

          const removeAdd = removeAddDisplay ? 'none' : 'flex'

          return (
            <HomeContainer homeBgColor={homeBgColor} data-testid="home">
              <Header />
              <HomePageContainer>
                <Sidebar />
                <VideoListContainer>
                  <AddContainer data-testid="banner" removeAdd={removeAdd}>
                    <div>
                      <AddLogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <P add>Buy Nxt Watch Premium prepaid plans with UPI</P>
                      <RetryButton type="button" add>
                        GET IT NOW
                      </RetryButton>
                    </div>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={onClickRemoveAdd}
                    >
                      <IoIosClose size="24" aria-label="closeAdd" />
                    </CloseButton>
                  </AddContainer>
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      inputTextColor={inputTextColor}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchInput}
                      searchButtonBgColor={searchButtonBgColor}
                      searchButtonTextColor={searchButtonTextColor}
                    >
                      <IoIosSearch size="20" aria-label="searchIcon" />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderFilterHomeApiList()}
                </VideoListContainer>
              </HomePageContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomePage
