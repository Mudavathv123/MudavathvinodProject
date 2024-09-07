import Styled from 'styled-components'

export const Input = Styled.input`
    height:${props => (props.checkbox ? '16px' : '36px')};
    width:${props => (props.checkbox ? '16px' : '100%')};
    outline:none;
    border-radius:4px;
    padding-left:6px;
    font-size:16px;
    color:${props => props.labelColor};
    font-family:"Roboto";
    border:1px solid ${props => props.inputBorderColor};
    background-color:transparent;
`
export const Label = Styled.label`
    font-family:"Roboto";
    font-weight:${props => (props.checkbox ? '400' : '600')};
    color:${props => props.labelColor};
    font-size:14px;
    margin-bottom:6px;
`
export const Form = Styled.form`
    @media screen and (min-width:768px){
        min-height:400px;
        width:400px;
    };
        width:100%;
        max-width:400px;
        padding:20px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:20px;
        background-color:${props => props.formBgColor};
        box-shadow:10px 10px 8px ${props =>
          props.formShadowColor}, -10px -10px 20px ${props =>
  props.formShadowColor};
        border-radius:10px;
    
`
export const Logo = Styled.img`
    height:36px;
    @media screen and (max-width:768px){
        height:24px;
    }
    
`

export const LoginButton = Styled.button`
    height:40px;
    width:100%;
    font-family:"Roboto";
    font-weight:600;
    color:#ffffff;
    background-color:#3b82f6;
    border:none;
    border-radius:8px;
    outline:none;
    cursor:pointer;
`
export const LoginPageContainer = Styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    background-color:${props => props.loginBgColor};
`
export const InputContainer = Styled.div`
    display:${props => (props.checkboxContainer ? 'flex' : 'block')};
    align-items:center;
    align-self:start;
    gap:10px;
    width: 100%;
    
`

export const ErrorMessage = Styled.p`
 font-size:16px;
 font-family:"Roboto";
 color:#ff0000; 
 align-self:${props => (props.authenticationError ? 'start' : null)};
 margin:${props => (props.authenticationError ? '0px' : null)};  
`
