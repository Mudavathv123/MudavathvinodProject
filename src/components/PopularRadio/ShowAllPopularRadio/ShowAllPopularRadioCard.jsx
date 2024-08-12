
import { Link, useNavigate } from 'react-router-dom';
import './../../../components/sectionPage.css'

const ShowAllPopularRadioCard = props => {

    const { radio } = props
    const { artistName, radioImage, moreArtistName, songsSaves,radioId } = radio;

    const navigate = useNavigate();
    const moreArtists = moreArtistName.length > 25 ?  moreArtistName.slice(0, 25) +"..." : moreArtistName;

    const navigateAlbumCard = () => {
        navigate(`/radioes/${radioId}`)
    }

    return (
        <Link onClick={navigateAlbumCard} className="link">
            <li className="show-allalbum-card-container">
                <div className='play-show-allalbum-btn-container' >
                    <img src={radioImage} alt="albumb" className="show-allalbum-img" />
                    <button className="play-show-allalbum-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play albumb" className='play-show-allalbum-img' />
                    </button>
                </div>
                <span className="show-allalbum-name">{artistName}</span>
                <span className="show-allalbum">{moreArtists}</span>
            </li>
        </Link>
    )
}

export default ShowAllPopularRadioCard