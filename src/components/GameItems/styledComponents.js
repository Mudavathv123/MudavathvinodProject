import Styled from 'styled-components'

export const IMG = Styled.img`
    height:160px;
    @media screen and (max-width:768px){
        height:120px;
    }
`

export const Button = Styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    outline:none;
`
