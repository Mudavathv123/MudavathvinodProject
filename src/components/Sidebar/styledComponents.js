import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarListItems = Styled.li`
    display:flex;
    align-items:center;
    gap:16px;
    background-color:${props => props.bgColor};
    width:100%;
    padding-left:20px;
   
    
`

export const SidebarUnOderList = Styled.li`
    list-style-type:none;
    
`

export const SidebarContainer = Styled.div`
    box-sizing:border-box;
    background-color:${props => props.bgColor};
    min-width:16%;
    max-width:16%;
    top:60px;
    display:flex;
    flex-direction:column;
    align:items:center;
    justify-content:space-between;
    min-height:100vh;
    @media screen and (max-width:768px){
        display:none;
    };
`

export const P = Styled.p`
    font-size:16px;
    font-family:"Roboto";
    font-weight:600;
    color:${props => (props.icon ? props.color : props.textColor)};
`

export const NavLink = Styled(Link)`
    text-decoration:none;
`
export const ContactUsUnOrderList = Styled(SidebarUnOderList)`
    display:flex;
    align-items:center;
    gap:16px;
    padding:10px;
`
export const ContactUsImage = Styled.img`
    height:36px;
`

export const ContactUsListItems = Styled.li``

export const ContactUsHeading = Styled.p`
    font-size:18px;
    color:${props => props.textColor};
    font-family:Roboto;
    font-weight:600;
`
export const ContactUsContainer = Styled.div`
    padding:20px;
`
