// Style your elements here
import Styled from 'styled-components'

export const CrediCardContainer = Styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:768px) {
        flex-direction:row;
    }
  `

export const CardBgContainer = Styled.div`
    background-color:#3b4b69;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:30px;
    justify-content:start;
    align-items:center;

`

export const PaymentBgContainer = Styled(CardBgContainer)`
    background-color:#ffffff;
     justify-content:center;
`

export const Heading = Styled.h1`
    font-family:"Roboto";
    font-weight:900;
    color:#ffffff;
    text-decoration:underline;
    text-decoration-color: #ffd773;
`

export const PaymentHeading = Styled.h1`
    font-family:"Roboto";
    font-weight:900;
    color:#344e7a;
`

export const Cardumber = Styled.p`
    font-family:"Roboto";
    font-size:28px;
    font-weight:900;
    color:#ffffff;
`

export const HolderName = Styled.p`
    font-family:"Roboto";
    font-size:20px;
    font-weight:900;
    color:#ffffff;
`

export const Name = Styled.p`
    font-family:"Roboto";
    font-size:16px;
    color:#ffffff;
   
`

export const Form = Styled.form`
    padding:20px;
    border-radius:8px;
    box-shadow: 10px 10px 20px  #c3cad9, -10px -10px 20px  #c3cad9;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
`

export const Input = Styled.input`
    outline:none;
    boder:1.5px solid #475569;
    height:36px;
    min-width:100%;
    font-size:16px;
    font-family:"Roboto";
    padding-left:10px;
    
    @media screen and (min-width:768px){
        min-width:300px;
    }
`

export const Card = Styled.div`
    background-image:url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
    background-size:cover;
    background-position:start;
    border-radius:8px;
    padding:30px;
    height:240px;
    width:400px;

    @media screen and (max-width:768px){
        max-width:100%;
        max-height:200px;

    }
`
