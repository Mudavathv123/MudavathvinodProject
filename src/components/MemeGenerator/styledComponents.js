// Style your components here
import Styled from 'styled-components'

export const MemeGeneratorContainer = Styled.div`
    height:100vh;
    display:flex;
    padding:30px;
    gap:40px;
    align-items:center;
`
export const Heading = Styled.h1`
    color:#35469c;
    font-family:"Open Sarif";
    font-size:40px;
    align-self:center
`
export const Label = Styled.label`
    font-family:"Roboto"
    color:#7e858e;
    
`

export const Input = Styled.input`
    height:36px;
    padding-left:10px;
    border-radius:6px;
    outline:none;
     width:100%;
    border:1px solid #d7dfe9;
`
export const Select = Styled(Input)`
    color:#000;
    font-weight:600;
   
`

export const Button = Styled.button`
    height:38px;
    width:140px;
    font-family:"Opens Serif"
    font-weight:600;
    color:#fff;
    border:none;
    background-color:#0b69ff;
    border-radius:8px;
    outline:none;
    cursor:pointer;
`

export const P = Styled.p`
    font-family:"Opens Serif";
    font-size:${props => props.fontSize}px;
    font-weight:600px;
    color:#ffff;
`

export const Output = Styled.div`
    background-image: url(${props => props.imageUrl});
    background-size:cover;
    background-position:center;
    height:400px;
    width:600px;
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

export const Form = Styled.form`
    height:600px;
    width:600px;
    padding:30px;
    display:flex;
    flex-direction:column;
    gap:20px;
`
