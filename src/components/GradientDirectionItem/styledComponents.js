// Style your elements here
import Styled from 'styled-components'

export const ListItem = Styled.li`
    
    display:flex;
    align-items:center;
    justify-content:center;
`
export const DirectionButton = Styled.button`
    height:36px;
    width:80px;
    border:none;
    border-radius:8px;
    background-color: #fff;
    color: ${props => (props.isActive ? '#334155' : '#1e293b')};
    opacity:${props => (props.isActive ? 1 : 0.5)};
    @media screen and (max-width:768px){
        width:120px;
    }
`
