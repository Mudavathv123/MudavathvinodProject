import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from '../TravelGuideItem'
import './index.css'

class TravelGuide extends Component {
  state = {travelGuidList: [], isLoader: true}

  componentDidMount() {
    this.getTravelGuideInformation()
  }

  getTravelGuideInformation = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedData = data.packages.map(eachPacakge => ({
        id: eachPacakge.id,
        name: eachPacakge.name,
        imageUrl: eachPacakge.image_url,
        description: eachPacakge.description,
      }))
      console.log(updatedData)
      this.setState({isLoader: false, travelGuidList: updatedData})
    }
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoader, travelGuidList} = this.state
    return (
      <div className="travel-guide-container">
        <h1 className="travel-head">Travel Guide</h1>
        {isLoader ? (
          this.renderLoaderView()
        ) : (
          <ul className="travel-guide-items-container">
            {travelGuidList.map(eachTravelGuide => (
              <TravelGuideItem
                travelGuide={eachTravelGuide}
                key={eachTravelGuide.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
