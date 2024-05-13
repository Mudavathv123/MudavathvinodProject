import Styled from 'styled-components'

export const CustomButton = Styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    color:${props => props.headerIconColor};
`
export const ButtonImg = Styled.img`
    height:30px;
    @media screen and (max-width:768px){
        display:none;
    }
`

export const LogoutButton = Styled(CustomButton)`
    border: 2px solid ${props => props.logoutButtonColor};
    border-radius:8px;
    color: ${props => props.logoutButtonColor};
    height:30px;
    width:80px;
    @media screen and (max-width:768px){
        display:none;
    }
    
`

export const UnOderListForButtons = Styled.ul`
    list-style-type:none;
    display:flex;
    align-items:center;
    justify-content:space-center;
    gap:20px;

`
export const Nav = Styled.nav`
    box-sizing:border-box;
    top:0px;
    background-color:${props => props.bgColor};
    width:100%;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const HeadeIconButton = Styled.button`
    @media screen and (min-width:768px){
        display:none;
    }
    display:block;
    background-color:transparent;
    border:none;
    cursor:pointer;
`

export const LogoutAlert = Styled.p`
    font-family:"Roboto";
    font-weight:600;
    font-size:16px;
    color:${props => props.headerIconColor}
`

export const LogoutAlertButtons = Styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`

export const LogotContainer = Styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    justify-content:center;
    background-color:${props => props.popupBgcolor};
    padding:20px;
    border-radius:8px;
    box-shadow: 10px 10px 40px #424242, -10px -10px 40px #424242;

    @media screen and (min-width:768px){
        min-height:200px;
        min-width:400px;
    }
`
export const LogoutPopupButton = Styled.button`
    font-size:16px;
    font-family:"Roboto";
    font-weight:600;
    height:40px;
    width:80px;
    color:${props => (props.confirm ? '#fff' : '#64748b')};
    border:${props => (props.confirm ? 'none' : '1.5px solid #64748b')};
    background-color:${props => (props.confirm ? '#3b82f6' : 'transparent')};
    cursor:pointer;
`

export const HeaderSideber = Styled.div`
    background-color:${props => props.headerSidebarColor};
    padding:10px;
`
