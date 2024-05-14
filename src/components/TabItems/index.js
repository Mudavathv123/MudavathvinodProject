import './index.css'

const TabItems = props => {
  const {tabDetails, clickTabId, isActive} = props
  const {id, buttonText} = tabDetails

  const activeClassName = isActive ? 'active-btn' : 'btn'

  const onClickChangeTabId = () => {
    clickTabId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={activeClassName}
        onClick={onClickChangeTabId}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItems
