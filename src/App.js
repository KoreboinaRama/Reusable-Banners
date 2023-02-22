import BannerCardItem from './components/BannerCardItem/index'
import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
    btn:'Show More'
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
    btn:'Show More'
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
    btn:'Show More'
  },
]

const App = () =>(
    <div className="list-container">
    <div className="img-card">
    <img src="https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png" alt="resuable-banners-output" />
    <ul>{
    bannerCardsList.map(eachItem => (
      <BannerCardItem bannerDetails={eachItem} key={eachItem.id} />
     )) } 
     </ul>
  
</div>
</div>
export default App
