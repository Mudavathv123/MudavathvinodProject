import {Link} from 'react-router-dom'
import {
  HomeVideoImage,
  ChannalContainer,
  ChannalLogo,
  Title,
  ChannalName,
  ViewsContainer,
  ViewCount,
  PublishedAt,
  TitleContainer,
} from '../DisplayVideosOnHomePage/styledComponents'

import {TrendingListItems} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const DisplayVideosOnTrendingPage = props => {
  const {videosList} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videosList
  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleTextColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <TrendingListItems>
            <Link to={`/videos/${id}`}>
              <HomeVideoImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <ChannalContainer>
              <ChannalLogo src={profileImageUrl} alt="channel logo" />
              <TitleContainer>
                <Title titleTextColor={titleTextColor}>{title}</Title>
                <ChannalName>{name}</ChannalName>
                <ViewsContainer>
                  <ViewCount>{viewCount}</ViewCount>
                  <PublishedAt>{publishedAt}</PublishedAt>
                </ViewsContainer>
              </TitleContainer>
            </ChannalContainer>
          </TrendingListItems>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default DisplayVideosOnTrendingPage
