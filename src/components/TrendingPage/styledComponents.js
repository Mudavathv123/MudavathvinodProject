import Styled from 'styled-components'

export const TrendingHead = Styled.div`
    display: flex;
    align-items:center;
    gap:20px;
`
export const TrendingLogoContainer = Styled.div`
    background-color: ${props => props.trendingLogoBgColor};
    padding:20px;
    width:100%;
`

export const TrendingPageContainer = Styled.div`
    background-color:${props => props.trendingBgColor};
    min-height:100vh;
`
