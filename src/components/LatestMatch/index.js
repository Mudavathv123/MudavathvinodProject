// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <>
      <li className="latest-match-items">
        <div className="team-container">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </li>
      <li className="latest-second-item">
        <h2 className="first">First Innings</h2>
        <p className="first-innings">{firstInnings}</p>
        <h2 className="second">Second Innings</h2>
        <p className="second-innings">{secondInnings}</p>
        <h2 className="matchofmen">Man of the Match</h2>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <h2 className="umpire-head">Umpires</h2>
        <p className="umpires">{umpires}</p>
      </li>
    </>
  )
}

export default LatestMatch
