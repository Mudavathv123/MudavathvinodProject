import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DisplayVideosOnTrendingPage from '../DisplayVideosOnTrendingPage'
import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  UnOrderVideosList,
  HomePageContainer,
  VideoListContainer,
  Heading,
} from '../HomePage/styledComponents'

import {
  TrendingHead,
  TrendingLogoContainer,
  TrendingPageContainer,
} from '../TrendingPage/styledComponents'

import {
  NoSavedVideosConatiner,
  NoSavedVideoImage,
  NoSavedVideoHeading,
  NoSavedVideodDescription,
} from './styledComponents'

class SavedPage extends Component {
  renderSavedVideosList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedList, isDarkTheme} = value
        console.log(savedList)
        const textColor = isDarkTheme ? ' #f9f9f9' : ' #181818'
        const savedListLangth = savedList.length > 0
        return savedListLangth ? (
          <UnOrderVideosList trending>
            {savedList.map(eachVideoData => (
              <DisplayVideosOnTrendingPage
                videosList={eachVideoData}
                key={eachVideoData.id}
              />
            ))}
          </UnOrderVideosList>
        ) : (
          <NoSavedVideosConatiner>
            <NoSavedVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideoHeading textColor={textColor}>
              No saved videos found
            </NoSavedVideoHeading>
            <NoSavedVideodDescription>
              Save your videos by clicking a button
            </NoSavedVideodDescription>
          </NoSavedVideosConatiner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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
              data-testid="savedVideos"
            >
              <Header />
              <HomePageContainer>
                <Sidebar />
                <VideoListContainer>
                  <TrendingLogoContainer
                    trendingLogoBgColor={trendingLogoBgColor}
                  >
                    <TrendingHead>
                      <MdPlaylistAdd size="48" aria-label="saved videos" />
                      <Heading trendingHeadColor={trendingHeadColor} trending>
                        Saved Videos
                      </Heading>
                    </TrendingHead>
                  </TrendingLogoContainer>
                  {this.renderSavedVideosList()}
                </VideoListContainer>
              </HomePageContainer>
            </TrendingPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedPage
