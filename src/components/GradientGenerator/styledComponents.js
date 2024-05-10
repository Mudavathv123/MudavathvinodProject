// Style your elements here
import Styled from 'styled-components'

export const Heading = Styled.h1`
    font-family:'Roboto';
    font-weight:800;
    font-size:32px;
    color:#fff;
    @media screen and (max-width:768px){
        font-size:22px;
        text-align:center;
    }
`

export const P = Styled.p`
    font-size:16px;
    font-family:"Roboto";
    color: #ededed;
`

export const UnOderList = Styled.ul`
list-style-type:none;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
 @media screen and (max-width:768px){
        flex-wrap:wrap;
    }
`


export const Input = Styled.input`
    height:40px;
    width:98px;
    outline:none;
    border:none;
    border-radius:8px;
    background-color:transparent;
`

export const Button = Styled.button`
    height:40px;
    width:140px;
    border:none;
    border-radius:8px;
    outline:none;
    cursor:pointer;
    font-family:"Roboto";
    font-weight:600;
    color:#1e293b;
    background-color: #00c9b7;

`

export const AppContainer = Styled.div`
    margin:0px;
    box-sizing:border-box;
    height:100vh;
    background:linear-gradient(${props => props.gradientValue});
    background-size:cover;
    background-position:center;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
    
`

export const InputContainer = Styled.div`
    display:flex;
    aligin-items:center;
    justify-content:center;
    gap:30px;
`
export const InputCard = Styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    
`
