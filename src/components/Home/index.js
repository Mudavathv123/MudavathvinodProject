// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsCards: [], isLoader: true}

  componentDidMount() {
    this.getFetchedIplTeamCards()
  }

  getFetchedIplTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const listOfTeam = await response.json()
    const {teams} = listOfTeam
    const formattedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsCards: formattedTeams, isLoader: false})
  }

  render() {
    const {teamsCards, isLoader} = this.state
    return isLoader ? (
      <div data-testid="loader" className="loader-container">
        <Loader type="Oval" color="red" height={50} width={50} />
      </div>
    ) : (
      <div className="home-container">
        <h1 className="ipl-head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          IPL Dashboard
        </h1>

        <ul className="ipl-list-container">
          {teamsCards.map(eachTeam => (
            <TeamCard team={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
