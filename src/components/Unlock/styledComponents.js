// Style your elements here
import Styled from 'styled-components'

export const UnlockContainer = Styled.div`
    height:100vh;
    background-color:#161617;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:40px;
`

export const UnlockCardContainer = Styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
`

export const LockImg = Styled.img`
    height:120px;
`
export const DisplayText = Styled.p`
    font-size:16px;
    font-family:'Roboto';
    color:#ffffff;
    font-weight:600;
    
`
export const LockButton = Styled.button`
    cursor:pointer;
    height:36px;
    width:120px;
    border:none;
    border-radius:8px;
    outline:none;
    font-family:"Roboto";
    font-weight:600;
    color:#ffffff;
    font-size:600;
    background-color: #06b6d4;
`
