import './index.css'

const Tabs = props => {
  const {tab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tab

  const activeTabClassNameIs = isActive ? 'active-tab' : 'tabname'

  const filterItems = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tabs-items">
      <button
        type="button"
        onClick={filterItems}
        className={activeTabClassNameIs}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
