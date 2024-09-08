// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatch: {}, recentMatches: [], isLoader: true}

  componentDidMount() {
    this.getFetchedMatchDetials()
  }

  getFetchedMatchDetials = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchDetails = await response.json()

    const formatedDetails = {
      teamBannerUrl: matchDetails.team_banner_url,
      latestMatchDetails: matchDetails.latest_match_details,
      recentMatches: matchDetails.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = formatedDetails

    const updateLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
    }

    const updateRecentMatches = recentMatches.map(eachDetails => ({
      competingTeamLogo: eachDetails.competing_team_logo,
      competingTeam: eachDetails.competing_team,
      result: eachDetails.result,
      matchStatus: eachDetails.match_status,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: updateLatestMatchDetails,
      recentMatches: updateRecentMatches,
      isLoader: false,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatches, isLoader} = this.state
    return (
      <div className="team-matches-container">
        {isLoader ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBanner}
              alt="team banner"
              className="team-banner-img"
            />
            <h1 className="letest-match">Latest Matches</h1>
            <ul className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatch} />
            </ul>
            <ul className="match-card-container">
              {recentMatches.map(eachMatch => (
                <MatchCard recentMatches={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
