import Styled from 'styled-components'

export const GameContainer = Styled.div`
    height:100vh;
    background-color:#223a5f;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    @media screen and (max-width:768px){
        padding:30px;
    }
`

export const CardContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:2px solid #ffffff;
    border-radius:16px;
    padding:10px;
    min-width:800px;
    @media screen and (max-width:768px){
        min-width:100%;
    }
`

export const Heading = Styled.h1`
    font-family:"Bree Serif";
    font-size:24px;
    color:#ffffff;
    font-weight:500;
     @media screen and (max-width:768px){
        font-size:'14px';
    }
`

export const P = Styled.p`
    font-family: ${props => (props.score ? 'Roboto' : 'Bree Serif')};
    font-size:24px;
    color: #223a5f;
    font-weight:600px;
`

export const ScoreContainer = Styled.div`
    background-color:#ffffff;
    border-radius:16px;
    width:140px;
    max-height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
     @media screen and (max-width:768px){
        width:100px;
    }
`
export const UnOderList = Styled.ul`
    list-style-type:none;
    display flex;
    align-items:center;
    gap:30px;
    flex-wrap:wrap;
    max-width:600px;
    justify-content:center;
     @media screen and (max-width:768px){
        min-width:400px;
        flex-wrap:wrap;
    }
`

export const RuleButton = Styled.button`
    height:40px;
    width:120px;
    font-family:"Roboto";
    font-weight:600;
    color:#223a5f;
    border:none;
    border-radius:8px;
    cursor:pointer;
    background-color:#ffffff;
    align-self:${props => (props.playAgain ? 'center' : 'end')};
`
export const PopupImageContainer = Styled.div`

background-color:#ffffff;
padding:30px;
display:flex;
flex-direction:column;
align-items:center;
@media screen and (max-width:768px){
        width:60%;
        height:60%;
        margin-left:50px;
    }
`

export const IMG = Styled.img`
    height:500px;
    width:700px;
     @media screen and (max-width:768px){
        width:100%;
        height:100%;
    }
`

export const CloseButton = Styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    align-self:end;
`
export const GameResultViewContainer = Styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:768px){
        gap:20px;
    }
`
export const GameResultImageContainer = Styled.div`
    display:flex;
    gap:30px;
    align-items:center;
    justify-content:center;
`
export const PlayAgainButton = Styled(RuleButton)`
 width:200px;
 @media screen and (max-width:768px){
        width:160px;
        margin-bottom:20px;
    }
`
export const ResultIMG = Styled.img`
    height:200px;
    @media screen and (max-width:768px){
        height:120px;
    }
`

export const Result = Styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:10px;
    justify-content:center;
`
