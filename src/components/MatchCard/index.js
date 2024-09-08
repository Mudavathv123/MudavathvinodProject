// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = recentMatches

  let matchStatusColor = ''
  if (matchStatus === 'Won') matchStatusColor = 'match-status-won'
  else matchStatusColor = 'match-status-loss'

  return (
    <li className="recet-matches-items">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusColor}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
