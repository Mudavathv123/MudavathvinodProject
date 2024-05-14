import {Component} from 'react'
import './App.css'
import TabItems from './components/TabItems'
import LanguageItems from './components/LanguageItems'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  clickTabId = id => {
    this.setState({activeId: id})
  }

  getFilterLanguages = () => {
    const {activeId} = this.state
    return languageGreetingsList.filter(
      ecahLanguages => ecahLanguages.id === activeId,
    )
  }

  render() {
    const {activeId} = this.state

    const filterLangauges = this.getFilterLanguages()

    return (
      <div className="language-greeting-container">
        <div className="greeting-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="tab-list-container">
            {languageGreetingsList.map(eachGreet => (
              <TabItems
                tabDetails={eachGreet}
                key={eachGreet.id}
                clickTabId={this.clickTabId}
                isActive={activeId === eachGreet.id}
              />
            ))}
          </ul>
          <ul className="languages-list-container">
            {filterLangauges.map(ecahLanguages => (
              <LanguageItems languages={ecahLanguages} key={ecahLanguages.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
