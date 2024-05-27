// Style your elements here
import Styled from 'styled-components'

export const ReadMoreContainer = Styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
  `

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    padding:10px;

    @media screen and (min-width:768px){
        max-width:400px;
    }

    @media screen and (max-width:768px){
        max-width:80vh;
    }

`
export const Heading = Styled.h1`
    font-family:"Roboto";
    font-weight:800;
    color:#1e293b;

`

export const Description = Styled.p`
    font-size:14px;
    color:#334155;
   

`
export const ReactImg = Styled.img`
    width:100%;
     @media screen and (max-width:768px){
        max-width:60vw;
    }
`
export const ReadMoreBtn = Styled.button`
    height:36px;
    width:120px;
    border-radius:8px;
    border:none;
    color:#ffffff;
    font-family:"Roboto";
    font-size:14px;
    cursor:pointer;
    background-color:#1f81ff;

    
     @media screen and (max-width:768px){
        align-self:start;
    }
`
