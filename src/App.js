import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TextItem from './components/TextItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', textDisplayList: []}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAddInput = () => {
    const {searchInput, textDisplayList} = this.state
    const textObj = {
      id: uuidv4(),
      searchInput,
    }
    this.setState({
      textDisplayList: [...textDisplayList, textObj],
      searchInput: '',
    })
  }

  render() {
    const {searchInput, textDisplayList} = this.state
    console.log(textDisplayList)
    return (
      <div className="character-counter-container">
        <div className="character-display-container">
          <div className="class-head-container">
            <h1 className="display-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {textDisplayList.length <= 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul className="display-items-container">
              {textDisplayList.map(eachText => (
                <TextItem text={eachText} key={eachText.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="character-input-container">
          <h1 className="character-counter-head">Character Counter</h1>
          <form>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter the characters here"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <button
                className="add-btn"
                type="button"
                onClick={this.onClickAddInput}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
