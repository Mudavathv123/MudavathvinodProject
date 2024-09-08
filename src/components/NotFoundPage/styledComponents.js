import Styled from 'styled-components'

export const NotFoundImage = Styled.img`
    height:400px;

    @media screen and (max-width:768px){
        height:200px;
    }
`

export const Heading = Styled.h1`
    font-size:36px;
    fot-family:"Roboto";
    font-weight:900;
    color:#000;

`

export const Description = Styled.p`
    font-size:16px;
    fot-family:"Roboto";
    font-weight:500;
    color: #7b8794;

`
export const NotFoundPageContainer = Styled.div`
    height:100vh;
    display:grid;
    place-items:center;
    gap:10px;
`
