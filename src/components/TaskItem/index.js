import './index.css'

const TaskItem = props => {
  const {task} = props
  const {inputText, seletedValue} = task

  return (
    <li className="task-items">
      <p className="task-name">{inputText}</p>
      <p className="seleted-value">{seletedValue}</p>
    </li>
  )
}

export default TaskItem
