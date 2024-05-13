import Styled from 'styled-components'
import ReactPlayer from 'react-player'
import {Title, ViewCount} from '../DisplayVideosOnHomePage/styledComponents'

import {HomeContainer} from '../HomePage/styledComponents'

export const VideoItemContainer = Styled.div`
  min-width:100%;
`

export const VideoContentContainer = Styled.div`
    padding-left:20px;
    max-width:100vw;
    padding:40px;
`

export const VideoDetailTitle = Styled(Title)`
    font-size:16px;
`

export const VideoItemDetailsReactPlayer = Styled(ReactPlayer)`
  max-width:100vw;
  @media screen and (min-width:768px){
    min-width:95%;
    min-height:600px;
    padding:30px;
  }
`

export const VideoContainer = Styled(HomeContainer)`
  background-color:${props => props.homeBgColor}
`

export const VideoItemDetailsPageContainer = Styled.div`
`
export const VideoPageContainer = Styled.div`

  display:flex;
  gap:20px;
`

export const LikeOrUnLikeUnOrderContainer = Styled.li`
  display:flex;
  align-items:center;
  gap:20px;
  list-style-type:none;
`

export const LikeOrUnLikeItems = Styled.li`
  
  display:flex;
  align-items:center;
  gap:6px;
`

export const LikeOrUnLikeButton = Styled.button`
  background-color:transparent;
  border:none;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  outline:none;
  color:${props => props.likeColor};
`

export const LikeViewsContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;

  @media screen and (min-width:768px){
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
`

export const LikeOrDislike = Styled(ViewCount)`
  color:${props => props.likeColor}
`
