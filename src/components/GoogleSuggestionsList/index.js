import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import {GoogleSuggestionsListContainer,GoogleContainer,GoogleImg,InputContainer,Input,SuggestionListContainer} from './styledComponent'
class GoogleSuggestionsList extends Component {

    state = {searchInput:''}

    changeSeachValue = event => {
        this.setState({searchInput:event.target.value})
    }

    changeInputValue = id => {
        const {suggestionsList} = this.props 
        const arrowValue = suggestionsList.filter(eachSuggestion => eachSuggestion.id === id)
        this.setState({searchInput:arrowValue[0].suggestion})
    }

    render(){

        const {suggestionsList} = this.props
        const {searchInput} = this.state

        const filterSuggestionList = suggestionsList.filter(eachSuggestion => eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()))
        return (
            <GoogleSuggestionsListContainer>
                <GoogleContainer>
                    <GoogleImg src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo"/>
                    <SuggestionListContainer>
                    <InputContainer>
                    <GoogleImg searchIcon alt="search icon" src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" />
                        <Input type = "search" placeholder = "Google search" value = {searchInput} onChange = {this.changeSeachValue}/>
                    </InputContainer>
                    {
                        filterSuggestionList.map(eachSuggestion => <SuggestionItem key = {eachSuggestion.id} suggestionDetails = {eachSuggestion} changeInputValue = {this.changeInputValue}/>)
                    }
                    </SuggestionListContainer>
                </GoogleContainer>
            </GoogleSuggestionsListContainer>
           
        )
    }
}

export default GoogleSuggestionsList