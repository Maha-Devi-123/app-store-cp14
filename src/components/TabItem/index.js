import './index.css'

const TabItem = props => {
  const {TabDetails, changeTabOnClick, activeTab} = props
  const {displayText, tabId} = TabDetails

  const highletActiveTab = activeTab ? 'active-tab' : ''

  const changingTab = () => {
    changeTabOnClick(tabId)
  }

  return (
    <li className="list-item">
      <button
        onClick={changingTab}
        className={`${highletActiveTab} btn`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
