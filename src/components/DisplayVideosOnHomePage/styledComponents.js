import Styled from 'styled-components'

export const HomeVideoImage = Styled.img`
    height:200px;
    @media screen and (max-width:768px){
        max-width:100%;
    }
    
`

export const HomePageListItems = Styled.li`
    padding:10px;
    max-width: 400px;
    @media screen and (max-width:768px){
        width:100%;
        padding:0px;
        margin-left:-20px;
    }
`
export const ChannalLogo = Styled.img`
    height:48px;
`

export const TitleContainer = Styled.div`
    padding:10px;
`
export const Title = Styled.p`
    font-family:"Roboto";
    font-size:14px;
    font-weight:600;
    color:${props => props.titleTextColor};
`
export const ChannalName = Styled(Title)`
    color:#616e7c;
    font-weight:500;
`

export const ViewCount = Styled(ChannalName)``
export const PublishedAt = Styled(ChannalName)``

export const ChannalContainer = Styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`
export const ViewsContainer = Styled(ChannalContainer)``
