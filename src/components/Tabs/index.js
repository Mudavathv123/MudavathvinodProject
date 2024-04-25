import './index.css'

const Tabs = props => {
    const {tab,updateActiveTab,isActive} = props
    const {tabId,displayText} = tab

    const activeTabClassName = isActive ? 'active-btn' : 'default-btn'
     const changeActiveTab = () =>{
        updateActiveTab(tabId)
    }

    return (
        <li className = "tab-item">
            <button type = "button" onClick = {changeActiveTab} className = {activeTabClassName}>
                {displayText}
            </button>
        </li>
    )
}

export default Tabs