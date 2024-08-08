
import { Link } from 'react-router-dom';
import './popularRadio.css'


const PopularRadioCard = props => {

    const { radio } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = radio;

    return (
        <Link to={`radio/${albumId}`} className="radio-link">
            <li className="radio-card-container">
            <div className='play-radio-btn-container'>
                <img src={albumImageUrl} alt="radio" className="radio-img" />
               
                    <button className="play-radio-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play radio" className='play-radio-img' />
                    </button>
                </div>
                <span className="radio-name">{albumName}</span>
                <span className="radio">{albumArtist}</span>

            </li>
        </Link>
    )
}

export default PopularRadioCard