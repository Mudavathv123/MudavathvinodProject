
import {SuggestionItemContainer,Suggestion,ArrowButton,ArrowImg} from './styledComponents.js'
const SuggestionItem = props => {
    const {suggestionDetails,changeInputValue} = props
    const {id,suggestion} = suggestionDetails

    const onClickChangeSearchValue = () => {
        changeInputValue(id)
    }

    return (
        <SuggestionItemContainer>
            <Suggestion>{suggestion}</Suggestion>
            <ArrowButton type = "button" onClick = {onClickChangeSearchValue}>
                <ArrowImg src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" />
            </ArrowButton>
        </SuggestionItemContainer>
    )
}

export default SuggestionItem