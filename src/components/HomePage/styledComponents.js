import Styled from 'styled-components'

export const UnOrderVideosList = Styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:${props => (props.trending ? 'column' : 'row')};
    align-items:center;
    justify-content:center;
    align-self:${props => (props.trending ? 'center' : 'start')};
    gap:16px;
    flex-wrap:${props => (props.trending ? 'nowrap' : 'wrap')};
    min-width:${props => (props.trending ? '100%' : null)};
    @media screen and (max-width:768px){
        padding:20px;
        max-width:100vw;
    }
`

export const HomePageContainer = Styled.div`
    display:flex;
`

export const SearchInputContainer = Styled.div`
    height:36px;
    border-radius:4px;
    border:1px solid #94a3b8;
    width:400px;
    display:flex;
    align-items:center;
    align-self:center;
    margin-top:20px;
    @media screen and (max-width:768px){
        max-width:80%;
    };
`

export const SearchInput = Styled.input`
    font-size:14px;
    font-family:"Roboto";
    color:${props => props.inputTextColor};
    outline:none;
    border:none;
    padding-left:6px;
    width:100%;
    height:100%;
    background-color:transparent;
`

export const VideoListContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
      min-width:80vw;
      gap:20px;
    @media screen and (max-width:768px){
        width:100vw;
    };
`

export const HomeContainer = Styled.div`
    background-color:${props => props.homeBgColor};
    min-height:100vh;
    @media screen and (max-width:768px){
        max-width:100vw;
    }
`

export const NoVideoImage = Styled.img`
    height:340px;
`

export const Heading = Styled.h1`
    font-size:30px;
    font-family:"Roboto";
    font-weight:800px;
    color:${props => props.trendingHeadColor};
`

export const P = Styled.p`
    font-szie:16px;
    font-family:"Roboto";
    color:${props => (props.add ? '#181818' : '#7e858e')};
`

export const RetryButton = Styled.button`
    height:36px;
    width:100px;
    background-color:${props => (props.add ? 'transparent' : '#4f46e5')};
    font-weight:600;
    font-family"Roboto";
    border:${props => (props.add ? '1.6px solid #000' : 'none')};
    outline:none;
    cursor:pointer;
    border-radius:8px;
    color:${props => (props.add ? '#000' : '#fff')};
    
`

export const NoVideosContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:80vh;
    min-width:80vw;
`
export const LoaderContainer = Styled(NoVideosContainer)``

export const AddLogoImage = Styled.img`
    height:42px;
`
export const AddContainer = Styled.div`
   
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size:cover;
    background-position:center;
    padding:30px;
    width:100%;
    display: ${props => props.removeAdd};
    align-items:center;
    justify-content:space-between;
`
export const SearchButton = Styled.button`
    height:100%;
    width:48px;
    border:none;
    border-left:1px solid #000;
    background-color:${props => props.searchButtonBgColor};
    color:${props => props.searchButtonTextColor};
    outline:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const CloseButton = Styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    outline:none;
    align-self:start;
`
