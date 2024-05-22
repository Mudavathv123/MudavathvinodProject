import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    inputText: '',
    seletedValue: tagsList[0].optionId,
    displayTextList: [],
    activeTabId: 'INITIAL',
  }

  onChangeSelectValue = event => {
    this.setState({seletedValue: event.target.value})
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAddTask = () => {
    const {inputText, seletedValue} = this.state

    if (inputText.length !== 0) {
      const task = {
        id: uuidv4(),
        inputText,
        seletedValue,
      }

      this.setState(prevState => ({
        displayTextList: [...prevState.displayTextList, task],
        inputText: '',
        seletedValue: '',
      }))
    }
  }

  changeTab = id => {
    this.setState(prevState => ({
      activeTabId: prevState.activeTabId === id ? 'INITIAL' : id,
    }))
  }

  render() {
    const {inputText, seletedValue, displayTextList, activeTabId} = this.state
    const filterDisplayText =
      activeTabId === 'INITIAL'
        ? displayTextList
        : displayTextList.filter(
            eachTask => eachTask.seletedValue === activeTabId,
          )

    return (
      <div className="my-task-container">
        <div className="creating-task-container">
          <h1 className="create-task-head">Create a task!</h1>
          <form className="form">
            <div className="input-container">
              <label htmlFor="task">Task</label>
              <br />
              <input
                type="text"
                placeholder="Enter the task here"
                className="input-task"
                id="task"
                value={inputText}
                onChange={this.onChangeInputText}
              />
            </div>
            <div className="input-container">
              <label htmlFor="tags">Tags</label>
              <br />
              <select
                className="input-task"
                id="tags"
                value={seletedValue}
                onChange={this.onChangeSelectValue}
              >
                {tagsList.map(eachTag => (
                  <option
                    value={eachTag.optionId}
                    id="input-task"
                    key={eachTag.optionId}
                  >
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="add-task-btn"
              type="button"
              onClick={this.onClickAddTask}
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tags">Tags</h1>
          <ul className="tags-items-container">
            {tagsList.map(eachTag => (
              <TagItem
                tag={eachTag}
                key={eachTag.optionId}
                changeTab={this.changeTab}
                isActive={activeTabId === eachTag.optionId}
              />
            ))}
          </ul>
          <h1 className="tasks">Tasks</h1>
          {filterDisplayText.length > 0 ? (
            <ul className="task-items-container">
              {filterDisplayText.map(eachTask => (
                <TaskItem task={eachTask} key={eachTask.id} />
              ))}
            </ul>
          ) : (
            <p className="no-task-added">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}
export default App
