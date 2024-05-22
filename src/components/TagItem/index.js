import './index.css'

const TagItem = props => {
  const {tag, changeTab, isActive} = props
  const {optionId, displayText} = tag

  const activeTagClassName = isActive ? 'active-btn' : 'tag-button'

  const onClickChangeTab = event => {
    changeTab(event.target.value)
  }

  return (
    <li>
      <button
        className={activeTagClassName}
        onClick={onClickChangeTab}
        value={optionId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
