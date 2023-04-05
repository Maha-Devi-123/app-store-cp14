import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName, category} = appDetails
  return (
    <li className="app-can">
      <img className="app-logo" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
