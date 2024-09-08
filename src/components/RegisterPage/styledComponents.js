import Styled from 'styled-components'

export const CustomeButton = Styled.button`
    height:36px;
    width:100%;
    background-color: #2563eb;
    font-size:16px;
    font-family:"Roboto";
    font-weight:600;
    color:#fff;
    border-radius:8px;
    border:none;
    outline:none;
    cursor:pointer;
`
export const Form = Styled.form`
    min-height:400px;
    min-width:300px;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:10px;
`

export const Heading = Styled.h1`
    font-size:40px;
    font-family:"Roboto";
    font-weight:800;
    color:#334155;
    text-align:center;
`

export const Input = Styled.input`
    min-height:36px;
    min-width:100%;
    border-radius:4px;
    border:1.5px solid #64748b;
    outline:none;
    font-size:14px;
    font-family:"Roboto";
    font-weight:500;
    color:#000;
    padding-left:10px;
`

export const Label = Styled.label`
    font-size:14px;
    font-family:"Roboto";
    font-weight:500;
    color:#7b8794;
`

export const RegisterContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:20px;
    padding:20px;
`

export const RegisterLogo = Styled.img`
    height:300px;
`

export const RegisterPageContainer = Styled.div`
    height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const Select = Styled(Input)``

export const ErrorMsg = Styled.p`
    font-size:14px;
    font-family:"Roboto";
    font-weight:500;
    color:#ff0b37;
`
