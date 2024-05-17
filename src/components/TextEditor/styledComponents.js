import Styled from 'styled-components'

export const TextEditorBgContainer = Styled.div`
    height:100vh;
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#25262c;

     @media screen and (max-width:768px) {
         height:100%;
    }
`
export const TextContainer = Styled.div`
    background-color:#1b1c22;
    display:flex;
    flex-direction:row;
    align-items:center;
    min-width:60vh;
    gap:20px;
    padding:20px;

     @media screen and (max-width:768px) {
        flex-direction:column;
    }

`

export const TextEditorHeading = Styled.div`
   
    padding:20px;
`
export const TextArea = Styled.textarea`
    height:100%;
    background-color:transparent;
    min-height:60vh;
    border:none;
    outline:none;
    font-size:18px;
    min-width:400px;
    padding:20px;
    color:#fff;
    font-family:"Roboto";
    font-style:${props => props.italicText};
    font-weight:${props => props.boldText};
    text-decoration:${props => props.underLineText};
    
     @media screen and (max-width:768px) {
         min-width:200px;
    }

`

export const Heading = Styled.h1`
    font-size:36px;
    font-family:"Roboto";
    font-weight:800;
    color:#f1f5f9;
    text-align:center;
      @media screen and (max-width:768px) {
           font-size:24px;
    }
`
export const Image = Styled.img`
    height:400px;

    @media screen and (max-width:768px) {
        height:200px;
    }
`

export const TextAreaContainer = Styled.div`
    background-color:#25262c;
    border-radius:8px;
    border:1px solid #334155;
    border-radius:8px;
`
export const TextButtonContainer = Styled.ul`
    display:flex;
    list-style-type:none;
    align-items:center;
    gap:10px;
    padding:10px;
`
export const CustomButton = Styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    outline:none;
    color: ${props => props.boldTextColor};
`
