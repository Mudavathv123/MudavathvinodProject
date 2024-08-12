
import { Link } from 'react-router-dom';
import './popularRadio.css'


const PopularRadioCard = props => {

    const { radio } = props
    const { artistName, radioImage, moreArtistName, songsSaves,radioId } = radio;

    const moreArtists = moreArtistName.length > 25 ?  moreArtistName.slice(0, 25) +"..." : moreArtistName;

    return (
        <Link to={`radio/${radioId}`} className="radio-link">
            <li className="radio-card-container">
            <div className='play-radio-btn-container'>
                <img src={radioImage} alt="radio" className="radio-img" />
               
                    <button className="play-radio-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play radio" className='play-radio-img' />
                    </button>
                </div>
                <span className="radio-name">{artistName}</span>
                <span className="radio">{moreArtists}</span>

            </li>
        </Link>
    )
}

export default PopularRadioCard