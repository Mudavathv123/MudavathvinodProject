
import { Link, useNavigate } from 'react-router-dom';
import './../../../components/sectionPage.css'

const ShowAllSpotifyPlayListCard = props => {

    const { playlist } = props
    const { albumArtist, albumName, albumImageUrl, albumId } = playlist;

    const navigate = useNavigate();

    const navigateAlbumCard = () => {
        navigate(`/albumbs/${albumId}`)
    }

    return (
        <Link onClick={navigateAlbumCard} className="link">
            <li className="show-allalbum-card-container">
                <div className='play-show-allalbum-btn-container' >
                    <img src={albumImageUrl} alt="albumb" className="show-allalbum-img" />
                    <button className="play-show-allalbum-btn">
                        <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1721373881/MyMiniProjectsImages/aj0ytugnqky7nxxmvdel.png" alt="play albumb" className='play-show-allalbum-img' />
                    </button>
                </div>
                <span className="show-allalbum-name">{albumName}</span>
                <span className="show-allalbum">{albumArtist}</span>
            </li>
        </Link>
    )
}

export default ShowAllSpotifyPlayListCard