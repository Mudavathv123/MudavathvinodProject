import './index.css'


const Navbar = (props) => {
    const {logoImgUrl,logoImgAltText,score,timer} = props;

    return(
    
        <ul className = "navbar-container">
            <li className = "navbar-container-items">
                <img src = {logoImgUrl} alt = {logoImgAltText} className = "logo"/>
            </li>
            <li className = "socre-time-container">
                <p className = "score-container">Score: <span className = "score"> {score}</span></p>
                <div className = "time-container">
                    <img src = "https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt = "timer" />
                    <p className = "timer">{timer} sec</p>
                </div>
            </li>
        </ul>
    ) 
}

Navbar.defaultProps = {
    logoImgUrl: 'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png',
    logoImgAltText:' website logo',
    score:'Score',
    timer:60
}


export default Navbar