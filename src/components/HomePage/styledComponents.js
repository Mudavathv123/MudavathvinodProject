import Styled from 'styled-components'

export const HomePageContainer = Styled.div`
    height:80vh;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;
`

export const HomeAfterRegister = Styled(HomePageContainer)``

export const HomePageImage = Styled.img`
    height:300px;
    
    @media screen and (max-width:768px) {
        height:200px;
    }
`
export const Description = Styled.p`
    font-family:"Roboto";
    font-weight:600;
    color:#475569;
    font-size:${props => (props.regiter ? '20px' : '16px')};
`

export const Heading = Styled.h1`
    font-family:"Roboto";
    font-weight:800;
    color:${props => (props.register ? '#3b82f6' : '#334155')};
    font-size:36px;
`

export const CustomeButton = Styled.button`
    color:#fff;
    font-family:"Roboto";
    font-weight:600;
    background-color: #2563eb;
    border:none;
    border-radius:8px;
    outline:none;
    height:36px;
    width:120px;
    cursor:pointer
`
