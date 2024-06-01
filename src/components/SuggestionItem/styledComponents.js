import Styled from 'styled-components'
import { GoogleImg } from '../GoogleSuggestionsList/styledComponent'

export const ArrowImg = Styled(GoogleImg)`
    height:14px;
`
export const SuggestionItemContainer = Styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Suggestion = Styled.p`
    font-size:14px;
    color:"grey";
`

export const ArrowButton = Styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
`