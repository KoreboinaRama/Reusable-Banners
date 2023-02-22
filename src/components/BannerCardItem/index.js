// Write your code here.
import './index.css'

import './App'

const BannerCardItem = props => {
  const {bannerDetails, key} = props
  const {headerText, description, className, btn} = bannerDetails
  return (
    <li className="card-container">
      <div className={className}>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">{btn}</button>
      </div>
      <div className={className}>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">{btn}</button>
      </div>
      <div className={className}>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">{btn}</button>
      </div>
    </li>
  )
}

export default BannerCardItem
