import Styled from 'styled-components'


export const GoogleSuggestionsListContainer = Styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    
`

export const GoogleContainer = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:centerl
    justify-content:center;
    gap:20px;
`
export const GoogleImg = Styled.img`
    height:${props => props.searchIcon ? '14px':'64px'};
    @media screen and (max-width:768px){
        height:${props => props.searchIcon ? '14px':'48px'};
    }
    `

export const InputContainer = Styled.div`
    
    display:flex;
    align-items:center;
    width:240px;
  `  

export const Input = Styled.input`
outline:none;
border:none;
font-size:8px;
padding-left:6px;
width:100%;
`

export const SuggestionListContainer = Styled.ul`
    list-style-type:none;
    width:400px;
    background-color:#fff;
    border-radius:8px;
    padding:10px;
    box-shadow:10px 10px 20px #bfbfbf,-10px -10px 20px #bfbfbf;

    @media screen and (max-width:768px){
        width:100%;
    }
`