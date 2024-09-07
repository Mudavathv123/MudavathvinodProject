import {Link} from 'react-router-dom'
import {
  HomePageListItems,
  HomeVideoImage,
  ChannalContainer,
  Title,
  ViewsContainer,
  ViewCount,
  PublishedAt,
  TitleContainer,
} from '../DisplayVideosOnHomePage/styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const DisplayVideosOnGamePage = props => {
  const {videosList} = props
  const {id, title, thumbnailUrl, viewCount} = videosList
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <HomePageListItems>
            <Link to={`/videos/${id}`}>
              <HomeVideoImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <ChannalContainer>
              <TitleContainer>
                <Title titleTextColor={titleTextColor}>{title}</Title>
                <ViewsContainer>
                  <ViewCount>{viewCount}</ViewCount>
                  <PublishedAt>Watching Worldwide</PublishedAt>
                </ViewsContainer>
              </TitleContainer>
            </ChannalContainer>
          </HomePageListItems>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default DisplayVideosOnGamePage
