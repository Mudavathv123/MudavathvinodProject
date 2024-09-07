import Styled from 'styled-components'

export const PageNotFoundConatiner = Styled.div`
    min-width:100vh;
    background-color:${props => props.notfoundBgColor};
`

export const NotFoundContainer = Styled.div`
    display:flex;
    gap:30px;
`

export const NotFoundImageContainer = Styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;
    min-width:80vw;
`
export const NotFoundHeading = Styled.h1`
    font-size:28px;
    font-family:"Roboto";
    font-weight:600;
    color:${props => props.textColor};
`
export const NotFoundDescription = Styled.p`
    font-size:16px;
    font-family:"Roboto"
    font-weight:600;
    color:#616e7c;
`

export const NotFoundImage = Styled.img`
    height:400px;
    @media screen and (max-width:768px){
        height:300px;
    }
`
